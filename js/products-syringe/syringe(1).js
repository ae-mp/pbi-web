const syringe1 = {
    id: 1,
    name: "Syringe 1",
    tagline: "-",
    image: "",
    alt: "Syringe 1",
    modalTarget: "#productModal",
    modalProduct: "item1",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof syringesRegistry === 'undefined') {
    var syringesRegistry = [];
}
syringesRegistry.push(syringe1);