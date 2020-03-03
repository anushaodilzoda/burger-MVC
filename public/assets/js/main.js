$(function () {
    $(".create-form").on("submit", function (event) {
      event.preventDefault();
      var newBurger = {
        burger_name: $(".create-form [name=burger_name]").val().trim()
      };
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function () {        
        location.reload();
      }
      );
    });
  
    $("#devourBtn").on("click", function (event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("value");
  
      var newDevourValue = {
        devoured: newDevour
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourValue
      }).then(
        function () {       
          location.reload();
        }
      );
      
    });
  
    $("#deleteBtn").on("click", function (event){
      var id = $(this).data("id");
      $.ajax("/api/burgers/" + id, {
          type: "DELETE",
        }).then(
          function () {
             location.reload();
          }
        );
    });
  });