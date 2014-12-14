var colorTimeApp = angular.module('colorTimeApp', []);

colorTimeApp.controller('colorTimeCtrl', function ($scope) {
	$scope.welecomeMessage = 'Welcome';
});

colorTimeApp.directive("displayCurrentTime", function(dateFilter) {
	return function(scope, element, attrs) {
		element.text(dateFilter(new Date(), 'h:mm:ss a'));
		function updateInOneSecond() {
			setTimeout(function() {
				element.text(dateFilter(new Date(), 'h:mm:ss a'));
				updateInOneSecond();
			}, 1000);
		}
		updateInOneSecond();
	}
});