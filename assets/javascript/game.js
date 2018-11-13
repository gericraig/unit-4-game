
$(document).ready(function (game) {

    // VARIABLEs_________________________________________________________________

    // Scores the will be shown on the screen
    var wins = 0;
    console.log("wins: " + wins);

    var losses = 0;
    console.log("losses: " + losses);

    var score = 0;
    console.log("score: " + score);

    // Resetting the game 
    comPick = Math.floor(Math.random() * 100) + 18;
    console.log("compPick: " + comPick);
    $(".randomNumber").html(comPick);


    // Have the computer randomly pick a number between 1 - 118 that the player has to math, changing each round
    var comPick = Math.floor(Math.random() * 100) + 19;
    console.log("compPick: " + comPick);
    $(".randomNumber").html(comPick);


    // Have the computer assign a random number between 1-12 that will be assigned to the four gems

    // (i = 0 ; i < 4 ; i++) 
    // var gemNumber = Math.floor(Math.random() * 12) + 1;
    // console.log("gemNumber: " + gemNumber); 

    var gemOne = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 1: " + gemOne);

    var gemTwo = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 2: " + gemTwo);

    var gemThree = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 2: " + gemThree);

    var gemFour = Math.floor(Math.random() * 12) + 1;
    console.log("Gem 2: " + gemFour);


    // record the score 

    if (newScore === compPick) {
        wins++;
        $(".wins").html("Wins: " + wins);
        console.log("Wins: " + wins);
        reset();

    }

    else if (newScore > compPick) {
        losses++;
        $(".losses").html("Losses: " + losses);
        console.log("Losses: " + losses);
        reset();

    }

    // Had to reseatch this last part. 

    $("img").on("click", function () {
        var newScore = score += parseInt($(this).attr("value"));
        console.log("New Score: " + newScore);
        $(".scoreDisplay").html(newScore);

        if (newScore === compPick) {
            wins++;
            $(".wins").html("Wins: " + wins);
            console.log("Wins: " + wins);
            reset();
        }

        else if (newScore > compPick) {
            losses++;
            $(".losses").html("Losses: " + losses);
            console.log("Losses: " + losses);
            reset();
        }






    }