$(".startscreen").click(function() {
    $(".page1").show();
    $(".Mission").show();
    $(".startscreen").slideUp();

});
$(".M1choice1").click(function() {
    $(".page1").hide();
    $(".Mission").text("Glad you accepted! Find and slay the dragon in the South!");
    $(".page2").show();
});
$(".M1choice2").click(function() {
    $(".page1").hide();
    $(".Mission").text("Hmph! Who doesn't want an adventure...");
    $(".page2a").show();
});
$(".M2continue").click(function() {
    $(".page2").hide();
    $(".Mission").text("On your way to the dragon, you spot a shiny sword on the ground. Click the image twice to pick up the sword and scabbard.");
    $(".page3").show();
});
$(".M3no").click(function() {
    $(".page3").hide();
    $(".Mission").text("Bro you really gonna square up a dragon with your fists?");
    $(".page3a").show();
});
$(".sword").dblclick(function() {
    $(".page3").hide();
    $(".Mission").text("You eventually meet the dragon face to face. Will you really slay this beast?");
    $(".page4").show();
});
$(".M4c1").click(function() {
    $(".page4").hide();
    $(".Mission").text("The dragon begins attacking! Swing your sword across the dragon!");
    $(".page5").show();
});
$(".M4c2").click(function() {
    $(".page4").hide();
    $(".Mission").text("He seems pretty calm? Guess he wants to be friends too...");
    $(".page4a").show();
});
$(".finaldrag").hover(function() {
    $(".page5").hide();
    $(".Mission").text("Good job warrior! You have slain the dragon! Now wake up");
    $(".page6a").show();
});
$(".finalone").click(function() {
    $(".page6a").hide();
    $(".Mission").text(" ");
    $(".page6").show();
});