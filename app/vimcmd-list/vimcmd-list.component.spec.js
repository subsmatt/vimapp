'use strict';

describe('vimcmdList', function(){
  // Load the module that contains the vimCmdList component before each test
  beforeEach(module('vimcmdList'));

  // Test the controller
  describe('VimCmdListController', function(){
    it('should create a vimcmds model with 3 vim commands', inject(function($componentController){
      var ctrl = $componentController('vimcmdList');

      expect(ctrl.vimcmds.length).toBe(3);
    }));
  });
});
