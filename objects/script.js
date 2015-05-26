$(function() 
{
    var person = "jake Go";

    //simple object
    var persona = { fName: "John", lName: "Go", age: 50, eyeColor: "blue" };

    $("div.1 > span.1").html(persona.fName);

    //more complex object: 
    //object with function as prop

    var gecko =
    {
        fName: "Gecko",
        lName: "Joe",
        skinColor: "green",
        specs: function () {
            return this.fName + " " + this.lName + "'s skin color" + " is" + " " + this.skinColor + ".";    //use "this" inside native js stuff or objects
        }
    };

    $("div.1 > span.2").html(gecko.specs());

    //object w fn as prop : real world app
    //passing and stringing together member's data inside profile after creating member object
        
    var rnMbr =
    {
        fName: "Jock",
        lName: "Pock",
        interests: ["fishing", "skiing", "eating drill bits"],
        married: true,
        bio: function () {
            return "Meet " + this.fName + " " + this.lName + " . He loves " + this.interests.join(", ") + ". <br>And...";
            //+ function () {
            //    if (this.married == true) {
            //        return "he loves his wife :(";
            //    }
            //    else {
            //        return "he's single!";
            //    }
            //}
            
            
        }
        //bio: function () {
        //    return this.fName + " " + this.lName;
        //}
    };

    function mbrBio(member) {
            if (member.married == true) {
                return "he loves his wife :(";
            }
            else {
                return "he's single!";
            }
    };

    $("div.1 > span.3").html(rnMbr.bio() + mbrBio(rnMbr));
    

    //trivia
            // diff btw $(this) and this

            $(".momma").on("click", function () {
                //this.css({ "background": "green" });     
                //$(this).css({ "background": "green" });   //use $(this) for selecting html stuff
                   
            });

    /* Using Object Constructor*/
    //standard way of creating object : using an object constructor =  create an object type that can be used to create many objects of one type
    

    function persono(fNamer, lNamer, age, race) {
        this.fName = fNamer;
        this.lName = lNamer;
        this.age = age;
        this.race = race;
    }

    var persona1 = new persono("Kill", "Bill", 25, "caucasia");
    var persona2 = new persono("Suri", "Lee", 22, "asian");
    var persona3 = new persono("John", "Chou", 24, "asian");
    //but not the greatest way to create object. too difficult to manipulate, measure, extend etc.

    //count objects

         console.log(Object.keys(persono).length);   //counting object instances made by object constructor is HARD... dn work 

   /*Best way to create object: arrays*/
    
    var fruit = [
        { name: "banana", health: "med", color: "yellow" },
        { name: "apple", health: "above", color: "red" },
        { name: "grape", health: "Ave", color: "purple" }
    ];

    fCount = fruit.length;

    //loop through variables with numbers
        //loop through and write into separate appended elems

    counter = 0;
    text = "";
    for (; counter < fCount;)
    {
        text += "<span class=" + counter + ">" + fruit[counter].name + " " + fruit[counter].health + " " + fruit[counter].color + "</span><br>";
        counter++;
    }

    $("div.2").html(text);

    console.log(fruit[1].name);

    //loop in a loop

    counter1 = 0;
    text1 = "";
    textP = "";

    //for (; counter1 < fCount;)
    //{
    //    for (x in fruit[counter1])
    //    {
    //        textP += fruit[counter1].x + " ";    
    //    }

    //    text1 += "<span class=" + counter1 + ">" + textP + "</span><br>";
    //    counter1++;

    //}

   
    //$("div.3").html(text1);


    //loop through props of reg object
    var fruita = { name: "banana", color: "yellow", health: "Above" };

    for (x in fruita)
    {
        textP += fruita[x] + " ";    
    }

    console.log(textP);

    //loop thru props of array object

    var fruitb = [{ name: "banana", health: "med", color: "yellow" }, {name: "bob apples", health: "med", color: "red"}];

    var fBL = fruitb.length;
    
    text2 = "";
    counter3 = 0;

    for (; counter3 < fBL;)
    {
        text2 += "<span class=" + counter3 + ">" + fruitb[counter3].name + " " + fruitb[counter3].health + " " + fruitb[counter3].color + " </span><br>"

        counter3++;
    }

    $("div.3").html(text2);

    //for (x in fruitb[0])
    //{
    //    text2 = fruitb[0].x + " ";
    //}

    //$("div.3").html(text2);


    //fruitb.forEach(
    //    function (arrayItem) {
    //        var x = arrayItem.x + " ";
    //        console.log(x);
    //});


    //for (var j = 0; j < fruitb.length; j++) {
    //    console.log(fruitb[j].x);
    //}

   

    //console.log(fruitb[0].name);

    //practice creating objects from user input (fake form to data)


});