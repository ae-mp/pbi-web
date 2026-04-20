const assaysPageTemplate = `

    <!--Assays Grid - Assays will be injected here-->
    <section class="assays-container py-5 bg-light">
        <div class="container">
            <div class="container text-center">
                <h2 class="our-assays fw-bold mb-3">OUR ASSAYS</h2>
                <p class="lead mb-4 text-muted">State-of-the-art diagnostic equipment for your laboratory needs.</p> 
             </div>
            <div class="row" id="assays-container">
                <!-- assay cards will be automatically inserted here -->
            </div>
        </div>
    </section>
`;

document.addEventListener('DOMContentLoaded', function() {
    const assaysSection = document.getElementById('assays');
    if (assaysSection) {
        assaysSection.innerHTML = assaysPageTemplate;
    }
});
