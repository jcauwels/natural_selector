/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var targetString = "<p>The simple answer is that it can't, and it didn't. Mutation is random, but Natural Selection is anything but. In order to understand Natural Selection, there are three logically obvious and easily observable facts that must be understood:</p><ol><li>Life replicates itself.</li><li>Occasionally, randomly, genes change to a form that is not possessed by either parent (mutation). These mutations can be either harmful or beneficial.</li><li>Traits which are harmful will make an organism less likely to survive to reproduce. Traits that are beneficial will make an organism more likely to survive to reproduce.</li></ol><p>Those are the ingredients in the recipe for Natural Selection. Add a great deal of time to the mix, and species will change to adapt to their environment to ensure their survival. It is neither guided intelligently nor occurring randomly, any more than a puddle that forms in a pothole after a storm is shaped intelligently or randomly by the shape of the pothole.</p><p>To demonstrate, beginning with a one character string (DNA), characters are generated randomly (mutation), and then selected for \"correctness.\" Every iteration (generation) carries a small chance of increasing the size of the string.</p><p>This is, of course, a gross oversimplification of the processes involved, but it demonstrates the power of combining random change with non-random selection over time. This particular body of text has 1877 characters, each of which is chosen randomly from the total of 93 available characters, including spaces and punctuation. The odds of this whole block of text appearing by randomly choosing characters in this manner are a staggering 1:2.70x10<span class=\"power\">304</span>, but by selecting \"correct\" characters and repeating the process countless times, you can watch as, before your very eyes, the impossible becomes inevitable.</p>";
var checkString = [];
var availChars = ['1','2','3','4','5','6','7','8','9','0','-','=','!','@','#','$','%','^','&','*','(',')','_','+','q','w','e','r','t','y','u','i','o','p','Q','W','E','R','T','Y','U','I','O','P','a','s','d','f','g','h','j','k','l','A','S','D','F','G','H','J','K','L','z','x','c','v','b','n','m','Z','X','C','V','B','N','M','[',']','\\','{','}','|',';','\'',':','"',',','.','/','<','>','?',' '];

function generate(param) { //a function to generate a random character
    if (checkString[param] !== targetString[param]) { //only generate a new character if not correct
        indexToUse = Math.floor(Math.random() * 93);
        checkString[param] = availChars[indexToUse];
    }
} //end generate function

function iterate() {
    var indexToUse;
    for(var i=0; i < 1877; i++) { //loop through each character of random string
        generate(i);
    }
    var r = checkString.join('');
    $('#results').html(r);
    return r;
}

function reiterate() {
    var result = setInterval(function(){
        var resultString = iterate();
        if (resultString === targetString) {
            clearInterval(result);
        }
    },50);          
}

$(function() { //set event listener when page is loaded
    $('#start').click(function(){ //start things when link is clicked
        $("#chart").fadeOut("slow"); //Fade out picture
        $("h1").animate({top:"0px"},"slow");
        $("h2").hide();
        reiterate();
    });
});
    