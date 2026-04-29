const syringe3 = {
    id: 3,
    name: "Syringe 3",
    tagline: "-",
    image: "",
    alt: "Syringe 3",
    modalTarget: "#productModal",
    modalProduct: "item3",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof syringesRegistry === 'undefined') {
    var syringesRegistry = [];
}
syringesRegistry.push(syringe3);