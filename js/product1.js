const product1=`
 
    <!--Hero-->
    <section class="text-white d-flex align-items-center justify-content-center pt-5" style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); min-height: 50vh;">
        <div class="container text-center py-5">
            <span class="badge bg-white text-primary mb-3 fs-6 text-uppercase">What We Offer</span>
            <h1 class="display-5 fw-bold mb-3">Transplant Diagnostics</h1>
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
                    <a href="/pbi-web/pages/contact.html" target="_blank" 
                    class="btn btn-primary rounded-pill px-4 py-2 text-white text-decoration-none">
                        Request a Quote
                    </a>
                </div>
            </div>
        </div>
    </div>

`;

document.getElementById("product1").innerHTML = product1;

const productData = {
    labscan3d: {
        title: "LABScan 3D",
        image: "/pbi-web/image/labscan 3d.png",
        description: "The LABScan 3D is the most advanced multiplex flow analyzer designed for high-throughput transplant diagnostics. It delivers exceptional precision and reliability for HLA antibody detection and monitoring.",
        features: ["Multiplex bead-based technology", "96-well plate format", "Automated sample processing", "Advanced data analysis software", "21 CFR Part 11 compliant"],
        specs: [
            { label: "Throughput", value: "Up to 96 samples/run" },
            { label: "Detection Method", value: "Flow cytometry-based" },
            { label: "Multiplex Capability", value: "Up to 100 beads/region" },
            { label: "Sample Volume", value: "10 μL minimum" },
            { label: "Analysis Time", value: "~45 minutes" },
            { label: "Dimensions", value: "65 x 58 x 52 cm" }
        ],
        applications: "Ideal for HLA antibody screening, crossmatch testing, and post-transplant monitoring in solid organ and stem cell transplantation."
    },

     labscan100: {
        title: "LABScan 100",
        image: "/pbi-web/image/lx200.png",
        description: "The LABScan 100 is the moast advanced multiplex flow analyzer designed for high-throughput transplant diagnostics. It delivers exceptional precision and reliability for HLA antibody detection and monitoring.",
        features: ["Multiplex bead-based technology", "96-well plate format", "Automated sample processing", "Advanced data analysis software", "21 CFR Part 11 compliant"],
        specs: [
            { label: "Throughput", value: "Up to 96 samples/run" },
            { label: "Detection Method", value: "Flow cytometry-based" },
            { label: "Multiplex Capability", value: "Up to 100 beads/region" },
            { label: "Sample Volume", value: "10 μL minimum" },
            { label: "Analysis Time", value: "~45 minutes" },
            { label: "Dimensions", value: "65 x 58 x 52 cm" }
        ],
        applications: "Ideal for HLA antibody screening, crossmatch testing, and post-transplant monitoring in solid organ and stem cell transplantation."
    },

    qs6pro: {
        title: "QuantStudio 6 Pro",
        image: "/pbi-web/image/qs6pro.png",
        description: "The QuantStudio 6 Pro Real-Time PCR System combines flexibility with ease-of-use for quantitative gene expression analysis, pathogen detection, and SNP genotyping in transplant diagnostics.",
        features: ["Interchangeable block formats", "Cloud-enabled connectivity", "Touchscreen interface", "VeriFlex temperature control", "Security and audit trails"],
        specs: [
            { label: "Thermal System", value: "VeriFlex Blocks" },
            { label: "Reaction Volume", value: "10-100 μL" },
            { label: "Dynamic Range", value: "10 orders of magnitude" },
            { label: "Sensitivity", value: "Single copy detection" },
            { label: "Run Time", value: "~30 minutes (fast mode)" },
            { label: "Connectivity", value: "Wi-Fi, Ethernet, USB" }
        ],
        applications: "Perfect for CMV/BKV viral load monitoring, chimerism analysis, pharmacogenomics testing, and graft-versus-host disease biomarker detection."
    },
    adamii: {
        title: "ADAM II",
        image: "/pbi-web/image/ADAMII.png",
        description: "ADAM II is an image-based automated cell counter specifically optimized for CD34+ cell enumeration in stem cell grafts, ensuring accurate assessment of hematopoietic progenitor cells.",
        features: ["Image-based counting technology", "Automated cell counting", "CD34+ enumeration", "7-inch touchscreen", "Built-in printer"],
        specs: [
            { label: "Counting Time", value: "60 seconds" },
            { label: "Sample Volume", value: "20 μL" },
            { label: "Cell Concentration", value: "1x10⁴ - 5x10⁶ cells/mL" },
            { label: "Detection Method", value: "Image-based fluorescence" },
            { label: "Data Storage", value: "Up to 10,000 results" },
            { label: "Weight", value: "3.2 kg" }
        ],
        applications: "Essential for CD34+ stem cell enumeration in peripheral blood, bone marrow, and cord blood products for transplantation quality control."
    },
    labtype: {
        title: "LABType",
        image: "/pbi-web/image/labtype.png",
        description: "LABType offers comprehensive HLA typing solutions including Classic and CWD (Common and Well-Documented) alleles for accurate donor-recipient matching.",
        features: ["SSO (Sequence-Specific Oligonucleotide) technology", "High-resolution typing", "CWD allele coverage", "Automated data analysis", "FDA cleared"],
        specs: [
            { label: "Technology", value: "Reverse SSO" },
            { label: "Resolution", value: "Intermediate to high" },
            { label: "Loci Covered", value: "HLA-A, B, C, DR, DQ, DP" },
            { label: "Sample Type", value: "Genomic DNA" },
            { label: "Throughput", value: "96 samples/batch" },
            { label: "Analysis Time", value: "~3 hours" }
        ],
        applications: "Used for HLA typing in solid organ transplantation, bone marrow registry enrollment, and transfusion medicine."
    },
    labscreen: {
        title: "LABScreen",
        image: "/pbi-web/image/labscreen.png",
        description: "LABScreen provides comprehensive antibody detection assays including LSM (Lifecodes Single Antigen), SA1/SA2 (Single Antigen), and PRA1/PRA2 (Panel Reactive Antibody) panels.",
        features: ["Single antigen bead technology", "High sensitivity detection", "Comprehensive antigen coverage", "Quantitative results", "Automated interpretation"],
        specs: [
            { label: "Bead Technology", value: "Luminex xMAP" },
            { label: "Antigens per Bead", value: "1 specific antigen" },
            { label: "Sensitivity", value: "Average to High Resolution" },
            { label: "Specificity", value: "99.5%" },
            { label: "Sample Volume", value: "10 μL serum" },
            { label: "Results", value: "MFI values" }
        ],
        applications: "Critical for pre-transplant antibody screening, post-transplant monitoring, and identifying donor-specific antibodies (DSA)."
    },
    linkseqb27: {
        title: "LinkSēq™ HLA-B27 Typing Kit",
        image: "/pbi-web/image/linkseqkit.png",
        description: "The LinkSēq™ HLA-B27 Typing Kit provides rapid, accurate detection of HLA-B27 alleles associated with ankylosing spondylitis and other spondyloarthropathies.",
        features: ["Real-time PCR technology", "Rapid turnaround time", "No electrophoresis needed", "Closed-tube system", "Easy workflow"],
        specs: [
            { label: "Technology", value: "Real-time PCR" },
            { label: "Turnaround Time", value: "2 hours" },
            { label: "Sample Type", value: "Whole blood, DNA" },
            { label: "Detection", value: "HLA-B27 alleles" },
            { label: "Platform", value: "qPCR instruments" },
            { label: "Certification", value: "CE-IVD" }
        ],
        applications: "Diagnostic testing for HLA-B27 association with ankylosing spondylitis, reactive arthritis, and other autoimmune conditions."
    },
    linkseqabcd: {
        title: "LinkSēq™ HLA-ABCDRDQDP SABR Kit",
        image: "/pbi-web/image/linkseqabcd.png",
        description: "Comprehensive HLA typing kit covering Class I (A, B, C) and Class II (DR, DQ, DP) loci using Sequence-Based Typing (SBT) for high-resolution results.",
        features: ["11-locus coverage", "High-resolution typing", "Next-gen sequencing compatible", "Complete workflow solution", "Phred score quality"],
        specs: [
            { label: "Loci Included", value: "HLA-A, B, C, DRB1, DRB3/4/5, DQA1, DQB1, DPA1, DPB1" },
            { label: "Resolution", value: "2nd field (allele level)" },
            { label: "Method", value: "SBT/NGS" },
            { label: "Sample Input", value: "10-100 ng DNA" },
            { label: "Library Prep", value: "Included" },
            { label: "Analysis Software", value: "Included" }
        ],
        applications: "Comprehensive HLA typing for stem cell transplantation, solid organ transplantation, and research applications requiring high-resolution typing."
    }
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