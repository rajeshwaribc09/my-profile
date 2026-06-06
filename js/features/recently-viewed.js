function initRecentlyViewed() {
    const container = document.getElementById("recently-viewed-container");
    if (!container) return;

    let viewedIds = [];
    try {
        viewedIds = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    } catch (e) {
        console.error("Error parsing recentlyViewed from localStorage", e);
    }

    if (viewedIds.length === 0) return;

    // Unhide the container
    container.classList.remove("hidden");
    container.innerHTML = ""; // Clear existing content
    
    // Create header container
    const headerContainer = document.createElement("div");
    headerContainer.className = "flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-8 gap-4";

    // Create header
    const header = document.createElement("h3");
    header.className = "text-2xl font-bold text-slate-900 dark:text-white text-center sm:text-left";
    header.textContent = "Recently Viewed Projects";
    headerContainer.appendChild(header);

    // Create clear button
    const clearBtn = document.createElement("button");
    clearBtn.className = "px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2";
    clearBtn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg> Clear History`;
    clearBtn.onclick = () => {
        localStorage.removeItem('recentlyViewed');
        container.classList.add("hidden");
        container.innerHTML = "";
    };
    headerContainer.appendChild(clearBtn);

    container.appendChild(headerContainer);

    // Create cards container
    const cardsGrid = document.createElement("div");
    cardsGrid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
    
    viewedIds.forEach(id => {
        const project = projectsData.find(p => p.id === id);
        if (!project) return;

        const card = document.createElement("div");
        card.className = "px-8 py-6 text-center bg-gray-50 dark:bg-slate-800 rounded-3xl shadow border border-slate-200 dark:border-slate-700 cursor-pointer";

        const title = document.createElement("h4");
        title.className = "text-lg font-bold mb-2 text-slate-900 dark:text-white";
        title.textContent = project.name;

        const category = document.createElement("span");
        category.className = "text-sm text-indigo-600 dark:text-indigo-400 block mb-2";
        category.textContent = project.category;

        card.appendChild(title);
        card.appendChild(category);
        cardsGrid.appendChild(card);
    });

    container.appendChild(cardsGrid);
}