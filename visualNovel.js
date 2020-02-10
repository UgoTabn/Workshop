//Var globales

function realisateur(index){
	switch (index){
		case 1 :
			scene_1a
			break;
		case 2:

			break;
		case 3:

			break;
	}
}

function scene_1a(){
	//change background
	display_perso(2,"nom","state");
	//senario
	dialogue("")
}

function display_perso(pos,nom,state){

	$("#perso"+pos+"_img").attr("src","assets/character/"+nom+"_"+state+".png");
	switch (pos){
		case 1:
			$("#perso1").css(/*position1 + flip*/);
			break;
		case 2:
			$("#perso2").css(/*position2 + flip*/);
			break;
		case 3:
			$("#perso3").css(/*position3 + flip*/);
			break;
		case 4:
			$("#perso4").css(/*position4 + flip*/);
			break;
	}
	
}