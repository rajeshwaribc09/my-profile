const skillsData = [
  {
    id: 1,
    name: "ReactJS",
    category: "Frontend",
    shortLabel: "R",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><circle cx="12" cy="12" r="2"></circle><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"></ellipse></svg>`,
    description: "Advanced Hooks, component-based UI, and state management."
  },
  {
    id: 2,
    name: "Tailwind CSS",
    category: "Frontend",
    shortLabel: "T",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path d="M12 4c-3.3 0-5.5 1.7-6.6 5.1 1.6-1.6 3.5-2.2 5.5-1.6 1.3.4 2.2 1.4 3.7 3C16.5 12.3 19 15 22 15c3.3 0 5.5-1.7 6.6-5.1-1.6 1.6-3.5 2.2-5.5 1.6-1.3-.4-2.2-1.4-3.7-3-1.9-1.8-4.4-4.5-7.4-4.5zM2 13c-3.3 0-5.5 1.7-6.6 5.1 1.6-1.6 3.5-2.2 5.5-1.6 1.3.4 2.2 1.4 3.7 3 1.9 1.8 4.4 4.5 7.4 4.5 3.3 0 5.5-1.7 6.6-5.1-1.6 1.6-3.5 2.2-5.5 1.6-1.3-.4-2.2-1.4-3.7-3-1.9-1.8-4.4-4.5-7.4-4.5z"></path></svg>`,
    description: "Responsive layouts, utility-first styling, and clean UI building."
  },
  {
    id: 3,
    name: "JavaScript",
    category: "Frontend",
    shortLabel: "J",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M3 3h18v18H3V3m10.5 13.5c0 .82-.47 1.29-1.38 1.29-.76 0-1.22-.38-1.47-.94l-1.35.61c.42.94 1.34 1.65 2.85 1.65 1.73 0 2.92-1.01 2.92-2.61V9h-1.53v7.5m4.35.79c1.07 0 1.85-.42 2.31-1.12l-1.23-.74c-.28.43-.65.65-1.1.65-.58 0-1.02-.38-1.02-.99 0-.64.44-.94 1.42-1.2l.53-.14c1.39-.37 2.05-1.08 2.05-2.32 0-1.44-1.15-2.45-2.73-2.45-1.4 0-2.39.81-2.81 1.87l1.26.65c.23-.62.69-1.19 1.54-1.19.64 0 1.05.36 1.05.9 0 .54-.36.85-1.26 1.09l-.53.15c-1.65.45-2.26 1.25-2.26 2.45 0 1.55 1.15 2.58 2.82 2.58"></path></svg>`,
    description: "DOM manipulation, events, validation, Fetch API, and storage."
  },
  {
    id: 4,
    name: "MongoDB",
    category: "Backend",
    shortLabel: "M",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    description: "Document-based database design and backend integration."
  },
  {
    id: 5,
    name: "C",
    category: "Programming Language",
    shortLabel: "C",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M14.65 6.72c-1.42-1.32-3.41-1.89-5.41-1.38-1.54.4-2.88 1.44-3.66 2.82-1.48 2.65-1.48 6.03 0 8.68.78 1.38 2.12 2.42 3.66 2.82 2 .51 4 .06 5.41-1.38l1.45 1.45c-2.12 2-5.18 2.76-8.05 1.65-2.14-.83-3.92-2.61-4.75-4.75-1.92-5-.23-10.74 4.09-13.06 2.86-1.53 6.36-1.53 9.22 0l-1.96 3.15z"></path></svg>`,
    description: "Systems programming, algorithms, and data structures."
  },
  {
    id: 6,
    name: "Node.js",
    category: "Backend",
    shortLabel: "N",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path d="M12 2L22 7.77V16.23L12 22L2 16.23V7.77L12 2z"></path><path d="M12 22V12"></path><path d="M22 7.77L12 12L2 7.77"></path></svg>`,
    description: "Server-side JavaScript execution environment."
  },
  {
    id: 7,
    name: "Express.js",
    category: "Backend",
    shortLabel: "E",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-family="monospace" font-weight="bold" font-size="14">EX</text></svg>`,
    description: "Fast, unopinionated, minimalist web framework for Node.js."
  },
  {
    id: 8,
    name: "Java",
    category: "Programming Language",
    shortLabel: "J",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path d="M18 8h1a4 4 0 010 8h-1"></path><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    description: "Object-oriented programming, enterprise applications, and backend development."
  }
];