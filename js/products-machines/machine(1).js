const machine1 = {
    id: 1,
    name: "LABScan 3D",
    tagline: "500 Analytes Analyzer",
    image: "../image/labscan 3d.png",
    alt: "labscan3d",
    modalTarget: "#productModal",
    modalProduct: "labscan3d",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof machinesRegistry === 'undefined') {
    var machinesRegistry = [];
}
machinesRegistry.push(machine1);