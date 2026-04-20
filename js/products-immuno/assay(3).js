const assay3 = {
    id: 3,
    name: "Assay 3",
    tagline: "-",
    image: "",
    alt: "Assay 3",
    modalTarget: "#productModal",
    modalProduct: "item3",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof assaysRegistry === 'undefined') {
    var assaysRegistry = [];
}
assaysRegistry.push(assay3);