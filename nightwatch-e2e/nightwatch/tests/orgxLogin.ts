import {NightwatchAPI, NightwatchTests} from 'nightwatch';

const home: NightwatchTests = {
  'Org-X Login Test': async(browser:NightwatchAPI ) => {
    browser.url('http://localhost:4200/login')
    .pause(5000)
    .assert.titleEquals('Org-X');
  },

  'Login Super Admin Test': async(browser: NightwatchAPI) => {
    browser
    .waitForElementVisible('id','emailAddress', 10000)
    .setValue('input[formcontrolname=email]','admin@nashtech.com')
      
    
    
    
    
    
    
    // .setValue('textarea[name=q]', 'nightwatchjs')
    //   .perform(function(this: NightwatchAPI) {
    //     const actions = this.actions({async: true});

    //     return actions.keyDown(this.Keys['ENTER']).keyUp(this.Keys['ENTER']);
    //   })
    //   .waitForElementVisible('#main')
    //   .assert.textContains('#main', 'Nightwatch.js');
  }
};

export default home;
