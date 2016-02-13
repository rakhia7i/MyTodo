var todoModule = angular.module("todoApp", []);
todoModule.controller("todoController", todoFn);

function todoFn($scope){
     $scope.arrItems = [];
     $scope.setToDelete = [];

    $scope.addItemFn = function (){
       /* this code is not longer required as  track by is taking care of duplicates
       if($scope.arrItems.indexOf($scope.taskItem) > -1) {
            alert("This task already exists. Please add another task.");
             $scope.taskItem = '';
           return;
       }
       */
        $scope.arrItems.push($scope.taskItem);
        $scope.taskItem = '';
        $scope.setToDelete.push(false);
      }
   
   
   $scope.deleteItemFn = function(index){
      $scope.arrItems.splice(index,1);
      $scope.setToDelete.splice(index,1);
   }
   
   
   $scope.deleteAllItems = function() {
       $scope.arrItems = [];
       $scope.setToDelete = [];
   }
   
   
   $scope.setItemToDelete = function(index){
       if( !$scope.setToDelete[index])
        $scope.setToDelete[index] = true;
       else
        $scope.setToDelete[index] = false;
     }
   
   $scope.deleteSelectedItems = function(){
       var newArr = [];
       var newArrDel = [];
       for(var i=0; i<=$scope.arrItems.length; i++) {
          if($scope.setToDelete[i] === false){
                newArr.push($scope.arrItems[i]);
                newArrDel.push(false);
          }
       }
       $scope.arrItems = newArr;
       $scope.setToDelete = newArrDel;
   }
   
}