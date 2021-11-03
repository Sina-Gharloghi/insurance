$(document).ready

(function()
{
    $("#page2").hide();
    $("#page3").hide();

    $("#continue1").click(function () {
        $("#page1").hide();
        $("#page3").hide();

        $("#page2").fadeIn();
    })

    $("#continue2").click(function () {
        $("#page2").hide();
        $("#page1").hide();

        $("#page3").fadeIn();
    })

    $("#previous1").click(function () {
        $("#page2").hide();
        $("#page3").hide();

        $("#page1").fadeIn();
    })

    $("#previous2").click(function () {
        $("#page3").hide();
        $("#page1").hide();

        $("#page2").fadeIn();
    })
})