$(function() {
	
    //loop basics
    var cars = ["car1", "car2", "Car3"];
    var i = 1;
    var carText = "";

    //for (i = 0; i < cars.length; i++) {
    //    carText += cars[i] + " ";

    //}

    for (;cars[i];) {
        carText += cars[i] + " ";
        i++
    }

    $("div.1 > span.1").html(carText);


    //json basics

        //1 obj
        var emp = '{"fName":"Albert", "lName" : "Barack"}';
        var obj = JSON.parse(emp);      // <--- must first convert string to json object

        $("div.2 > span.1").html(obj.fName + " " + obj.lName);

        //more than 1 obj
        var emp1 = '{"employees":[' +
            '{"fName": "Bob", "lName": "Green"},' +
            '{"fName": "Joe", "lName": "Hoey"}' + ']}';

        obj1 = JSON.parse(emp1);
        $("div.2 > span.2").html(obj1.employees[1].fName + " " + obj1.employees[1].lName);

    //entire json array aka ( object)   ::  loop through entire json array
        var emp2 = '{"employees" : [' + 
            '{"Name":"Bob Castillo", "Job":"QA Engineer"},' + 
            '{"Name": "Deedee Chiang", "Job":" Venturing Software Engineer"},' + 
            '{"Name": "Bong", "Job" : "Software Developer"}'+ ']}';

        var emp2Data = JSON.parse(emp2);
        
        var emp2DataArray = emp2Data['employees'];
        var emp2DataArrayLength = emp2Data['employees'].length;     //get length of array inside json object

        $("div.2 > span.3").html(emp2DataArrayLength);

        var emp2Counter = 0;
        var emp2DataText = "";

        for (; emp2Counter < emp2DataArrayLength;)
        {
            //recall emp2DataArray = emp2Data['employees']  <-- the array you're trying to read
            emp2DataText += emp2DataArray[emp2Counter].Name + " " + emp2DataArray[emp2Counter].Job + "<br>";    
            emp2Counter++;
        }
        
        $("div.2 > span.4").html(emp2DataText);  
    
    //return straight json "string" with json formatting


        //.stringify()   <-- returns json as straight string
            green = JSON.stringify(emp2);

            $("div.2 > span.5").html(green)


    //complex:
    //1. check and correct json formatting    before parsing 
    //2. return/write out items inside json object with certain features (return all people whose last name is more than 3 letters and start with "ch")

    //to be continued

    //
        

  

    
});