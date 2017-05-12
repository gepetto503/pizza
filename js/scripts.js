$(document).ready(function(){
  $("form#pizza-form").submit(function(){
    event.preventDefault();

    var toppingArray = []

    $("input:checkbox[name=toppings]:checked").each(function(){
      var topping = $(this).val();
      toppingArray.push(topping);
    });

    console.log(toppingArray);

  });




});
