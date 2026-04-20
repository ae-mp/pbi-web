const assay1 = {
    id: 1,
    name: "Assay 1",
    tagline: "-",
    image: "",
    alt: "Assay 1",
    modalTarget: "#productModal",
    modalProduct: "item1",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof assaysRegistry === 'undefined') {
    var assaysRegistry = [];
}
assaysRegistry.push(assay1);