const contact = `
 
    <!-- HERO -->
    <section class=" hero text-white d-flex align-items-center justify-content-center pt-5 fade-up" style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); min-height: 50vh;">
        <div class="container text-center py-5">
            <span class="badge bg-white text-primary mb-3 fs-6 text-uppercase">Get In Touch</span>
            <h1 class="display-5 fw-bold mb-3">Connect With Our Team</h1>
            <p class="lead opacity-75 mb-0 px-md-5">Ready to enhance your diagnostic capabilities? Reach out to our team of experts for inquiries about our transplant diagnostics solutions and services.</p> 
        </div>
    </section>

    <!-- BODY -->

    <section class="py-5 bg-light">
        <div class="container">
            <div class="row g-4 justify-content-center">
            
                <div class="col-lg-3 col-md-6 fade-up">
                    <div class="card h-100 border rounded-4 text-center p-4 bg-white d-flex flex-column" style="min-height: 420px; border-top: 4px solid #3b82f6 !important;">
                        <div class="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle" style="width: 70px; height: 70px; background: rgba(59,130,246,0.1);">
                            <i class="bi bi-tools fs-3 text-primary"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Technical Support</h5>
                        <p class="text-muted flex-grow-1">Need help with our diagnostic equipment or software? Our technical team is ready to assist with troubleshooting and maintenance.</p>
                        <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=support@primerabiosolutions.com&su=Technical%20Support: " target="_blank" class="btn btn-primary rounded-pill px-4 mt-3">
                            <i class="bi bi-telephone-forward-fill me-2"></i>Contact Support
                        </a>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 fade-up">
                    <div class="card h-100 border rounded-4 text-center p-4 bg-white d-flex flex-column" style="min-height: 420px; border-top: 4px solid #198754 !important;">
                        <div class="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle" style="width: 70px; height: 70px; background: rgba(25,135,84,0.1);">
                            <i class="bi bi-briefcase-fill fs-3 text-success"></i>
                        </div>
                        <h5 class="fw-bold mb-3">Sales Inquiry</h5>
                        <p class="text-muted flex-grow-1">Interested in our transplant diagnostics solutions? Connect with our sales team for quotes, demos, and product information.</p>
                        <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=sales@primerabiosolutions.com&su=Sales%20Inquiry: " target="_blank" class="btn btn-success rounded-pill px-4 mt-3">
                             <i class="bi bi-telephone-forward-fill me-2"></i>Contact Sales
                        </a>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 fade-up">
                    <div class="card h-100 border rounded-4 text-center p-4 bg-white d-flex flex-column" style="min-height: 420px; border-top: 4px solid #fd7e14 !important;">
                        <div class="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle" style="width: 70px; height: 70px; background: rgba(253,126,20,0.1);">
                            <i class="bi bi-info-circle-fill fs-3 text-warning"></i>
                        </div>
                        <h5 class="fw-bold mb-3">General Inquiry    </h5>
                        <p class="text-muted flex-grow-1">Have general questions about Primera Biosolutions? Reach out for partnership opportunities, media inquiries, or general questions.</p>
                        <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=pbi@primerabiosolutions.com&su=General%20Inquiry: " target="_blank" class="btn btn-warning rounded-pill px-4 mt-3 text-white">
                             <i class="bi bi-telephone-forward-fill me-2"></i>Contact Us
                        </a>
                    </div>
                </div>
            </div>

            <div class="container my-5 rounded-4 text-center bg-white fade-up" style="max-width: 800px;padding: 40px; box-shadow: 0 5px 20px rgba(0,0,0,0.08);">
                <h3>Prefer to Call?</h3>
                <p class="m-3"> Our office is available Monday to Friday, 7:30 AM to 4:30 PM PHT.</p>
                <p class="m-3"><strong>(+632) 8772 1351</strong></p>
            </div>
        </div>
    </section>
`;

document.getElementById("contact").innerHTML = contact;

function initScrollAnimations(selector = '.fade-up', threshold = 0.1) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold });

  document.querySelectorAll(selector).forEach(el => observer.observe(el));
}

// Usage
initScrollAnimations();