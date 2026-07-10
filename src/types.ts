export interface ExamComponent {
  type: string; // e.g. "Klausur", "Lerntagebuch", "Projekt", "Präsentation", "Referat", "Seminararbeit", "Rollenspiel"
  weight: number; // e.g. 100 or 80, 20
  details?: string; // e.g. "60-90 Minuten", "Zwei Seminararbeiten (zusammen 100%)"
}

export interface Module {
  id: string; // e.g. "101"
  name: string;
  englishName: string;
  semester: number; // 1-7, or 0 for electives
  sws: number;
  crp: number;
  type: "pflicht" | "schwerpunkt" | "wahlpflicht_a" | "wahlpflicht_b";
  coaching?: boolean; // includes SK (Schlüsselkompetenzen)
  responsible?: string;
  teachers?: string[];
  mandatoryPrereq?: string;
  recommendedPrereq?: string;
  contents?: string;
  objectives?: string;
  exams: ExamComponent[];
  hasMc?: boolean; // multiple-choice / Antwort-Wahl-Verfahren
  mcDetails?: string;
  majorId?: string; // if it belongs to a major
  durationSemesters?: number; // 1 or 2
  language?: "Deutsch" | "Englisch" | "Deutsch/Englisch" | "Spanisch";
  workloadTotal?: number; // e.g. 180 hours
  workloadPresence?: number; // e.g. 75 hours
  workloadSelfStudy?: number; // e.g. 105 hours
  degrees?: string[]; // e.g. ["bwl", "bwl_nm"]
}

export interface Major {
  id: string; // e.g. "controlling", "marketing"
  name: string;
  englishName: string;
  description: string;
  careerFields: string[];
  moduleIds: string[]; // references to Module IDs
}

export interface ExamTypeDefinition {
  name: string;
  description: string;
}
