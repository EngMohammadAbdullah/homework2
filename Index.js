var homeWork = homeWork || {};


homeWork = function () {

}

homeWork.prototype.print_hello_world = function () {
    //Here an example for the homework 

    var str = "Hello";
    return str;
}

//Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

homeWork.prototype.add_1_to = function (n) {
    //code here

    throw new Error("Not Implemneted");
}



//Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum(+) or  computing the multipe (*)  of 1, â€¦, n.

homeWork.prototype.choose_operation = function (n, operation) {

    //code here
    throw new Error("Not Implemneted");

}

//Write a function that returns the largest element in a list
homeWork.prototype.get_max_number = function (list) {
    /* 
      var list = [1,5,8,1,19,3,8]
     max here 19
     */
    //code here
    return list[2];
    throw new Error("Not Implemneted");
}

//Write function that reverses a list, preferably in place.

homeWork.prototype.reverse_list = function (list) {
    /*
     list = ['a',4,8,'r']
     after reverse_list(list)
     ['r',8,4,'a']
     */

    throw new Error("Not Implemneted");
}

//Write a function that checks whether an element exist in a list.

homeWork.prototype.Is_Exist = function (element, list) {
    /*
     element ex:5
     list = [1,5,8,6,9,7]
     return true ; 
     element ex:11
     list = [1,5,8,6,9,7]
      return false ;
     */

    throw new Error("Not Implemneted");

}

//Write a function that returns the elements on odd positions in a list.

homeWork.prototype.get_odd_position_elements = function (list) {
    /*
     list =  [1,5,2,3,4,9,10,12]
     return 5,3,9,12
     */

    throw new Error("Not Implemneted");

}


//Write a function that returns the odd elements  in a list.

homeWork.prototype.get_odd_numbers = function (list) {
    /*
     list =  [1,5,2,3,4,9,10,12]
     return 1,5,3,9
     */

    throw new Error("Not Implemneted");

}


//Write a function that concatenates two lists. [a,b,c], [1,2,3]  To [a,b,c,1,2,3]

homeWork.prototype.list_concatenate = function (list1, list2) {


    throw new Error("Not Implemneted");
}

//Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2].

homeWork.prototype.convert_number_to_list = function (number) {


    throw new Error("Not Implemneted");

}


/*
 Write a function that takes a list of strings an prints them, one per line, in a rectangular frame.For example the list["Hello", "World", "in", "a", "frame"] gets printed as:

*********
* Hello *
* World *
* in    *
* a *
* frame *
*********
*/

homeWork.prototype.string_decorate = function (str) {
    throw new Error("Not Implemneted");

}

/*
Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number.If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"
*/

homeWork.prototype.guess_number = function (user_number) {
    var num = Math.ceil(Math.random() * 10);
    throw new Error("Not Implemneted");

}

/*
  Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference
 */

homeWork.prototype.difference = function (user_number) {

    throw new Error("Not Implemneted");

}

/*
  Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
  ex:hack becomes : HhackH
 */

homeWork.prototype.add_char_to = function (givenString) {


    throw new Error("Not Implemneted");

}

/*
 Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
 */

homeWork.prototype.add_last_three_char_to = function (givernStr) {


    throw new Error("Not Implemneted");

}


/*
 
 Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.
 */
homeWork.prototype.check_number_in_range = function (number1, number2, number3) {


    throw new Error("Not Implemneted");

}

/*
 
    Write a JavaScript program to check if the last digit of the three given positive integers is same.

 
 */
homeWork.prototype.Is_last_digit_positive = function (number1, number2, number3) {
    /*
     
     311,221,21
     1 ,1,1 :  true 

    31,27,53
     1 ,7 ,3 :false
     */

    throw new Error("Not Implemneted");

}
module.exports = homeWork;
