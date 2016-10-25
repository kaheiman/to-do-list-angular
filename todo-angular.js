// Define the main app module
var todolistApp = angular.module('TodoListApp', ['ui.bootstrap']);

// Define the `TodoListController` controller
todolistApp.controller('TodoListController', function($scope) {
   $scope.filteredTodos = []
  ,$scope.currentPage = 1
  ,$scope.numPerPage = 3
  ,$scope.array1 = []
  ,$scope.maxSize = 5
  ,$scope.todolist = new TodoList();  // Create the model


  $scope.addNewTodoItem = function() {
    $scope.todolist.items.push(new TodoItem($scope.todolist.editedDesc, false));
    $scope.todolist.editedDesc='';  // Clear the input text field
  };

  $scope.deleteItem = function(pos) {
    $scope.todolist.items.splice(pos,1);
  }
  $scope.forward = function(index){
  	if( (index == 0) && ($scope.currentPage == 1) ){  	
  		console.log('this is the first element', index != 0);
  	} else{
  		var itemIndex =  ($scope.currentPage - 1)*3 + index; 
	  	var temp = $scope.todolist.items[itemIndex];
	  	var pre = $scope.todolist.items[itemIndex -1];
	  	$scope.todolist.items[itemIndex] = pre;
	  	$scope.todolist.items[itemIndex -1] = temp;
  		reArrange();  		
  	}
  }
  $scope.backward = function(index){
	var lastPage = Math.ceil($scope.todolist.items.length / $scope.numPerPage)
	var itemIndex =  ($scope.currentPage - 1)*3 + index; 

  	if($scope.currentPage == lastPage && itemIndex == ($scope.todolist.items.length -1 )){
	 	console.log('This is the last element');
	 } else{
	  	var temp = $scope.todolist.items[itemIndex];
	  	var next = $scope.todolist.items[itemIndex + 1];
	  	$scope.todolist.items[itemIndex] = next;
	  	$scope.todolist.items[itemIndex + 1] = temp;
	  	reArrange(); 	 	
	 }	
  }

  $scope.$watch('currentPage + numPerPage', function() {
  	reArrange();
  });  
  $scope.$watch('todolist.items.length', function(){
  	reArrange();
  });

  function reArrange(){
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;
    
    $scope.filteredTodos = $scope.todolist.items.slice(begin, end);
  }

});
