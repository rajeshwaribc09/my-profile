function renderAboutMe() {
  const container = document.getElementById("about-container");
  if (!container) return;

  container.innerHTML = `
    <p class="text-xl text-slate-600 dark:text-slate-300 mx-auto text-left md:text-center leading-relaxed">
      ${aboutMeData}
    </p>
  `;
}