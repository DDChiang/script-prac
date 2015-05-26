$(function () {
    //complex
    //1.    //pop things out until only 1 item left. Meanwhile, save items being popped out and push back in pyramid sequence
    //contionusly add things in from user input in batches or immed upon submit

    var box = ["green", "red", "yell", "ora"];

        $bl = box.length;
        textFor = "";
        ////for (i = 0; i < $bl; i++) {
        ////    textFor = textFor + box[i] + " ";
        ////}

        //it goes backwards!

        for (i = $bl-1; i > -1; i--) {
        
            textFor = textFor + box[i] + " ";
        }

        $("div.1 span.1").html(textFor);

    //GO==>
        textMin = "";
        
        for (p = $bl; p >0; p--)
        {
            for (q = 0; q < p ; q++) {
                textMin = textMin + box[q] + " ";
            }

            textMin = textMin + "<br>";
        }

        $("div.1 span.2").html(textMin);

        textBk = "";


        for (c = 0; c < $bl; c++)
        {
            for (ci = 0; ci < c+1; ci++)
            {
                textBk = textBk + box[ci] + " ";
            }

            textBk = textBk + "<br>";
        }

        $("div.1 span.3").html(textBk);

    // 2.   //alternate items from 2 arrays (pop in 2nd array's items every other time). force them to match

        var Joes = ["Joe1", "Joe2", "Joe3", "Joe4"];
        var Bobs = ["Bob1", "Bob2", "Bob3", "Bob4"];

        jbL = Joes.length;
        jb = 0;
        jbText = "";
        for (; jb < jbL ;) {

            jbText = jbText + Joes[jb] + " " + Bobs[jb] + " ";
            jb++;
        }

        $("div.2 span.1").html(jbText);
        
    //2.1   //alternate items from 2 arrays (pop in 2nd array's items every other time). BUT. one array is shorter than the other
        var Mars = ["Mars1", "Mars2", "Mars3", "Mars4"];
        var Pops = ["Pops1", "Pops2", "Pops3", "Pops4", "Pops5", "Pop6", "Pop7", "Pop8"];

        var longArrayLength;

        if (Mars.length > Pops.length) {
            longArrayLength = Mars.length;
            
        }
        else
        {
            longArrayLength = Pops.length;
        }

        console.log(longArrayLength);

        var bc = 0;
        laText = "";
        for (;bc < longArrayLength;) {

            if (Mars[bc] == undefined) {
                Mars[bc] = " ";
                laText = laText + Mars[bc] + " " + Pops[bc] + " ";
            }

            else if (Pops[bc] == undefined) {
                Pops[bc] = " ";
                laText = laText + Mars[bc] + " " + Pops[bc] + " ";
            }

            else
            {
                laText = laText + Mars[bc] + " " + Pops[bc] + " ";
            }
            
            bc++;
        }
    
        $("div.2 span.3").html(laText);

        if (Mars[longArrayLength] == undefined)
        {
            Mars[longArrayLength] == "0";
            console.log(Mars[longArrayLength]);
        }

    //3.  //create new array out of all names/elems in a first array that have certain props
        //ex. array contains nams of people in company
        // ==> create array for all the asian people in company 

        var employees = [{ name: "Bob", ethnic: "White" }, { name: "Ching", ethnic: "Asian" }, { name: "Cho", ethnic: "Asian" }, { name: "Joe", ethnic: "White" },
            { name: "Chong", ethnic: "Asian" }, {name: "Mason", ethnic: "White"}];
        
        //prelim way to check array elem prop value
        if (employees[2].ethnic == "White")
        {
            console.log("He's White!");
        }
        else
        {
            console.log("Asians Rule!");
        }

        empLength = employees.length;
        ec = 0;
        eAsianData = "";

        for (; ec < empLength;)
        {

            if (employees[ec].ethnic == "Asian")
            {
                eAsianData = eAsianData + employees[ec].name + " ";
            }
            else
            {
                eAsianData = eAsianData + " ";
            }

            //eAsianData = eAsianData + employees[ec].name + " ";
            ec++;
        }

        $("div.2 span.2").html(eAsianData);

    

    //4. give priority values to certain classes of items in an array. 
            //Then force the bucket to return elems in priority order
            //all in same array

    var tok = [{ name: "1Johnny", val: 1 }, { name: "2Bass", val: 2 }, { name: "3doc", val: 3 }, { name: "1Kevin", val: 1 }, { name: "1DD", val: 1 }, { name: "3John", val: 3 }];

    var tokC = 0;
    var tokLength = tok.length;
    var tText = "";

    //function comparer(a, b) {
    //    return parseInt(a.val) - parseInt(b.val);
    //}

    function lhval() {
        var sortTok = tok.sort(function (a, b) { return parseInt(a.val) - parseInt(b.val); });      //only works if values are numbers   ///in futu. can either 1. check if vals isNaN  or // 2. convert alph into 3-piece booleans
        //var sortTokText = sortTok.name.join(", ");
        for (; tokC < tokLength;)
        {
            tText = tText + sortTok[tokC].name + " ";
            tokC++;
        }
    }
    
    lhval();

    $("div.3 span.1").html(tText);
    

    //5.0 priorty value as prop to elems in multiple arrays(x = 3). Return items in order of priority class      (with and without prop val of which group it came from)
    var group1 = [{ name: "11Johnny", val: 1 }, { name: "21Bass", val: 2 }, { name: "31doc", val: 3 }, { name: "11Kevin", val: 1 }, { name: "11DD", val: 1 }, { name: "31John", val: 3 }];
    var group2 = [{ name: "12CanCan", val: 1 }, { name: "22Charles", val: 2 }, { name: "32doc", val: 3 }, { name: "12Kevin", val: 1 }, { name: "12DD", val: 1 }, { name: "32John", val: 3 }];
    var group3 = [{ name: "13Ajax", val: 1 }, { name: "23Choco", val: 2 }, { name: "33Loc", val: 3 }, { name: "13PP", val: 1 }, { name: "13OO", val: 1 }, { name: "33lokok", val: 3 }];

    var mergedGroup = group1.concat(group2, group3);
   
    var testArrayText = "";

    function sortMergeGroup(testArray) {
        var testArrayC = 0;
        var taLength = testArray.length;

        var sortTestArray = testArray.sort(function (a, b) { return parseInt(a.val) - parseInt(b.val)});

        for (; testArrayC < taLength;) {
            testArrayText = testArrayText + sortTestArray[testArrayC].name + ", ";
            testArrayC++;
            //console.log(testArrayText);
        }
    };

    $("div.4 span.1").html(mergedGroup[7].name);    //check if arrays merged works

    sortMergeGroup(mergedGroup);

    $("div.4 span.2").html(testArrayText);

    //5.0.0 test custom sort fn

    var sort_by = function (field, reverse, primer) {
        var key = function (x) { return primer ? primer(x[field]) : x[field]};  //primer's optional

        return function (a, b) {
            var A = key(a), B = key(b);
            return ((A < B) ? -1 : (( A > B) ? 1 : 0 ))*[-1, 1][+!reverse];
        }

    }
    
    var bird= [{ name: "11Johnny", val: 1 }, { name: "21Bass", val: 2 }, { name: "31doc", val: 3 }, { name: "11Kevin", val: 1 }, { name: "11DD", val: 1 }, { name: "31John", val: 3 }];
    var bear = [{ name: "12CanCan", val: 1 }, { name: "22Charles", val: 2 }, { name: "32doc", val: 3 }, { name: "12Kevin", val: 1 }, { name: "12DD", val: 1 }, { name: "32John", val: 3 }];

    var animals = bird.concat(bear);
        $("div.5 span.1").html(animals[8].name); //check if merge worked

    function sortAnimals() {
        animals.sort(sort_by("val", false, parseInt));
        ac = 0;
        aL = animals.length;
        aT = "";

        for (; ac < aL;) {
            aT = aT + animals[ac].name + " ";
            ac++;
        }

        return aT;
    };

    $("div.5 span.2").html(sortAnimals());

        //random : practice writing succinct if else statement
    //to count how many elems have a certain class ==> use $('.yourclass').length

    //var spanlength = 0;
    //$("div.6 > span").each(function (x, y) {
    //    if ($(this).html().length > 0)
    //        ++spanlength;
    //});
    //alert(spanlength);
    var spanCont = 0;
    $("div.6 span").each(function () {
        if ($(this).html().trim().length > 0) {     //trim trims white space from strings  :D <<---- extremely useful
            ++spanCont;
        }
    });

    console.log("spans with actual content: " +  spanCont);

    (spanCont > 0) ? $("div.6").html("<span class='crazy'>Found KOKOKO</span>") : console.log("bk");
    
    //if (($("div.6 > span").text().trim() != "").length > 0)
    //{
    //    alert("not enough");
    //} else {
    //    alert("yeahhhh");
    //}

    if ($("div.6 > span.1").text() != ("" || " "))      //use trim instead
    {
        $("div.6 > span.1").text("lonely");
    }
    else {
        $("div.6 > span.1").text("filled");
    }

    //5a. Assign each array certain priority val. Return items in order of priority class and priority array.
        //return priority items out by order of priorirty value and array priority(if there were 3 arrays... first array items go first...).

    var bobs = [{ name: "11Johnny", val: 1 }, { name: "21Bass", val: 2 }, { name: "31doc", val: 3 }, { name: "11Kevin", val: 1 }, { name: "11DD", val: 1 }, { name: "31John", val: 3 }];
    var kits = [{ name: "12CanCan", val: 1 }, { name: "22Charles", val: 2 }, { name: "32doc", val: 3 }, { name: "12Kevin", val: 1 }, { name: "12DD", val: 1 }];
    var coms = [{ name: "13Ajax", val: 1 }, { name: "23Choco", val: 2 }, { name: "33Loc", val: 3 }, { name: "13PP", val: 1 }, { name: "13OO", val: 1 }, { name: "33lokok", val: 3 }];


    //single array
    function assignSingleVal(testArr1) {
        var arrVal1 = [{ aVal: 1 }];
        var tac = 0;
        var taL = testArr1.length;

        for (; tac < taL;)
        {
            $.extend(true, testArr1[tac], arrVal1[0])
            tac++;
        }

        return JSON.stringify(testArr1);
    };

    $("div.10 >span.1").html(assignSingleVal(bobs));
   

    //multiple arrays
    function assignMVal(testArr1, testArr2, testArr3) {
        var taL1 = testArr1.length, taL2 = testArr2.length, taL3 = testArr3.length;
        var tac1 = 0; tac2 = 0; tac3 = 0;
        var arrVal = [{ aVal: 1 }, { aVal: 2 }, { aVal: 3 }]

        for (; tac1 < taL1;)
        {
            $.extend(true, testArr1[tac1], arrVal[0]);
            tac1++;
        }

        for (; tac2 < taL2;) {
            $.extend(true, testArr2[tac2], arrVal[1]);
            tac2++;
        }

        for (; tac3 < taL3;) {
            $.extend(true, testArr3[tac3], arrVal[2]);
            tac3++;
        }

        var groupArr = testArr1.concat(testArr2, testArr3);

        //groupArr.sort(function (a, b) { return parseInt(a.val) - parseInt(b.val) });

        //measure # unique Val values       //find way to create arrVal[] with this
            var gac = 0;
            var gaL = groupArr.length;
            var valType = [];
            //for (; gac < gaL;)
            //{
            //    if (valType.indexOf(groupArr[gac].val) < 0)
            //    {
            //        valType.push(groupArr[gac].val);
            //    }
            //    gac++;
            //}
        //create  3 types array by val type, then sort by array Val, then concat

            //create 3 types arrays by val type
                var valType1 = [], valType2 = [], valType3 = [];

                for (;gac < gaL;)   //works
                {
                    if (groupArr[gac].val == 1)
                    {
                        valType1.push(groupArr[gac]);
                   
                    }
                    else if (groupArr[gac].val == 2)
                    {
                         valType2.push(groupArr[gac]);
                    }
                    else
                    {
                        valType3.push(groupArr[gac]);
                    }
                    gac++;
                }
           
                $("div.11 span.1").html(JSON.stringify(valType1));   //works

            //sort each val array by arrayVal type
            valType1.sort(function (a, b) { return parseInt(a.aVal) - parseInt(b.aVal) });  //works
                        $("div.11 span.2").html(JSON.stringify(valType1));
            valType2.sort(function (a, b) { return parseInt(a.Val)- parseInt(b.Val)});
            valType3.sort(function (a, b) { return parseInt(a.Val) - parseInt(b.Val) });

            //concat
            groupArr = valType1.concat(valType2, valType3);

            return JSON.stringify(groupArr);
    }

    $("div.10 span.2").html(assignMVal(bobs, kits, coms));


    //create mroe dynamic fn
  

            //Basics:
                //how to push object into array
                 var ingred = [{ name: "pot" }, {name: "pan"}];
                ingred.push({ name: "spatula" });
                 var green = [{name: "spoon"}]
                 ingred.push(green[0]);
                 console.log(JSON.stringify(ingred));

                 //add new key to object 
                var pops = {fName: "pee"};
                var krill = {lName: "www"};
    
                $.extend(true, pops, krill);    //recursive, target obj, stuff to add       //$.extend only wokrs wiht objects
                $("div.7 span.1").html(JSON.stringify(pops));

                //add new key to object inside array
                var poo = [{ fName: "ppp" }];
                var bear = [{lName: "bear"}];

                $.extend(true, poo[0], bear[0]);
                $("div.7 span.2").text(JSON.stringify(poo[0]));

                //prac forEach loop

                var num = [0, 2, 4];
                $("div.7 span.3").text(num.join(", "))

                num.forEach(function (value, index, item) {
                    item[index] = value*5;
                });

                $("div.7 span.4").text(JSON.stringify(num));

                //prac for loop
                var num1 = [0, 2, 4];
                
                $("div.8 span.1").text(num1.join(", "));

                function addNum(testArray) {
                    var nc = 0;
                    var aL = testArray.length;
                    for (;nc < aL;)
                    {
                        testArray[nc] = testArray[nc] + 2;
                        nc++;
                    }

                    return testArray;
                }

                $("div.8 span.2").text(addNum(num1));

                //add new key to all objects inside array
                    //foreach
                    var ko = [{ fn: "a" }, { fn: "b" }, { fn: "c" }];
                    var li = [{ ln: "hebejao" }];

                    $("div.7 span.5").text(JSON.stringify(ko));

                    ko.forEach(function (value, index, item) {
                        item[index] = $.extend(true, item[index], li[0]);
                    });

                    $("div.7 span.6").text(JSON.stringify(ko));

                    //for
                    var ko1 = [{ fn: "dd" }, { fn: "mm" }, { fn: "oo" }];
                    var li1 = [{ ln: "zonax" }];

                    $("div.8 span.3").text(JSON.stringify(ko1));

                    function koLi(firstArray) {
                        var kc = 0;
                        var faL = firstArray.length;

                        for (; kc < faL;)
                        {
                            firstArray[kc] = $.extend(true, firstArray[kc], li1[0]);
                            kc++;
                        }

                        return JSON.stringify(firstArray);
                    };

                    $("div.8 span.4").text(koLi(ko1));
            
                //how to sense how many unique types of elements are there.
                var color = ["red", "green", "yellow", "red"];
                var colorType = ["yellow", "green"];

                //basic match based on index
                if (color[0] == colorType[0]) {
                    $("div.9 span.1").html(color[0] + " matches " + colorType[0]);
                } else {
                    $("div.9 span.1").html(color[0] + " DN matches " + colorType[0]);
                }

                //basic match based on all values inside another basic array
                var ctc = 0;
                var ctL = colorType.length;

                function ctComp(testElem) {
                    //if (colorType.indexOf(testElem) > -1)
                    //{
                    //    $("div.9 span.2").html(testElem + " found in: " + colorType.indexOf(testElem));
                    //}
                    //else
                    //{
                    //    $("div.9 span.2").html(testElem + ": NA");
                    //}
                    (colorType.indexOf(testElem) > -1) ? $("div.9 span.2").html(testElem + " found in: " + colorType.indexOf(testElem)) : $("div.9 span.2").html(testElem + ": NA");
                }

                $("div.9 span.2").html(ctComp(color[1]));

                 //basic find # of unique values
                var red = ["red", "red0", "red", "red1", "red", "red2"];

                function uniRed(testArray) {
                    var tc = 0;
                    var redType = [];
                    var taL = testArray.length;

                    for (; tc < taL;) {
                        if (redType.indexOf(testArray[tc]) < 0) {
                            redType.push(testArray[tc]);
                            console.log(redType.length);
                        }
                        tc++;
                    }

                    return redType.length + " unique types <br> different types: " + redType.join(", ");
                }

                $("div.9 span.3").html(uniRed(red));

         


    //5b. Now do 5.0 and 5.a via custom sort fn (what if we're parsing alphabets, not integers?) What if we're parsing alphabets AND integers all at once?


    //6. Assign two diff priority values as wild cards. one could go after another


    //6. sort arrays based on prop i.e. age and first name, and first name + last name combo

    //7. generate a certain number of random array elems

    //8. generate an x # of random array elems that choose from random prop values based on random prop val

    //9. generate random numbers, assign them to array elems, then sort them bsaed on that random #

   
    //see how js sort works
    //testArray = [2, 65, 4, 3, 34, 90];
    //testArray.sort(function (a, b) {
    //    console.log("comparing " + a + ", " + b);
    //    return a - b
    //});



});