const syringe2 = {
    id: 2,
    name: "Syringe 2",
    tagline: "-",
    image: "",
    alt: "Syringe 2",
    modalTarget: "#productModal",
    modalProduct: "item2",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof syringesRegistry === 'undefined') {
    var syringesRegistry = [];
}
syringesRegistry.push(syringe2);