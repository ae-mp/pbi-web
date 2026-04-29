const dispenser4 = {
    id: 4,
    name: "Dispenser 4",
    tagline: "-",
    image: "",
    alt: "Dispenser 4",
    modalTarget: "#productModal",
    modalProduct: "dispenser4",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof dispensersRegistry === 'undefined') {
    var dispensersRegistry = [];
}
dispensersRegistry.push(dispenser4);