$(document).ready(function () {
  

	var isCharacterChosen = false;
	var isEnemyChosen = false;
	var jarHealth = 100;
	var obiHealth = 120;
	var grievousHealth = 160;
	var vaderHealth = 200;
	var isAlive = true;
	var chosenCharacter = 0;
	var chosenEnemy = 0;
	var attack = 0;
	var health = 0;
	var wins = 0;
	var array = ["Jar Jar", "Obi-Wan", "Grievous", "Vader"];
	var damageTaken = 0;

	var checkOccupancy = function (){
		if (!isEnemyChosen) {
				$(".command").html("No Contest");
		}
		else {
				$(".command").html("");
		}
		if (wins ==3){

			$(".winner").show();
			$(".command").html("You Won!");

		}
	};

	var reset = function (){

		location.reload();

	}

	var getHealth = function (){

		if ((chosenCharacter == 1) && (health >=0) && (isEnemyChosen)){
			if (chosenEnemy == 2){
				damageTaken += 15;
			}
			if (chosenEnemy == 3){
				damageTaken += 20;
			}
			if (chosenEnemy == 4){
				damageTaken += 25;
			}
			health = jarHealth - damageTaken;
			$("#Jar-Jar-health").html(health);
			console.log(health);
		}
		if ((chosenCharacter == 2) && (health >=0) && (isEnemyChosen)){
			if (chosenEnemy == 1){
				damageTaken += 10;
			}
			if (chosenEnemy == 3){
				damageTaken += 20;
			}
			if (chosenEnemy == 4){
				damageTaken += 25;
			}

			health = obiHealth - damageTaken;
			$("#Obi-Wan-health").html(health);
			console.log(health);


		}
		if ((chosenCharacter == 3) && (health >=0) && (isEnemyChosen)){
			if (chosenEnemy == 1){
				damageTaken += 10;
			}
			if (chosenEnemy == 2){
				damageTaken += 25;
			}
			if (chosenEnemy == 4){
				damageTaken += 25;
			}

			health = grievousHealth - damageTaken;
			$("#Grievous-health").html(health);
			console.log(health);


		}
		if ((chosenCharacter == 4) && (health >=0) && (isEnemyChosen)){
			if (chosenEnemy == 1){
				damageTaken += 10;
			}
			if (chosenEnemy == 2){
				damageTaken += 15;
			}
			if (chosenEnemy == 3){
				damageTaken += 20;
			}

			health = vaderHealth - damageTaken;
			$("#Vader-health").html(health);
			console.log(health);


		}
		
	};

	var changeBoolean = function (){
		isCharacterChosen = true;
		// console.log(isCharacterChosen);
	};

	// if (isCharacterChosen === false) {
		$(".Jar-Jar").click(function() {
			if (!isCharacterChosen) {
			
			$("#chosen-character").replaceWith($(".Jar-Jar"));
			$("#empty-1").replaceWith($(".Obi-Wan"));
			$("#empty-2").replaceWith($(".Grievous"));
			$("#empty-3").replaceWith($(".Vader"));

			chosenCharacter = 1;
			console.log(chosenCharacter);


			// $(".wrapper").attr("class", "enemies");
			$(".Obi-Wan").css("background-color", "red");
			$(".Grievous").css("background-color", "red");
			$(".Vader").css("background-color", "red");


			
			changeBoolean();

			
			
			console.log("Jar Jar has been clicked");
		}
			changeBoolean();
			

		});
		$(".Obi-Wan").click(function() {
			if (!isCharacterChosen) {

			
			$("#chosen-character").replaceWith($(".Obi-Wan"));
			$("#empty-1").replaceWith($(".Jar-Jar"));
			$("#empty-2").replaceWith($(".Grievous"));
			$("#empty-3").replaceWith($(".Vader"));

			chosenCharacter = 2;
			console.log(chosenCharacter);



			// $(".wrapper").attr("class", "enemies");
			$(".Jar-Jar").css("background-color", "red");
			$(".Grievous").css("background-color", "red");
			$(".Vader").css("background-color", "red");
			
			changeBoolean();

			

			// $("#enemies").css("background", "red");



			
			console.log("Obi-Wan has been clicked");
		}
			changeBoolean();
		
			


		});
		$(".Grievous").click(function() {
			if (!isCharacterChosen) {

			
			$("#chosen-character").replaceWith($(".Grievous"));
			$("#empty-1").replaceWith($(".Jar-Jar"));
			$("#empty-2").replaceWith($(".Obi-Wan"));
			$("#empty-3").replaceWith($(".Vader"));

			chosenCharacter = 3;
			console.log(chosenCharacter);


			// $(".wrapper").attr("class", "enemies");
			$(".Jar-Jar").css("background-color", "red");
			$(".Obi-Wan").css("background-color", "red");
			$(".Vader").css("background-color", "red");
		
			changeBoolean();
			console.log(isCharacterChosen);


			

			
			console.log("Grievous has been clicked");
		}
			changeBoolean();
			
		


		});
		$(".Vader").click(function() {
			if (!isCharacterChosen) {
			
			$("#chosen-character").replaceWith($(".Vader"));
			$("#empty-1").replaceWith($(".Jar-Jar"));
			$("#empty-2").replaceWith($(".Obi-Wan"));
			$("#empty-3").replaceWith($(".Grievous"));

			chosenCharacter = 4;

			// $(".wrapper").attr("class", "enemies");
			$(".Jar-Jar").css("background-color", "red");
			$(".Obi-Wan").css("background-color", "red");
			$(".Grievous").css("background-color", "red");
			
			console.log(chosenCharacter);
			changeBoolean();
			console.log(isCharacterChosen);



			
			console.log("Vader has been clicked");
		}
			changeBoolean();
			console.log(isCharacterChosen);
			


		});
		console.log(isCharacterChosen);
		
		// if ((isEnemyChosen == false) && (isCharacterChosen == true)){
				$(".Jar-Jar").click(function() {
					if ((chosenCharacter != 1) && (isCharacterChosen) && (!isEnemyChosen) && (health >=0)) {

						console.log("ok");
						$(".defender").replaceWith($(".Jar-Jar"));
						$(".Jar-Jar").css("background-color", "black");
						isEnemyChosen = true;
						chosenEnemy = 1;
						checkOccupancy();

					}
				});
			
			// if (chosenCharacter !== "Obi-Wan") {

			$(".Obi-Wan").click(function() {
			 	if ((chosenCharacter != 2) && (isCharacterChosen) && (!isEnemyChosen) && (health >=0)) {

					console.log("ok");
					$(".defender").replaceWith($(".Obi-Wan"));
					$(".Obi-Wan").css("background-color", "black");
					isEnemyChosen = true;
					chosenEnemy = 2;
					checkOccupancy();



				}
			});
			
			// if (chosenCharacter !== "Grievous"){

			$(".Grievous").click(function() {
					if ((chosenCharacter != 3) && (isCharacterChosen) && (!isEnemyChosen) && (health >=0)) {

						console.log("ok");
						$(".defender").replaceWith($(".Grievous"));
						$(".Grievous").css("background-color", "black");
						isEnemyChosen = true;
						chosenEnemy = 3;
						checkOccupancy();


					}
			});
			
			

			$(".Vader").click(function() {
				if ((chosenCharacter != 4) && (isCharacterChosen) && (!isEnemyChosen) && (health >=0)) {

				// if (isCharacterChosen == true && chosenCharacter !== "Vader") {
					console.log("ok");
					$(".defender").replaceWith($(".Vader"));
					$(".Vader").css("background-color", "black");
					isEnemyChosen = true;
					chosenEnemy = 4;
					checkOccupancy();



				}
			});
			
			$(".button").click(function() {
						getHealth();
						checkOccupancy();

				if ((isCharacterChosen) && (isEnemyChosen) && (health >=0)) {
					if (chosenEnemy == 1){
						
						attack += 8;
						jarHealth = jarHealth - attack;

						$(".command").html("You attacked Jar Jar for " + attack + " damage.");
						$(".command").append("<br>Jar Jar attacked you for 10 damage.");
						// damageTaken += 10;

						$("#Jar-Jar-health").html(jarHealth);
						console.log("attack");
						console.log(jarHealth);
							
							if (jarHealth <= 0) {
								$(".Jar-Jar").remove();
								$(".parent").append("<div class='defender'>");
								isEnemyChosen = false;
								wins++;
								if (wins === 3) {
									console.log("winner");
									$(".winner").show();
									$(".command").html("You Won!");

								}
								else {
									$(".command").html("You have defeated Jar Jar Binks, you can choose to fight another enemy.");
									$(".command").show();


								}
								

							}
					}

				}
						// $("#Jar-Jar-health").html(jarHealth);


				if ((isCharacterChosen) && (isEnemyChosen) && (health >=0)) {
					if (chosenEnemy == 2){
						attack += 8;
						obiHealth = obiHealth - attack;

						$(".command").html("You attacked Obi-Wan Kenobi for " + attack + " damage.");
						$(".command").append("<br>Obi-Wan attacked you for 15 damage.");
						// damageTaken += 15;


						$("#Obi-Wan-health").html(obiHealth);
						console.log("attack");
						console.log(obiHealth);
							
							if (obiHealth <= 0) {

								$(".Obi-Wan").remove();
								$(".parent").append("<div class='defender'>");
								
								isEnemyChosen = false;
								wins++;
								if (wins === 3) {
									console.log("winner");
									$(".winner").show();
									$(".command").html("You Won!");

								}
								else {

									$(".command").html("You have defeated Obi-Wan Kenobi, you can choose to fight another enemy.");
									$(".command").show();


								}

							}
					}

				}
						// $("#Obi-Wan-health").html(obiHealth);


				if ((isCharacterChosen) && (isEnemyChosen) && (health >=0)) {
					if (chosenEnemy == 3){
						attack += 8;
						grievousHealth = grievousHealth - attack;

						$(".command").html("You attacked General Grievous for " + attack + " damage.");
						$(".command").append("<br>General Grievous attacked you for 20 damage.");
						// damageTaken += 20;


						$("#Grievous-health").html(grievousHealth);
						console.log("attack");
						console.log(grievousHealth);
							
							if (grievousHealth <= 0) {

								$(".Grievous").remove();
								$(".parent").append("<div class='defender'>");
								
								isEnemyChosen = false;
								wins ++;
								if (wins === 3) {
									console.log("winner");
									$(".winner").show();
									$(".command").html("You Won!");

								}
								else{

									$(".command").html("You have defeated General Grievous, you can choose to fight another enemy.");
									$(".command").show();

								}

							}
					}

				}
						// $("#Grievous-health").html(grievousHealth);


				if ((isCharacterChosen) && (isEnemyChosen) && (health >=0)) {
					if (chosenEnemy == 4){
						attack += 8;
						vaderHealth = vaderHealth - attack;

						$(".command").html("You attacked Darth Vader for " + attack + " damage.");
						$(".command").append("<br>Darth Vader attacked you for 25 damage.");
						// damageTaken += 25;
						// if (chosenCharacter == 1){

						// 	$(".Jar-Jar-health").html(health);

						// }


						$("#Vader-health").html(vaderHealth);
						console.log("attack");
						console.log(vaderHealth);
							
							if (vaderHealth <= 0) {

								$(".Vader").remove();
								$(".parent").append("<div class='defender'>");
								isEnemyChosen = false;
								wins++;
									if (wins === 3) {
									console.log("winner");
									$(".winner").show();
									$(".command").html("You Won!");
								}
								else {
								$(".command").html("You have defeated Darth Vader, you can choose to fight another enemy.");
								$(".command").show();

								}

							}
					}
						// $("#Vader-health").html(vaderHealth);

				}
				if ((health <= 0) && (isEnemyChosen)){

					$(".command").html("You've been defeated... GAME OVER!")
					$(".winner").show();
						// $("#Vader-health").html(vaderHealth - attack);
						// $("#Jar-Jar-health").html(health - attack);
						// $("#Grievous-health").html(grievousHealth - attack);
						// $("#Obi-Wan-health").html(obiHealth - attack);





				}



			});
			$(".winner").click(function(){

				reset();
			});
			if (!isEnemyChosen) {

			$(".command").html("No Contest");
			$(".command").show();




			}
			else {

				$(".command").html("");
			}
		

});

