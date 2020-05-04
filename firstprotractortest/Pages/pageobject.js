var addUserPage = function () {
    let EC = ExpectedConditions;
    this.get = function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
    };

    this.adduser = function () {
        var userName = element(by.css('button.btn.btn-link.pull-right'));
        browser.wait(EC.visibilityOf(userName), 10 * 1000);
        userName.click();

    }

    this.setfirstname = function (value) {
        var fName = element(by.css("input[name='FirstName']"));
        browser.wait(EC.visibilityOf(fName), 10 * 1000);
        fName.sendKeys("testuser");

    }

    this.setlastname = function (value) {
        var lName = element(by.css("input[name='LastName']"));
        browser.wait(EC.visibilityOf(lName), 10 * 1000);
        lName.sendKeys("test");

    }


    this.setusername = function (value) {
        var user = element(by.css("input[name='UserName']"));
        browser.wait(EC.visibilityOf(user), 10 * 1000);
        user.sendKeys("test");

    }

    this.setpassword = function (value) {
        var pass = element(by.css("input[name='Password']"));
        browser.wait(EC.visibilityOf(pass), 10 * 1000);
        pass.sendKeys("test");

    }


    this.selectcustomer = function (value) {
        var customer = element(by.css("input[value= '16']"));
        browser.wait(EC.visibilityOf(customer), 10 * 1000);
        customer.click();

    }

    this.selectrollid = function (value) {
        var id = element(by.css("Select[name='RoleId']"));
        browser.wait(EC.visibilityOf(id), 10 * 1000);
        id.click();
        element(by.cssContainingText('option', "Customer")).click();
    }


    this.enteremail = function (value) {
        var email = element(by.css("input[name='Email']"));
        browser.wait(EC.visibilityOf(email), 10 * 1000);
        email.sendKeys("test@test.com");

    }

    this.entermobilephone = function (value) {
        var phone = element(by.css("input[name='Mobilephone']"));
        browser.wait(EC.visibilityOf(phone), 10 * 1000);
        phone.click();
        phone.sendKeys('123456789');

    }

    this.save = function () {
        console.log("Inside save");
        var saveButton = element(by.css('.modal-footer > button.btn-success'));
        browser.wait(EC.elementToBeClickable(saveButton), 10 * 1000);
        console.log("Inside save 11" + saveButton);
    }

    this.verifyusername = function () {
        var heading = element(by.css('.header-content.ng-scope.ng-binding'));
        browser.wait(EC.visibilityOf(heading), 10 * 1000);
        console.log("I am here");
    }

    this.search = function () {
        var search = element(by.css('input.pull-right.ng-pristine.ng-valid'));
        browser.wait(EC.visibilityOf(search), 10 * 1000);
        search.sendKeys("tom");
    }

    this.deleteicon = function () {
        var delIcon = element(by.css(".icon.icon-remove"));
        var alertIcon = element(by.css(".btn.ng-scope.ng-binding.btn-primary"));
        delIcon.click();
        alertIcon.click();
    }

    this.alertbox = function () {
        browser.switchTo().alert().accept();

    }
};

module.exports = addUserPage;