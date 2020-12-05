var x = window.matchMedia("(max-width: 36em)")
        screenResponse(x)
        x.addListener(screenResponse)


function screenResponse(x) {
    if (x.matches) {
        // MOBILE SCREEN

        let streak = document.getElementById("currentStreak");

        streak.innerHTML = 0;

        let topStreak = document.getElementById("topStreak");

        topStreak.innerHTML = 0;


        $("img.optionImg").on("mouseover", function() {
            let choiceSize = $(this).width();
            if (choiceSize == 100) {
                $(this).css({
                "width": "90px",
                "margin": "0 10px"
                })
            }
        });

        $("img.optionImg").on("mouseout", function() {
            let choiceSize = $(this).width();
            //alert(choiceSize);
            if (choiceSize == 120) {
                $(this).css({
                "width": "80px",
                "margin": "0 15px"
                })
            }  
        })

        $("img.optionImg").on("click", function() {

            //selected option gets big
            $(this).css({
                "width": "100px",
                "margin": "0 5px"
            });
            $("img.optionImg").not(this).css({
                "width": "80px",
                "margin": "0 15px"
            })
            
            //opponent icon animates
            function pulseOut() {
                $("img.opponentsImg").animate({
                    "width":"100px"
                }, 200)
            }
            function pulseIn() {
                $("img.opponentsImg").animate({
                    "width":"80px"
                }, 200)
            }

            pulseOut();
            pulseIn();
            pulseOut();
            pulseIn();
            pulseOut();
            pulseIn();
            pulseOut();


            //opponent choice is made
            
            let playerChoice = $(this).attr("id");
            
            let randomNum = Math.random();
            let bigRandomNum = (randomNum * 3) + 1;
            let oppResult = Math.floor(bigRandomNum);
            
            if (oppResult == 1) {
                $("img.opponentsImg")
                .delay(0)
                .queue(function (next) {
                    $(this).attr("src", "https://lauratoddcode.github.io/rock-paper-scissors/images/rockOpp.png")
                    .css({
                        "width":"100px",
                        "margin": "0 5px"
                    })
                    next();
                }); 
            }
            else if (oppResult == 2) {
                $("img.opponentsImg")
                .delay(0)
                .queue(function (next) {
                    $(this).attr("src", "https://lauratoddcode.github.io/rock-paper-scissors/images/paperOpp.png")
                    .css({
                        "width":"100px",
                        "margin": "0 5px"
                    })
                    next();
                }); 
            }
            else if (oppResult == 3) {
                $("img.opponentsImg")
                .delay(0)
                .queue(function (next) {
                    $(this).attr("src", "https://lauratoddcode.github.io/rock-paper-scissors/images/scissorsOpp.png")
                    .css({
                        "width": "100px",
                        "margin": "0 5px"
                    });
                    
                    next();
                }); 
            }
            
            //winner is decided
            let playerWins = " ";
            if (playerChoice == "rock") {
                if (oppResult == 1) {
                playerWins = false;
                document.getElementById("result").innerHTML = "It's a draw";
                }
                if (oppResult == 2) {
                playerWins = false;
                document.getElementById("commentary").innerHTML = "Paper covers Rock";
                document.getElementById("result").innerHTML = "You lost";
                }
                if (oppResult == 3) {
                playerWins = true;
                document.getElementById("commentary").innerHTML = "Rock crushes Scissors";
                document.getElementById("result").innerHTML = "You win!";
                }
            }
            else if (playerChoice == "paper") {
                if (oppResult == 1) {
                playerWins = true;
                document.getElementById("commentary").innerHTML = "Paper covers Rock";
                document.getElementById("result").innerHTML = "You win!";
                }
                if (oppResult == 2) {
                playerWins = false;
                document.getElementById("result").innerHTML = "It's a draw";
                }
                if (oppResult == 3) {
                playerWins = false;
                document.getElementById("commentary").innerHTML = "Scissors cut Paper";
                document.getElementById("result").innerHTML = "You lost";
                }
            }
            else if (playerChoice == "scissors") {
                if (oppResult == 1) {
                playerWins = false;
                document.getElementById("commentary").innerHTML = "Rock crushes Scissors";
                document.getElementById("result").innerHTML = "You lost";
                }
                if (oppResult == 2) {
                playerWins = true;
                document.getElementById("commentary").innerHTML = "Scissors cut Paper";
                document.getElementById("result").innerHTML = "You win!";
                }
                if (oppResult == 3) {
                playerWins = false;
                document.getElementById("result").innerHTML = "It's a draw";
                }
            }
           
            
            // screen is blocked out and result displayed
            $("div#rpsmodal")
                .delay(2800)
                .queue(function (next) {
                $(this).css({
                    "opacity": "1",
                    "pointer-events": "auto"
                });
                $("#result").animate({
                    "font-size": "4em"
                }, 1000)
                next();  
            });
                
                
        });

        // screen is reset for new game
        $("button#resetBtn").on("click", function() {
            $("div#rpsmodal").css({
                "opacity": "0",
                "pointer-events": "none"
            })
            
            // scoreboard is updated
            if (document.getElementById("result").innerHTML == "You win!") {
                streak.innerHTML = parseInt(streak.innerHTML) + 1;
            }
            else if (document.getElementById("result").innerHTML == "You lost") {
                streak.innerHTML = 0;
            }
            
            if (parseInt(streak.innerHTML) > parseInt(topStreak.innerHTML)) {
                topStreak.innerHTML = streak.innerHTML;
            }
            
            $("img.opponentsImg").attr("src", "https://lauratoddcode.github.io/rock-paper-scissors/images/question.png")

            
            $("#result")
            .delay(1000)
            .queue(function (next) {
                $(this).css({
                "font-size": "0.25em"
                })
                next();
            });

            $("#commentary")
            .delay(500)
            .queue(function (next) {
                $(this).text(
                    " "
                )
                next();
            });

            
            $("img.optionImg, img.opponentsImg").css({
                "width": "80px",
                "margin": "0 15px"
            })
        });



    }
    else {
        // TABLET & DESKTOP SCREEN

        let streak = document.getElementById("currentStreak");

        streak.innerHTML = 0;

        let topStreak = document.getElementById("topStreak");

        topStreak.innerHTML = 0;


        $("img.optionImg").on("mouseover", function() {
            let choiceSize = $(this).width();
            if (choiceSize == 100) {
                $(this).css({
                "width": "120px",
                "margin": "0 20px"
                })
            }
        });

        $("img.optionImg").on("mouseout", function() {
            let choiceSize = $(this).width();
            //alert(choiceSize);
            if (choiceSize == 120) {
                $(this).css({
                "width": "100px",
                "margin": "0 30px"
                })
            }  
        })

        $("img.optionImg").on("click", function() {

            //selected option gets big
            $(this).css({
                "width": "140px",
                "margin": "0 10px"
            });
            $("img.optionImg").not(this).css({
                "width": "100px",
                "margin": "0 30px"
            })
            
            //opponent icon animates
            function pulseOut() {
                $("img.opponentsImg").animate({
                    "width":"140px"
                }, 200)
            }
            function pulseIn() {
                $("img.opponentsImg").animate({
                    "width":"100px"
                }, 200)
            }

            pulseOut();
            pulseIn();
            pulseOut();
            pulseIn();
            pulseOut();
            pulseIn();
            pulseOut();


            //opponent choice is made
            
            let playerChoice = $(this).attr("id");
            
            let randomNum = Math.random();
            let bigRandomNum = (randomNum * 3) + 1;
            let oppResult = Math.floor(bigRandomNum);
            
            if (oppResult == 1) {
                $("img.opponentsImg")
                .delay(0)
                .queue(function (next) {
                    $(this).attr("src", "https://lauratoddcode.github.io/rock-paper-scissors/images/rockOpp.png")
                    .css({
                        "width":"140px",
                        "margin": "0 10px"
                    })
                    next();
                }); 
            }
            else if (oppResult == 2) {
                $("img.opponentsImg")
                .delay(0)
                .queue(function (next) {
                    $(this).attr("src", "https://lauratoddcode.github.io/rock-paper-scissors/images/paperOpp.png")
                    .css({
                        "width":"140px",
                        "margin": "0 10px"
                    })
                    next();
                }); 
            }
            else if (oppResult == 3) {
                $("img.opponentsImg")
                .delay(0)
                .queue(function (next) {
                    $(this).attr("src", "https://lauratoddcode.github.io/rock-paper-scissors/images/scissorsOpp.png")
                    .css({
                        "width": "140px",
                        "margin": "0 10px"
                    });
                    
                    next();
                }); 
            }
            
            //winner is decided
            let playerWins = " ";
            if (playerChoice == "rock") {
                if (oppResult == 1) {
                playerWins = false;
                document.getElementById("result").innerHTML = "It's a draw";
                }
                if (oppResult == 2) {
                playerWins = false;
                document.getElementById("commentary").innerHTML = "Paper covers Rock";
                document.getElementById("result").innerHTML = "You lost";
                }
                if (oppResult == 3) {
                playerWins = true;
                document.getElementById("commentary").innerHTML = "Rock crushes Scissors";
                document.getElementById("result").innerHTML = "You win!";
                }
            }
            else if (playerChoice == "paper") {
                if (oppResult == 1) {
                playerWins = true;
                document.getElementById("commentary").innerHTML = "Paper covers Rock";
                document.getElementById("result").innerHTML = "You win!";
                }
                if (oppResult == 2) {
                playerWins = false;
                document.getElementById("result").innerHTML = "It's a draw";
                }
                if (oppResult == 3) {
                playerWins = false;
                document.getElementById("commentary").innerHTML = "Scissors cut Paper";
                document.getElementById("result").innerHTML = "You lost";
                }
            }
            else if (playerChoice == "scissors") {
                if (oppResult == 1) {
                playerWins = false;
                document.getElementById("commentary").innerHTML = "Rock crushes Scissors";
                document.getElementById("result").innerHTML = "You lost";
                }
                if (oppResult == 2) {
                playerWins = true;
                document.getElementById("commentary").innerHTML = "Scissors cut Paper";
                document.getElementById("result").innerHTML = "You win!";
                }
                if (oppResult == 3) {
                playerWins = false;
                document.getElementById("result").innerHTML = "It's a draw";
                }
            }

            
            // screen is blocked out and result displayed
            $("div#rpsmodal")
                .delay(2800)
                .queue(function (next) {
                $(this).css({
                    "opacity": "1",
                    "pointer-events": "auto"
                });
                $("#result").animate({
                    "font-size": "5em"
                }, 1000)
                next();  
            });
                
                
        });

        // screen is reset for new game
        $("button#resetBtn").on("click", function() {
            $("div#rpsmodal").css({
                "opacity": "0",
                "pointer-events": "none"
            })
            
            // scoreboard is updated
            if (document.getElementById("result").innerHTML == "You win!") {
                streak.innerHTML = parseInt(streak.innerHTML) + 1;
            }
            else if (document.getElementById("result").innerHTML == "You lost") {
                streak.innerHTML = 0;
            }
            
            if (parseInt(streak.innerHTML) > parseInt(topStreak.innerHTML)) {
                topStreak.innerHTML = streak.innerHTML;
            }
            
            $("img.opponentsImg").attr("src", "https://lauratoddcode.github.io/rock-paper-scissors/images/question.png")

            
            $("#result")
            .delay(1000)
            .queue(function (next) {
                $(this).css({
                "font-size": "0.25em"
                })
                next();
            });

            $("#commentary")
            .delay(500)
            .queue(function (next) {
                $(this).text(
                    " "
                )
                next();
            });

            
            $("img.optionImg, img.opponentsImg").css({
                "width": "100px",
                "margin": "0 30px"
            })
        });

        

    }
}

