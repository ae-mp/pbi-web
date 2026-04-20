const syringe4 = {
    id: 4,
    name: "Syringe 4",
    tagline: "-",
    image: "",
    alt: "Syringe 4",
    modalTarget: "#productModal",
    modalProduct: "item4",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof syringesRegistry === 'undefined') {
    var syringesRegistry = [];
}
syringesRegistry.push(syringe4);