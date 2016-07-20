angular.module('mpex').directive('mpex', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/mpex/mpex.html',
    controllerAs: 'mpex',
    controller: function ($scope, $state, $reactive) {
      $reactive(this).attach($scope);

      this.helpers({
        isLoggedIn: () => {
          return Meteor.userId() !== null;
        },
        currentUser: () => {
          return Meteor.user();
        }
      });

      this.logout = () => {
        Accounts.logout();
        $state.go('login');
      }
      this.gotopupFile = () => {
        $state.go('topupfiles');
      }
      this.gousercreateFile = () => {
        $state.go('usercreationfiles');
      }
    }
  }
});
