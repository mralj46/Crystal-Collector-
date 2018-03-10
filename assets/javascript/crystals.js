
var random_result; 
var lost = 0;
var win = 0;
var previous = 0;

//$(".crystal").attr(`class`);

    var resetandstart = function(){
    $(".crystals").empty();
        var ['crystal1.jpg',
            'crystal2.jpg', 
            'crystal3.jpg', 
            'crystal4.jpg'];

    random_result = Math.floor(Math.random() * 100) + 20;
        console.log("random_result");

    $("#result").html(`random:` + random_result);

for (var i =0; i < 4; i++){
    var random =Math.floor(Math.random() * 11) +1; 
        console.log("random");
    
    var crystals = $("<div>"); 
        crystals.attr({
        "class":`crystal`,
        "data-random": random
    });

    crystal.css({
        "background-image":"url(" + (image[i]) + ")",
        "background-size": "cover"
    });

        crystal.html(random);
    $(".crystals").append(crystal);
    }

    $("#previous").html("Total Score:" + previous);
}

resetandstart();

    $(document).on(`click`, ".crystal", function(){
        var num =parseInt($(this).attr(`data-random`));
        previous += num; 

        $("#previous").html("Total Score:" + previous);

if(previous > random_result){
    
    lost++; 
    $("#lost").html("You Lost" + (lost));
    previous =0;
    resetandstart();
}

else if(previous === random_result){

    win++;
    $("#win").html("You Win!!", + (win));
    previous =0;

    resetandstart();
    
    }
});
