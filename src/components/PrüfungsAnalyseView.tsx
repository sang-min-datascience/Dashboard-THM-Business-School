import React, { useMemo } from "react";
import { Module, ExamTypeDefinition } from "../types";
import { EXAM_TYPE_DEFINITIONS } from "../data";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { Award, Layers, ShieldAlert, AlertTriangle, ListFilter, HelpCircle, CheckCircle, Info, Sparkles } from "lucide-react";
import { getReformProposal } from "../data/reformProposals";

interface PrüfungsAnalyseViewProps {
  activeModules: Module[];
  onModuleClick: (module: Module) => void;
}

const COLORS = [
  "#4F46E5", // Klausur - Indigo
  "#10B981", // Projekt - Emerald
  "#F59E0B", // Präsentation - Amber
  "#EC4899", // Lerntagebuch - Pink
  "#8B5CF6", // Portfolio - Purple
  "#06B6D4", // Seminararbeit - Cyan
  "#EF4444", // Bachelorthesis - Red
  "#3B82F6", // Case Study - Blue
  "#14B8A6", // Practical OSPE - Teal
  "#6B7280"  // Other - Gray
];

export const PrüfungsAnalyseView: React.FC<PrüfungsAnalyseViewProps> = ({ activeModules, onModuleClick }) => {
  // 1. Calculate exam types weighted by Creditpoints (CrP)
  const examTypeCrpData = useMemo(() => {
    const dataMap: Record<string, number> = {};
    
    activeModules.forEach(mod => {
      mod.exams.forEach(exam => {
        const crpShare = mod.crp * (exam.weight / 100);
        const type = exam.type === "Gründungsprojekt" ? "Projekt" : exam.type; // group together
        dataMap[type] = (dataMap[type] || 0) + crpShare;
      });
    });

    return Object.entries(dataMap)
      .map(([name, value]) => ({ name, value: parseFloat(value.toFixed(1)) }))
      .sort((a, b) => b.value - a.value);
  }, [activeModules]);

  // 2. Calculate exam types stacked per Semester
  const semesterExamData = useMemo(() => {
    const semData: Record<number, Record<string, number>> = {};
    const maxSem = activeModules.reduce((max, m) => Math.max(max, m.semester), 3);
    
    // Initialize semesters up to maxSem
    for (let i = 1; i <= maxSem; i++) {
      semData[i] = {
        Klausur: 0,
        Projekt: 0,
        Präsentation: 0,
        Lerntagebuch: 0,
        Portfolio: 0,
        Andere: 0
      };
    }

    activeModules.forEach(mod => {
      const sem = mod.semester;
      if (sem < 1 || sem > maxSem) return; // ignore edge cases
      
      mod.exams.forEach(exam => {
        const crpShare = mod.crp * (exam.weight / 100);
        let type = exam.type === "Gründungsprojekt" ? "Projekt" : exam.type;
        
        // Map to standard keys or "Andere"
        if (["Klausur", "Projekt", "Präsentation", "Lerntagebuch", "Portfolio"].includes(type)) {
          semData[sem][type] += crpShare;
        } else {
          semData[sem]["Andere"] += crpShare;
        }
      });
    });

    return Object.entries(semData).map(([sem, values]) => {
      const formatted: Record<string, any> = { name: `Sem. ${sem}` };
      Object.entries(values).forEach(([k, v]) => {
        formatted[k] = parseFloat(v.toFixed(1));
      });
      return formatted;
    });
  }, [activeModules]);

  // 3. Calculate Multiple-Choice (Antwort-Wahl-Verfahren) Stats
  const mcStats = useMemo(() => {
    let mcCount = 0;
    let totalMcCrp = 0;
    const mcModulesList: Module[] = [];

    activeModules.forEach(mod => {
      if (mod.hasMc) {
        mcCount++;
        // find weight of MC Klausur if specified
        const klausurExam = mod.exams.find(e => e.type === "Klausur");
        const weight = klausurExam ? klausurExam.weight : 100;
        totalMcCrp += mod.crp * (weight / 100);
        mcModulesList.push(mod);
      }
    });

    const totalCrp = activeModules.reduce((acc, curr) => acc + curr.crp, 0);
    const mcPercent = totalCrp > 0 ? (totalMcCrp / totalCrp) * 100 : 0;

    return {
      count: mcCount,
      percent: parseFloat(mcPercent.toFixed(1)),
      crp: parseFloat(totalMcCrp.toFixed(1)),
      modules: mcModulesList
    };
  }, [activeModules]);

  // 4. Group all modules by exam type to let user see lists
  const groupedModules: Record<string, Module[]> = useMemo(() => {
    const groups: Record<string, Module[]> = {};
    activeModules.forEach(mod => {
      mod.exams.forEach(exam => {
        const type = exam.type === "Gründungsprojekt" ? "Projekt" : exam.type;
        if (!groups[type]) groups[type] = [];
        // avoid duplicates if same type is in module multiple times
        if (!groups[type].find(m => m.id === mod.id)) {
          groups[type].push(mod);
        }
      });
    });
    return groups;
  }, [activeModules]);

  return (
    <div className="space-y-8" id="exams-analysis-container">
      {/* Intro info banner */}
      <div className="p-3 bg-blue-50 border border-blue-100 flex items-start gap-3 rounded">
        <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div className="text-xs text-blue-900 leading-relaxed">
          <span className="font-bold block text-sm mb-0.5">💡 Interaktive Prüfungsstrukturanalyse Gießen PO 2025</span>
          Diese Auswertungen basieren auf der von Ihnen oben zusammengestellten <strong>Studiengang-Konfiguration</strong>.
          Wenn Sie Ihre Schwerpunkte oder Wahlpflichtmodule ändern, passen sich alle Diagramme, Creditpoints-Anteile und Modullisten 
          vollautomatisch an Ihren individuellen Studienverlauf an!
        </div>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Donut CrP weight */}
        <div className="p-4 bg-white rounded border border-slate-200 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 mb-1 uppercase tracking-wider">
              <Layers className="w-4.5 h-4.5 text-blue-600" /> Arbeitsanteile nach Prüfungsform
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Gewichtet nach Creditpoints (CrP) – zeigt den tatsächlichen Leistungsaufwand im Gesamtstudium.
            </p>
          </div>

          <div className="h-[280px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={examTypeCrpData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {examTypeCrpData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: any) => [`${value} CrP`, 'Arbeitsaufwand']}
                  contentStyle={{ background: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-100 text-xs">
            {examTypeCrpData.map((entry, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-slate-600">
                <span className="w-3 h-3 rounded-xs shrink-0" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                <span className="truncate" title={entry.name}>{entry.name}</span>
                <span className="font-bold text-slate-800 ml-auto font-mono">{entry.value} CrP</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chart 2: Stacked bar chart per semester */}
        <div className="p-4 bg-white rounded border border-slate-200 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 mb-1 uppercase tracking-wider">
              <Award className="w-4.5 h-4.5 text-blue-600" /> Prüfungsform-Verlauf über Semestern
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Zeigt den didaktischen Aufbau der Prüfungen von klassischen Klausuren zu Projekten und Abschlussarbeiten.
            </p>
          </div>

          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={semesterExamData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" fontSize={11} stroke="#94a3b8" />
                <YAxis fontSize={11} stroke="#94a3b8" />
                <Tooltip 
                  formatter={(value: any) => [`${value} CrP`]}
                  contentStyle={{ background: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
                <Legend iconSize={10} fontSize={11} wrapperStyle={{ pt: 10 }} />
                <Bar dataKey="Klausur" stackId="a" fill={COLORS[0]} />
                <Bar dataKey="Projekt" stackId="a" fill={COLORS[1]} />
                <Bar dataKey="Präsentation" stackId="a" fill={COLORS[2]} />
                <Bar dataKey="Lerntagebuch" stackId="a" fill={COLORS[3]} />
                <Bar dataKey="Portfolio" stackId="a" fill={COLORS[4]} />
                <Bar dataKey="Andere" stackId="a" fill={COLORS[9]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Multiple Choice Highlight Card */}
      <div className="p-5 bg-slate-900 text-white rounded border border-slate-800 flex flex-col lg:flex-row gap-5 items-center">
        <div className="space-y-3 lg:max-w-sm">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold text-[10px] uppercase tracking-wider border border-blue-500/30">
            <ShieldAlert className="w-3.5 h-3.5 text-blue-400" /> Antwort-Wahl-Verfahren (§ 8a PO)
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-tight">Multiple-Choice (MC) in Klausuren</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Laut THM Prüfungsordnung 2025 können Klausuren anteilig oder vollständig als Antwort-Wahl-Verfahren durchgeführt werden.
            In Ihrem gewählten Studienverlauf sind <strong>{mcStats.count} Module</strong> mit dieser Option ausgestattet.
          </p>
          <div className="pt-2 flex items-baseline gap-4">
            <div>
              <span className="text-2xl font-bold font-mono text-blue-400">{mcStats.percent}%</span>
              <span className="block text-[9px] text-slate-400 uppercase tracking-wider font-semibold">CrP-Anteil am Studium</span>
            </div>
            <div>
              <span className="text-2xl font-bold font-mono text-blue-400">{mcStats.crp}</span>
              <span className="block text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Gesamte Creditpoints</span>
            </div>
          </div>
        </div>

        {/* Grid of matching MC Modules */}
        <div className="flex-1 w-full bg-slate-950/80 p-3.5 rounded border border-slate-800">
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Betroffene Module in Ihrem Studienverlauf:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {mcStats.modules.map(mod => (
              <div 
                key={mod.id}
                onClick={() => onModuleClick(mod)}
                className="p-2 bg-slate-900 rounded border border-slate-800 hover:border-blue-500/50 cursor-pointer flex justify-between items-center group transition-colors"
              >
                <div>
                  <span className="font-mono text-blue-400 mr-1 text-[10px] font-bold">Modul {mod.id}</span>
                  <span className="font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">{mod.name}</span>
                </div>
                <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded ml-2">
                  {mod.crp} CrP
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reform-Radar Section */}
      <div className="p-5 bg-blue-50/10 border border-blue-200/60 rounded-xl space-y-4 shadow-3xs" id="reform-radar-section">
        <div className="flex items-start gap-3 border-b border-blue-100/60 pb-3">
          <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
              Reform-Radar: Authentic Assessment & Alternative Grading
            </h3>
            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
              Didaktische Reformvorschläge für Ihren gewählten Studienverlauf ({activeModules.length} Module). Jedes Modul erhält hier praxisnahe Prüfungsalternativen, die tatsächliche Handlungskompetenzen messen, statt reines Auswendiglernen in Klausuren abzuprüfen.
            </p>
          </div>
        </div>

        {/* Info card about educational terms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-3.5 rounded-lg border border-slate-200 text-xs">
          <div className="space-y-1">
            <span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase text-[9px] border border-blue-100 mb-1">
              Authentic Assessment (Authentisches Prüfen)
            </span>
            <p className="text-slate-650 leading-relaxed text-[11px]">
              Prüfungen simulieren reale berufliche Aufgaben (z.B. Erstellung eines Beratungsgutachtens, Live-Präsentation oder Software-Prototyp), um echte Handlungs- und Transferkompetenz zu prüfen.
            </p>
          </div>
          <div className="space-y-1">
            <span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold uppercase text-[9px] border border-blue-100 mb-1">
              Alternative Grading (Alternative Bewertung)
            </span>
            <p className="text-slate-650 leading-relaxed text-[11px]">
              Fokus auf kontinuierliches Feedback und persönliche Entwicklung statt rein numerischem Druck. Methoden wie <strong>Specifications Grading</strong> (Bestehen nach klaren Kriterien mit Korrekturoption) oder <strong>Contract Grading</strong> belohnen den Lernfortschritt.
            </p>
          </div>
        </div>

        {/* Grid list of proposals for all active modules */}
        <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
          {activeModules.map(mod => {
            const proposal = getReformProposal(mod);
            const originalExamsStr = mod.exams.map(e => `${e.type} (${e.weight}%)`).join(", ");
            
            return (
              <div 
                key={mod.id} 
                onClick={() => onModuleClick(mod)}
                className="group p-2.5 bg-white hover:bg-slate-50/50 rounded-lg border border-slate-200 hover:border-blue-400 cursor-pointer transition-all flex flex-col md:flex-row md:items-center justify-between gap-3"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-mono text-[9px] font-bold text-slate-400">Modul {mod.id}</span>
                    <h4 className="font-bold text-slate-700 text-xs sm:text-sm group-hover:text-blue-600 transition-colors">
                      {mod.name}
                    </h4>
                    <span className="text-[8px] font-semibold bg-slate-50 text-slate-400 border border-slate-200 px-1 py-0.2 rounded">
                      Sem. {mod.semester || 'WP'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 flex-wrap">
                    <span>Aktuell: <strong className="font-medium text-slate-650">{originalExamsStr}</strong></span>
                    <span className="text-slate-300">|</span>
                    <span>Ziel: <strong className="font-medium text-blue-600">{proposal.alternativeExams[0]}</strong></span>
                  </div>
                </div>
                
                <div className="text-left md:text-right shrink-0 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    Vorschlag &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Structured listings matching the filter request */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 uppercase tracking-wider">
          <ListFilter className="w-4.5 h-4.5 text-blue-600" /> Modulsuche strukturiert nach Prüfungsformen
        </h3>
        <p className="text-xs text-slate-500">
          Klicken Sie auf eine der Prüfungsformen, um alle Module anzuzeigen, die dieses Prüfungsverfahren nutzen.
        </p>

        <div className="space-y-2.5">
          {Object.entries(groupedModules).map(([type, list]) => {
            const definition = EXAM_TYPE_DEFINITIONS.find(d => d.name === type);
            
            return (
              <details key={type} className="group border border-slate-200 rounded bg-white overflow-hidden" id={`exam-group-${type}`}>
                <summary className="flex items-center justify-between p-3 cursor-pointer hover:bg-slate-50/50 select-none">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: COLORS[Object.keys(groupedModules).indexOf(type) % COLORS.length] }} />
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">{type}</span>
                    <span className="px-1.5 py-0.5 text-[10px] font-bold text-slate-500 bg-slate-100 rounded border border-slate-200">
                      {list.length} {list.length === 1 ? 'Modul' : 'Module'}
                    </span>
                  </div>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform text-[10px] font-mono font-bold">
                    ▼
                  </span>
                </summary>
                
                <div className="px-3 pb-3 pt-1 border-t border-slate-200 space-y-3 bg-slate-50/20">
                  {definition && (
                    <p className="text-xs text-slate-500 italic bg-slate-50 p-2 rounded border border-slate-200">
                      {definition.description}
                    </p>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {list.map(mod => (
                      <div 
                        key={mod.id}
                        onClick={() => onModuleClick(mod)}
                        className="p-2.5 bg-white rounded border border-slate-200 hover:border-blue-500/50 cursor-pointer flex justify-between items-center group transition-colors"
                      >
                        <div>
                          <span className="font-mono text-slate-400 text-[9px] block mb-0.5">Modul {mod.id} (Sem. {mod.semester || 'WP'})</span>
                          <span className="font-semibold text-slate-700 text-xs group-hover:text-blue-600 transition-colors line-clamp-1">
                            {mod.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 px-1.5 py-0.5 bg-slate-50 border border-slate-150 rounded ml-2">
                          {mod.crp} CrP
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </div>
  );
};
