var homeWork = homeWork || {};
//comment

homeWork = function () {

}

homeWork.prototype.print_hello_world = function () {
    //Here an example for the homework 

    var str = "Hello";
    return str;
}

//Write a program that asks the user for a number n and prints the sum of the numbers 1 to n (DONE)

homeWork.prototype.add_1_to = function (n) {
   var N = (n+1);
   return N;

    throw new Error("Not Implemneted");
}



//(DONE) Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum(+) or  computing the multipe (*)  of 1, â€¦, n. (DONE)

homeWork.prototype.choose_operation = function (n, operation) {

    if (operation == "+") {
        return n + 1;
    } 
    if (operation == "*") {
        return n * n;
    } else {
        return "You should choose beetween + and * operations. Try again!"
    }
    throw new Error("Not Implemneted");
    throw new Error("Not Implemneted");

}

//Write a function that returns the largest element in a list (DONE)
homeWork.prototype.get_max_number = function (list) {
    /* 
      var list = [1,5,8,1,19,3,8]
     max here 19
     */
    return (Math.max.apply(null, list));
    
    throw new Error("Not Implemneted");
}

// Write function that reverses a list, preferably in place. (DONE)

homeWork.prototype.reverse_list = function (list) {
    /*
     list = ['a',4,8,'r']
     after reverse_list(list)
     ['r',8,4,'a']
     */
    return list.reverse();
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

//Write a function that returns the elements on odd positions in a list. (DONE)

homeWork.prototype.get_odd_position_elements = function (list) {
    /*
     list =  [1,5,2,3,4,9,10,12]
     return 5,3,9,12
     */
    var oddPosition = [];
     for (i = 0; i < list.length; i = i + 2) {
         oddPosition.push(list[i]); 
     }
     return oddPosition;
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


//Write a function that concatenates two lists. [a,b,c], [1,2,3]  To [a,b,c,1,2,3] (DONE)

homeWork.prototype.list_concatenate = function (list1, list2) {
    var newList = list1.concat(list2);
     console.log(newList);
     return newList;

    throw new Error("Not Implemneted");
}

//Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2]. (DONE)

homeWork.prototype.convert_number_to_list = function (number) {
    number = number.toString()
     var splittedNumber = [];
     splittedNumber = number.split("");
     return (splittedNumber);

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
    var num;
     num = Math.floor(Math.random() * 10 + 1);
     console.log(num);
     if (user_number == num) {
      return("Well done");
     } else return ("No match");
    
    throw new Error("Not Implemneted");

}

/*
  Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference (DONE)
 */

homeWork.prototype.difference = function (user_number) {
    if (user_number>13)
       return Math.abs(13-2*user_number);
    else 
       return 13-user_number;
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
 
 (DONE) Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range. (DONE)
 */
homeWork.prototype.check_number_in_range = function (number1, number2, number3) {

    if (((number1 || number2 || number3) >= 50) && ((number1 || number2 || number3) <= 99)) {
        return "True, One or more of those numbers are un the 50 to 99 range";
    } else {
        return "False, None of those numbers are un the 50 to 99 range"
    }
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
