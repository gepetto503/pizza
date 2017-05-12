//back end
function Pizza(size){
  this.pizzaSize = size;
  this.toppings = [];
}

//front end
$(document).ready(function(){
  $("form#pizza-form").submit(function(){
    event.preventDefault();

    var pizzaSize = $("#pizza-size").val();
    var newPizza = new Pizza(pizzaSize);

    $("input:checkbox[name=toppings]:checked").each(function(){
      var topping = $(this).val();
      newPizza.toppings.push(topping);
    });



    console.log(newPizza);




  });




});
