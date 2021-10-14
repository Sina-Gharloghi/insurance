$(document).ready

(function()
{
    $("#signup").hide();
    $("#forget").hide();

    $("#creat").click
    (function()
    {
        $("#signin").fadeToggle(0);
        $("#signup").fadeToggle(300);
    })

    $(".back").click
    (function()
    {
        $("#signin").fadeToggle(300);
        $("#signup").fadeToggle(0);
    })

    $("#recover").click
    (function()
    {
        $("#signin").fadeToggle(0);
        $("#forget").fadeToggle(300);
    })

    $(".back2").click
    (function()
    {
        $("#signin").fadeToggle(300);
        $("#forget").fadeToggle(0);
    })
}

)