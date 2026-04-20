const syringesPageTemplate = `

    <!--Syringes Grid - Syringes will be injected here-->
    <section class="syringes-container py-5 bg-light">
        <div class="container">
            <div class="container text-center">
                <h2 class="our-syringes fw-bold mb-3">OUR SYRINGES</h2>
                <p class="lead mb-4 text-muted">State-of-the-art diagnostic equipment for your laboratory needs.</p> 
             </div>
            <div class="row" id="syringes-container">
                <!-- syringe cards will be automatically inserted here -->
            </div>
        </div>
    </section>
`;

document.addEventListener('DOMContentLoaded', function() {
    const syringesSection = document.getElementById('syringes');
    if (syringesSection) {
        syringesSection.innerHTML = syringesPageTemplate;
    }
});