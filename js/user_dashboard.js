$(document).ready

(function()
{
    $("#buy").hide();
    $("#manage").hide();
    $("#gifts").hide();
    $("#support").hide();

    $("#opt-env1").hover(function () {
        $(this).css("background-color" , "#407aad");
    } , function () {
        $(this).css("background-color" , "#5094cf");
    })

    $("#opt-env2").hover(function () {
        $(this).css("background-color" , "#407aad");
    } , function () {
        $(this).css("background-color" , "#5094cf");
    })

    $("#opt-env3").hover(function () {
        $(this).css("background-color" , "#407aad");
    } , function () {
        $(this).css("background-color" , "#5094cf");
    })

    $("#opt-env4").hover(function () {
        $(this).css("background-color" , "#407aad");
    } , function () {
        $(this).css("background-color" , "#5094cf");
    })

    $("#opt-env5").hover(function () {
        $(this).css("background-color" , "#407aad");
    } , function () {
        $(this).css("background-color" , "#5094cf");
    })

    /*----------------------------------------------------*/

    $("#opt-env1").click(function () {
        $("#buy").hide();
        $("#manage").hide();
        $("#gifts").hide();
        $("#support").hide();

        $("#profile").fadeIn(300);
    })

    $("#opt-env2").click(function () {
        $("#profile").hide();
        $("#manage").hide();
        $("#gifts").hide();
        $("#support").hide();

        $("#buy").fadeIn(300);
    })

    $("#opt-env3").click(function () {
        $("#profile").hide();
        $("#buy").hide();
        $("#gifts").hide();
        $("#support").hide();

        $("#manage").fadeIn(300);
    })

    $("#opt-env4").click(function () {
        $("#profile").hide();
        $("#manage").hide();
        $("#buy").hide();
        $("#support").hide();

        $("#gifts").fadeIn(300);
    })

    $("#opt-env5").click(function () {
        $("#profile").hide();
        $("#manage").hide();
        $("#gifts").hide();
        $("#buy").hide();

        $("#support").fadeIn(300);
    })
})
