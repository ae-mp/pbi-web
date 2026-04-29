const machine2 = {
    id: 2,
    name: "LABScan 100",
    tagline: "Analyzer",
    image: "../image/lx200.png",
    alt: "labscan 100",
    modalTarget: "#productModal",
    modalProduct: "labscan100",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof machinesRegistry === 'undefined') {
    var machinesRegistry = [];
}
machinesRegistry.push(machine2);