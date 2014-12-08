//global variables

var userScoreCount = 0 ;
var pcScoreCount = 0;
var outcome = 0 ;
var playerFlag = false ;
var computerFlag = false ;

function user(ch, s){
	this.choice = ch ;
	this.score = s;
}

var player = new user();
var computer = new user();

player.score = 0 ;
computer.score = 0 ;

// add selection function to computer

computer.autoSelection = function () {
						var sChoice = Math.random();
						if ( sChoice < 0.33 ){
					    	 computer.choice = "rock" ;
					    } else if ( sChoice > 0.66){
					    	 computer.choice = "scissors" ;
					    } else {
					    	 computer.choice = "paper" ;
					    }

					    return computer.choice;
					};

//game function objects

var gamefunctions = new Object();

gamefunctions.outcomeDecision = function (u, c) {

							//local variables
							var userScoreID = "" ;
							var computerScoreID = "" ;

							//loop to determin the win

					if ((playerFlag == false) && ( computerFlag == false)){

						    if ( (u == "rock") && (c == "scissors" )||
							       ( u == "scissors") && (c == "paper" ) ||
							       ( u == "paper") && (c == "rock" ) ){
						    		userScoreCount++;
						    		userScoreID = "u_" + userScoreCount ;
						    		document.getElementById(userScoreID).style.color = "red" ;
									document.getElementById("outcome").innerHTML = "You Win" ;

									playerFlag = (userScoreCount == 3)? true : false ;

									/*if (userScoreCount == 3) { 
										document.getElementById("u_3").style.color = "red" ;
										playerFlag = true;
									} else if {
										playerFlag = false ;
									}*/
								
							 	} else if ( u === c){
						    		pcScoreCount++;
						    		computerScoreID = "c_" + pcScoreCount ;
						    		document.getElementById(computerScoreID).style.color = "red" ;
									document.getElementById("outcome").innerHTML = "You Suck" ;

									computerFlag = (pcScoreCount == 3)? true : false ;
									
									/*if (pcScoreCount == 3) { 
										document.getElementById("c_3").style.color = "red" ;
										computerFlag = true;
									} else if {
										computerFlag = false ;
									}*/

							  	} else {
							  		document.getElementById("outcome").innerHTML = "Draw" ;
							  	} 
					}

		 var clear = function () {
						var userID = "";
						var computerID = "" ;

						for(i = 1 ; i <= 3 ; i++ ){
							userID  = "u_" + i ;
							computerID = "c_" + i ;
							document.getElementById(userID).style.color = "" ;
							document.getElementById(computerID).style.color = "" ;
						}

						playerFlag = false ;
						computerFlag = false ;

						userScoreCount = 0 ;
						pcScoreCount = 0;

						
					};



					// Display Scores

					if( playerFlag == true ){
						player.score++;
						document.getElementById("human_scores").innerHTML = player.score ;
						document.getElementById("outcome").innerHTML = "Human Win This Round" ;
						clear();

					}else if ( computerFlag == true) {
						computer.score++;
						document.getElementById("computer_scores").innerHTML = computer.score ;
						document.getElementById("outcome").innerHTML = "Computer Win This Round" ;
						clear();
					}


				};

 var reset = function () {
					var userID = "";
					var computerID = "" ;


					for(i = 1 ; i <= 3 ; i++ ){
						userID  = "u_" + i ;
						computerID = "c_" + i ;
						document.getElementById(userID).style.color = "" ;
						document.getElementById(computerID).style.color = "" ;
					}

					// reset round scores
					userScoreCount = 0 ;
					pcScoreCount = 0;

					// reset scores
					computer.score = 0;
					player.score = 0;

					playerFlag = false ;
					computerFlag = false ;

					// reset images
					document.getElementById("userside").src = "img/human.jpg" ;
					document.getElementById("machineside").src = "img/machine.jpg" ;

					//reset outcome messsage
					document.getElementById("outcome").innerHTML =""; 
					document.getElementById("human_scores").innerHTML = "" ;
					document.getElementById("computer_scores").innerHTML = "" ;
					

					};


var playGame = function(element, choice){

	//player selection
	 player.choice = choice;
	 computer_choice = computer.autoSelection();

	switch(choice){
		case "rock":
			document.getElementById("userside").src = "img/human_rock.jpg" ;
			break;
		case "scissors":
			document.getElementById("userside").src = "img/human_scissors.jpg" ;
			break;
		case "paper":
			document.getElementById("userside").src = "img/human_paper.jpg" ;
			break;
		default:
			alert("There is an error");
	}

	//Computer selection

	switch(computer_choice){
		
		case "rock":
			document.getElementById("machineside").src = "img/robot_rock.jpg" ;
			break;
		case "scissors":
			document.getElementById("machineside").src = "img/robot_scissor.jpg" ;
			break;
		case "paper":
			document.getElementById("machineside").src = "img/robot_paper.jpg" ;
			break;
		default:
			alert("There is an error");
	}

	//Determine Outcome


	gamefunctions.outcomeDecision(choice, computer_choice);  

};










