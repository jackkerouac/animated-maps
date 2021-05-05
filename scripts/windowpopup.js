Hooks.once('ready', async function () {
    if (game.settings.get("animated-maps","jkmapsrunonlyonce") == false) {
        let d = new Dialog({
            title: "Animated Maps Module Activated!",
            content: `<div style="text-align: justify;"><h2>Jack Kerouac's Animated Maps</h2><p>A very small repository of animated maps for your favourite VTT. All maps are in .webm format. All of the maps are in 1920x1080 format for ease of use. If you like my work, consider saying thanks on Discord: jackkerouac#0624.</p></div>`,
            buttons: {
                one: {
                    icon: '<i class="fas fa-clipboard-list"></i>',
                    label: "OK",                    
                },
                two: {
                    icon: '<i class="fas fa-clipboard-check"></i>',
                    label: "Don't show again",
                    callback: () => game.settings.set("animated-maps", "jkmapsrunonlyonce", true)                  
                },               
            },
                  
        });
        d.render(true);
    }
})