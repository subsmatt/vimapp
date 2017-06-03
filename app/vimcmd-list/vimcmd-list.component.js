// Register vimCmdList component, along with its associated controller and template
angular.module('vimcmdList').
  component('vimcmdList', {
    templateUrl: 'vimcmd-list/vimcmd-list.template.html',
    controller: ['$http', function VimCmdListController($http){
      var self = this;
      self.orderProp = 'priority';
      $http.get('vimcmds/vimcmds.json').then(function(response){
        self.vimcmds = response.data;
      });
    }]    
});

