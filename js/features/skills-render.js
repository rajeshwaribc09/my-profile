function renderSkills() {
    const skillsContainer = document.getElementById("skills-container");
    const skillsFilters = document.getElementById("skills-filters");

    if (!skillsContainer) {
        console.log("Skills container not found");
        return;
    }

    let currentCategory = "All";
    
    // Generate filter buttons if container exists
    if (skillsFilters) {
        skillsFilters.innerHTML = "";
        const categories = ["All", ...new Set(skillsData.map(s => s.category).filter(Boolean))];
        
        categories.forEach(category => {
            const btn = document.createElement("button");
            btn.className = `px-5 py-2.5 rounded-full font-semibold transition-all ${category === "All" ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"}`;
            btn.textContent = category;
            
            btn.addEventListener("click", () => {
                currentCategory = category;
                // update active state
                Array.from(skillsFilters.children).forEach(child => {
                    child.className = `px-5 py-2.5 rounded-full font-semibold transition-all bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400`;
                });
                btn.className = `px-5 py-2.5 rounded-full font-semibold transition-all bg-indigo-600 text-white shadow-md shadow-indigo-600/20`;
                
                renderFilteredSkills();
            });
            skillsFilters.appendChild(btn);
        });
    }

    function renderFilteredSkills() {
        skillsContainer.innerHTML = "";
        
        const filtered = currentCategory === "All" ? skillsData : skillsData.filter(s => s.category === currentCategory);

        filtered.forEach(function (skill) {
            //to create outer card
            const card = document.createElement("div");
            card.className = "flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center group";

            //create icon
            const iconBox = document.createElement("div");
            iconBox.className = "w-14 h-14 mb-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300";

            //create icon text
            const iconText = document.createElement("span");
            iconText.className = "text-xl text-indigo-600 dark:text-indigo-400 font-bold";
            iconText.textContent = skill.shortLabel;

            //Put icon text inside icon box
            iconBox.appendChild(iconText);

            // create skill name 
            const skillName = document.createElement("h3");
            skillName.className = "text-base font-bold mb-2 text-slate-900 dark:text-white";
            skillName.textContent = skill.name;

            //create skill desc
            const skillDescription = document.createElement("p");
            skillDescription.className = "text-xs text-slate-500 dark:text-slate-400 font-medium";
            skillDescription.textContent = skill.description;

            // Append all child elements to card
            card.appendChild(iconBox);
            card.appendChild(skillName);
            card.appendChild(skillDescription);

            //Append card to skills container
            skillsContainer.appendChild(card);
        });
    }

    renderFilteredSkills();
    console.log("Skills rendered successfully");
}