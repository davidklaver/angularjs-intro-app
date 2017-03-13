(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
 		$scope.tasks = [
 			{
 				text: "Take out the trash", 
 				completed: false
 			},
 				{
 				text: "Walk the dog", 
 				completed: false
 			},
 				{
 				text: "Sweep the floors", 
 				completed: false
 			}
 		];
 		window.$scope = $scope;

 		$scope.addTask = function(newTask) {
 			// for this if statement, since empty strings are falsey in Javascript (not in ruby, though!), instead of saying if (newTask !== ""), I can say:
 			if(newTask) {
 				$scope.tasks.push({text: newTask, completed: false});
 				$scope.veryNewTask = "";
 			}
 		}
 		$scope.toggleCompleted = function(task) {
 			task.completed = !task.completed;
 		};

 		$scope.hideMe = function(i) {
 			$scope.tasks.splice(i, 1);
 		};

 		$scope.incompleteCount = 0;

 		for (var i = 0; i < $scope.tasks.length; i++) {
 			if (!$scope.tasks[i].completed) {
 				$scope.incompleteCount++;
 			}
 		}
 		console.log($scope.incompleteCount);
  });
}());