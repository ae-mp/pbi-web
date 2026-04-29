// Dispensers Loader System
// Automatically loads and renders all registered dispensers

// Registry to hold all assays
var dispensersRegistry = [];

// Configuration - set max assays to check
const MAX_DISPENSERS = 50;

// Function to dynamically load a script
function loadDispensersScript(url) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.head.appendChild(script);
    });
}

// Function to check and load assay files
async function loadDispensers() {
    const loadedDispensers = [];
    
    for (let i = 1; i <= MAX_DISPENSERS; i++) {
        const dispenserUrl = `../js/products-dispenser/dispenser(${i}).js`;
        const loaded = await loadDispensersScript(dispenserUrl);
        
        if (loaded) {
            loadedDispensers.push(i);
            console.log(`Loaded: dispenser(${i}).js`);
        } else {
            console.log(`Stopped at dispenser(${i}).js - file not found`);
            break;
        }
    }
    
    console.log(`Total dispenser loaded: ${loadedDispensers.length}`);
    setTimeout(renderDispensers, 100);
}

// Function to render all registered assays
function renderDispensers() {
    const container = document.getElementById('dispensers-container');
    
    if (!container) {
        console.error('Dispensers container not found. Make sure you have <div id="dispensers-container"></div> in your HTML.');
        return;
    }
    
    dispensersRegistry.sort((a, b) => a.id - b.id);
    
    let html = '';
    
    if (dispensersRegistry.length === 0) {
        html = '<div class="col-12 text-center"><p>No dispensers found.</p></div>';
    } else {
        dispensersRegistry.forEach(dispenser => {
            html += `
            <div class="col-md-6 py-3">
                <div class="card h-100 rounded-3 overflow-hidden hover-scale" style="border-top: 5px solid #0d47a1;">
                    <div class="bg-white p-3 d-flex align-items-center justify-content-center" style="height: 160px;">    
                        <img src="${dispenser.image}" class="img-fluid h-100 object-fit-contain" alt="${dispenser.alt}">
                    </div>
                    <div class="card-body text-center text-white p-4 d-flex flex-column" style="background: linear-gradient(145deg, #1565c0 0%, #0d47a1 100%);">
                        <h5 class="card-title">${dispenser.name}</h5>
                        <p>${dispenser.tagline}</p>
                        <button type="button" class="${dispenser.buttonClass} btn btn-light text-primary fw-semibold mt-auto" data-bs-toggle="modal" data-bs-target="${dispenser.modalTarget}" data-product="${dispenser.modalProduct}">${dispenser.buttonText}</button>
                    </div>
                </div>
            </div>
            `;
        });
    }
    
    container.innerHTML = html;
}

// Auto-load dispensers when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadDispensers();
});