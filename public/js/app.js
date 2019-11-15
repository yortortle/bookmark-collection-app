const app = angular.module("BookApp", []);

app.controller("MainController", ["$http", function($http){
  this.test="test";

  const controller = this;


  this.getBookmarks = function(){
      $http({
          method:'GET',
          url: '/bookmarks/'
      }).then(function(response){
          console.log(response);
          controller.bookmark = response.data;
          console.log(controller.bookmarkArray);
      }, function(){
          console.log('error');
      });
  };

  this.getBookmarks();

  this.deleteBookmark = function(bookmark){
    $http({
      method: "DELETE",
      url: "/bookmarks/" + bookmark._id
    }).then(
      function(response){
        console.log(response);
        controller.getBookmarks();
      },
      function(error){
        console.log("error");
      }
    );
  }

  this.editBookmark = function(bookmark){
    $http({
      method: "PUT",
      url: "/bookmarks/" + bookmark._id,
      data: {
        title: bookmark.title,
        url: this.updatedBookmarkUrl[bookmark.url]
      }
    }).then(
      function(response){
        controller.getBookmarks()
        // document.getElementById("editform").reset();
        // controller.url = null;
      },
      function error() {
        console.log("error");
      }
    )
  }

  this.createBookmark = function(){
      $http({
          method:'POST',
          url: '/bookmarks',
          data: {
              title: this.title,
              url: this.url
          }
      }).then(function(response){
          controller.getBookmarks();
          document.getElementById("createForm").reset();
      }, function(){
          console.log('error');
      });
  }

}]);
