// syringes Loader System
// Automatically loads and renders all registered syringes

// Registry to hold all assays
var syringesRegistry = [];

// Configuration - set max assays to check
const MAX_SYRINGES = 50;

// Function to dynamically load a script
function loadSyringesScript(url) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.head.appendChild(script);
    });
}

// Function to check and load assay files
async function loadSyringes() {
    const loadedSyringes = [];
    
    for (let i = 1; i <= MAX_SYRINGES; i++) {
        const syringeUrl = `../js/products-syringe/syringe(${i}).js`;
        const loaded = await loadSyringesScript(syringeUrl);
        
        if (loaded) {
            loadedSyringes.push(i);
            console.log(`Loaded: syringe(${i}).js`);
        } else {
            console.log(`Stopped at syringe(${i}).js - file not found`);
            break;
        }
    }
    
    console.log(`Total assays loaded: ${loadedSyringes.length}`);
    setTimeout(renderSyringes, 100);
}

// Function to render all registered assays
function renderSyringes() {
    const container = document.getElementById('syringes-container');
    
    if (!container) {
        console.error('Syringes container not found. Make sure you have <div id="syringes-container"></div> in your HTML.');
        return;
    }
    
    syringesRegistry.sort((a, b) => a.id - b.id);
    
    let html = '';
    
    if (syringesRegistry.length === 0) {
        html = '<div class="col-12 text-center"><p>No syringes found.</p></div>';
    } else {
        syringesRegistry.forEach(syringe => {
            html += `
            <div class="col-md-6 py-3">
                <div class="card h-100 rounded-3 overflow-hidden hover-scale" style="border-top: 5px solid #0d47a1;">
                    <div class="bg-white p-3 d-flex align-items-center justify-content-center" style="height: 160px;">    
                        <img src="${syringe.image}" class="img-fluid h-100 object-fit-contain" alt="${syringe.alt}">
                    </div>
                    <div class="card-body text-center text-white p-4 d-flex flex-column" style="background: linear-gradient(145deg, #1565c0 0%, #0d47a1 100%);">
                        <h5 class="card-title">${syringe.name}</h5>
                        <p>${syringe.tagline}</p>
                        <button type="button" class="${syringe.buttonClass} btn btn-light text-primary fw-semibold mt-auto" data-bs-toggle="modal" data-bs-target="${syringe.modalTarget}" data-product="${syringe.modalProduct}">${syringe.buttonText}</button>
                    </div>
                </div>
            </div>
            `;
        });
    }
    
    container.innerHTML = html;
}

// Auto-load syringes when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadSyringes();
});