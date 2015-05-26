$(function () {
    var w = $(window).width() || document.documentElement.clientWidth || document.body.clientWidth;
    var h = $(window).height() || docuemntElement.clientHeight || document.body.clientHeight;
    var wsw = screen.width;
    var wsh = screen.height;
    var swa = screen.availWidth;

    $("div.1 > span.1").html(w);
    $("div.1 > span.2").html(h);
    $("div.1 > span.3").html(wsw);
    $("div.1 > span.4").html(wsh);

    $("div.2 > span.1").html(swa);
    

    //timing

    //time so every 3 seconds do something.
   
    var adder = (function () {
        var i = 0;

        return function () { return i += 1; }
    })();

    function looper() {
        console.log(adder());
    };

    //It works! see line below
    //setInterval(function(){console.log(adder())}, 3000);

    //setInterval(looper, 3000); //when specifying....don't need to use looper() ...can just say "looper"
    //clearINterval(): to stop looping setINterval
        //couldn't get this working so far though

    var ii = 0;

    var setAdder = setInterval(function () { Adder1() }, 1000);

    function Adder1() {
        //console.log(ii);
        $("div.4 > span.1").html(ii);
        return ii += 1;
        //console.log(ii);
    }
    // console.log(ii);

    /*regular clearINterval inside script doesn't work*/
    $("div.4> button").on("click",
        function () { clearInterval(setAdder); }
    );

    /*so far, only clearInterval specified as "onclick" behavior in html doc works*/
    //just kidding. 
    //since it's specified inside $(function() {}) then it'll work :D 
});
