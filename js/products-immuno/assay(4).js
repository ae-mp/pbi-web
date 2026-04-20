const assay4 = {
    id: 4,
    name: "Assay 4",
    tagline: "-",
    image: "",
    alt: "Assay 4",
    modalTarget: "#productModal",
    modalProduct: "item4",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof assaysRegistry === 'undefined') {
    var assaysRegistry = [];
}
assaysRegistry.push(assay4);