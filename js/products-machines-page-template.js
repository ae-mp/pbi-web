const machinesPageTemplate = `

    <!--Machines Grid - Machines will be injected here-->
    <section class="machines-container py-5 bg-light">
        <div class="container">
            <div class="container text-center">
                <h2 class="our-machines fw-bold mb-3">OUR MACHINES</h2>
                <p class="lead mb-4 text-muted">State-of-the-art diagnostic equipment for your laboratory needs.</p> 
             </div>
            <div class="row" id="machines-container">
                <!-- Machine cards will be automatically inserted here -->
            </div>
        </div>
    </section>
`;

document.addEventListener('DOMContentLoaded', function() {
    const machinesSection = document.getElementById('machines');
    if (machinesSection) {
        machinesSection.innerHTML = machinesPageTemplate;
    }
});