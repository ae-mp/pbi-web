const reagent1 = {
    id: 1,
    name: "LABType",
    tagline: "Classic & CWD",
    image: "../image/labtype.png",
    alt: "labtype",
    modalTarget: "#productModal",
    modalProduct: "labtype",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof reagentsRegistry === 'undefined') {
    var reagentsRegistry = [];
}
reagentsRegistry.push(reagent1);