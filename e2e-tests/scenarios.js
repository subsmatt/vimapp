'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('Vim Commands App', function() {

  describe('vimcmdList', function(){
    beforeEach(function(){
      browser.get('index.html');
    });
    
    it('should filter the vimcmd list as a user types into the search box', function(){
      var vimcmdList = element.all(by.repeater('vimcmd in $ctrl.vimcmds'));
      var query = element(by.model('$ctrl.query'));

      expect(vimcmdList.count()).toBe(3);
    });

  });

});
