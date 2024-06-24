/*                                         ENUMS
  Enum is the set of value
  Enum return index or define index or return value*/
//                                        EXAMPLE 1
var CoffeeType;
(function (CoffeeType) {
    CoffeeType[CoffeeType["Ristretto"] = 0] = "Ristretto";
    CoffeeType[CoffeeType["Macchiato"] = 1] = "Macchiato";
    CoffeeType[CoffeeType["Cappuccino"] = 2] = "Cappuccino";
    CoffeeType[CoffeeType["Affogato"] = 3] = "Affogato";
})(CoffeeType || (CoffeeType = {}));
var myCoffee = CoffeeType.Cappuccino;
console.log(myCoffee); // return index 2
var coffeeName = CoffeeType[2];
console.log(coffeeName); // return value Cappuccino
//--------------------------------------------------------------------------------------------------------//
//                                        EXAMPLE 2
var Food;
(function (Food) {
    Food[Food["Biryani"] = 0] = "Biryani";
    Food[Food["Pasta"] = 1] = "Pasta";
    Food[Food["Pizza"] = 2] = "Pizza";
    Food[Food["Burger"] = 3] = "Burger";
})(Food || (Food = {}));
var myDinner = Food.Biryani;
console.log(myDinner); // return index 0
var foodName = Food[0];
console.log(foodName); // return value Biryani
//---------------------------------------------------------------------------------------------------------//
//                                 EXAMPLE 3
var Names;
(function (Names) {
    Names[Names["Asadullah"] = 0] = "Asadullah";
    Names[Names["Usman"] = 1] = "Usman";
    Names[Names["Mansoor"] = 2] = "Mansoor";
    Names[Names["Ifrahim"] = 3] = "Ifrahim";
    Names[Names["Zakariya"] = 4] = "Zakariya";
    Names[Names["Mohsin"] = 5] = "Mohsin";
    Names[Names["Sultan"] = 6] = "Sultan";
    Names[Names["Hania"] = 7] = "Hania";
    Names[Names["Hoorain"] = 8] = "Hoorain";
    Names[Names["Nimra"] = 9] = "Nimra";
    Names[Names["Laiba"] = 10] = "Laiba";
    Names[Names["Sara"] = 11] = "Sara";
    Names[Names["Aleeze"] = 12] = "Aleeze";
    Names[Names["Arzo"] = 13] = "Arzo";
    Names[Names["Hira"] = 14] = "Hira";
})(Names || (Names = {}));
var myName = Names.Aleeze;
console.log(myName); // return index 5
var Student = Names[12];
console.log(Student); // return value Aleeze
//-------------------------------------------------------------------------------------------------------------//
