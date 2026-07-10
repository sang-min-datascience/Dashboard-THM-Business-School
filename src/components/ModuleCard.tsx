import React from "react";
import { Module } from "../types";
import { Calendar, HelpCircle, Layers, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

interface ModuleCardProps {
  module: Module;
  onClick: () => void;
  isHighlighted: boolean;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ module, onClick, isHighlighted }) => {
  const getExamBadges = () => {
    return module.exams.map((exam, idx) => {
      let bg = "bg-slate-100 text-slate-700 border-slate-200/50";
      if (exam.type === "Klausur") bg = "bg-indigo-50 text-indigo-700 border-indigo-200/50";
      else if (exam.type === "Portfolio") bg = "bg-purple-50 text-purple-700 border-purple-200/50";
      else if (exam.type === "Projekt" || exam.type === "Gründungsprojekt") bg = "bg-emerald-50 text-emerald-700 border-emerald-200/50";
      else if (exam.type === "Präsentation") bg = "bg-amber-50 text-amber-700 border-amber-200/50";
      else if (exam.type === "Lerntagebuch") bg = "bg-pink-50 text-pink-700 border-pink-200/50";
      else if (exam.type === "Seminararbeit") bg = "bg-cyan-50 text-cyan-700 border-cyan-200/50";

      return (
        <span
          key={idx}
          className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border ${bg}`}
        >
          {exam.type} ({exam.weight}%)
        </span>
      );
    });
  };

  return (
    <motion.div
      id={`module-card-${module.id}`}
      layoutId={`module-card-layout-${module.id}`}
      onClick={onClick}
      className={`relative flex flex-col justify-between p-3.5 rounded border text-left cursor-pointer transition-all duration-200 bg-white ${
        isHighlighted 
          ? "border-slate-300 ring-1 ring-blue-500/20 shadow-xs" 
          : "border-slate-200/60 opacity-60 hover:opacity-100"
      } hover:border-blue-500 hover:bg-blue-50/20`}
      whileHover={{ y: -1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-1">
          <span className="font-mono text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
            Nr. {module.id}
          </span>
          <div className="flex items-center gap-1">
            {module.coaching && (
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-50 text-blue-700 border border-blue-200" title="Inklusive Coaching Schlüsselkompetenzen">
                Soft Skills
              </span>
            )}
            {module.hasMc && (
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200" title="Prüfung enthält Multiple-Choice">
                MC-Option
              </span>
            )}
            {module.language === "Englisch" && (
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                EN
              </span>
            )}
          </div>
        </div>

        <h4 className="font-sans font-bold text-slate-900 text-[13px] leading-snug line-clamp-2 min-h-[38px] hover:text-blue-600 transition-colors mt-1.5">
          {module.name}
        </h4>
        
        {module.englishName && module.englishName !== module.name && (
          <p className="text-[10px] text-slate-400 italic line-clamp-1 mb-2">
            {module.englishName}
          </p>
        )}
      </div>

      <div className="mt-3">
        <div className="flex flex-wrap gap-1 mb-2.5">
          {getExamBadges()}
        </div>

        <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 text-[11px] text-slate-500">
          <div className="flex items-center gap-1" title="Creditpoints (Arbeitsaufwand)">
            <Layers className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-medium text-slate-700">{module.crp} CrP</span>
          </div>
          <div className="flex items-center gap-1" title="Semesterwochenstunden (Präsenzzeit)">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{module.sws} SWS</span>
          </div>
          <div className="text-[10px] px-1.5 py-0.2 bg-slate-50 text-slate-500 rounded border border-slate-100 font-mono capitalize">
            {module.type === "pflicht" ? "Pflicht" : module.type === "schwerpunkt" ? "Schwerpunkt" : "Wahlpflicht"}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
