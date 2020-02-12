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




$("#button_play.e6").click(function e6(){
	var t1 = {value: 1};
	var t2 = {value: 0};
	var t3 = {value: 0};
	var t4 = {value: 1};
	var t5 = {value: 0};
	var coup = {value: 15};
	var lock = {value: 0};

	var vis = {"background-color" : "white", "display" : "block", "width" : "20px", "height" : "150px", "position" : "absolute", "transition": "1s"};
	$("#text_pop").css({"margin": "8px", "font-size": "30px"});
	$("#text_pop").html("15");
	$("#container_pop").css({"height": "50px", "width": "50px", "top": "45px", "left": "700px"});
	$("#element1").css(vis);
	$("#element1").css({"left": " 190px", "top": "180px"});
	$("#element2").css(vis);
	$("#element2").css({"left": " 290px", "top": "280px"});
	$("#element3").css(vis);
	$("#element3").css({"left": " 390px", "top": "280px"});
	$("#element4").css(vis);
	$("#element4").css({"left": " 490px", "top": "180px"});
	$("#element5").css(vis);
	$("#element5").css({"left": " 590px", "top": "280px"});
	$("#element6").css({"background-color": "red", "display": "block", "width": "500px", "height": "150px", "position": "absolute", "left": "150px", "top": "300px"});

	$("#element1").click(function(){
		if (lock.value == 0){
			nbr_update(t1,"#element1");
			nbr_update(t3,"#element3");
			nbr_update(t5,"#element5");
			test(t1,t2,t3,t4,t5,coup);
		}
	})
	$("#element2").click(function(){
		if (lock.value == 0){
			nbr_update(t1,"#element1");
			nbr_update(t2,"#element2");
			nbr_update(t4,"#element4");
			nbr_update(t5,"#element5");
			test(t1,t2,t3,t4,t5,coup);
		}
	})
	$("#element3").click(function(){
		if (lock.value == 0){
			nbr_update(t3,"#element3");
			nbr_update(t4,"#element4");
			test(t1,t2,t3,t4,t5,coup);
		}	
	})
	$("#element4").click(function(){
		if (lock.value == 0){
			nbr_update(t1,"#element1");
			nbr_update(t4,"#element4");
			test(t1,t2,t3,t4,t5,coup);
		}
	})
	$("#element5").click(function(){
		if (lock.value == 0){
			nbr_update(t2,"#element2");
			nbr_update(t5,"#element5");
			test(t1,t2,t3,t4,t5,coup);
		}	
	})
	function nbr_update(num,nom){
		if (num.value == 0){
			num.value = 1;
		}else if (num.value == 1){
			num.value = 0;
		}
		pos_update(num.value,nom);
	}
	function pos_update(num,nom){
		if (num == 0){
			$(nom).css("top", "280px");
		}
		if (num == 1){
			$(nom).css("top", "180px");
		}
	}
	function test(t1,t2,t3,t4,t5,coup){
		coup.value -= 1;
		$("#text_pop").html(coup.value)
		if ((t1.value == t2.value) && (t2.value == t3.value) && (t3.value == t4.value) && (t4.value == t5.value) || (coup.value == 0)){
			lock.value = 1;
			end = setInterval(function(){
					$('#pop').css("display","none");
			},2000)
		}
	}
})

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

function ecrit_text_popup(chaine){
	$("#text_pop").html("");
	$("#text_pop_hold").html("");
	$("#text_pop_hold").html(chaine);
	changeText($("#text_pop_hold"),$("#text_pop"),20);
}

function laby(){
	let l_score = 0;
	$('.laby').css('visibility','visible')
	display_perso(1,"void","void");
    display_perso(2,"void","void");
    display_perso(3,"void","void");
	display_perso(4,"void","void");
	$("#background").css("background-image","url('assets/background/fondecranMaxime.png')");
	ecrit_text_popup("un labyrinthe ?");

	$("#fleche_G").on('click',function(){
		switch(l_score){
			case 0 :
				ecrit_text_popup("a gauche ? pourquoi pas...\n maintenant je vais à droite?");
				l_score = 1;
				break;
			case 1:
				ecrit_text_popup("mince c'était encore a gauche maintenant j'essaye à droite!")
				l_score = 2;
				break;
			case 2:
				ecrit_text_popup("Mais ? je suis stupide où quoi ?")
				l_score = 2;
				break;
			case 3:
				ecrit_text_popup("Hummm c'était tout droit cette fois ci")
				l_score = 4;
				break;
			case 4:
				ecrit_text_popup("J'ai comme une impression de déjà vu, je serait pas retourné au départ ?")
				l_score =0;
				break;
			case 5:
				ecrit_text_popup("Tiens ?! un trou ?")
				l_score = 8;
				break;
			case 6:
				ecrit_text_popup("Oui ! je croit que j'ai réussi à avancer !")
				l_score = 7;
				break;
			case 7:
				ecrit_text_popup("La sortie ! ah non on dirait le début")
				l_score = 0;
				break;
			case 8:
				ecrit_text_popup("oh un trou est immense!")
				l_score = 9;
				break;
			case 9:
				ecrit_text_popup("Tiens un morceau de papier ? La recette de la raclette ?!")
				l_score = 10;
				break;
		}
	})

	$("#fleche_D").on('click',function(){
		switch(l_score){
			case 0 :
				ecrit_text_popup("ce n'était pas a droite dommage");
				l_score = 0;
				break;
			case 1:
				ecrit_text_popup("Oups, me re voilà au départ !")
				l_score = 0;
				break;
			case 2 :
				ecrit_text_popup("Cette fois j'avais raison !");
				l_score = 3;
				break;
			case 3:
				ecrit_text_popup("Hummm c'était tout droit cette fois ci")
				l_score = 4;
				break;
			case 4:
				ecrit_text_popup("Bien jouer ! mais maintenant ? je vais à gauche ou à droite ?")
				l_score = 5;
				break;
			case 5:
				ecrit_text_popup("je serai pas en train de tourné en rond ?")
				l_score = 5;
				break;
			case 6:
				ecrit_text_popup("Il n'y a rien de particulier ici je vais essayer à gauche")
				l_score = 7;
				break;
			case 7:
				ecrit_text_popup("Mmmmm je suis sur de moi ?")
				l_score = 8;
				break;
			case 8:
			ecrit_text_popup("Je pense que j\'y sera encore demain, non ? qui a fait ce foutu desert ?")
			l_score = 6;
			break;

			case 9:
				ecrit_text_popup("Bien j'avance pour le moment")
				l_score =10;
				break;
		}
	})

}
scene_1a();

$("#button_play").click(function(){
	$("#pop").css("display", "block");
	$("#button_play").css("display","none");
})