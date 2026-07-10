import React from "react";
import { Major, Module } from "../types";
import { MAJORS, MODULES } from "../data";
import { Award, Briefcase, GraduationCap, ChevronRight, Layers, Calendar, Clock, Sparkles } from "lucide-react";

interface SchwerpunktExplorerProps {
  onModuleClick: (module: Module) => void;
}

export const SchwerpunktExplorer: React.FC<SchwerpunktExplorerProps> = ({ onModuleClick }) => {
  return (
    <div className="space-y-6" id="schwerpunkt-explorer-container">
      {/* Overview Banner */}
      <div className="p-4 bg-white border border-slate-200 rounded flex flex-col md:flex-row gap-5 items-center">
        <div className="space-y-1.5 flex-1">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 uppercase tracking-wider">
            <GraduationCap className="w-4.5 h-4.5 text-blue-600" /> Das Gießener Schwerpunktmodell (PO 2025)
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Ab dem 4. Fachsemester wählen Sie im Studiengang Betriebswirtschaft an der THM Gießen Ihren ersten Schwerpunkt. 
            Dieser besteht aus vier fest vorgegebenen Modulen (insgesamt 24 CrP). Für Ihren zweiten Wahlbereich (weitere 24 CrP) 
            können Sie entweder einen <strong>zweiten Schwerpunkt</strong> wählen oder <strong>vier freie Wahlpflichtmodule</strong> 
            aus dem Modulkatalog belegen.
          </p>
        </div>
        <div className="flex gap-4 shrink-0 bg-slate-50 p-3 rounded border border-slate-200">
          <div className="text-center px-1">
            <span className="block text-xl font-bold text-blue-600 font-mono">8</span>
            <span className="text-[9px] text-slate-400 uppercase tracking-wider font-bold">Schwerpunkte</span>
          </div>
          <div className="border-l border-slate-200" />
          <div className="text-center px-1">
            <span className="block text-xl font-bold text-blue-600 font-mono">4</span>
            <span className="text-[9px] text-slate-400 uppercase tracking-wider font-bold">Module je SP</span>
          </div>
          <div className="border-l border-slate-200" />
          <div className="text-center px-1">
            <span className="block text-xl font-bold text-blue-600 font-mono">24</span>
            <span className="text-[9px] text-slate-400 uppercase tracking-wider font-bold">CrP je SP</span>
          </div>
        </div>
      </div>

      {/* Grid of Majors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MAJORS.map(major => {
          // Find the 4 modules belonging to this major
          const majorModules = MODULES.filter(m => m.majorId === major.id || major.moduleIds.includes(m.id));

          return (
            <div 
              key={major.id}
              className="p-4 bg-white rounded border border-slate-200 hover:border-blue-500/50 transition-all flex flex-col justify-between"
              id={`schwerpunkt-card-${major.id}`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      {major.name}
                    </h4>
                    {major.englishName && (
                      <span className="text-[10px] text-slate-400 block italic mt-0.5">
                        {major.englishName}
                      </span>
                    )}
                  </div>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                    Spezialisierung
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-3">
                  {major.description}
                </p>

                {/* Career fields tag list */}
                <div className="space-y-1.5 mb-3">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Briefcase className="w-3 h-3" /> Typische Berufsfelder
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {major.careerFields.map((field, idx) => (
                      <span 
                        key={idx}
                        className="px-1.5 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-200 text-[10px] font-medium"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Major modules list */}
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                  Module dieses Schwerpunktes:
                </span>
                
                <div className="space-y-1">
                  {majorModules.map(mod => {
                    const primaryExam = mod.exams[0]?.type || "Prüfung";
                    
                    return (
                      <div 
                        key={mod.id}
                        onClick={() => onModuleClick(mod)}
                        className="p-1.5 bg-slate-50 hover:bg-blue-50/30 rounded border border-slate-150 hover:border-blue-300 cursor-pointer flex justify-between items-center group transition-colors text-xs"
                      >
                        <div className="truncate flex items-center pr-2">
                          <span className="font-mono text-slate-400 mr-1.5 text-[9px] font-bold shrink-0">Nr. {mod.id}</span>
                          <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors truncate">
                            {mod.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-150 font-sans">
                            {primaryExam}
                          </span>
                          <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600 transition-transform transform group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
