const reagent2 = {
    id: 2,
    name: "LABScreen",
    tagline: "LSM, SA1, SA2, PRA1 & PRA2",
    image: "../image/labscreen.png",
    alt: "labscreen",
    modalTarget: "#productModal",
    modalProduct: "labscreen",
    buttonText: "View Details",
    buttonClass: "btn btn-view"
};

if (typeof reagentsRegistry === 'undefined') {
    var reagentsRegistry = [];
}
reagentsRegistry.push(reagent2);