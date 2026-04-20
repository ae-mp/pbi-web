const assay2 = {
    id: 2,
    name: "Assay 2",
    tagline: "-",
    image: "",
    alt: "Assay 2",
    modalTarget: "#productModal",
    modalProduct: "item2",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof assaysRegistry === 'undefined') {
    var assaysRegistry = [];
}
assaysRegistry.push(assay2);