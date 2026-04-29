const product3=`
 
    <!--Hero-->
    <section class="text-white d-flex align-items-center justify-content-center pt-5" style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); min-height: 50vh;">
        <div class="container text-center py-5">
            <span class="badge bg-white text-primary mb-3 fs-6 text-uppercase">What We Offer</span>
            <h1 class="display-5 fw-bold mb-3">Syringe & Dispensers</h1>
            <p class="lead opacity-75 mb-0 px-md-5">From cutting-edge diagnostic equipment to complete laboratory automation systems, we provide end-to-end biomedical solutions tailored to your healthcare facility's needs.</p> 
        </div>
    </section>

    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content border-0 rounded-4 overflow-hidden shadow">
                <!-- Header -->
                <div class="modal-header border-0 py-3" 
                    style="background: linear-gradient(145deg, #1565c0 0%, #0d47a1 100%);">
                    <h5 class="modal-title text-white fw-semibold fs-5" id="productModalLabel">Product Title</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <!-- Body -->
                <div class="modal-body p-4">
                    <!-- Image Container -->
                    <div class="text-center bg-white rounded-3 p-4 mb-4">
                        <img id="modalImage" class="img-fluid" style="max-height: 220px;">
                    </div>
                    
                    <!-- Description -->
                    <h6 class="text-uppercase text-primary fw-bold small mb-3 letter-spacing-1">Description</h6>
                    <p id="modalDescription" class="text-secondary lh-base mb-4"></p>
                    
                    <!-- Features -->
                    <div class="mb-3">
                        <h6 class="text-uppercase text-primary fw-bold small mb-3 letter-spacing-1">Key Features</h6>
                        <div id="modalFeatures" class="d-flex flex-wrap gap-2"></div>
                    </div>
                    
                    <!-- Specs -->
                    <div class="mb-4">
                        <h6 class="text-uppercase text-primary fw-bold small mb-3 letter-spacing-1">Specifications</h6>
                        <div id="modalSpecs" class="vstack gap-2"></div>
                    </div>
                    
                    <!-- Applications -->
                    <div class="bg-light border-start border-4 border-primary p-3 rounded-start">
                        <h6 class="text-uppercase text-primary fw-bold small mb-2 letter-spacing-1">Applications</h6>
                        <p id="modalApplications" class="text-secondary small mb-0"></p>
                    </div>
                </div>
                
                <!-- Footer -->
                <div class="modal-footer border-0 justify-content-center pt-0 pb-4">
                    <a href="../pages/contact.html" target="_blank" 
                    class="btn btn-primary rounded-pill px-4 py-2 text-white text-decoration-none">
                        Request a Quote
                    </a>
                </div>
            </div>
        </div>
    </div>

`;

document.getElementById("product3").innerHTML = product3;

const productData = {
    item1: {
        title: "Syringe 1",
        image: "-",
        description: "-",
        features: ["-", "-", "-", "-", "-"],
        specs: [
            { label: "Throughput", value: "-" },
            { label: "Detection Method", value: "-" },
            { label: "Multiplex Capability", value: "-" },
            { label: "Sample Volume", value: "-" },
            { label: "Analysis Time", value: "-" },
            { label: "Dimensions", value: "-" }
        ],
        applications: "-"
    },

    item2: {
        title: "Syringe 2",
        image: "-",
        description: "-",
        features: ["-", "-", "-", "-", "-"],
        specs: [
            { label: "Throughput", value: "-" },
            { label: "Detection Method", value: "-" },
            { label: "Multiplex Capability", value: "-" },
            { label: "Sample Volume", value: "-" },
            { label: "Analysis Time", value: "-" },
            { label: "Dimensions", value: "-" }
        ],
        applications: "-"
    },

    item3: {
        title: "Syringe 3",
        image: "-",
        description: "-",
        features: ["-", "-", "-", "-", "-"],
        specs: [
            { label: "Throughput", value: "-" },
            { label: "Detection Method", value: "-" },
            { label: "Multiplex Capability", value: "-" },
            { label: "Sample Volume", value: "-" },
            { label: "Analysis Time", value: "-" },
            { label: "Dimensions", value: "-" }
        ],
        applications: "-"
    },

    item4: {
        title: "Syringe 4",
        image: "-",
        description: "-",
        features: ["-", "-", "-", "-", "-"],
        specs: [
            { label: "Throughput", value: "-" },
            { label: "Detection Method", value: "-" },
            { label: "Multiplex Capability", value: "-" },
            { label: "Sample Volume", value: "-" },
            { label: "Analysis Time", value: "-" },
            { label: "Dimensions", value: "-" }
        ],
        applications: "-"
    },

    dispenser1: {
        title: "Dispenser 1",
        image: "-",
        description: "-",
        features: ["-", "-", "-", "-", "-"],
        specs: [
            { label: "Throughput", value: "-" },
            { label: "Detection Method", value: "-" },
            { label: "Multiplex Capability", value: "-" },
            { label: "Sample Volume", value: "-" },
            { label: "Analysis Time", value: "-" },
            { label: "Dimensions", value: "-" }
        ],
        applications: "-"
    },

    dispenser2: {
        title: "Dispenser 2",
        image: "-",
        description: "-",
        features: ["-", "-", "-", "-", "-"],
        specs: [
            { label: "Throughput", value: "-" },
            { label: "Detection Method", value: "-" },
            { label: "Multiplex Capability", value: "-" },
            { label: "Sample Volume", value: "-" },
            { label: "Analysis Time", value: "-" },
            { label: "Dimensions", value: "-" }
        ],
        applications: "-"
    },

    dispenser3: {
        title: "Dispenser 3",
        image: "-",
        description: "-",
        features: ["-", "-", "-", "-", "-"],
        specs: [
            { label: "Throughput", value: "-" },
            { label: "Detection Method", value: "-" },
            { label: "Multiplex Capability", value: "-" },
            { label: "Sample Volume", value: "-" },
            { label: "Analysis Time", value: "-" },
            { label: "Dimensions", value: "-" }
        ],
        applications: "-"
    },

    dispenser4: {
        title: "Dispenser 4",
        image: "-",
        description: "-",
        features: ["-", "-", "-", "-", "-"],
        specs: [
            { label: "Throughput", value: "-" },
            { label: "Detection Method", value: "-" },
            { label: "Multiplex Capability", value: "-" },
            { label: "Sample Volume", value: "-" },
            { label: "Analysis Time", value: "-" },
            { label: "Dimensions", value: "-" }
        ],
        applications: "-"
    },

};

// Modal event listener
document.addEventListener('DOMContentLoaded', function() {
    const productModal = document.getElementById('productModal');
    
    if (productModal) {
        productModal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            const productId = button.getAttribute('data-product');
            const product = productData[productId];
            
            if (!product) return;

            document.getElementById('productModalLabel').textContent = product.title;
            document.getElementById('modalImage').src = product.image;
            document.getElementById('modalImage').alt = product.title;
            document.getElementById('modalDescription').textContent = product.description;
            document.getElementById('modalApplications').textContent = product.applications;

            // Inside your modal event listener
            const featuresContainer = document.getElementById('modalFeatures');
            featuresContainer.innerHTML = product.features.map(f => 
                `<span class="badge bg-light text-dark border px-3 py-2 fw-normal">${f}</span>`
            ).join('');

            const specsContainer = document.getElementById('modalSpecs');
            specsContainer.innerHTML = product.specs.map(s => 
                `<div class="d-flex justify-content-between border-bottom py-2">
                    <span class="text-secondary small">${s.label}</span>
                    <span class="fw-medium small text-dark">${s.value}</span>
                </div>`
            ).join('');
        });
    }
});