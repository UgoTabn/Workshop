//Var globales
let ywx = 0;

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

function clear_minigame(){
	$('#element1_img').attr('src','assets/character/void_void.png');
	$('#element2_img').attr('src','assets/character/void_void.png');
	$('#element3_img').attr('src','assets/character/void_void.png');
	$('#element4_img').attr('src','assets/character/void_void.png');
	$('#element5_img').attr('src','assets/character/void_void.png');
	$('#element6_img').attr('src','assets/character/void_void.png');

	$('#elements1').removeAttr( 'style' );
	$('#elements2').removeAttr( 'style' );
	$('#elements3').removeAttr( 'style' );
	$('#elements4').removeAttr( 'style' );
	$('#elements5').removeAttr( 'style' );
	$('#elements6').removeAttr( 'style' );

}


function ecrit_text_popup(chaine){
	$("#text_pop").html("");
	$("#text_pop_hold").html("");
	$("#text_pop_hold").html(chaine);
	changeText($("#text_pop_hold"),$("#text_pop"),20);
}

function e1(){
	let l_score = 0;
	//$('.e1').css('visibility','visible')
	display_perso(1,"void","void");
    display_perso(2,"void","void");
    display_perso(3,"void","void");
	display_perso(4,"void","void");
	$("#background").css("background-image","url('assets/background/fondecranMaxime.png')");
	ecrit_text_popup("un labyrinthe ?");
	$("#container_pop").css("visibility","visible");

	$('#element1_img').css({'position': 'absolute','top': '200px','left': '720px','height': '60px','width': '60px;','visibility': 'visible','display': 'block'}).attr("src","assets/symbole/flecheD.png")
	$('#element2_img').css({'position': 'absolute','top': '200px','height': '60px','width': '60px;','visibility': 'visible','display': 'block'}).attr("src","assets/symbole/flecheG.png")

	$("#element2").on('click',function(){
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
			case 10:
				//$('.e1').css('visibility','hidden')
				$("#element1").css('display','none');
				$("#element2").css('display','none');
				end = setInterval(function(){
					ecrit_text_popup("Un grand batiment... ça doit être ça !");
					if (ywx == 1){
						$('#pop').css("display","none");
						clearInterval(end);
					}else{
						ywx++;
					}
				},1400)
				end;
				break;
		}
	})

	$("#element1").on('click',function(){
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
			case 10:
				//$('.e1').css('visibility','hidden')
				$("#element1").css('display','none');
				$("#element2").css('display','none');
				
				end = setInterval(function(){
					ecrit_text_popup("Tiens ? Un batiment");
					if (ywx == 1){
						$('#pop').css("display","none");
						clearInterval(end);
					}else{
						ywx++;
					}
				},1500)
				end;
				break;
		}
	})

}

//e1();
//clear_minigame();

$("#button_play").click(function(){
	$("#pop").css("display", "block");
	$("#button_play").css("display","none");
})