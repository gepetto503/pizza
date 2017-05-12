//back end
function Pizza(cost, size){
  this.cost = cost;
  this.pizzaSize = size;
  this.toppings = [];
}

Pizza.prototype.Cost = function() {
  //first half: adds $2 for each upgrade in size
  if (this.pizzaSize === '14" medium') {
    this.cost += 2
  } else if (this.pizzaSize === '16" large') {
    this.cost += 4
  }
//second half: adds 1 dollar for every index in array length, i.e. for every topping
  for (var i = 0; i < this.toppings.length; i++) {
    this.cost += 1
  }
  return this.cost;//returns pizza cost to be stored in var when function is called
}

//front end
$(document).ready(function(){
  $("form#pizza-form").submit(function(){
    event.preventDefault();

    var pizzaSize = $("#pizza-size").val();//gets users desired size, stores it in var
    var newPizza = new Pizza(5, pizzaSize);//pizza constructor, passes pizzaSize into object
    //also passes base price of 5 in.  no param is needed for array because there's no info to pass in yet.

    $("input:checkbox[name=toppings]:checked").each(function(){//gets vals of toppings checked
      var topping = $(this).val();//stores each in a temporary variable
      newPizza.toppings.push(topping);//pushes them, one by one into newPizza.toppings array
    });

    var pizzaCost = newPizza.Cost();//stores pizza cost, which is the outcome of this method, in a variable

    $("#hidden-jewels").show();
    $(".your-pizza-cost").text(pizzaCost);

  });




});
