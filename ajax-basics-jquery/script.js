$(function () {

    //simple loading data
    $("div.1 button#1").click(function () {
        $("div.1 span.1").load("data.txt");
    });

    $("div.1 button#2").click(function () {
        $("div.1 span.2").load("data.txt p");
    });

    //basic ajax call: $(selector).load(url, data, callback);
        //where data is querystring/key you wish to load

        //possible callback fn parameters: responseTxt, statusTxt, xhr
            //responseTxt = data/content you're trying to call
            //statusTxt = call status
            //xhr = XMLHttpRequest object
    $("div.2 button.1").click(function () {
        $("div.2 span.1").load("data1.txt", function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                $("div.2 span.2").html("it's a go");
            }
            if (statusTxt == "error") {
                $("div.2 span.2").html("Error:" + xhr.status + ": " + xhr.statusText);
            }
        });
    });

    ////get and post
    //$("div.3 button.1").click(function () {
        
    //    $.get("data1.txt", {}, function (data) {
    //        $("div.3 span.1").html(data);
    //    });

    //});

    $("div.3 button.1").click(function () {
         
        //$.get("data1.txt", function (data) {
        //    $("div.3 span.1").html(data);
        //    alert("Load was performed.");
        //});

        $.ajax({
            type: "GET",
            url: "data1.txt",
            dataType: "text"
        }).done(function (data) {
            $("div.3 span.1").html(data);
            $("div.3 span.2").text("it worked!");
        }).fail(function (jqXHR, textStatus, errorThrown) {
            alert("AJAX failed: " + textStatus + ", " + errorThrown);
        });
       

    });


    //$.post(URL, data, callback);
    $("div.4 button.1").click(function () {

       //$.post("data.asp",
        //    {
        //        name: "DeE",
        //        city: "Duck City"
        //    },
        //    function (data, status) {
        //        alert("Data: " + data + "\Status: " + status);
        //    });

        $.ajax({
            type: "POST",
            url: "data-json.txt",
            data: {name: "Dee", city: "Duck City" },
            dataType: "json"
        }).done(function (data) {

            alert(data.name);   //only retrieves 
        }).fail(function (jqXHR, textStatus, errorThrown) {
            alert("Post failed: " + textStatus + ", " + errorThrown);
        }).always(function () {
            alert("he");
        });

    });

    $("div.5 button.1").click(function () {
        $.ajax({
            type: "POST",
            url: "data-json.txt",
            data: {role: "dad", color:  "Green"},
            dataType: "json",
        }).done(function (data) {
            $("div.5 span.1").html(data.name);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            $("div.5 span.1").html("Error: " + textStatus + errorThrown);
        });
    });


    /*===============SOLVE SOLVE SOLVE SOLVE========================*/
    //execute reg ajax call with all three parameters

});