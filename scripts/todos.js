// IMPORTANT NOTES: use .on() rather than .click() because click only add listeners to existing elements 
// Whereas, .on() adds listeners to potential future elements

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    if(event.which  === 13)
    {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'> </i></span> " + todoText + "</li>");
    }
});

$(".fa-angle-down").click(function(){
    $("input[type='text']").fadeToggle();
});