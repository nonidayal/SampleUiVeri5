
// var userName = element(by.css('.sapUshellShell .sapUShellShellHeader .sapUShellShellHeadUsrItmName'));
// var trackPurchaseOrder = element.all(by.css('.sapUshellShell .sapUshellTile .sapUshellTileInner')).get(0);

module.exports = createPageObjects({
  Shell: {
    arrangements: {
      iStartTheApp: function () {
        // app setup
      }
    },
    actions: {
      iClickTheAccessoriesProduct: function () {
        element.all(by.control({
          viewName: "sap.ui.demo.cart.view.Home",
          controlType: "sap.m.StandardListItem"
        })).get(0).click();
      },
      selectDVDAccessories: function(){
        element(by.control({
          viewName: "sap.ui.demo.cart.view.Category",
          controlType: "sap.m.ObjectListItem",
          bindingPath: {path: "/Products('HT-2001')"}
      })).click();
      }
      
    },
    assertions: {
      accessoriesCategoryShouldBeDisplayed: function () {
        expect(element.all(by.control({
          viewName: "sap.ui.demo.cart.view.Category",
          controlType: "sap.m.ObjectListItem"
      })).count()).toBeGreaterThan(0);
      },
      addDVDtoCart: function(){
        element(by.control({
          viewName: "sap.ui.demo.cart.view.Product",
          controlType: "sap.m.Button",
          properties: {text: "Add to Cart"}
        })).click();
      },
    checkCart: function(){
      element(by.control({
        viewName: "sap.ui.demo.cart.view.Product",
        controlType: "sap.m.ToggleButton",
        properties: {icon: "sap-icon://cart"}
      })).click();
    }
  }
}
});