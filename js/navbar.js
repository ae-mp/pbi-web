
const navbar = `
<nav class="navbar navbar-expand-lg navbar-dark fixed-top m-3 border border-dark border-1 bg-light rounded-4"> 
  <div class="container">

    <a class="navbar-brand py-1" href="../index.html">
      <img src="../image/PBILOGOFULL.png" alt="PBI_LOGO" height="50">
    </a>

    <button class="navbar-toggler" style="border-color: rgba(10, 7, 7, 0.5) !important;
    background: linear-gradient(145deg, #1565c0 0%, #0d47a1 100%);" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNavbar">
      <ul class="navbar-nav ms-auto fw-semibold gap-3">
        <li class="nav-item"><a class="nav-link py-2 px-3" href="../index.html" style="color: #0d47a1;">Home</a></li>
        <li class="nav-item"><a class="nav-link py-2 px-3" href="../pages/about.html" style="color: #0d47a1;">About</a></li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle py-2 px-3" href="#" id="productsDropdown" role="button" aria-expanded="false" style="color: #0d47a1;">
            Products
          </a>
          <ul class="dropdown-menu dropdown-menu-dark " aria-labelledby="productsDropdown">
            <li><a class="dropdown-item" href="../pages/product1.html">Transplant Diagnostics</a></li>
            <li><a class="dropdown-item" href="../pages/product2.html">Immunodiagnostic Assays</a></li>
            <li><a class="dropdown-item" href="../pages/product3.html">Syringe and Dispensers</a></li>
          </ul>
        </li>
        
        <li class="nav-item"><a class="nav-link py-2 px-3" href="../pages/services.html" style="color: #0d47a1;">Services</a></li>
        <li class="nav-item"><a class="nav-link py-2 px-3" href="../pages/contact.html" style="color: #0d47a1;">Contact</a></li>
        <li class="nav-item"><a class="nav-link py-2 px-3" href="../pages/partners.html" style="color: #0d47a1;">Partners</a></li>
      </ul>
    </div>

  </div>
</nav>
`;

document.getElementById("navbar").innerHTML = navbar;