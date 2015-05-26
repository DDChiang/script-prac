﻿$(function () {

    /*Cookies*/

    //Set COokies

    function setCookie(cname, cval, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cval + ";" + expires;

    }
    
    //get cookie
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length)

        }
        return "";

    }

    //check cookie
    function checkCookie() {
        var user = getCookie("username");
        if (user != "") {
            alert("Welcome again " + user);
        } else {
            user = prompt("Please enter name:", "");
            if (user != "" && user != null) {
                setCookie("username", user, 365);
            }
        }
    }

    checkCookie();
   
});
