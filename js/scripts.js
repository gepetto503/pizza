//back end
function Pizza(cost, size){
  this.cost = cost;
  this.pizzaSize = size;
  this.toppings = [];
}

Pizza.prototype.Cost = function() {
  if (this.pizzaSize === '14" medium') {
    this.cost += 2
  } else if (this.pizzaSize === '16" large') {
    this.cost += 4
  }

  for (var i = 0; i < this.toppings.length; i++) {
    this.cost += 1
  }
  return this.cost;
}

//front end
$(document).ready(function(){
  $("form#pizza-form").submit(function(){
    event.preventDefault();

    var pizzaSize = $("#pizza-size").val();//gets users desired size, stores it in var
    var newPizza = new Pizza(5, pizzaSize);//pizza constructor, passes pizzaSive into object

    $("input:checkbox[name=toppings]:checked").each(function(){//gets vals of toppings checked
      var topping = $(this).val();//stores each in a temporary variable
      newPizza.toppings.push(topping);//pushes them, one by one into newPizza.toppings array
    });

    var pizzaCost = newPizza.Cost();

    console.log(pizzaCost);




  });




});
