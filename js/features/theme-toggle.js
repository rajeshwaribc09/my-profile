function initThemeToggle(){
    const toggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;
    
    const savedTheme = localStorage.getItem("portfolio-theme");

    if(savedTheme === "dark" || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)){
        htmlElement.classList.add("dark");
    }

    toggleBtn.addEventListener("click",function(){
        htmlElement.classList.toggle("dark");
        if(htmlElement.classList.contains("dark")){
            localStorage.setItem("portfolio-theme","dark");
            console.log("Dark mode enabled");
        }else{
            localStorage.setItem("portfolio-theme","light");
            console.log("Light mode enabled");
        }
    });
}