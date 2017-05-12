$(document).ready(function(){
  $("form#pizza-form").submit(function(){
    event.preventDefault();
    debugger;
    var toppingArray = []
    var pizzaSize = $("#pizza-size").val();

    $("input:checkbox[name=toppings]:checked").each(function(){
      var topping = $(this).val();
      toppingArray.push(topping);
    });

    console.log(toppingArray);
    console.log(pizzaSize);

  });




});
