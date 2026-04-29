const reagentsPageTemplate = `

    <!--Reagents Grid - Reagents will be injected here-->
    <section class="reagents-container py-5 bg-light">
        <div class="container">
            <div class="container text-center">
                <h2 class="our-reagents fw-bold mb-3">OUR REAGENTS</h2>
                <p class="lead mb-4 text-muted">High-quality reagents for accurate diagnostic results.</p> 
            </div>
            <div class="row" id="reagents-container">
                <!-- Reagent cards will be automatically inserted here -->
            </div>
        </div>
    </section>
`;

document.addEventListener('DOMContentLoaded', function() {
    const reagentsSection = document.getElementById('reagents');
    if (reagentsSection) {
        reagentsSection.innerHTML = reagentsPageTemplate;
    }
});