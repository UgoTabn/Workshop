//Var globales
let ywx = 0;
var sec = 30;


//document.addEventListener('keydown',key,false)


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
	let local = 0;
	document.addEventListener('keydown',key,false)
	function key(event){
		if(event.keyCode == 32 || event.keyCode == 13){
			local++;
			switch(local){
				case 1:
					scene_1b();
			}
		}
		
	}
	//change background
	//$("#background").css("background-image","url('assets/background/fondecranMaxime.png')");
	//senario
	display_perso(1,"billy","idle");
    /*display_perso(2,"billy","idle");
    display_perso(3,"billy","idle");*/
	display_perso(4,"billy","idle")
	parle(1);
	gris(4);

	//dialogue("")
	ecrit_text("Oah, mais super grand le bâtiment, qui a mit ça la ? ")

	function scene_1b(){
		gris(1);
		parle(4);
		ecrit_text("C’est qui ce guignol qu’on voit dans la caméra ?");
	}

}



//ALEA
function getRandomIntInclusive(min, max) {
  	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
}


function e1(){

	let l_score = 0;
	$('#pop').css("background-color","red")
	ecrit_text_popup("un labyrinthe ?");
	$("#container_pop").css("visibility","visible")
	$('#element1_img').css({'position': 'absolute','top': '200px','left': '720px','height': '60px','width': '60px;','visibility': 'visible','display': 'block'}).attr("src","assets/symbole/flecheD.png");
	$('#element2_img').css({'position': 'absolute','top': '200px','height': '60px','width': '60px;','visibility': 'visible','display': 'block'}).attr("src","assets/symbole/flecheG.png");
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
				ecrit_text_popup("Un grand batiment... ça doit être ça !");
				setTimeout(end,2000);
					function end(){
					$('#pop').css("display","none");
					clear_minigame();
				}
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
				ecrit_text_popup("Oups, me re voilà au départ !");
				l_score = 0;
				break;
			case 2 :
				ecrit_text_popup("Cette fois j'avais raison !");
				l_score = 3;
				break;
			case 3:
				ecrit_text_popup("Hummm c'était tout droit cette fois ci");
				l_score = 4;
				break;
			case 4:
				ecrit_text_popup("Bien jouer ! mais maintenant ? je vais à gauche ou à droite ?");
				l_score = 5;
				break;
			case 5:
				ecrit_text_popup("je serai pas en train de tourné en rond ?");
				l_score = 5;
				break;
			case 6:
				ecrit_text_popup("Il n'y a rien de particulier ici je vais essayer à gauche");
				l_score = 7;
				break;
			case 7:
				ecrit_text_popup("Mmmmm je suis sur de moi ?");
				l_score = 8;
				break;
			case 8:
				ecrit_text_popup("Je pense que j\'y sera encore demain, non ? qui a fait ce foutu desert ?");
				l_score = 6;
				break;
			case 9:
				ecrit_text_popup("Bien j'avance pour le moment");
				l_score =10;
				break;
			case 10:
				//$('.e1').css('visibility','hidden')
				$("#element1").css('display','none');
				$("#element2").css('display','none');
				ecrit_text_popup("Tiens ? Un batiment");
				setTimeout(end,2000);
					function end(){
					$('#pop').css("display","none");
					clear_minigame();
				}
				break;
		}
	})

}
function e2(){
	console.log('Test valide')
	let vie = 2;
	let game_end = 0;
	$('.popup').css("background-color", "mediumorchid");
	$("#element1").css({'height':'70px','width':'550px','background-color':'white','position':'absolute','top':'65px','left':'120px','padding':'8px'})
	$('#element3').css({'border':'solid','height':'400px','width':'65px','position':'absolute','top':'160px','left':'605px'})
	$("#element4").css({'height':'50px','width':'50px','position':'absolute','top':'300px','left':'120px'})
	$('#element4_img').css({'height':'50px','width':'50px','position':'absolute','top':'0px','left':'20px'}).attr("src","assets/symbole/touche.jpg")
	$('#element2').css({'border':'solid','height':'400px','width':'550px','position':'absolute','top':'160px','left':'120px'})
	$('#element5').css({'border':'solid','height':'50px','width':'50px','position':'absolute','top':'300px','left':'500px'})
	$('#element4_img').draggable();
	$('#element5').droppable({drop: function(event,ui){
		game_end = 1;
		$('#element4_img').css({'top':'2px','left':'382px'})
	}})
	$("#element1").html("VIE RESTANTE : "+vie)

	// si temps faire animation levier drag and drop ou flip

	$("#element3").on('click',function(){
		if(game_end == 0){
			vie = vie - 1;
			if(vie == 0){
				$('#pop').css("display","none");
				clear_minigame();
			}
			$("#element1").html("VIE RESTANTE : "+vie)
		} else if(game_end == 1){
			$('#pop').css("display","none");
			clear_minigame();
		}
	})
}
function e3(){
	var nb = 10;
	$('.popup').css("background-color", "mediumorchid");
	$('#element1').css({'border':'solid red','height':'20px','width':'20px','position':'absolute','top':'50px','left':'20px'}).addClass("clickable")
	$('#element2').css({'border':'solid red','height':'20px','width':'20px','position':'absolute','top':'40px','left':'200px'}).addClass("clickable")
	$('#element3').css({'border':'solid red','height':'20px','width':'20px','position':'absolute','top':'450px','left':'60px'}).addClass("clickable")
	$('#element4').css({'border':'solid red','height':'20px','width':'20px','position':'absolute','top':'500px','left':'70px'}).addClass("clickable")
	$('#element5').css({'border':'solid red','height':'20px','width':'20px','position':'absolute','top':'50px','left':'250px'}).addClass("clickable")
	$('#element6').css({'border':'solid red','height':'20px','width':'20px','position':'absolute','top':'360px','left':'80px'}).addClass("clickable")
	$('#element7').css({'border':'solid red','height':'20px','width':'20px','position':'absolute','top':'10px','left':'400px'}).addClass("clickable")
	$('#element8').css({'border':'solid red','height':'20px','width':'20px','position':'absolute','top':'500px','left':'3px'}).addClass("clickable")
	$('#element9').css({'border':'solid red','height':'20px','width':'20px','position':'absolute','top':'45px','left':'320px'}).addClass("clickable")
	$('#element10').css({'border':'solid red','height':'20px','width':'20px','position':'absolute','top':'430px','left':'590px'}).addClass("clickable")

	$("#container_pop").css({"height": "50px", "width": "50px", "top": "45px", "left": "700px","visibility":"visible"});
	$("#text_pop").css({"margin": "8px", "font-size": "30px"});

	$('.clickable').on('click',function(){
		$(this).css("visivility","hidden").removeClass("clickable")
		nb --;
		if(nb == 0){
			$('#pop').css("display","none");
			clear_minigame();
		}
	})

	var timer = window.setInterval(function(){
		sec --;
		$("#text_pop").html(sec);
		if(sec == -1){
			$('#pop').css("display","none");
			clear_minigame();
			window.clearInterval(timer);
		}
	},1000)
}
function e4v(){
	$('.popup').css("background-color", "mediumorchid");
	//fond jauge
	$("#element1").css({"height": "100px", "width": "550px", "left": "125px", "top": "250px", "background-color": "blue", "position": "absolute"});
	//jauge
	$("#element2").css({"height": "80px", "width": "530px", "left": "135px", "top": "260px", "background-color": "white", "position": "absolute"});
	//objectif
	$("#element3").css({"width": "105px", "height": "80px", "font-size": "40px", "top": "260px", "left": "349px", "position": "absolute", "background-color": "red"});
	//curseur
	$("#element4").css({"height": "80px", "width": "20px", "left": "235px", "top": "260px", "background-color": "black", "position": "absolute", "transition": "0.01s"});
	//text
	$("#element5").css({"width": "600px", "font-size": "40px", "top": "450px", "left": "150px", "position": "absolute"});
	$("#element5").html("Appuyez sur la barre Espace !");
	var x = 235;
	var y = 1;
	var percent = 0;
	var end = {value: 5};
	var won = {value: 0};
	var test = 0;
	var timer = window.setInterval(function(){
		inTimer();		
	},10)
	function inTimer(){
		x += 15 * y;
		$("#element4").css("left",x + "px");
		if (x >= 645){
			y = -1;
		}
		if (x <= 135){
			y = 1;
		}
	}
	document.addEventListener("keydown",keyDownHandler, false)

	function keyDownHandler(event) {
		if (test == 0){
			if(event.keyCode == 32) {
				window.clearInterval(timer);
				percent = (10/51)*x-(450/17);
				if ((percent >= 40) && (percent <= 60)){
					won.value += 1;
				}
				test = 1;
				end.value -= 1;
				if ((end.value == 0)||(won.value == 3)){
					if (won.value == 3){
						$("#element5").html("C'est gagné !");
					}else{
						$("#element5").html("C'est perdu !");
					}
				}
			}
		}else{
			if ((end.value == 0)||(won.value == 3)){
				$('#pop').css("display","none");
				clear_minigame();
				clearInterval(time);
			}else{
				timer = window.setInterval(function(){
					inTimer();
				},10);
				test = 0;
			}
		}
	}
}
function e4d(){

	$('.popup').css("background-color", "mediumorchid");
	$("#text_pop").css({"margin": "8px", "font-size": "30px", "display": "block"});
	$("#text_pop").html("6");
	$("#container_pop").css({"height": "50px", "width": "50px", "top": "45px", "left": "700px"});
	var carte = {"background-color" : "white", "display" : "block", "width" : "100px", "height" : "150px", "position" : "absolute", "transition": "0.5s"};
	$("#element10").css(carte);
	$("#element10").css({"left": "200px", "top": "50px"});
	$("#element2").css(carte);
	$("#element2").css({"left": "350px", "top": "50px"});
	$("#element3").css(carte);
	$("#element3").css({"left": "500px", "top": "50px"});
	$("#element4").css(carte);
	$("#element4").css({"left": "200px", "top": "225px"});
	$("#element5").css(carte);
	$("#element5").css({"left": "350px", "top": "225px"});
	$("#element6").css(carte);
	$("#element6").css({"left": "500px", "top": "225px"});
	$("#element7").css(carte);
	$("#element7").css({"left": "200px", "top": "400px"});
	$("#element8").css(carte);
	$("#element8").css({"left": "350px", "top": "400px"});
	$("#element9").css(carte);
	$("#element9").css({"left": "500px", "top": "400px"});

	$("#element1").css({"background-color": "green","position": "absolute", "left": "150px", "top": "25px", "width": "500px", "height": "550px"});

	var test = [0,0];
	var end = 6;
	var win = 0;
	var lock = {value: 0};
	var count = {value: 0};
	var carte1 = 1, carte2 = 4, carte3 = 0, carte4 = 1, carte5 = 2, carte6 = 4, carte7 = 3, carte8 = 3, carte9 = 2;
	$(".element").click(function(){
		if (lock.value == 0){
			switch (this.id){
				case ("element10") :
					$("#"+this.id).css("background-color","black");
					if (count.value == 0){
						test[0] = carte1;
						count.value = 1;
					}else{
						test[1] = carte1;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;
				case ("element2") :
					$("#"+this.id).css("background-color","red");
					if (count.value == 0){
						test[0] = carte2;
						count.value = 1;
					}else{
						test[1] = carte2;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;
				case ("element3") :
					$("#"+this.id).css("background-color","blue");
					if (count.value == 0){
						test[0] = carte3;
						count.value = 1;
					}else{
						test[1] = carte3;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;
				case ("element4") :
					$("#"+this.id).css("background-color","black");
					if (count.value == 0){
						test[0] = carte4;
						count.value = 1;
					}else{
						test[1] = carte4;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;
				case ("element5") :
					$("#"+this.id).css("background-color","purple");
					if (count.value == 0){
						test[0] = carte5;
						count.value = 1;
					}else{
						test[1] = carte5;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;
				case ("element6") :
					$("#"+this.id).css("background-color","red");
					if (count.value == 0){
						test[0] = carte6;
						count.value = 1;
					}else{
						test[1] = carte6;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;
				case ("element7") :
					$("#"+this.id).css("background-color","lime");
					if (count.value == 0){
						test[0] = carte7;
						count.value = 1;
					}else{
						test[1] = carte7;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;	
				case ("element8") :
					$("#"+this.id).css("background-color","lime");
					if (count.value == 0){
						test[0] = carte8;
						count.value = 1;
					}else{
						test[1] = carte8;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;
				case ("element9") :
					$("#"+this.id).css("background-color","purple");
					if (count.value == 0){
						test[0] = carte9;
						count.value = 1;
					}else{
						test[1] = carte9;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;
			}
		}
		if (end == 0){
			stoptime = setTimeout(function(){
				$('#pop').css("display","none");
				clear_minigame();
			},1500)
		}else if (win == 4){
			stoptime = setTimeout(function(){
				$('#pop').css("display","none");
				clear_minigame();
			},1500)
		}
	})
	function testCount(a,b){
		if (a == b){
			win += 1;
		}else{
			end -= 1;
			win = 0;
			$("#text_pop").html(end);
			lock.value = 1;
			time = setInterval(function(){
				for (var i = 2; i <= 10; i++) {
					$("#element"+i).css("background-color","white");
				}
				lock.value = 0;
				window.clearInterval(time);
			},500)
		}
	}
}

function e5(){
	var error = 10;
	var champi = 'champignon';
	var i=0;
	$('input').css({"visibility":"visible",'height':'30px','width':'100px','position':'absolute','top':'200px','left':'350px','padding':'12px'})
	$('#element1').css({'height':'30px','width':'100px','background-color':'white','position':'absolute','top':'100px','left':'350px','padding':'12px'})
	$('#element1').html("fqnssd")
	$('#element2').css({'height':'30px','width':'100px','background-color':'white','position':'absolute','top':'300px','left':'350px','padding':'12px'})
	$('#element2').html('Envoyer code')
	$('#element3').css({'height':'30px','width':'100px','background-color':'white','position':'absolute','top':'400px','left':'350px','padding':'12px'})

	$('#element2').click(function(){
		if($('input').val() == 'grotte'){
			$('#pop').css("display","none");
			clear_minigame();
			window.clearInterval(errorI);
		}})
	errorI = window.setInterval(function(){
		error--;
		$('#element3').html($('#element3').html()+champi[i])
		i++;
		if(error == 0){	
			setTimeout(end,2000);
				function end(){
				$('#pop').css("display","none");
				window.clearInterval(errorI);
				clear_minigame();
			}
		}
	},2000)
})	
$('body').on('click', '#button_play.e6v', function() {
    // do something
	$('.popup').css("background-color", "blue");
	//ammo
	$("#element1").css({"background-color": "white", "width": "20px", "height": "70px", "position": "absolute", "left": "600px", "top": "0px", "transition": "0.2s"});
	//obstacles
	$("#element2").css({"background-color": "black", "width": "220px", "height": "20px", "left": "580px", "top": "220px", "position": "absolute"});
	$("#element3").css({"background-color": "black", "width": "350px", "height": "20px", "left": "0px", "top": "300px", "position": "absolute"});
	$("#element4").css({"background-color": "black", "width": "80px", "height": "20px", "left": "500px", "top": "360px", "position": "absolute"});
	$("#element5").css({"background-color": "black", "width": "20px", "height": "160px", "left": "580px", "top": "220px", "position": "absolute"});
	$("#element6").css({"background-color": "black", "width": "20px", "height": "300px", "left": "260px", "top": "300px", "position": "absolute"});
	//bazooka
	$("#element10").css({"background-color": "green", "width": "40px", "height": "60px", "position": "absolute", "left": "600px", "top": "540px"});


	var x = {value: 600};
	var y = {value: 0};
	var timer = window.setInterval(function(){
		y.value += 1;
		$("#element1").css("top", y.value + "px");
		//element2 coll
		if ((y.value >= 220 - 70)&&(y.value <= 220 - 50)){
			if (x.value >= 580){
				$("#element10").html("perdu");
				window.clearInterval(timer);
				stoptime = setTimeout(function(){
					$('#pop').css("display","none");
					clear_minigame();
				},500);
			}
		}
		//element3 coll
		if ((y.value >= 300 - 70)&&(y.value <= 300 + 20)){
			if (x.value <= 350){
				$("#element10").html("perdu");
				window.clearInterval(timer);
				stoptime = setTimeout(function(){
					$('#pop').css("display","none");
					clear_minigame();
				},500)
			}
		}
		//element4 coll
		if ((y.value >= 360 - 70)&&(y.value <= 360 + 20)){
			if ((x.value >= 500)&&(x.value <= 580)){
				$("#element10").html("perdu");
				window.clearInterval(timer);
				stoptime = setTimeout(function(){
					$('#pop').css("display","none");
					clear_minigame();
				},500)
			}
		}
		//sol
		if (y.value >= 540){
			$("#element10").html("perdu");
			window.clearInterval(timer);
			stoptime = setTimeout(function(){
				$('#pop').css("display","none");
				clear_minigame();
			},500)
		}
		//objectif
		if ((y.value >= 540 - 70)&&(y.value <= 540 + 20)){
			if ((x.value >= 600)&&(x.value <= 620)){
				$("#element10").html("gagné");
				if(x.value >= 600){
					x.value = 600;
				}
				window.clearInterval(timer);
				stoptime = setTimeout(function(){
					$('#pop').css("display","none");
					clear_minigame();
				},500)
			}
		}
	},10)

	document.addEventListener("keydown",keyDownHandler, false)

	function keyDownHandler(event) {
		if (event.keyCode == 39){
			x.value += 20 * 1;
			$("#element1").css("left", x.value + "px");
			//bord exterieur
			if (x.value>=760){
				x.value = 760;
			}
			//element5 coll
			if ((y.value >= 200 - 70)&&(y.value <= 220 + 160)){
				if (x.value >= 580 - 40){
					x.value = 580 - 40;
				}
			}
			//element4 coll
			if ((y.value >= 340 - 70)&&(y.value <= 360 + 20)){
				if (x.value >= 500 - 40){
					x.value = 500 - 40;
				}
			}
			//element
 
		}
		if (event.keyCode == 37){
			x.value += 20 * -1;
			$("#element1").css("left", x.value + "px");
			//bord exterieur
			if (x.value <= 20){
				x.value = 20;
			}
			//element3 coll perfectible
			if ((y.value >= 300 - 70)&&(y.value <= 300 + 20)){
				if (x.value <= 350 + 40){
					x.value = 350 + 40;
				}
			}
			//element6 coll
			if (y.value >= 300 - 70){
				if (x.value <= 260 + 40){
					x.value = 260 + 40;
				}
			}
		}
	}
})

$("#button_play.e6d").click(function(){
	var t1 = {value: 1};
	var t2 = {value: 0};
	var t3 = {value: 1};
	var t4 = {value: 0};
	var t5 = {value: 0};
	var coup = {value: 15};
	var lock = {value: 0};

	var vis = {"background-color" : "white", "display" : "block", "width" : "20px", "height" : "150px", "position" : "absolute", "transition": "1s"};
	$('.popup').css("background-color", "blue");
	$("#text_pop").css({"margin": "8px", "font-size": "30px", "display": "block"});
	$("#text_pop").html("15");
	$("#container_pop").css({"height": "50px", "width": "50px", "top": "45px", "left": "700px", "display": "block"});
	$("#element1").css(vis);
	$("#element1").css({"left": " 190px", "top": "180px"});
	$("#element2").css(vis);
	$("#element2").css({"left": " 290px", "top": "280px"});
	$("#element3").css(vis);
	$("#element3").css({"left": " 390px", "top": "180px"});
	$("#element4").css(vis);
	$("#element4").css({"left": " 490px", "top": "280px"});
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
		$("#text_pop").html(coup.value);
		if ((t1.value == t2.value) && (t2.value == t3.value) && (t3.value == t4.value) && (t4.value == t5.value) || (coup.value == 0)){
			lock.value = 1;
			end = setInterval(function(){
					$('#pop').css("display","none");
					clear_minigame();
			},2000)
		}
	}
}
function e7(){
	let hit = 3;
	let boss_hp = 5;
	$('#element1_img').attr('src','assets/symbole/boss.jpg').css({'height':'70px','width':'auto','position':'absolute','top':'230px','left':'330px'})

	$('#element2_img').attr('src','assets/symbole/enemy.jpg').css({'height':'70px','width':'auto','position':'absolute','top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'}).addClass('alive')
	$('#element3_img').attr('src','assets/symbole/enemy.jpg').css({'height':'70px','width':'auto','position':'absolute','top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'}).addClass('alive')
	$('#element4_img').attr('src','assets/symbole/enemy.jpg').css({'height':'70px','width':'auto','position':'absolute','top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'}).addClass('alive')

	$("#container_pop").css({"height": "55px", "width": "55px", "top": "45px", "left": "700px","visibility":"visible"});
	$("#text_pop").css({"margin": "1px", "font-size": "25px"});
	
	$("#text_pop").html(boss_hp+' PV')
	
	geneAleaEnemy =  window.setInterval(function(){
		if($('#element2_img').hasClass('alive')){
			$('#element2_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'})
		}
		if($('#element3_img').hasClass('alive')){
			$('#element3_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'})
		}
		if($('#element4_img').hasClass('alive')){
			$('#element4_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'})
		}

		
	},1000)

	$('.alive').on('click',function(){
		$(this).removeClass('alive').css("visibility","hidden")
		hit --;
	})

	//faire des feintes

	$('#element1_img').on('click',function(){
		if(hit == 0){
			boss_hp --;
			$("#text_pop").html(boss_hp+' PV')
			$('#element2_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px','visibility':'visible'}).addClass('alive')
			$('#element3_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px','visibility':'visible'}).addClass('alive')
			$('#element4_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px','visibility':'visible'}).addClass('alive')
			hit = 3;

			if(boss_hp == 0){
				window.clearInterval(geneAleaEnemy);
				$('#pop').css("display","none");
				clear_minigame();
			}
		}
	})
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
	for (i = 1; i <= 10; i++) {
		$('#element'+i+'_img').attr('src','assets/character/void_void.png');
		$('#element'+i).removeAttr( 'style' );
	}
	$('.popup').removeAttr('style');
	$('#container_pop').removeAttr('style');
	$('#text_pop').removeAttr('style');
	$('#text_pop').html('');
}

function ecrit_text(chaine){
	$("#text").html("");
	$("#text_hold").html("");
	$("#text_hold").html(chaine);
	changeText($("#text_hold"),$("#text"),20);
}

function ecrit_text_popup(chaine){
	$("#text_pop").html("");
	$("#text_pop_hold").html("");
	$("#text_pop_hold").html(chaine);
	changeText($("#text_pop_hold"),$("#text_pop"),20);
}

$("#button_play").click(function(){
	$("#pop").css("display", "block");
	$("#button_play").css("display","none");
})


function parle(perso){
	$('#perso'+perso+'_img').removeClass('gray').addClass("parle").css("width","200px")
}
function gris(perso){
	$('#perso'+perso+'_img').removeClass('parle').css("width","187px").addClass("gray")
}

realisateur(1)

