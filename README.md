# Protractor
In this project we are using Protractor with Cucumber and Page Objects and automating two scenarios

# Features
The test framework is developed in Protractor-Cucumber framework and supports Behavioral Driven Development approach.

# Getting Started
### Clone Repository

```
git clone https://github.com/poorvashah/llh.git   
cd protractor
```

### Install Dependencies
```
npm install --save -dev protractor
npm install --save -dev jasmine
npm install --save -dev chai
npm install --save-dev protractor-cucumber-framework
```

### Update and Start Webdriver Manager (in 1 terminal window)
```
webdriver-manager update
webdriver-manager start
```

### Run Protractor (in project terminal window)
```
protractor cucumberconf.js	
```
# Build Process

During the test execution, the framework will:

* fetch all the dependencies from package.json.

# Post Execution

After it finished the test execution, the results gets generated in <cucumber_report.html>

# Run command to see the report
```
node index.js
```
