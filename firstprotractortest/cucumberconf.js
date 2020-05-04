exports.config = {
    
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // set to "custom" instead of cucumber.
    framework: 'custom',
   
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
   
    // require feature files
    specs: [
      './adddeleteuser.feature' // accepts a glob
    ],
   
    cucumberOpts: {
      format: 'json:results.json',
      // require step definitions
      require: [
        './stepdefn1.js', // accepts a glob
        './env.js'
      ]
    }
  };
