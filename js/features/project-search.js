function searchProjects() {
    const projectsContainer = document.getElementById("projects-container");
    const searchInput = document.getElementById("project-search");
    const sortSelect = document.getElementById("project-sort");
    const filtersContainer = document.getElementById("project-filters");
    const countDisplay = document.getElementById("project-count");

    if (!projectsContainer) return;

    let currentCategory = "All";
    let searchQuery = "";
    let currentSort = "default";

    // 1. Generate category buttons
    const categories = ["All", ...new Set(projectsData.map(p => p.category))];
    
    filtersContainer.innerHTML = "";
    categories.forEach(category => {
        const btn = document.createElement("button");
        btn.className = `px-5 py-2.5 rounded-full font-semibold transition-all ${category === "All" ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"}`;
        btn.textContent = category;
        btn.addEventListener("click", () => {
            currentCategory = category;
            
            // Update active state
            Array.from(filtersContainer.children).forEach(child => {
                child.className = `px-5 py-2.5 rounded-full font-semibold transition-all bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400`;
            });
            btn.className = `px-5 py-2.5 rounded-full font-semibold transition-all bg-indigo-600 text-white shadow-md shadow-indigo-600/20`;
            
            renderProjects();
        });
        filtersContainer.appendChild(btn);
    });

    // 2. Event Listeners for Search and Sort
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderProjects();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            currentSort = e.target.value;
            renderProjects();
        });
    }

    // 3. Render Projects Function
    function renderProjects() {
        projectsContainer.innerHTML = "";
        
        // Filter
        let filtered = projectsData.filter(project => {
            const matchesCategory = currentCategory === "All" || project.category === currentCategory;
            const matchesSearch = project.name.toLowerCase().includes(searchQuery) || project.description.toLowerCase().includes(searchQuery);
            return matchesCategory && matchesSearch;
        });

        // Sort
        if (currentSort === "a-z") {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (currentSort === "z-a") {
            filtered.sort((a, b) => b.name.localeCompare(a.name));
        } else {
            // Restore default sorting by ID
            filtered.sort((a, b) => a.id - b.id);
        }

        // Update Count
        if (countDisplay) {
            countDisplay.textContent = `${filtered.length} project${filtered.length !== 1 ? 's' : ''} found`;
        }

        // Build HTML
        filtered.forEach(project => {
            const card = document.createElement("div");
            card.className = "flex flex-col h-full p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group";
            
            // Handle Recently Viewed Storage
            card.addEventListener("click", () => {
                let viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
                // remove if already exists to move it to the top
                viewed = viewed.filter(id => id !== project.id);
                viewed.unshift(project.id);
                // Keep only last 3
                if (viewed.length > 3) viewed.pop();
                localStorage.setItem('recentlyViewed', JSON.stringify(viewed));
            });

            const iconBox = document.createElement("div");
            iconBox.className = "w-16 h-16 mb-6 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300";
            const iconText = document.createElement("span");
            iconText.className = "text-2xl text-indigo-600 dark:text-indigo-400 font-bold";
            iconText.textContent = project.id;
            iconBox.appendChild(iconText);

            const projectName = document.createElement("h3");
            projectName.className = "text-xl font-bold mb-2 text-slate-900 dark:text-white";
            projectName.textContent = project.name;

            const projectCategory = document.createElement("span");
            projectCategory.className = "text-sm font-semibold mb-4 text-indigo-600 dark:text-indigo-400";
            projectCategory.textContent = project.category;

            // Expand/Collapse Description
            const descContainer = document.createElement("div");
            descContainer.className = "mb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-grow";
            
            const shortDesc = project.description.length > 80 ? project.description.slice(0, 80) + "..." : project.description;
            const descText = document.createElement("p");
            descText.textContent = shortDesc;
            descContainer.appendChild(descText);

            if (project.description.length > 80) {
                const toggleBtn = document.createElement("button");
                toggleBtn.textContent = "View More";
                toggleBtn.className = "text-indigo-500 font-semibold mt-2 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs transition-colors";
                
                let isExpanded = false;
                toggleBtn.addEventListener("click", (e) => {
                    e.stopPropagation(); // prevent card click
                    isExpanded = !isExpanded;
                    descText.textContent = isExpanded ? project.description : shortDesc;
                    toggleBtn.textContent = isExpanded ? "View Less" : "View More";
                });
                descContainer.appendChild(toggleBtn);
            }

            const techSpan = document.createElement("div");
            techSpan.className = "flex flex-wrap gap-2 mb-6 mt-auto";
            if (project.technologies) {
                project.technologies.forEach(tech => {
                    const t = document.createElement("span");
                    t.className = "px-3 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600";
                    t.textContent = tech;
                    techSpan.appendChild(t);
                });
            }

            const projectStatus = document.createElement("div");
            const statusBadge = document.createElement("span");
            statusBadge.className = "inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/30 uppercase tracking-wider";
            statusBadge.textContent = project.status;
            projectStatus.appendChild(statusBadge);

            card.appendChild(iconBox);
            card.appendChild(projectName);
            card.appendChild(projectCategory);
            card.appendChild(descContainer);
            card.appendChild(techSpan);
            card.appendChild(projectStatus);

            projectsContainer.appendChild(card);
        });
    }

    // Initial render
    renderProjects();
}