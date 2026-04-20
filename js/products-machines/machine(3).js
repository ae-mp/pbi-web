const machine3 = {
    id: 3,
    name: "QuantStudio 6 Pro",
    tagline: "RT-PCR Analyzer",
    image: "../image/qs6pro.png",
    alt: "qs6pro_img",
    modalTarget: "#productModal",
    modalProduct: "qs6pro",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof machinesRegistry === 'undefined') {
    var machinesRegistry = [];
}
machinesRegistry.push(machine3);