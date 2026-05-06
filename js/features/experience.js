function renderExperience() {
  const container = document.getElementById("experience-container");
  if (!container) return;
  
  let html = "";
  for (let i = 0; i < experienceData.length; i++) {
    const exp = experienceData[i];
    html += `
      <div class="relative">
        <div class="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-4 border-indigo-500 shadow-sm shadow-indigo-500/20"></div>
        <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-1">${exp.role}</h4>
        ${exp.company ? `<p class="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">${exp.company}</p>` : ''}
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">${exp.description}</p>
      </div>
    `;
  }
  container.innerHTML = html;
}