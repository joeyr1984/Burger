$(function () {

  $(".devour-buttons").on("click", function (event) {
    const id = $(this).data("id");
     const newDevouredState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {

        location.reload();
      }
    );
  });

  $("#submit-button").on("click", function (event) {
    event.preventDefault();
console.log("hello");

    const newBurger = {
      name: $("#submit-burger").val().trim(),
      devoured: 0
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
