import React from "react";
import { EXAM_TYPE_DEFINITIONS } from "../data";
import { Info, HelpCircle, Layers, CheckCircle2, Award, Scale, BookOpen } from "lucide-react";

export const GlossarView: React.FC = () => {
  return (
    <div className="space-y-6" id="glossary-view-container">
      {/* THM Business School Rules and Regulations */}
      <div className="p-4 bg-white border border-slate-200 rounded space-y-3.5">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 uppercase tracking-wider">
          <Scale className="w-4.5 h-4.5 text-blue-600" /> Allgemeine Prüfungsregeln (THM Business School)
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          Für alle Module der THM Business School (Fachbereich 07 Wirtschaft) gelten die folgenden zentralen Bestimmungen der Prüfungsordnung (PO):
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          {/* Rule 1 */}
          <div className="p-3.5 bg-slate-50 rounded border border-slate-200 space-y-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-blue-50 text-blue-700 border border-blue-200 font-mono font-bold text-xs">
              1
            </span>
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Mündliche Prüfung als Ausweichoption</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Ist für ein Modul eine Klausur vorgesehen, so kann bei <strong>weniger als 10 Prüfungsteilnehmern</strong> eine mündliche Prüfung angesetzt werden. Dies wird rechtzeitig zu Vorlesungsbeginn bekannt gegeben.
            </p>
          </div>

          {/* Rule 2 */}
          <div className="p-3.5 bg-slate-50 rounded border border-slate-200 space-y-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-blue-50 text-blue-700 border border-blue-200 font-mono font-bold text-xs">
              2
            </span>
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Antwort-Wahl-Verfahren (§ 8a)</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Klausuren können Aufgaben im Antwort-Wahl-Verfahren (Multiple-Choice) enthalten, sofern dies unter der Rubrik „Leistungsnachweis“ in der jeweiligen Modulbeschreibung vermerkt ist.
            </p>
          </div>

          {/* Rule 3 */}
          <div className="p-3.5 bg-slate-50 rounded border border-slate-200 space-y-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-blue-50 text-blue-700 border border-blue-200 font-mono font-bold text-xs">
              3
            </span>
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Arbeitsaufwand je Creditpoint</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Einem Creditpoint (CrP) liegen gesetzlich <strong>30 Stunden Arbeitsaufwand</strong> zugrunde (gemäß § 10 der Allgemeinen Bestimmungen, Teil I der Prüfungsordnung).
            </p>
          </div>
        </div>
      </div>

      {/* Definitions Glossary */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 uppercase tracking-wider">
          <BookOpen className="w-4.5 h-4.5 text-blue-600" /> Definitionen aller Prüfungsformen
        </h3>
        <p className="text-xs text-slate-500">
          Die folgende Übersicht erläutert alle an der THM Business School verwendeten Prüfungsverfahren im Detail gemäß dem offiziellen Modulhandbuch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {EXAM_TYPE_DEFINITIONS.map((def, idx) => (
            <div 
              key={idx}
              className="p-3.5 bg-white border border-slate-200 rounded hover:border-blue-400 hover:bg-blue-50/10 transition-all space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-xs bg-blue-500 shrink-0" />
                <h4 className="font-sans font-bold text-slate-900 text-xs sm:text-sm">{def.name}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {def.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
