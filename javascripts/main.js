var colorTimeApp = angular.module('colorTimeApp', []);

function findCurrentColorHex() {
	var currentDate = new Date(),
		currentHour = currentDate.getHours(),
		currentMinute = currentDate.getMinutes(),
		currentSecond = currentDate.getSeconds();
	currentHour = ((currentHour + 11) % 12 + 1);
	if (currentHour < 10) {
		currentHour = "0" + currentHour;
	};
	if (currentMinute < 10) {
		currentMinute = "0" + currentMinute;
	};
	if (currentSecond < 10) {
		currentSecond = "0" + currentSecond;
	};
	return '#' + currentHour + currentMinute + currentSecond;
}

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

colorTimeApp.directive("displayCurrentColor", function(dateFilter) {
	return function(scope, element, attrs) {
		element.text(findCurrentColorHex());
		function updateInOneSecond() {
			setTimeout(function() {
				element.text(findCurrentColorHex());
				updateInOneSecond();
			}, 1000);
		}
		updateInOneSecond();
	}
});