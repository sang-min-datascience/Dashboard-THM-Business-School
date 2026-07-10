import React from "react";
import { Module } from "../types";
import { X, Layers, Clock, Users, BookOpen, AlertTriangle, CheckCircle, Languages, Calendar, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getReformProposal } from "../data/reformProposals";

interface ModuleDetailsDrawerProps {
  module: Module | null;
  onClose: () => void;
}

export const ModuleDetailsDrawer: React.FC<ModuleDetailsDrawerProps> = ({ module, onClose }) => {
  if (!module) return null;

  const proposal = getReformProposal(module);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden" id="module-detail-overlay">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900 bg-opacity-50 backdrop-blur-xs transition-opacity"
        />

        <div className="absolute inset-y-0 right-0 max-w-full pl-10 flex">
          {/* Drawer Slide Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-screen max-w-2xl bg-white shadow-2xl flex flex-col"
            id={`module-details-panel-${module.id}`}
          >
            {/* Header */}
            <div className="px-5 py-4 bg-slate-50 border-b border-slate-200 flex items-start justify-between">
              <div className="pr-10">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                    Modul {module.id}
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 font-bold rounded capitalize">
                    {module.type === "pflicht" ? "Pflichtmodul" : module.type === "schwerpunkt" ? "Schwerpunktmodul" : "Wahlpflichtmodul"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                  {module.name}
                </h3>
                {module.englishName && module.englishName !== module.name && (
                  <p className="text-xs text-slate-500 mt-1 italic font-sans">
                    {module.englishName}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 transition-colors"
                title="Schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Scrollable */}
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 rounded bg-slate-50 border border-slate-200 text-center">
                <div>
                  <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mb-0.5">
                    <Layers className="w-4.5 h-4.5 text-slate-400" />
                    <span>Creditpoints</span>
                  </div>
                  <span className="text-base font-bold text-slate-850">{module.crp} CrP</span>
                  <p className="text-[10px] text-slate-400">({module.crp * 30} Std. Aufwand)</p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mb-0.5">
                    <Calendar className="w-4.5 h-4.5 text-slate-400" />
                    <span>Präsenzzeit</span>
                  </div>
                  <span className="text-base font-bold text-slate-850">{module.sws} SWS</span>
                  <p className="text-[10px] text-slate-400">(Vorlesung + Übung)</p>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mb-0.5">
                    <Languages className="w-4.5 h-4.5 text-slate-400" />
                    <span>Sprache</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-800 inline-block mt-1">
                    {module.language || "Deutsch"}
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mb-0.5">
                    <Clock className="w-4.5 h-4.5 text-slate-400" />
                    <span>Häufigkeit</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-800 inline-block mt-1">
                    Semesterweise
                  </span>
                </div>
              </div>

              {/* Workload Detailed Breakdown if available */}
              {module.workloadTotal && (
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Arbeitsaufwand (Workload)</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 bg-slate-50 rounded border border-slate-200 text-center">
                      <span className="block text-[10px] text-slate-400">Gesamt</span>
                      <span className="text-sm font-bold text-slate-700">{module.workloadTotal} Std.</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded border border-slate-200 text-center">
                      <span className="block text-[10px] text-slate-400">Präsenzzeit</span>
                      <span className="text-sm font-bold text-slate-700">{module.workloadPresence || (module.sws * 15)} Std.</span>
                    </div>
                    <div className="p-2 bg-slate-50 rounded border border-slate-200 text-center">
                      <span className="block text-[10px] text-slate-400">Selbststudium</span>
                      <span className="text-sm font-bold text-slate-700">{module.workloadSelfStudy || (module.workloadTotal - (module.sws * 15))} Std.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* responsible and teachers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                {module.responsible && (
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> Modulverantwortung
                    </h4>
                    <span className="text-xs font-semibold text-slate-700">{module.responsible}</span>
                  </div>
                )}
                {module.teachers && module.teachers.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Lehrende</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {module.teachers.join(", ")}
                    </p>
                  </div>
                )}
              </div>

              {/* Prüfungen (Exams) - CRITICAL VALUE POINT FOR THE USER */}
              <div className="p-3.5 rounded bg-blue-50/50 border border-blue-150 space-y-3">
                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                  <AwardIcon className="w-4.5 h-4.5 text-blue-600" /> Prüfungsform & Bewertung
                </h4>
                <div className="space-y-2">
                  {module.exams.map((exam, idx) => (
                    <div key={idx} className="flex items-start justify-between gap-4 p-2 bg-white rounded border border-blue-100">
                      <div>
                        <span className="font-bold text-blue-950 text-xs sm:text-sm">{exam.type}</span>
                        {exam.details && (
                          <span className="block text-xs text-slate-500 mt-0.5">{exam.details}</span>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-block px-2 py-0.5 text-xs font-bold text-blue-700 bg-blue-50 rounded border border-blue-100">
                          {exam.weight}% Gewicht
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {module.hasMc && (
                  <div className="flex items-start gap-2 p-2 rounded bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Antwort-Wahl-Verfahren (§ 8a PO):</span>
                      <span>Klausur kann ganz oder teilweise als Multiple-Choice-Prüfung durchgeführt werden. ({module.mcDetails || "Anteil wird zu Vorlesungsbeginn präzisiert"})</span>
                    </div>
                  </div>
                )}

                {module.coaching && (
                  <div className="flex items-start gap-2 p-2 rounded bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block">Integrierte Schlüsselkompetenzen:</span>
                      <span>Dieses Modul beinhaltet Coaching zur Förderung überfachlicher Kompetenzen wie Teamarbeit, Moderation, Rhetorik oder Selbstorganisation.</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Reformvorschlag (Authentic Assessment & Alternative Grading) */}
              <div className="p-4 rounded border border-blue-200 bg-blue-50/20 space-y-3.5" id={`module-reform-${module.id}`}>
                <div className="flex items-start gap-2.5 pb-2.5 border-b border-blue-100/60">
                  <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                      💡 Didaktischer Reformvorschlag (Authentic Assessment)
                    </h4>
                    <p className="text-[10px] text-slate-500 font-medium">
                      Zukunftsorientierte Alternative basierend auf modernen, praxisnahen Standards
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="block font-bold text-slate-500 uppercase text-[9px] tracking-wider mb-1.5">
                      Empfohlene Prüfungsform(en):
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {proposal.alternativeExams.map((exam, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded text-[11px] border border-blue-200 shadow-3xs">
                          ✨ {exam}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1.5">
                    <div className="space-y-1 bg-white p-2.5 rounded border border-slate-150">
                      <span className="block font-bold text-blue-700 uppercase text-[9px] tracking-wider mb-1">
                        Authentic Assessment Konzept
                      </span>
                      <p className="text-slate-600 leading-relaxed text-[11px]">
                        {proposal.authenticAssessmentDesc}
                      </p>
                    </div>
                    <div className="space-y-1 bg-white p-2.5 rounded border border-slate-150">
                      <span className="block font-bold text-blue-700 uppercase text-[9px] tracking-wider mb-1">
                        Alternative Grading Methode
                      </span>
                      <p className="text-slate-600 leading-relaxed text-[11px]">
                        {proposal.alternativeGradingDesc}
                      </p>
                    </div>
                  </div>

                  {proposal.pedagogicalBenefit && (
                    <div className="pt-2.5 border-t border-blue-100/50 text-[11px] text-blue-900 leading-relaxed bg-blue-50/40 p-2 rounded">
                      <strong className="font-bold text-blue-950">Didaktischer Mehrwert:</strong> {proposal.pedagogicalBenefit}
                    </div>
                  )}
                </div>
              </div>

              {/* Prerequisites */}
              {(module.mandatoryPrereq || module.recommendedPrereq) && (
                <div className="pt-4 border-t border-slate-200 space-y-2.5">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Teilnahmevoraussetzungen</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {module.mandatoryPrereq && (
                      <div className="p-2.5 bg-red-50/50 rounded border border-red-100 text-xs text-red-950">
                        <span className="font-bold block mb-1">Zwingend notwendig (laut PO):</span>
                        <span>{module.mandatoryPrereq}</span>
                      </div>
                    )}
                    {module.recommendedPrereq && (
                      <div className="p-2.5 bg-blue-50/50 rounded border border-blue-100 text-xs text-blue-950">
                        <span className="font-bold block mb-1">Empfohlen:</span>
                        <span>{module.recommendedPrereq}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Contents (Inhalte) */}
              {module.contents && (
                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-slate-500" /> Modulinhalte
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line bg-slate-50 p-3 rounded border border-slate-200">
                    {module.contents}
                  </p>
                </div>
              )}

              {/* Objectives (Ziele / Lernergebnisse) */}
              {module.objectives && (
                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-slate-500" /> Qualifikationsziele & Lernergebnisse
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line bg-slate-50 p-3 rounded border border-slate-200">
                    {module.objectives}
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 text-right">
              <button
                onClick={onClose}
                className="px-3 py-1.5 bg-slate-200 text-slate-700 font-bold rounded hover:bg-slate-300 transition-colors text-xs"
              >
                Schließen
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

// Internal icon proxy for clean execution
const AwardIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);
