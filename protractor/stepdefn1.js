
const { Before, Given, When, Then } = require('cucumber')

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;


var AddUserSteps = function() {

  var adduserpage = require("./pages/pageobject.js");

  this.World = function MyWorld() {
    this.page = new adduserpage();
  };

  this.Given('User is on way2automation page', function (callback) {
    this.page.get();
    callback();
  });

  this.When('user clicks on add buton and enters $firstnametest $lastname $username $password $value $role $email $mobilephone', function (firstnametest, lastname, username, password, value, role, email, callback) {
    
    this.page.adduser();
    this.page.setfirstname(firstnametest);
    this.page.setlastname(lastname);
    this.page.setusername(username);
    this.page.setpassword(password);
    this.page.selectcustomer(value);
    this.page.selectrollid(role);
    this.page.enteremail(email);
    this.page.entermobilephone("123456789");
    this.page.save();

  });

  this.Then('user clicks on Save button', function (callback) {
    console.log("user will click on save button");
    this.page.verifyusername();
    callback();
  }); 

  this.Given('user searches $tom and Tom is displayed', function (user, callback) {
    this.page.search();
    callback();
  });

  this.When('user clciks on delete icon', function (callback) {
    this.page.deleteicon();
    callback();
  });

  this.Then('tom is deleted successfully', function (callback) {
    console.log("user deleted successfully");
    callback();
  })
};

module.exports = AddUserSteps;
