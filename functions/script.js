
//if don't want to keep specifying directly in html, hoist out of $(function) {}
var c = 5;

function ordFn() {
    $("div.1 > span.5").html(c * 5);
}

$(function () {

    //find max value
    bunnyN = findMax(255, 144, 30.5, 10000, 1); //argument
    
    var i, max = 0;

    function findMax() {
        var i, max = 0;
        for (i = 0; i < arguments.length; i++){
            if (arguments[i]>max) {
                max = arguments[i];
            }
        }

        return max;

    };

    $("div.1 > span.1").html(bunnyN);
    

    //find sum of values

    summer = sumAll(1, 123, 500, 115, 44, 88);

    function sumAll() {
        var i, sum = 0;
        for (i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum; //need to include this line since sum is local to fn
    }
    $("div.1 > span.2").html(summer); 

    //console.log(summer);

    //find sum of values: can we define variable outside of fn?

    var summer1 = findSum(200, 0, 400, 18);
    
    //var j, sum1 = 0;

    function findSum() {
        var j, sum1 = 0;    //need to define variables inside so loop can reach it since loop is inside fn
        //since fn  is called by summer1?

        for (j=0;j < arguments.length; j++) {
            sum1 += arguments[j];
            //console.log(sum1);
        }

        return sum1; //must return this to "confirm" catch the sum value at the end of loop
        
    }

    $("div.1 > span.3").html(summer1);
   
    //hmm for some reason,counter variables must be def inside fn
    var bCounter = countB(25, 75, 50, 100);

    //var beeC = 0;
    //var beeSum = 0;

    function countB() {

        var beeC = 0;
        var beeSum = 0;

        for (;beeC < arguments.length;)
        {
            beeSum += arguments[beeC];
            beeC++;
        }

        return beeSum;
    }

    $("div.1 > span.4").html(bCounter);
    console.log(bCounter);



});





function pokeCounter() {
    var cCounter = 0;   //only accessing this once
    //function boo() { return cCounter += 1; };
    //boo();
    cCounter += 1;  //only accessing this once..how to reuse ?
                        //or is cCounter just reseting so everytime it's 0+1 = 1?
    console.log(cCounter);
    return cCounter;
};

var addCounter= (function() {       
    var cCounter = 0;   //set variable once
    return function() { return cCounter += 1; };    //access variable from parent fn AND do stuff 

})();
    //must we declar as var first? YES

//1. declare as var
//    2. declaring var sets cCounter var = 0. THEN it returns var as a function
//        3. you ar enow free to run add() as the function inside.

    
$("div.1> span.7").click(function () {
    $(this).html(addCounter());
});
