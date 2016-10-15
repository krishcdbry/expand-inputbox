(function (ng) {
	'use strict'


	/**
	 * @ngdoc module
	 * @name expandInputApp
	 * @author krishcdbry | krishcdbry@gmail.com
	 * @description
	 * Parent app which includes modules and workout proper functionality for expandInputApp
	 */
	var app = angular.module('expandInputApp', []);

	/**
	 * @ngdoc Controller
	 * @name expandInputController
	 * @author krishcdbry | krishcdbry@gmail.com
	 * @format Factory method
	 * @dependencyInjectionFormat Inline array method
	 * @description
	 * Parent controller takes care of expand input functionality
	 */
	app.controller('expandInputController', ['$scope', '$element', function ($scope, $element) {


		/**
		 * @doc method
		 * @name submit
		 * @methodOf expandInputController
		 * @description Which takes the final input and does the further operation
		 */
		$scope.submit = function () {
			if ($scope.expandInputVal) {
				$scope.finalOutput = $scope.expandInputVal.replace(/\n/g, "");   // This is your final text
			}
			$scope.expandInputVal = null;
		};

		/**
		 * @doc method
		 * @name onTyping
		 * @methodOf expandInputController
		 * @description Which tracks the input entered by the user and expands the textarea accordingly and
		 *             1. To get a new line user can got with shift+enter.
		 *             2. To submit press enter
		 */
		$scope.onTyping = function (eve) {
			var $this = eve.currentTarget;
			$($this).css({"overflow": "hidden"});
			$($this).css({"height": "33px"});
			$($this).css({"height": ($($this).prop('scrollHeight') > 33) ? $($this).prop('scrollHeight') + 'px' : '33px'});
			if (eve.keyCode === 13 && !eve.shiftKey) {
				$scope.submit();
				$($this).css({"height": "33px"});
			}
		};

		$($element.find('textarea')).css({"height": "33px"});
	}])
}(angular));
