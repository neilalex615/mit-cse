const TIER_ORDER = ["8", "8.5", "9", "9.5"];
const TIER_LABELS = {
  "8": "8+",
  "8.5": "8.5+",
  "9": "9+",
  "9.5": "9.5+"
};
const TIER_META = {
  "8": { prac: 75, act: 75 },
  "8.5": { prac: 80, act: 80 },
  "9": { prac: 85, act: 85 },
  "9.5": { prac: 90, act: 90 }
};

const SUBJECTS = {
  calculus: {
    name: "Calculus",
    credits: 4,
    pattern: "P1",
    patternLabel: "Theory",
    general: {
      "8": { overall: 71, test: 36, endsem: 71 },
      "8.5": { overall: 76, test: 38, endsem: 76 },
      "9": { overall: 81, test: 41, endsem: 81 },
      "9.5": { overall: 86, test: 43, endsem: 86 }
    },
    foundation: {
      "8": { overall: 79, test: 40, endsem: 79, note: "pushed" },
      "8.5": { overall: 84, test: 42, endsem: 84, note: "pushed" },
      "9": { overall: 89, test: 45, endsem: 89, note: "pushed" },
      "9.5": { overall: 94, test: 47, endsem: 94, note: "pushed" }
    }
  },

  eee: {
    name: "Fundamentals of EEE",
    credits: 3,
    pattern: "P1",
    patternLabel: "Theory",
    general: {
      "8": { overall: 71, test: 36, endsem: 71 },
      "8.5": { overall: 76, test: 38, endsem: 76 },
      "9": { overall: 81, test: 41, endsem: 81 },
      "9.5": { overall: 86, test: 43, endsem: 86 }
    },
    foundation: {
      "8": { overall: 63, test: 32, endsem: 63, note: "relaxed" },
      "8.5": { overall: 68, test: 34, endsem: 68, note: "relaxed" },
      "9": { overall: 73, test: 37, endsem: 73, note: "relaxed" },
      "9.5": { overall: 78, test: 39, endsem: 78, note: "relaxed" }
    }
  },

  tamil: {
    name: "Heritage of Tamils",
    credits: 1,
    pattern: "P1",
    patternLabel: "Theory",
    general: {
      "8": { overall: 71, test: 36, endsem: 71 },
      "8.5": { overall: 76, test: 38, endsem: 76 },
      "9": { overall: 81, test: 41, endsem: 81 },
      "9.5": { overall: 86, test: 43, endsem: 86 }
    },
    foundation: {
      "8": { overall: 71, test: 36, endsem: 71, note: "unchanged" },
      "8.5": { overall: 76, test: 38, endsem: 76, note: "unchanged" },
      "9": { overall: 81, test: 41, endsem: 81, note: "unchanged" },
      "9.5": { overall: 86, test: 43, endsem: 86, note: "unchanged" }
    }
  },

  physics: {
    name: "Engineering Physics",
    credits: 4,
    pattern: "P2",
    patternLabel: "Theory + Practical",
    general: {
      "8": { overall: 71, test: 35, endsem: 70 },
      "8.5": { overall: 76, test: 38, endsem: 75 },
      "9": { overall: 81, test: 40, endsem: 80 },
      "9.5": { overall: 86, test: 43, endsem: 85 }
    },
    foundation: {
      "8": { overall: 64, test: 31, endsem: 62, note: "relaxed" },
      "8.5": { overall: 69, test: 34, endsem: 67, note: "relaxed" },
      "9": { overall: 74, test: 36, endsem: 72, note: "relaxed" },
      "9.5": { overall: 79, test: 39, endsem: 77, note: "relaxed" }
    }
  },

  english: {
    name: "Foundation English",
    credits: 3,
    pattern: "P2",
    patternLabel: "Theory + Practical",
    general: {
      "8": { overall: 71, test: 35, endsem: 70 },
      "8.5": { overall: 76, test: 38, endsem: 75 },
      "9": { overall: 81, test: 40, endsem: 80 },
      "9.5": { overall: 86, test: 43, endsem: 85 }
    },
    foundation: {
      "8": { overall: 71, test: 35, endsem: 70, note: "unchanged" },
      "8.5": { overall: 76, test: 38, endsem: 75, note: "unchanged" },
      "9": { overall: 81, test: 40, endsem: 80, note: "unchanged" },
      "9.5": { overall: 86, test: 43, endsem: 85, note: "unchanged" }
    }
  },

  c: {
    name: "Programming in C",
    credits: 4,
    pattern: "P3",
    patternLabel: "Theory + Practical",
    general: {
      "8": { overall: 71, test: 35, esTheory: 70, esPractical: 70 },
      "8.5": { overall: 76, test: 38, esTheory: 75, esPractical: 75 },
      "9": { overall: 81, test: 40, esTheory: 80, esPractical: 80 },
      "9.5": { overall: 86, test: 43, esTheory: 85, esPractical: 85 }
    },
    foundation: {
      "8": { overall: 79, test: 40, esTheory: 80, esPractical: 80, note: "pushed" },
      "8.5": { overall: 84, test: 43, esTheory: 85, esPractical: 85, note: "pushed" },
      "9": { overall: 89, test: 45, esTheory: 90, esPractical: 90, note: "pushed" },
      "9.5": { overall: 94, test: 48, esTheory: 95, esPractical: 95, note: "pushed" }
    }
  },

  ct: {
    name: "Computational Thinking",
    credits: 2,
    pattern: "P4",
    patternLabel: "Theory + Practical",
    general: {
      "8": { overall: 71, test: 35, esPractical: 70 },
      "8.5": { overall: 76, test: 38, esPractical: 75 },
      "9": { overall: 81, test: 40, esPractical: 80 },
      "9.5": { overall: 86, test: 43, esPractical: 85 }
    },
    foundation: {
      "8": { overall: 79, test: 40, esPractical: 80, note: "pushed" },
      "8.5": { overall: 84, test: 43, esPractical: 85, note: "pushed" },
      "9": { overall: 89, test: 45, esPractical: 90, note: "pushed" },
      "9.5": { overall: 94, test: 48, esPractical: 95, note: "pushed" }
    }
  }
};
