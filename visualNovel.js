//Var globales

function realisateur(index){
	switch (index){
		case 1 :
			scene_1a();
			break;
		case 2:

			break;
		case 3:
      
			break;
	}
}
function scene_1a(){
	//change background
	$("#background").css("background-image","url('assets/background/fondecranMaxime.png')");
	display_perso(2,"nom","state");
	//senario
	display_perso(1,"billy","idle");
    display_perso(2,"billy","idle");
    display_perso(3,"billy","idle");
    display_perso(4,"billy","idle");

	//dialogue("")
	$("#text_hold").html("lol c'est drôle, regarde moi ça c'est trop cool !!!");
	changeText($("#text_hold"),$("#text"),20);
}

function display_perso(pos,nom,state){
	$("#perso"+pos+"_img").attr("src","assets/character/"+nom+"_"+state+".png");
}

function changeText(cont1,cont2,speed){
	var Otext=cont1.text();
	var Ocontent=Otext.split("");
	var i=0;
	function show(){
		if(i<Ocontent.length)
		{		
			cont2.append(Ocontent[i]);
			i=i+1;
		};
	};
		var Otimer=setInterval(show,speed);	
};

realisateur(1);

$("#button_play").click(function(){
	$("#pop").css("display", "block");
	$("#button_play").css("display","none");
})