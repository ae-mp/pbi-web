// Machines Loader System
// Automatically loads and renders all registered machines

// Registry to hold all machines
var machinesRegistry = [];

// Configuration - set max machines to check
const MAX_MACHINES = 50;

// Function to dynamically load a script
function loadMachineScript(url) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.head.appendChild(script);
    });
}

// Function to check and load machine files
async function loadMachines() {
    const loadedMachines = [];
    
    for (let i = 1; i <= MAX_MACHINES; i++) {
        const machineUrl = `/pbi-web/js/products-machines/machine(${i}).js`;
        const loaded = await loadMachineScript(machineUrl);
        
        if (loaded) {
            loadedMachines.push(i);
            console.log(`Loaded: machine(${i}).js`);
        } else {
            console.log(`Stopped at machine(${i}).js - file not found`);
            break;
        }
    }
    
    console.log(`Total machines loaded: ${loadedMachines.length}`);
    setTimeout(renderMachines, 100);
}

// Function to render all registered machines
function renderMachines() {
    const container = document.getElementById('machines-container');
    
    if (!container) {
        console.error('Machines container not found. Make sure you have <div id="machines-container"></div> in your HTML.');
        return;
    }
    
    machinesRegistry.sort((a, b) => a.id - b.id);
    
    let html = '';
    
    if (machinesRegistry.length === 0) {
        html = '<div class="col-12 text-center"><p>No machines found.</p></div>';
    } else {
        machinesRegistry.forEach(machine => {
            html += `
            <div class="col-md-6 py-3">
                <div class="card h-100 rounded-3 overflow-hidden hover-scale" style="border-top: 5px solid #0d47a1;">
                    <div class="bg-white p-3 d-flex align-items-center justify-content-center" style="height: 160px;">    
                        <img src="${machine.image}" class="img-fluid h-100 object-fit-contain" alt="${machine.alt}">
                    </div>
                    <div class="card-body text-center text-white p-4 d-flex flex-column" style="background: linear-gradient(145deg, #1565c0 0%, #0d47a1 100%);">
                        <h5 class="card-title">${machine.name}</h5>
                        <p>${machine.tagline}</p>
                        <button type="button" class="${machine.buttonClass} btn btn-light text-primary fw-semibold mt-auto" data-bs-toggle="modal" data-bs-target="${machine.modalTarget}" data-product="${machine.modalProduct}">${machine.buttonText}</button>
                    </div>
                </div>
            </div>
            `;
        });
    }
    
    container.innerHTML = html;
}

// Auto-load machines when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadMachines();
});