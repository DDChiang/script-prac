$(function () {
    //basic rotate
    $("section#1 div").css({ "transform": "rotate(4deg)" });

    //basic animate 
    $("section#2 div").mouseover(function () {
        $(this).animate({left: '100px'}, 220);
    }).mouseout(function () {
        $(this).animate({left: '250px'}, 220);
    });

    $("section#2 div").animate({ left: '250px' }, 220);

    //basic execute rotation every xx secs
    rc = 0;     //set counter
    function rotateCounter() {  //counter++ fn
        rc++;
        if (rc > 359)
        {
            rc = 1;
        }
    }

    setInterval(
        function () {
            rotateCounter();        //call counter++ fn
            $("section#3 div").css({ "transform": "rotate(" + rc + "deg)" });   //apply new counter val to rotation deg
        }
    , 100);

    //SIMPLE: execute smooth rotation when hover
    c = 0;
    function hoverRotateCounter() {
        c++;
        if (c > 359)
        {
            c = 1;
        }
        //console.log(c);
    }

            //in order to clearINterval  the hover effect, we need to wrap setINterval in a global variable
            //var pixie = setInterval(              //activates once page starts    //how do we not activate it on page load?
            //        function() {
            //            //rotate blbal 
            //            hoverRotateCounter();
            //            $("section#4 div").css({ "transform": "rotate(" + c + "deg)" });
            // xx       },
            //    1000);

    var pixie = null;   //set as null now so won't activate once page starts. assign it true val on event later
    function startRotate() {
        pixie = setInterval(function () {
                    hoverRotateCounter();
                    $("section#4 div").css({ "transform": "rotate(" + c + "deg)" });
                }, 400);
    }

    function stopRotate() {
        clearInterval(pixie);   //only need to set it in clearInterval since clearInterval will look for "setInterval" and vanquish
    }

    $("section#4 div").mouseover(function () {
        startRotate();
    }).mouseout(function () {
        stopRotate();
    })

    //Rotate certain degree amount
    var ac = 0;

    function counter30() {
        ac= ac+ 30;
    }

    function rotate30(d) {      //works. find out how it works
        var $elem = $("section#5 div");
            //custom smooth animation: $selector.animate({prop: val}, {//reg animate values  duration:xx, step: function() { xxx}; });
        $elem.animate({ crazyDeg: d }, { // need property key + value. if prop name already exists in css db, will alter that instead. if prop val dn==> feel free to use as placeholder
            duration: 500,
            step: function (now) {      //now = numerical degree fn keeps track of
                $elem.css({transform: 'rotate(' + now + 'deg)'});
            }
        });
    }

    $("section#5").click(function () {  //works with hover + mouseover
        counter30();
        rotate30(ac);
    });


 
    
});