var input_days;
var input_months;
var input_years;

var currentTime = new Date();
var month = currentTime.getMonth() + 1;
var day = currentTime.getDate();
var year = currentTime.getFullYear();

function work(v){
    $("#"+v+ " .invalid_msg").removeClass("show");
    $("#"+v+ " input").removeClass("input_invalid");
}

function error(k){
    $("#"+k+" .invalid_msg").addClass("show");
    $("#"+k+" input").addClass("input_invalid");
}

function cal_Time(){
    input_days = document.getElementById("day").value;
    input_months = document.getElementById("month").value;
    input_years = document.getElementById("year").value;
    
    if(input_days>0 && input_days<32){
        work("d");
    }
    else{
        error("d");
    }

    if(input_months>0 && input_months<13){
        work("m");
    }
    else{
        error("m");
    }

    if(input_years>1900 && input_years<=year){
        work("y");
    }
    else{
        error("y");
    }

    if(input_days>0 && input_days<32 && input_months>0 && input_months<13 && input_years>1900 && input_years<=year){
        $("#cal_day").text(Math.abs(day - input_days));
        $("#cal_month").text(Math.abs(month - input_months));
        $("#cal_year").text(Math.abs(year - input_years));
    }
}

$(".arrow").click(function(){
    cal_Time();
});

$("#year").keypress(function (e) { 
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if(keycode == '13'){
        cal_Time();
    }
});

$(".n").keyup(function (event) {
    if (event.keyCode == 13) {
        textboxes = $("input.n");
        currentBoxNumber = textboxes.index(this);
        if (textboxes[currentBoxNumber + 1] != null) {
            nextBox = textboxes[currentBoxNumber + 1];
            nextBox.focus();
            nextBox.select();
        }
        event.preventDefault();
        return false;
    }
});
//For using backspace to move backward
// $(".n").keyup(function (event) {
//     if (event.keyCode == 8) {
//         textboxes = $("input.n");
//         currentBoxNumber = textboxes.index(this);
//         if (textboxes[currentBoxNumber - 1] != null) {
//             nextBox = textboxes[currentBoxNumber - 1];
//             nextBox.focus();
//             nextBox.select();
//         }
//         event.preventDefault();
//         return false;
//     }
// });


