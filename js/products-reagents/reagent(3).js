const reagent3 = {
    id: 3,
    name: "LinkSēq™ HLA-B27 Kit",
    tagline: "",
    image: "../image/linkseqkit.png",
    alt: "labscreen",
    modalTarget: "#productModal",
    modalProduct: "linkseqb27",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof reagentsRegistry === 'undefined') {
    var reagentsRegistry = [];
}
reagentsRegistry.push(reagent3);