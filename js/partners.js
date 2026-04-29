 const partners = `
 
 <!-- HERO -->
    <section class="hero text-white d-flex align-items-center justify-content-center pt-5 fade-up" style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); min-height: 50vh;">
        <div class="container text-center py-5">
            <span class="badge bg-white text-primary mb-3 fs-6 text-uppercase">Who We Work With</span>
            <h1 class="display-5 fw-bold mb-3">Partnering for Excellence</h1>
            <p class="lead opacity-75 mb-0 px-md-5">We collaborate with industry leaders to deliver exceptional value and innovation to our customers worldwide.</p> 
        </div>
    </section>

<!-- Logo Container -->
    <section class="logo-container fade-up" style="background: #f0f6ff;">
      <div class="container-fluid">
        <div class="row py-5 align-items-center justify-content-center">

          <div class="col-lg-3 col-md-6 d-flex justify-content-center mb-4 mb-lg-0">
            <div class="logo-item text-center" style="width: 200px;">
              <a href="https://www.thermofisher.com/ph/en/home/brands/onelambda.html" target="_blank">
                <img class="object-fit-contain w-100" style="height: 100px; transition: all 1s ease;" src="../image/onelambda.png" alt="One Lambda Inc.">
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex justify-content-center mb-4 mb-lg-0">
            <div class="logo-item text-center" style="width: 200px;">
              <a href="https://www.thermofisher.com/ph/en/home.html" target="_blank">
                <img class="object-fit-contain w-100" style="height: 100px; transition: all 1s ease;" src="../image/thermofisher.png" alt="Thermo Fisher Scientific">
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex justify-content-center mb-4 mb-lg-0">
            <div class="logo-item text-center" style="width: 200px;">
              <a href="https://www.nanoentek.com/?lang=en" target="_blank">
                <img class="object-fit-contain w-100" style="height: 100px; transition: all 1s ease;" src="../image/nanoentek.png" alt="NanoEntek">
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex justify-content-center mb-4 mb-lg-0">
            <div class="logo-item text-center" style="width: 200px;">
              <img class="object-fit-contain w-100" style="height: 100px; transition: all 1s ease;" src="../image/altech.png" alt="ALTech Vialab Inc.">
            </div>
          </div>

        </div>
      </div>
    </section>

<!-- Body -->
    <!-- Tab Buttons-->
    <section class="bg-light py-4 fade-up">
      <h2 class="text-center mb-3">Our Trusted Partners</h2>
      <p class="text-center text-secondary mb-5">Our partners are trusted allies in delivering quality and innovation.</p>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6  d-flex justify-content center">
            <div class="btn partner-btn w-100 active" onclick="openTabPartner(event, 'onelambda')">One Lambda Inc.</div>
          </div>
          <div class="col-lg-3 col-md-6  d-flex justify-content center">
            <div class="btn partner-btn w-100" onclick="openTabPartner(event, 'thermofisher')">Thermo Fisher Scientific</div>
          </div> 
          <div class="col-lg-3 col-md-6  d-flex justify-content center">
            <div class="btn partner-btn w-100" onclick="openTabPartner(event, 'nanoentek')">NanoEntek</div>
          </div>
          <div class="col-lg-3 col-md-6  d-flex justify-content center">
            <div class="btn partner-btn w-100" onclick="openTabPartner(event, 'altech')">ALTech Vialab Inc.</div>
          </div>  
      </div>
    </section>

<!-- PARTNERS BANNER -->

    <section class="py-4 py-md-5 bg-light fade-up">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">

          <!-- Partner #1 -->
            <div class="d-block" id="onelambda" style="animation:fadeIn 1s ease;">
              <div class="card mb-5 border-0 rounded-4 overflow-hidden shadow-sm" style="background: linear-gradient(135deg, #fee2e2 0%, #ffedd5 100%);">
                <div class="row g-0 align-items-center p-3 p-md-4">

                  <!-- LEFT: Logo image -->
                  <div class="col-lg-6">
                    <div class="card border rounded-3 bg-white p-4 m-4 d-flex align-items-center justify-content-center text-center"
                        style="min-height: 260px; border-color: #c5d8f0 !important;">
                      <img src="../image/onelambda.png" alt="One Lambda Inc." style="max-height: 200px; object-fit: contain;"/>
                    </div>
                  </div>

                  <!-- RIGHT: Partner info -->
                  <div class="col-lg-6 ps-md-5 pt-4 pt-md-0">
                    <h2 class="fw-bold mb-3" style="color:#0a1f44; font-size:2rem;">One Lambda Inc.</h2>

                    <p class="text-muted mb-4" style="text-align: justify; font-size:.92rem; line-height:1.75;">
                      A biotechnology company that specializes in transplant diagnostics, specifically in human leukocyte antigen (HLA) typing and antibody detection, offers laboratories and transplant centers instruments to enhance donor-recipient matching and overall transplant results.
                    </p>
                    <a href="https://www.thermofisher.com/ph/en/home/brands/onelambda.html" target="_blank" class="btn btn-warning rounded-pill px-4 mt-3 text-white">
                      <i class="bi bi-info-circle-fill me-2"></i>Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

          <!-- Partner #2 -->
            <div class="d-none" id="thermofisher" style="animation:fadeIn 1s ease;">
              <div class="card mb-5 border-0 rounded-4 overflow-hidden shadow-sm" style="background: linear-gradient(135deg, #fee2e2 0%, #f1f5f9 100%);">
                <div class="row g-0 align-items-center p-3 p-md-4">

                  <!-- LEFT: Logo image -->
                  <div class="col-lg-6">
                    <div class="card border rounded-3 bg-white p-4 m-4 d-flex align-items-center justify-content-center text-center" style="min-height: 260px; border-color: #c5d8f0 !important;">
                      <img src="../image/thermofisher.png" alt="One Lambda Inc." style="max-height: 150px; max-width: 250px; object-fit: contain;"/>
                    </div>
                  </div>

                  <!-- RIGHT: Partner info -->
                  <div class="col-lg-6 ps-md-5 pt-4 pt-md-0">
                    <h2 class="fw-bold mb-3" style="color:#0a1f44; font-size:2rem;">Thermo Fisher Scientific</h2>

                    <p class="text-muted mb-4" style="text-align: justify; font-size:.92rem; line-height:1.75;">
                      A global leader in scientific services, offering a wide range of laboratory instruments, reagents, diagnostics, and software that support research, healthcare, and industrial applications, with a mission to enable a healthier, cleaner, and safer world.
                    </p>
                    <a href="https://www.thermofisher.com/ph/en/home.html" target="_blank" class="btn btn-danger rounded-pill px-4 mt-3 text-white">
                      <i class="bi bi-info-circle-fill me-2"></i>Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

          <!-- Partner #3 -->
            <div class="d-none" id="nanoentek" style="animation:fadeIn 1s ease;">
              <div class="card mb-5 border-0 rounded-4 overflow-hidden shadow-sm" style="background: linear-gradient(135deg, #dcfce7 0%, #f1f5f9 100%);">
                <div class="row g-0 align-items-center p-3 p-md-4">

                  <!-- LEFT: Logo image -->
                  <div class="col-lg-6">
                    <div class="card border rounded-3 bg-white p-4 m-4 d-flex align-items-center justify-content-center text-center"
                        style="min-height: 260px; border-color: #c5d8f0 !important;">
                      <img src="../image/nanoentek.png" alt="One Lambda Inc." style="max-height: 200px; object-fit: contain;"/>
                    </div>
                  </div>

                  <!-- RIGHT: Partner info -->
                  <div class="col-lg-6 ps-md-5 pt-4 pt-md-0">
                    <h2 class="fw-bold mb-3" style="color:#0a1f44; font-size:2rem;">NanoEntek</h2>

                    <p class="text-muted mb-4" style="text-align: justify; font-size:.92rem; line-height:1.75;">
                      a biotechnology company that develops compact and innovative diagnostic and analytical instruments, particularly for cell analysis and point-of-care testing, helping improve efficiency and accessibility in clinical and research laboratories.
                    </p>
                    <a href="https://www.nanoentek.com/?lang=en" target="_blank" class="btn btn-success rounded-pill px-4 mt-3 text-white">
                      <i class="bi bi-info-circle-fill me-2"></i>Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>  

          <!-- Partner #4 -->
            <div class="d-none" id="altech" style="animation:fadeIn 1s ease;"> 
              <div class="card mb-5 border-0 rounded-4 overflow-hidden shadow-sm" style="background: linear-gradient(135deg, #dcfce7 0%, #cbd5e1 50%, #f1f5f9 100%);">
                <div class="row g-0 align-items-center p-3 p-md-4">

                  <!-- LEFT: Logo image -->
                  <div class="col-lg-6">
                    <div class="card border rounded-3 bg-white p-4 m-4 d-flex align-items-center justify-content-center text-center"
                        style="min-height: 260px; border-color: #c5d8f0 !important;">
                      <img src="../image/altech.png" alt="One Lambda Inc." style="max-height: 200px; object-fit: contain;"/>
                    </div>
                  </div>

                  <!-- RIGHT: Partner info -->
                  <div class="col-lg-6 ps-md-5 pt-4 pt-md-0">
                    <h2 class="fw-bold mb-3" style="color:#0a1f44; font-size:2rem;">ALTech Vialab Inc.</h2>

                    <p class="text-muted text-align: justify mb-4" style="text-align: justify; font-size:.92rem; line-height:1.75;">
                      A biotechnology company that provides laboratory equipment, diagnostic products, and medical solutions to hospitals, clinical laboratories, and research facilities, supporting accurate testing and efficient laboratory operations through its range of products and services.
                    </p>
                    <a href="#" target="_blank" class="btn btn-success rounded-pill px-4 mt-3 text-white">
                      <i class="bi bi-info-circle-fill me-2"></i>Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>  

          </div>
        </div>
      </div>
    </section>

    <!-- Body -->
    <!-- Tab Buttons-->
    <section class="bg-light py-4 fade-up">
      <h2 class="text-center mb-3">Our Trusted Institutes</h2>
      <p class="text-center text-secondary mb-5">Institutions we trust for their expertise, integrity, and commitment to progress.</p>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6  d-flex justify-content center">
            <div class="btn institute-btn w-100 active" onclick="openTabInstitute(event, 'nkti')">NKTI</div>
          </div>
          <div class="col-lg-3 col-md-6  d-flex justify-content center">
            <div class="btn institute-btn w-100" onclick="openTabInstitute(event, 'slmcqc')">SLMC - QC</div>
          </div> 
          <div class="col-lg-3 col-md-6  d-flex justify-content center">
            <div class="btn institute-btn w-100" onclick="openTabInstitute(event, 'slmcgc')">SLMC - GC</div>
          </div>
          <div class="col-lg-3 col-md-6  d-flex justify-content center">
            <div class="btn institute-btn w-100" onclick="openTabInstitute(event, 'spmc')">SPMC </div>
          </div>  
      </div>
    </section>

<!-- INSTITUTES BANNERS    -->

    <section class="py-4 py-md-5 bg-light fade-up">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">

          <!-- Institute #1 -->
            <div class="d-block" id="nkti" style="animation:fadeIn 1s ease;">
              <div class="card mb-5 border-0 rounded-4 overflow-hidden shadow-sm" style="background: linear-gradient(135deg, #dbeafe 0%, #ffffff 100%);">
                <div class="row g-0 align-items-center p-3 p-md-4">

                  <!-- LEFT: Logo image -->
                  <div class="col-lg-6">
                    <div class="card border rounded-3 bg-white p-4 m-4 d-flex align-items-center justify-content-center text-center"
                        style="min-height: 260px; border-color: #c5d8f0 !important;">
                      <img src="../image/nkti.png" alt="nkti_logo" style="max-height: 200px; object-fit: contain;"/>
                    </div>
                    <div class="d-flex justify-content-center">
                      <a href="https://portal.nkti.org/#" target="_blank" class="btn btn-primary rounded-pill px-4 mt-3 mb-4 text-white d-flex justify-content-center">
                        <i class="bi bi-info-circle-fill me-2"></i>Learn More
                      </a>
                    </div>
                  </div>

                  <!-- RIGHT: Partner info -->
                  <div class="col-lg-6 ps-md-5 pt-4 pt-md-0">
                    <h2 class="fw-bold mb-3" style="color:#0a1f44; font-size:2rem;">National Kidney and Transplant Institute</h2>

                    <p class="text-muted mb-4" style="text-align: justify; font-size:.92rem; line-height:1.75;">
                      <i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum lobortis ante at ultricies. Maecenas ut tempus quam. Suspendisse consequat dui dictum efficitur placerat. Ut ipsum ante, ullamcorper ut purus ac, aliquam euismod eros. Donec nec tellus a quam sodales porttitor in a arcu. Mauris vel dui leo." </i>
                    </p>
                    <div class="d-flex align-items-center gap-3">
                      <img src="" alt="img" style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid #1565c0; object-fit: cover;">
                      <div>
                        <p class="fw-bold mb-0" style="color:#0a1f44;">Ms. Josephine Simangan, RMT</p>
                        <p class="text-muted small mb-0">Section Chief, Transplant Immunology Section </br> National Kidney and Transplant Institute</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <!-- Institute #2 -->
            <div class="d-none" id="slmcqc" style="animation:fadeIn 1s ease;">
              <div class="card mb-5 border-0 rounded-4 overflow-hidden shadow-sm" style="background: linear-gradient(135deg, #fee2e2 0%, #dbeafe 100%);">
                <div class="row g-0 align-items-center p-3 p-md-4">

                  <!-- LEFT: Logo image -->
                  <div class="col-lg-6">
                    <div class="card border rounded-3 bg-white p-4 m-4 d-flex align-items-center justify-content-center text-center" style="min-height: 260px; border-color: #c5d8f0 !important;">
                      <img src="../image/slmc.png" alt="slmc_logo" style="max-height: 150px; max-width: 250px; object-fit: contain;"/>
                    </div>
                    <div class="d-flex justify-content-center">
                      <a href="https://www.stlukes.com.ph/" target="_blank" class="btn btn-danger rounded-pill px-4 mt-3 text-white">
                        <i class="bi bi-info-circle-fill me-2"></i>Learn More
                      </a>
                    </div>
                  </div>

                  <!-- RIGHT: Partner info -->
                  <div class="col-lg-6 ps-md-5 pt-4 pt-md-0">
                    <h2 class="fw-bold mb-3" style="color:#0a1f44; font-size:2rem;">St. Luke's Medical Center - Quezon City</h2>

                    <p class="text-muted mb-4" style="text-align: justify; font-size:.92rem; line-height:1.75;">
                      <i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum lobortis ante at ultricies. Maecenas ut tempus quam. Suspendisse consequat dui dictum efficitur placerat. Ut ipsum ante, ullamcorper ut purus ac, aliquam euismod eros. Donec nec tellus a quam sodales porttitor in a arcu. Mauris vel dui leo." </i>
                    </p>
                    <div class="d-flex align-items-center gap-3">
                      <img src="" alt="img" style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid #b10404; object-fit: cover;">
                      <div>
                        <p class="fw-bold mb-0" style="color:#0a1f44;">Mr. Roiland Baybayon, RMT</p>
                        <p class="text-muted small mb-0">Section Manager, Cellular Immunology Section </br> St. Luke's Medical Center - Quezon City</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <!-- Institute #3 -->
            <div class="d-none" id="slmcgc" style="animation:fadeIn 1s ease;">
              <div class="card mb-5 border-0 rounded-4 overflow-hidden shadow-sm" style="background: linear-gradient(135deg, #dbeafe 0%, #fee2e2 100%);">
                <div class="row g-0 align-items-center p-3 p-md-4">

                  <!-- LEFT: Logo image -->
                  <div class="col-lg-6">
                    <div class="card border rounded-3 bg-white p-4 m-4 d-flex align-items-center justify-content-center text-center"
                        style="min-height: 260px; border-color: #c5d8f0 !important;">
                      <img src="../image/slmc.png" alt="One Lambda Inc." style="max-height: 150px; max-width: 250px; object-fit: contain;"/>
                    </div>
                    <div class="d-flex justify-content-center">
                      <a href="https://www.stlukes.com.ph/" target="_blank" class="btn btn-info rounded-pill px-4 mt-3 text-white">
                        <i class="bi bi-info-circle-fill me-2"></i>Learn More
                      </a>
                    </div>
                  </div>

                  <!-- RIGHT: Partner info -->
                  <div class="col-lg-6 ps-md-5 pt-4 pt-md-0">
                    <h2 class="fw-bold mb-3" style="color:#0a1f44; font-size:2rem;">St. Luke's Medical Center - Global City</h2>

                    <p class="text-muted mb-4" style="text-align: justify; font-size:.92rem; line-height:1.75;">
                      <i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum lobortis ante at ultricies. Maecenas ut tempus quam. Suspendisse consequat dui dictum efficitur placerat. Ut ipsum ante, ullamcorper ut purus ac, aliquam euismod eros. Donec nec tellus a quam sodales porttitor in a arcu. Mauris vel dui leo." </i>
                    </p>
                    <div class="d-flex align-items-center gap-3">
                      <img src="" alt="img" style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid #2ed2e7; object-fit: cover;">
                      <div>
                        <p class="fw-bold mb-0" style="color:#0a1f44;">Mr. Joshua Allen Aya-ay, RMT</p>
                        <p class="text-muted small mb-0">Section Manager, Cellular Immunology Section </br> St. Luke's Medical Center - Global City</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  

          <!-- Institute #4 -->
            <div class="d-none" id="spmc" style="animation:fadeIn 1s ease;"> 
              <div class="card mb-5 border-0 rounded-4 overflow-hidden shadow-sm" style="background: linear-gradient(135deg, #fef9c3 0%, #fee2e2 50%, #dcfce7 100%);">
                <div class="row g-0 align-items-center p-3 p-md-4">

                  <!-- LEFT: Logo image -->
                  <div class="col-lg-6">
                    <div class="card border rounded-3 bg-white p-4 m-4 d-flex align-items-center justify-content-center text-center"
                        style="min-height: 260px; border-color: #c5d8f0 !important;">
                      <img src="../image/spmc.png" alt="SPMC" style="max-height: 200px; object-fit: contain;"/>
                    </div>
                    <div class="d-flex justify-content-center">
                      <a href="https://spmc.doh.gov.ph/" target="_blank" class="btn btn-success rounded-pill px-4 mt-3 text-white">
                        <i class="bi bi-info-circle-fill me-2"></i>Learn More
                      </a>
                    </div>
                  </div>

                  <!-- RIGHT: Partner info -->
                  <div class="col-lg-6 ps-md-5 pt-4 pt-md-0">
                    <h2 class="fw-bold mb-3" style="color:#0a1f44; font-size:2rem;">Southern Philippines Medical Center</h2>

                    <p class="text-muted mb-4" style="text-align: justify; font-size:.92rem; line-height:1.75;">
                      <i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum lobortis ante at ultricies. Maecenas ut tempus quam. Suspendisse consequat dui dictum efficitur placerat. Ut ipsum ante, ullamcorper ut purus ac, aliquam euismod eros. Donec nec tellus a quam sodales porttitor in a arcu. Mauris vel dui leo." </i>
                    </p>
                    <div class="d-flex align-items-center gap-3">
                      <img src="" alt="img" style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid #036910; object-fit: cover;">
                      <div>
                        <p class="fw-bold mb-0" style="color:#0a1f44;">Ms. Maria Carmina Tan, RMT</p>
                        <p class="text-muted small mb-0">Section Head, Transplant Immunology Section </br> Southern Philippines Medical Center</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </section>



`;

document.getElementById("partners").innerHTML = partners;

 function openTabPartner(evt, tabName) {
  var tabContents = document.querySelectorAll('[id="onelambda"], [id="thermofisher"], [id="nanoentek"], [id="altech"]');
  tabContents.forEach(el => { el.classList.remove('d-block'); el.classList.add('d-none'); });

  // Only remove active from partner buttons
  document.querySelectorAll('.partner-btn').forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabName).classList.remove('d-none');
  document.getElementById(tabName).classList.add('d-block');
  evt.currentTarget.classList.add('active');
}

function openTabInstitute(evt, tabName) {
  var tabContents = document.querySelectorAll('[id="nkti"], [id="slmcqc"], [id="slmcgc"], [id="spmc"]');
  tabContents.forEach(el => { el.classList.remove('d-block'); el.classList.add('d-none'); });

  // Only remove active from institute buttons
  document.querySelectorAll('.institute-btn').forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabName).classList.remove('d-none');
  document.getElementById(tabName).classList.add('d-block');
  evt.currentTarget.classList.add('active');
}

function initScrollAnimations(selector = '.fade-up', threshold = 0.2) {
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