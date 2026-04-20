const dispenser3 = {
    id: 3,
    name: "Dispenser 3",
    tagline: "-",
    image: "",
    alt: "Dispenser 3",
    modalTarget: "#productModal",
    modalProduct: "dispenser3",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof dispensersRegistry === 'undefined') {
    var dispensersRegistry = [];
}
dispensersRegistry.push(dispenser3);