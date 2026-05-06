function initGeolocation() {
    const locationMessage = document.getElementById("location-message");
    if (!locationMessage) return;

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                
                // Fetch location name using a free reverse geocoding API
                fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
                    .then(response => response.json())
                    .then(data => {
                        const locationName = data.city || data.locality || data.principalSubdivision || "your location";
                        const country = data.countryName || "";
                        const displayLocation = country ? `${locationName}, ${country}` : locationName;
                        
                        locationMessage.textContent = `You are browsing from ${displayLocation}`;
                    })
                    .catch(err => {
                        console.error("Reverse geocoding error:", err);
                        // Fallback to coordinates if the API fails
                        locationMessage.textContent = `You are browsing from approximately Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`;
                    });
            },
            (error) => {
                console.log("Geolocation error or denied", error);
            }
        );
    }
}