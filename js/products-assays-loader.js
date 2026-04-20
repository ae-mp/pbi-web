// assays Loader System
// Automatically loads and renders all registered assays

// Registry to hold all assays
var assaysRegistry = [];

// Configuration - set max assays to check
const MAX_ASSAYS = 50;

// Function to dynamically load a script
function loadAssayScript(url) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.head.appendChild(script);
    });
}

// Function to check and load assay files
async function loadAssays() {
    const loadedAssays = [];
    
    for (let i = 1; i <= MAX_ASSAYS; i++) {
        const assayUrl = `/pbi-web/js/products-immuno/assay(${i}).js`;
        const loaded = await loadAssayScript(assayUrl);
        
        if (loaded) {
            loadedAssays.push(i);
            console.log(`Loaded: assay(${i}).js`);
        } else {
            console.log(`Stopped at assay(${i}).js - file not found`);
            break;
        }
    }
    
    console.log(`Total assays loaded: ${loadedAssays.length}`);
    setTimeout(renderAssays, 100);
}

// Function to render all registered assays
function renderAssays() {
    const container = document.getElementById('assays-container');
    
    if (!container) {
        console.error('Assays container not found. Make sure you have <div id="assays-container"></div> in your HTML.');
        return;
    }
    
    assaysRegistry.sort((a, b) => a.id - b.id);
    
    let html = '';
    
    if (assaysRegistry.length === 0) {
        html = '<div class="col-12 text-center"><p>No assays found.</p></div>';
    } else {
        assaysRegistry.forEach(assay => {
            html += `
            <div class="col-md-6 py-3">
                <div class="card h-100 rounded-3 overflow-hidden hover-scale" style="border-top: 5px solid #0d47a1;">
                    <div class="bg-white p-3 d-flex align-items-center justify-content-center" style="height: 160px;">    
                        <img src="${assay.image}" class="img-fluid h-100 object-fit-contain" alt="${assay.alt}">
                    </div>
                    <div class="card-body text-center text-white p-4 d-flex flex-column" style="background: linear-gradient(145deg, #1565c0 0%, #0d47a1 100%);">
                        <h5 class="card-title">${assay.name}</h5>
                        <p>${assay.tagline}</p>
                        <button type="button" class="${assay.buttonClass} btn btn-light text-primary fw-semibold mt-auto" data-bs-toggle="modal" data-bs-target="${assay.modalTarget}" data-product="${assay.modalProduct}">${assay.buttonText}</button>
                    </div>
                </div>
            </div>
            `;
        });
    }
    
    container.innerHTML = html;
}

// Auto-load assays when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadAssays();
});