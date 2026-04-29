// Reagents Loader System
// Automatically loads and renders all registered reagents

// Registry to hold all reagents
var reagentsRegistry = [];

// Configuration - set max reagents to check
const MAX_REAGENTS = 50;

// Function to dynamically load a script
function loadReagentScript(url) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.head.appendChild(script);
    });
}

// Function to check and load reagent files
async function loadReagents() {
    const loadedReagents = [];
    
    for (let i = 1; i <= MAX_REAGENTS; i++) {
        const reagentUrl = `../js/products-reagents/reagent(${i}).js`;
        const loaded = await loadReagentScript(reagentUrl);
        
        if (loaded) {
            loadedReagents.push(i);
            console.log(`Loaded: reagent(${i}).js`);
        } else {
            console.log(`Stopped at reagent(${i}).js - file not found`);
            break;
        }
    }
    
    console.log(`Total reagents loaded: ${loadedReagents.length}`);
    setTimeout(renderReagents, 100);
}

// Function to render all registered reagents
function renderReagents() {
    const container = document.getElementById('reagents-container');
    
    if (!container) {
        console.error('Reagents container not found. Make sure you have <div id="reagents-container"></div> in your HTML.');
        return;
    }
    
    reagentsRegistry.sort((a, b) => a.id - b.id);
    
    let html = '';
    
    if (reagentsRegistry.length === 0) {
        html = '<div class="col-12 text-center"><p>No reagents found.</p></div>';
    } else {
        reagentsRegistry.forEach(reagent => {
            html += `
            <div class="col-md-6 py-3">
                <div class="card h-100 rounded-3 overflow-hidden hover-scale" style="border-top: 5px solid #0d47a1;">
                    <div class="bg-white p-3 d-flex align-items-center justify-content-center" style="height: 160px;">   
                        <img src="${reagent.image}" class="img-fluid h-100 object-fit-contain" alt="${reagent.alt}">
                    </div>
                    <div class="card-body text-center text-white p-4 d-flex flex-column" style="background: linear-gradient(145deg, #1565c0 0%, #0d47a1 100%);">
                        <h5 class="card-title">${reagent.name}</h5>
                        <p>${reagent.tagline}</p>
                        <button type="button" class="${reagent.buttonClass}btn btn-light text-primary fw-semibold mt-auto" data-bs-toggle="modal" data-bs-target="${reagent.modalTarget}" data-product="${reagent.modalProduct}">${reagent.buttonText}</button>
                    </div>
                </div>
            </div>
            `;
        });
    }
    
    container.innerHTML = html;
}

// Auto-load reagents when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadReagents();
});