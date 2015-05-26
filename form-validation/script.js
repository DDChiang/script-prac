var rangeObj;

$(function () {


    function validChecker() {
        var inpObj = document.getElementById("id1");
        //var inpObj = $("span#id1");  //<-- checkValidity seems to work wiht only javascript id selector object. not with jquery's
        if (inpObj.checkValidity() == false) {
            $("#demo").html(inpObj.validationMessage);
        } else {
            $("#demo").html("Input OK");
        }
    }

    
});
