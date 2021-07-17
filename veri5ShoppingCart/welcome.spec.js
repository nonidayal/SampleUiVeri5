var onProductPage = require('./pages/Shell.view');
var request = require('request');
describe("welcome", function () {
	"use strict";

    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });


    var welcomeView = "sap.ui.demo.cart.view.Welcome";

    //   it('Should make api call and verify response', function() {
        debugger;
        // execute the request without being interested in the success response
        /* var res = request.get('https://services.odata.org/V2/Northwind/Northwind.svc/Products(1)').do();
        debugger;
        expect(res).toHaveHTTPHeader('Content-Type', 'application/atom+xml');
        expect(res).body((body) => {
            debugger;
            body.should.have.property('ProductName', 'Chai');
        });
        expect(res).catch(response => {
            debugger;
            expect(response.status).toBe(401);
            expect(response.body).toMatch(/access denied/);
        });  */
        it('should return 200 response code', function (done) {
            request.get('https://services.odata.org/V2/Northwind/Northwind.svc/Products(1)', function (error, response) {
                debugger;
                expect(response.statusCode).toBe(200);
                done();
            });
        
    

        // execute the request and handle the response
        /* request.get('https://secret-ocean-49799.herokuapp.com/https://services.odata.org/V2/Northwind/Northwind.svc/Products?$format=json').do().then(function (res){
            debugger;  
        expect(res.status).toBe(200);*/
        // }); 
      }); 




     it("should load the app", function() {
        expect(browser.getTitle()).toBe("Shopping Cart");
    });

    it("check Promoted items", function(){
        element(by.control({
            id: "promotedRow",
            viewName: welcomeView,
            aggregationLengthEquals: {name: "content", length: 2}
        }));
        element(by.control({
            viewName: welcomeView,
            controlType: "sap.m.Button",
            properties: { icon : "sap-icon://customer"}
        }));
    });

    it("Should press the product link and navigate to product view", function(){
        element(by.control({
            viewName: welcomeView,
            controlType: "sap.m.ObjectIdentifier",
            bindingPath: {path: "/Promoted/0", modelName: "view"}
        })).click();
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Product"
        }));
        element(by.control({
            id: "productList",
            viewName: "sap.ui.demo.cart.view.Category",
            aggregationFilled: {name: "items"}
        }));
        expect(element.all(by.control({
            viewName: "sap.ui.demo.cart.view.Category",
            controlType: "sap.m.ObjectListItem"
        })).count()).toBeGreaterThan(0);
    });
    it("Navigate back to welocm page", function(){
        element(by.control({
            id: /page-navButton/,
            controlType: "sap.m.Button",
            viewName: "sap.ui.demo.cart.view.Category"
        })).click();
        element(by.control({
            id:/homeView--categoryList/,
            viewName: welcomeView
        }));
    });
    it('select accessories product', function () {
        When.onTheShellPage.iClickTheAccessoriesProduct();
        Then.onTheShellPage.accessoriesCategoryShouldBeDisplayed();
        /* element.all(by.control({
            viewName: "sap.ui.demo.cart.view.Home",
            controlType: "sap.m.StandardListItem"
          })).get(0).click();
        expect(element.all(by.control({
            viewName: "sap.ui.demo.cart.view.Category",
            controlType: "sap.m.ObjectListItem"
        })).count()).toBeGreaterThan(0); */
      });
      it('Add DVD Accessories to Cart', function () {
        When.onTheShellPage.selectDVDAccessories();
        Then.onTheShellPage.addDVDtoCart();
        Then.onTheShellPage.checkCart();
      });
      it('Check product and proceed', function () {
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Cart",
            controlType: "sap.m.ObjectListItem",
            bindingPath: {path: "/cartEntries/HT-2001"}
        }));
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Cart",
            controlType: "sap.m.Button",
            properties: {text: "Proceed"}
        })).click();
      });
      it('Checkout', function () {
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Checkout",
            controlType: "sap.m.Button",
            properties: {text: "Step 2"}
        })).click();
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Checkout",
            id: "payViaCC"
        })).click();
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Checkout",
            controlType: "sap.m.Button",
            properties: {text: "Step 3"}
        })).click();
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Checkout",
            id: "creditCardHolderName"
        })).sendKeys("Harshit V");
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Checkout",
            id: "creditCardNumber"
        })).sendKeys("1234567890123456");
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Checkout",
            id: "creditCardSecurityNumber"
        })).sendKeys("123");
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Checkout",
            id: "creditCardExpirationDate"
        })).sendKeys("01/2021");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Checkout",
            controlType: "sap.m.Button",
            properties: {text: "Step 4"}
        })).click();
        
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Checkout",
            controlType: "sap.m.Input",
            id: "invoiceAddressAddress"
        })).sendKeys("bangalore");
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Checkout",
            controlType: "sap.m.Input",
            id: "invoiceAddressCity"
        })).sendKeys("Bengalore");
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Checkout",
            controlType: "sap.m.Input",
            id: "invoiceAddressZip"
        })).sendKeys("560001");
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Checkout",
            controlType: "sap.m.Input",
            id: "invoiceAddressCountry"
        })).sendKeys("India");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Checkout",
            controlType: "sap.m.Button",
            properties: {text: "Step 5"}
        })).click();
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Checkout",
            controlType: "sap.m.Button",
            properties: {text: "Order Summary"}
        })).click();
        element(by.control({
            viewName: "sap.ui.demo.cart.view.Checkout",
            controlType: "sap.m.Button",
            properties: {text: "Submit"}
        })).click();
        element(by.control({
            controlType: "sap.m.Button",
            properties: {text: "Yes"}
        })).click();
    });
    it("confirm order", function(){      
        element(by.control({
            viewName: "sap.ui.demo.cart.view.OrderCompleted"
        })).isPresent().then(function (isPresent) {
            // should not get here
            expect(true).toBe(true);
        }, function (oError) {
            expect(oError).toMatch('Polling stopped because the timeout of 200 milliseconds has been reached ' +
                'but there is still pending asynchronous work.');
        });
    }) 
});