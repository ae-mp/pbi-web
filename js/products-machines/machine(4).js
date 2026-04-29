const machine4 = {
    id: 4,
    name: "ADAM II ",
    tagline: "Image Based Cell Counter",
    image: "../image/adamii.png",
    alt: "adamii_img",
    modalTarget: "#productModal",
    modalProduct: "adamii",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof machinesRegistry === 'undefined') {
    var machinesRegistry = [];
}
machinesRegistry.push(machine4);