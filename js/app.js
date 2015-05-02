var journey = angular.module('journey', ['contenteditable','ngSanitize','ngStorage'])

journey.controller('mainCtrl', function($scope,$localStorage) {
    $scope.post_title = "Hello!"
    $scope.txt="Type some stuff out?"
    //Init localStorage
    $scope.$storage = $localStorage.$default({
      posts: [],
      posts_n: 0
    });

    $scope.submitPost = function () {
      sub_post = {id: $scope.posts_n, title: $scope.post_title, date: new Date().toDateString(), txt:$scope.txt}
      $scope.post_title = "Thank you!"
      $scope.$storage.posts_n = $scope.$storage.posts_n+1;
      $scope.txt = "";
      $scope.$storage.posts.push(sub_post)
      
    }

    $scope.deletePost = function(id) {
      var n = -1
      for (var i = $scope.$storage.posts.length - 1; i >= 0; i--) {
        if($scope.$storage.posts[i].id == id){
          n = i
          break
        }
      }
      if (n != -1){
        $scope.$storage.posts.splice(n,1)
      }
      //save()
    }

    function save () {
     localStorage.setItem("posts_n", $scope.posts_n)
     localStorage.setItem("posts", JSON.stringify($scope.posts))
    }
})