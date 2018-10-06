var homeWork = homeWork || {};


homeWork = function () {

}

homeWork.prototype.print_hello_world = function () {
    //Here an example for the homework 

    var str = "Hello world";
    return str;
}

//Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

homeWork.prototype.add_1_to = function (n) {
    //code here
    var sum = 0;
    for (var i=1; i<=n; i++){
	sum= sum+i;
    }
    return sum;
    //throw new Error("Not Implemneted");
}



//Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum(+) or  computing the multipe (*)  of 1, â€¦, n.

homeWork.prototype.choose_operation = function (n, operation) {

    //code here
    //throw new Error("Not Implemneted");
    if (operation === "+") {
       return this.add_1_to(n);
    } else if (operation === "*") {
       var mult = 1;
       for (var i=1; i<=n; i++){
	   mult= mult*i;
       }
       return mult;
    } else
      alert("wrong operation");
              

    //throw new Error("Not Implemneted");

}

//Write a function that returns the largest element in a list
homeWork.prototype.get_max_number = function (list) {
    /* 
      var list = [1,5,8,1,19,3,8]
     max here 19
     */
    //code here
    
    return Math.max.apply(null, list);
    //return list[2];
    //throw new Error("Not Implemneted");
}

//Write function that reverses a list, preferably in place.

homeWork.prototype.reverse_list = function (list) {
    /*
     list = ['a',4,8,'r']
     after reverse_list(list)
     ['r',8,4,'a']
     */
    return list.reverse();
    //throw new Error("Not Implemneted");
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

    //throw new Error("Not Implemneted");
    //fruits.includes("Mango");
    var bol = list.includes(element);

    if (bol) {
       return element+" exist in the list ["+list+"]";
    } else
     return element+" doesn't exist in the list ["+list+"]";
     // alert("wrong operation");

}

//Write a function that returns the elements on odd positions in a list.

homeWork.prototype.get_odd_position_elements = function (list) {
    /*
     list =  [1,5,2,3,4,9,10,12]
     return 5,3,9,12
     */

    //throw new Error("Not Implemneted");

    return list.filter((num, i)=>i % 2 == 1);
    
}


//Write a function that returns the odd elements  in a list.

homeWork.prototype.get_odd_numbers = function (list) {
    /*
     list =  [1,5,2,3,4,9,10,12]
     return 1,5,3,9
     */

    //throw new Error("Not Implemneted");

    return list.filter((number) => number%2!==0);
    

}


//Write a function that concatenates two lists. [a,b,c], [1,2,3]  To [a,b,c,1,2,3]

homeWork.prototype.list_concatenate = function (list1, list2) {


    //throw new Error("Not Implemneted");

    var list3 = list1.concat(",",list2);
    return list3;
}

//Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2].

homeWork.prototype.convert_number_to_list = function (number) {
    //throw new Error("Not Implemneted");

    return Array.from(number.toString()).map(Number);

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

homeWork.prototype.string_decorate = function (A) {
    //throw new Error("Not Implemneted");



    function printFrame(arr) {
    function fill (str, length, char) {
      return (str.length < length) ? fill(str + char, length, char) : str;
    }
    
    let size = arr.map((str) => {
            return str.length;
        })
        .reduce((a, b) => {
            return Math.max(a, b);
        });
    
    let line = fill('', size + 4, '*');
    
    arr = arr.map((element) => {
            return '* '+ fill(element, size, ' ') + ' *';
        })
    arr.unshift(line);
    arr.push(line);
    
    return arr.join('\n');
    
   }
   console.log(printFrame(A));
}

/*
Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number.If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"
*/

homeWork.prototype.guess_number = function (user_number, random_number) {
    
    //throw new Error("Not Implemneted");
   

   var turns=0;
   var random_num = Math.ceil(Math.random() * 10);

   alert(random_num);
   //random_num = Number.parseInt(random_num);
   while (turns <= 10){
	   var number_prompt = prompt("Add number");
				    
	     
	   if(number_prompt == random_num) 
	   {     
	       alert("Good! You guess ");
               turns = 11;
	   } 
	   else if(number_prompt > random_num) 
	   {     
	       //guess++; 
	       alert("Try a smaller number!"); 
	   } 
	   else
	   { 
	       //guess++; 
	       alert("Try a bigger number!");
	   } 
           turns++;
    }


}

/*
  Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference
 */

homeWork.prototype.difference = function (user_number) {

    //throw new Error("Not Implemneted");

    if (user_number>13)
       return Math.abs(13-2*user_number);
    else 
       return 13-user_number;

}

/*
  Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
  ex:hack becomes : HhackH
 */

homeWork.prototype.add_char_to = function (givenString) {


    //throw new Error("Not Implemneted");


    var first_letter = givenString.slice(0, 1);
    var first_letter_UpperCase = first_letter.toUpperCase();
    var result = first_letter_UpperCase.concat(givenString);
    result = result.concat(first_letter);
    return result;
}

/*
 Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
 */

homeWork.prototype.add_last_three_char_to = function (givernStr) {
    //throw new Error("Not Implemneted");
    
    
    if (givernStr.length>=3)
    {
       str_len = 3;
   
       back = givernStr.substring(givernStr.length-3);
       return back + givernStr + back;
    }
     else
       return false;
   
}


/*
 
 Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.
 */
homeWork.prototype.check_number_in_range = function (number1, number2, number3) {


    //throw new Error("Not Implemneted");
       var min = 50;
       var max = 99;

	if (number1 <= max && number1 >= min) {
	 alert (number1+" is in the range");
        }
        if (number2 <= max && number1 >= min) {
	 alert (number2+" is in the range");
        }

        if (number3 <= max && number1 >= min) {
	 alert (number3+" is in the range");
        }
       
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
    

    //throw new Error("Not Implemneted");
    
    var array = [number1, number2, number3];
    var array2 = [0,0,0];
    for(i=0; i<3; i++){
    
      array2[i] = array[i] % 10;
      console.log('The last digit of ', array[i], ' is ', array2[i]);

    }

    if((array2[0] == array2[1]) &&  (array2[0] == array2[2])){
       //alert ("the last digit are the same for the three numbers");
       return "the last digit are the same for the three numbers"; 
    } else{
       //alert ("It isn't the same last digit for the three numbers");
       return "It isn't the same last digit for the three numbers"
       } 

 
}
//module.exports = homeWork;
