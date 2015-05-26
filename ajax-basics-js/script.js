function changeCont() {
    //create new HTTP Request object
    //variable = new XMLHTTPRequest();
    //IE5 and IE6 use ActiveX to handle
    var xmlhttp;

    //check if window can handle HTTP Requests
    if (window.XMLHttpRequest) {
        //code if good to go
        xmlhttp = new XMLHttpRequest();
       
    }
    else {
        //code for oldies
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //go
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            $("div.2").html(xmlhttp.responseText);
        }
    };

    xmlhttp.open("get", "1.txt", true);
    xmlhttp.send();

}

$(function () {
    
    
});