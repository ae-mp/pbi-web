const dispensersPageTemplate = `

    <!--Dispensers Grid - Dispensers will be injected here-->
    <section class="dispensers-container py-5 bg-light">
        <div class="container">
            <div class="container text-center">
                <h2 class="our-dispensers fw-bold mb-3">OUR DISPENSERS</h2>
                <p class="lead mb-4 text-muted">State-of-the-art diagnostic equipment for your laboratory needs.</p> 
             </div>
            <div class="row" id="dispensers-container">
                <!-- dispenser cards will be automatically inserted here -->
            </div>
        </div>
    </section>
`;

document.addEventListener('DOMContentLoaded', function() {
    const dispensersSection = document.getElementById('dispensers');
    if (dispensersSection) {
        dispensersSection.innerHTML = dispensersPageTemplate;
    }
});