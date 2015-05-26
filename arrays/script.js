$(function () {

    /* Basics */

    //create array
    var fruits = ["apple", "orange", "pear"];
    //$(".grey").text(cars);
    $(".grey > span#demo-basic").html(fruits);

    var cars = new Array("Saab", "Cadillac", "Chev", "Porshce");
    $("#demo-basic-2").html(cars);

    //arrays use 1. numbers to access elements. 
    //since they're special types obj >> can use "names" to access "members
    var book = {name: "Great Gatsby", year: "1992", author: "some author"};
    $("div.3 > span#span1").html(book["name"] + "<br><br>"); //use " since name is string
    $("div.3 > span#span2").html(book.year);    //another way to access member/prop

    console.log(book.author);

    //basic array props
    var bears = new Array("black bears", "grey bears", "box bears");
    $("div.4 > span#1").html(bears.length);

    // add item to array
    bears[bears.length] = "big bears";
    $("div.4 > span#3").html(bears[bears.length - 1]);

    //keep adding 
    bears[bears.length] = "small bears";
    bears[bears.length] = "grizzly bears";
    
    $("div.4 > span#4").html(bears);

   //array loops
    
    var index;
    var text = '';
    var cats = ["Banana", "Orange", "Apple", "Mango"];
    for (index = 0; index < cats.length; index++) {
        text += cats[index];

    }

    $("div.5 > span.1").html(text);

    /* javascript arrays only support arrays with numbered not named indexes */

    var person = [];
    person["firstName"] = "John";
    person["lastName"] = "Smith";
    person["age"] = 52;
    var x = person.length;
    var y = person[0];

    $("div.6 > span.1").html(x);
    $("div.6 > span.2").html(y);
    $("div.6 > span.3").html(person.firstname);
    
    //console.log(y); //returns undefined since it's looking for a integer, not string of "firstName"
    //it would return "John" if we wrote person[0] = "John"  since it looks for int not string
        //arrays use numbered indexes
    //objects used named indexes for "elements"

    //don't use new Array(); 
    
    //   new Array(40, 100);   if remove elem til only 1 is left, new Array(40);<-- if leave only 1 placeholder elem, it assumes you created an array with 40 count elems

    //An array is by default an object. But it's a special type of object called an "array"
    //How to check if object or var is array
        // 1. see if object has index > -1 (array has index start from 0)
        // 2.  variable.constructor === Array                       <- best way!!!!    All arrays are objects. Check the object's constructor property is fastest process
        // 3. variable instanceof Array             <---1/3 slower way but cleaner
        // 4. Array.isArray(variable)               <-- ugliest and slowest (1/5 as fast as meth 2.)

    var trees = ["redwood", "carrwood", "birch"];
    
    //demo  1. 
        var isit = function(testArray) {
            return testArray.constructor.toString().indexOf("Array") > -1;

        }
   
        $("div.7").find("span.1").html(isit(trees));

            var inch = function (testArray2) {
                return testArray2.constructor.toString();
            };

            console.log(inch(trees));

    //demo 2.
        var isit1 = function (testArray1) {
            return testArray1.constructor === Array;
        };

        $("div.7").find("span.2").html(isit1(trees));

    //demo 3.  (slow but cleaner way)
        var slowArrayTest = function (testObj) {
            return testObj instanceof Array;
        }

        $("div.7").find("span.3").html(slowArrayTest(trees));

    //demo 4. (slowest way. jquery's native way)
        var slowestArrayTest = function (testObj1) {
           return  Array.isArray(testObj1);
        }
        
        $("div.7").find("span.4").html(slowestArrayTest(trees));
        

    /**Converting Arrays to Strings*/

    var trees1 = ["Banana", "Orange", "Apple", "Mango"];
    valueTrees1 = trees1.valueOf();
    $("div.8 > span.1").html(valueTrees1 + "<br>");

    //toString()  = valueOf()
    stringerTrees1 = trees1.toString();
    $("div.8 > span.2").html(stringerTrees1 + "<br>");

    
    // convert array into string AND specify separator
    $("div.8 > span.3").html(trees1.join(", "));

    /*Basics of Manipulating Arrays */

    //popping and pushing   LIFO - last in first out 
        //pop() removes last elem in array
        //push() adds new element to array end

    var fruits1 = ["apples", "orange", "banana" , "pear"];
    fruits1.pop();
    $("div.9 > span.1").html(fruits1.join(", "));

    fruits1.push("pear");
    $("div.9 > span.2").html(fruits1.join(", "));
    //let's pop via loop

    //var i = 0;
    fruitsText = "";
    fruitsArrayLength = fruits1.length;    // <-- must specify as var else looping ends after 2 loops when i = 2 and fruits1.legnth = 2  (result of popping)

    for (i = 0; i < fruitsArrayLength; i++) {       //note that we're using var fruitsArrayLength instead of "fruits1.length 
        
        fruitsText += (fruits1.join(", ") + " " + fruits1.length + "<br>");
        fruits1.pop();
    }
    
    $("div.9 > span.3").html(fruitsText); 


    //"shifting" and "unshifting" FIFO    
        //called "Shifting" since shifts elems one place down as result of kicking out first elem)
        //"unshifting"  adds new elem to front and "unshifts" older elems
    var alph = ["A", "B", "C", "D", "E"];
    $("div.10 > span.1").html(alph.join(", ") + " * " + alph.length);

    alph.unshift("X");
    $("div.10> span.2").html(alph.join(", ") + " * " + alph.length);

    //changing elems
        //replacing elems based on index #
        alph[0] = "Q";

        $("div.10 > span.3").html(alph.join(", ") + " * " + alph.length);
        
        //append new elem to array
        alph[alph.length] = "Z";
        
        $("div.10 > span.4").html(alph.join(", ") + " * " + alph.length);

        //deleting elems
        delete alph[0];
        $("div.10 > span.5").html(alph.join(", ") + " * " + alph.length);
        console.log(alph.join(", "));

    //splice array

    //joining arrays

        var group1 = ["Joe", "Green", "Reddie", "Fred", "Bob"];
        var group2 = ["Jessie", "Jennie", "Ana", "Dot"];
        var group3 = ["fruit1", "fruit2", "fruit3"];


        bigGroup = group1.concat(group2);
        biggerGroup = group1.concat(group2, group3);
      
        $("div.11  > span.1").html(bigGroup.sort().join(", ") + "    " + bigGroup.length);

        $("div.11 > span.2").html(biggerGroup.join(", ") + " " + biggerGroup.length);

    //slicing array
        // slice() slices out piece of another array into new array

        var members = ["Chu", "Gre", "Chong", "Joeyish", "Ching"];
        var betterMembers = members.slice(0, 3);
        var mostMembers = members.slice(1);

        $("div.11 > span.3").html(betterMembers.join(", ") + " " + betterMembers.length);
        $("div.11 > span.4").html(mostMembers.join(", ") + " " + mostMembers.length);
    
    //join  concat    ordering 


    //review of pop/push
        var colors = ["orange", "yellow", "blue"];
        d = colors.pop();   //blue gets popped (kicked out)
        
        alert(d + " " +  "gets popped" );



        
    //complex
    //1.    //pop things out until only 1 item left. Meanwhile, save items being popped out and push back in pyramid sequence
        //contionusly add things in from user input in batches or immed upon submit

   // 2.   //alternate items from 2 arrays (pop in 2nd array's items every other time)

    //3.  //create new array out of all names/elems in a first array that have certain props
    //ex. array contains nams of people in company
            // ==> create array for all the asian people in company 

    //4. give priority values to certain classes of items in multiple arrays. Then force the bucket of arrays to poop priority items out by order of priorirty value and array priority(if there were 3 arrays... first array items go first...).
});