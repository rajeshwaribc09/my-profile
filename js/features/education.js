function renderEducation() {
  const container = document.getElementById("education-container");
  if (!container) return;
  
  let html = "";
  for (let i = 0; i < educationData.length; i++) {
    const ed = educationData[i];
    html += `
      <div class="relative">
        <div class="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-4 border-blue-500 shadow-sm shadow-blue-500/20"></div>
        <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-1">${ed.institution}</h4>
        <p class="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">${ed.degree}</p>
        <p class="text-xs text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">${ed.duration} ${ed.location ? ' • ' + ed.location : ''}</p>
        <p class="text-sm font-medium text-slate-700 dark:text-slate-300">Grade: <span class="font-bold text-slate-900 dark:text-white">${ed.score}</span></p>
      </div>
    `;
  }
  container.innerHTML = html;
}