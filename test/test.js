const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
 
async function example(){
 
       var searchString = "Automation testing with Selenium";
 
       //To wait for browser to build and launch properly
       let driver = await new Builder().forBrowser("chrome").build();
 
        //To fetch http://google.com from the browsernode test.jsnode test.js with our code.
        await driver.get("http://localhost:3000/");
            
        // Press search button 
        await driver.findElement(By.id("menu-list-2-menuitem-3")).sendKeys(Key.RETURN);
        



        //Verify the page title and print it
        var title = await driver.getTitle();
        console.log('Title is:',title);
  
        //It is always a safe practice to quit the browser after execution
       // await driver.quit();
 
}
 
example()