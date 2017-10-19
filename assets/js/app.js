//define variables

$('#begin').on('click', function(){
	game.start();
})

var questionbank = [
{
	question: 'Who was the first superhero from Marvel Comics?',
	answers: ["Namor","Captain America","Spiderman"],
	correctAnswer: "Namor",
},

{
	question: 'What as the color of the hulk in his original debut?',
	answers: ["Green duh!","Gray","Red"],
	correctAnswer: "Gray",
},

{
	question: 'Who from the Guardians of the Galaxy is related to Thanos?',
	answers: ["Gamora","Drax the Destroyer","Thane"],
	correctAnswer: "Gamora",
},

{
	question: 'What is Mjolnir made out of?',
	answers: ["Adamantium","Vibranium","Uru"],
	correctAnswer: "Uru",
},


{
	question: 'What killed Mr. Immortal?',
	answers: ["Fire","Spear","Piranhas", "All of the Above"],
	correctAnswer: "All of the Above"
}];

var wins = 0;

var user = 0;

var getRandom = function(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


var game = {

	counter:30,

	start:function(){
		user = 0;
		timer = setInterval(game.countdown,1000);
		$('#begin').remove();
		
		game.assign();
		game.UserChoice();
		
	},

	//starts the countdown of the timer
	countdown:function(){
		
		$('#counter').html(game.counter);
		if(game.counter > 0)
		{
			game.counter--;
		}
		else	
		{
			$('#counter').html("Time's up!");
			game.gameOver();
		}
	},

	//assigns a random question
	assign:function(){
		random = getRandom(0,2);

			$('#Question').html(questionbank[random].question);
			$('#Answer1').html(questionbank[random].answers[0]);
			$('#Answer2').html(questionbank[random].answers[1]);
			$('#Answer3').html(questionbank[random].answers[2]);
			$('#Answer4').html(questionbank[random].answers[3]);
	},

	//collects a user choice
	UserChoice:function()
	{

			$('#Answer1').off().click(function() {
  			  user = $(this).text();
  			  game.checkWin(user);
  			});

			$('#Answer2').off().click(function() {
			   	user = $(this).text();
			    game.checkWin(user);
			});


			$('#Answer3').off().click(function() {
			    user = $(this).text();
			    game.checkWin(user);

				});


			$('#Answer4').off().click(function() {
			    user = $(this).text();
			    game.checkWin(user);
			});
	},

	//compares the choice with correct answer
	checkWin:function(x){
		console.log(x);
		correct = questionbank[random].correctAnswer;
		if(x === correct)

		{

			wins++;

			if(wins<10)
			{
				console.log(wins);
				game.Winner();
				game.nextRound();
			}
		}
		else
		{
				game.gameOver();
		}
	},

	Winner:function(){
		$('#Question').html("YOU WIN!");
	},

	nextRound:function(){
		game.assign();
		game.UserChoice();
	},

	reset:function(){
		counter = 10;
	},

	gameOver:function(){
		$('#Question').html("Wins:" + wins);
		$('#Answer1').remove();
		$('#Answer2').remove();
		$('#Answer3').remove();
		$('#Answer4').remove();
	}
}