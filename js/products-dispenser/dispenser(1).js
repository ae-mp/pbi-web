const dispenser1 = {
    id: 1,
    name: "Dispenser 1",
    tagline: "-",
    image: "",
    alt: "Dispenser 1",
    modalTarget: "#productModal",
    modalProduct: "dispenser1",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof dispensersRegistry === 'undefined') {
    var dispensersRegistry = [];
}
dispensersRegistry.push(dispenser1);