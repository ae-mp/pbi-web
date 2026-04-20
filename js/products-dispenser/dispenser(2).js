const dispenser2 = {
    id: 2,
    name: "Dispenser 2",
    tagline: "-",
    image: "",
    alt: "Dispenser 2",
    modalTarget: "#productModal",
    modalProduct: "dispenser2",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof dispensersRegistry === 'undefined') {
    var dispensersRegistry = [];
}
dispensersRegistry.push(dispenser2);