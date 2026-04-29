document.write(`
<div id="splash-screen" class="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center" style="z-index:99999; background:linear-gradient(145deg,#1565c0,#0d47a1); transition:opacity 0.8s ease;">
    <div class="position-absolute rounded-circle" style="width:300px; height:300px; top:-80px; right:-80px; background:rgba(255,255,255,0.04);"></div>
    <div class="position-absolute rounded-circle" style="width:200px; height:200px; bottom:-60px; left:-60px; background:rgba(255,255,255,0.04);"></div>
    <div class="d-flex flex-column align-items-center gap-3" style="animation:splashFadeUp 1s ease forwards; opacity:0;">
        <img src="../image/PBIDNA.ico" alt="#" class="team-img mx-auto mb-0 object-fit-cover" style="width: 120px; height: auto;">
        <p class="fw-bold text-white text-center mb-0" style="font-family:Georgia,serif; font-size:22px; letter-spacing:1px;">Primera Biosolutions</p>
        <p class="text-white-50 text-uppercase text-center mb-0 small" style="letter-spacing:3px;">Incorporated</p>
        <p class="text-white-50 text-center fst-italic mb-0 small">Solutions for your diagnostic needs</p>
    </div>
    <div class="mt-4 overflow-hidden rounded-pill" style="width:160px; height:3px; background:rgba(255,255,255,0.15); animation:splashFadeUp 1s ease 0.4s forwards; opacity:0;">
        <div class="rounded-pill" style="height:100%; width:0%; background:rgba(255,255,255,0.8); animation:splashLoad 2.5s ease 0.8s forwards;"></div>
    </div>
</div>
`);

setTimeout(function() {
    var splash = document.getElementById('splash-screen');
    if (splash) {
        splash.style.opacity = '0';
        splash.style.pointerEvents = 'none';
        setTimeout(function() { splash.style.display = 'none'; }, 800);
    }
}, 3000);