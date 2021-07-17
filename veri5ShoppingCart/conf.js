exports.config = {
    profile: 'integration',
    baseUrl: 'https://webidetesting0884713-teaa8687947c1.dispatcher.eu2.hana.ondemand.com/webapp/index.html?hc_orionpath=%2FDI_webide_di_workspace1n4e1vvdii6mj2sd%2FShopping_Cart&neo-di-affinity=BIGipServerdisapwebide.eu2.hana.ondemand.com+%21%2Bomexb1x1VlW14eJkgGcuDQcAbtZR5%2FmwvDYw1bcq2so7udMfgIZml3UHnAxXXdAJQkHtOXqRKIMhYE%3D&sap-ui-appCacheBuster=..%2F&sap-ui-xx-componentPreload=off',
    auth: {
        // form based
        'sapcloud-form': {
            user: 'harshvworks@gmail.com',
            pass: 'Saphana2@'
        }
      },
      browsers: [{
        // here you define the runtime according UIVeri5 naming scheme
        browserName: "chrome",
        platformName: "windows"
      }],
      timeouts: {
        getPageTimeout: '10000',
        allScriptsTimeout: '11000',
        defaultTimeoutInterval: '30000'
      },
      specs: [
        // './*.spec.js',
        // '*spec1.spec*'
        './welcome.spec.js'
      ]
}