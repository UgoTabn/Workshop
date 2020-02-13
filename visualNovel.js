//Var globales
let ywx = 0;
var sec = 30;
scene_0a();
function scene_0a(){
	let local =0;
	document.addEventListener('keydown',key,false)
	function key(event){
		if(event.keyCode == 32 || event.keyCode == 13){
			local++;
			switch(local){
				case 1:
					$('#button_play').css('visibility','visible')
					$('#button_play').addClass('e1')
					break;
			}
		}
		
	}
	display_perso(1,"void","void");
    display_perso(2,"void","void");
    display_perso(3,"void","void");
	display_perso(4,"void","void");

	ecrit_text("Vous êtes un jeune héros insouciant assez simplet (on va dire même très simplet). A la recherche d’une aventure particulière, vous errez dans un immense canyon depuis un certain moment, plusieurs chemins s’offrent à vous il semblerait que vous soyez perdu.");
	$("#button_play").css('visibility','hidden')

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
					break;
				case 2:
					scene_1c();
					break;
				case 3:
					scene_1d();
					break;
				case 4:
					scene_1e();
					break;
				case 5:
					scene_1f();
					break;
				case 6:
					scene_1g();
					break;
				case 7:
					scene_1h();
					break;
				case 8:
					scene_1i();
					break;
				case 9:
					scene_1j();
					break;
				case 10:
					$('#button_play').css('visibility','visible')
					$('#button_play').addClass('e2')

			}
		}
		
	}
	//change background
	//$("#background").css("background-image","url('assets/background/fondecranMaxime.png')");
	//senario
	//display_perso(1,"billy","idle");
    /*display_perso(2,"billy","idle");
    display_perso(3,"billy","idle");*/
	//display_perso(4,"billy","idle")

	ecrit_text("Vous arrivez finalement à sortir de ce labyrinthe. Devant vous apparaît un large complexe de bâtiments entouré d’un vaste grillage lui même installé derrière une série de panneaux. Ce lieu vous fait penser à quelque chose, ça ne serait pas la zone 51 par hasard ?")

	function scene_1b(){
		ecrit_text("A peine arrivé près du périmètre, un garde vous arrête")
	}
	function scene_1c(){
		display_perso(1,"billy","idle");
		display_perso(4,"billy","idle");
		parle(1);gris(4);
		ecrit_text("Halte monsieur ! où allez vous comme ça ?")
	}
	function scene_1d(){
		gris(1);parle(4);
		ecrit_text("Je cherche la zone 51");
	}
	function scene_1e(){
		parle(4);gris(1);
		ecrit_text("C’est interdit d’accès ici, allez voir à côté")
	}
	function scene_1f(){
		display_perso(1,"void","void");
		display_perso(4,"void","void");
		ecrit_text("Vous repartez en route, et après quelques kilomètres de marche, vous arrivez devant un grand bâtiment délabré, un grillage éventré entourant son enceinte. Vous pouvez voir un écriteau cassé à l’entrée sur lequel est écrit “Bienvenue dans la zone 52, ici territoire d’accueil pour aventuriers en herbe");
	}
	function scene_1g(){
		display_perso(1,"billy","idle");
		display_perso(4,"billy","idle");
		parle(4);gris(1);
		ecrit_text("Oah, mais super grand le bâtiment, qui a mit ça là ? , bon allez je rentre ça à l’air cool");
	}
	function scene_1h(){
		gris(4);parle(1);
		ecrit_text("C’est qui ce guignol qu’on voit dans la caméra ?");
	}
	function scene_1i(){
		display_perso(1,"void","void");
		display_perso(4,"void","void");
		ecrit_text("Vous pénétrez dans le bâtiment, la pièce dans laquelle vous arrivez et remplie de panneaux de commandes composés de voyants lumineux et de boutons de toutes sortes.");
	}
	function scene_1j(){
		display_perso(4,"billy","idle");
		parle(4);
		ecrit_text("Woaww c’est quoi cette endroit ?? Les autres me croiront jamais, il faut que je prenne un souvenir , tiens je vais prendre ce truc là sur la table.  *Prend un livre sur une table*  Vous vous approchez d’un des panneaux de commandes, lorsque une soudaine envie de toucher à tout fait son apparition.");
	}
}

function scene_e2_defaite(){
	let local = 0;
	document.addEventListener('keydown',key,false)
	function key(event){
		if(event.keyCode == 32 || event.keyCode == 13){
			local++;
			switch(local){
				case 1:
					scene_1a();
					break;
				case 2:
					scene_1b();
					break;
				case 3:
					scene_1c();
					break;
				case 4:
					scene_1d();
					break;
				case 5:
					scene_1e();
					break;
				case 6:
					break;
			}
		}
		
	}
	function scene_1a(){
		display_perso(1,"mechant","idle");
		display_perso(4,"billy","idle");
		parle(1);gris(4);
		ecrit_text("Oui, ça ! Si tu me le donne gentillement, tout se passera bien pour toi.")
	}
	function scene_1b(){
		gris(1);parle(4);
		ecrit_text("C’est à moi ! Donner c’est donner, repeindre ses volets !");
	}
	function scene_1c(){
		parle(1);gris(4);
		ecrit_text("Mais c’est toi que  je vais repeindre oui ! Et puis.. ou tu le donne ou je te tue !")
	}
	function scene_1d(){
		parle(4);gris(1);
		ecrit_text("Oh ouais non mais si les gens trichent aussi..")
	}
	function scene_1e(){
		parle(1);gris(4);
		ecrit_text("Ooh Oh, le petit se révolte même pas ? Bon fini de jouer ! GAAAAAAAAAAARDES!")
	}

}

/*function scene_E7(){
	let local = 0;
	document.addEventListener('keydown',key,false)
	function key(event){
		if(event.keyCode == 32 || event.keyCode == 13){
			local++;
			switch(local){
				case 1:
					scene_e2Vb();
					break;
				case 2:
					scene_e2Vb();
					break;
				case 3:
					scene_e2Vc();
					break;
				case 4:
					scene_e2Da();
					break;
				case 5:
					scene_e2Db();
					break;
				case 6:
					scene_e2Dc();
					break;
				case 7:
					break;
			}
		}
		
	}

	function scene_e2Va(){
		display_perso(1,"billy","idle");
		display_perso(4,"billy","idle");
		parle(4);gris(4);
		ecrit_text("Ho mais les boutons sont utilisables ! Je vais essayer d’activer les deux gros" )
	}

	function scene_e2Vb(){
		gris(4);parle(1);
		ecrit_text("Non ne touchez à rien ! Sécurité envoyez le robot ! ");
	}

	function scene_e2Vc(){
		display_perso(1,"void","void");
		display_perso(4,"void","void");
		ecrit_text("A cet instant, une large trappe que vous n’aviez pas remarqué s’enclenche sous vos pieds. Vous tombez dans une sorte de vortex ; aspiré par cette étrange force, vous serrez le bouquin dans vos bras. Vous n’avez pas vu qu'un petit robot vous avait rejoint dans votre chute.");
	}

	function scene_e2Da(){
		display_perso(1,"billy","idle");
		display_perso(4,"billy","idle");
		parle(4);gris(4);
		ecrit_text("Ah ça ne marche pas, bon il reste plus qu’a rentrer " )
	}

	function scene_e2Db(){
		gris(4);parle(1);
		ecrit_text("Il va partir ! Vite, sécurité envoyez le robot !");
	}

	function scene_e2Dc(){
		display_perso(1,"void","void");
		display_perso(4,"void","void");
		ecrit_text("Vous vous retournez et commencez à rebrousser chemin lorsque tout à  coup la porte de la pièce se referme, Une large trappe que vous n’aviez pas remarqué s’enclenche sous vos pieds. Vous tombez dans une sorte de vortex ; aspiré par cette étrange force, vous serrez le bouquin dans vos bras. Vous n’avez pas vu qu’un petit robot vous avait rejoint dans votre chute");
	}

}
*/

function scene_Reparation_suite() { // E6 -> Réparation (suite)
    let local = 0;
    document.addEventListener('keydown', key, false)

    function key(event) {
        if (event.keyCode == 32 || event.keyCode == 13) {
            local++;
            switch (local) {
                case 1:
                    scene_1b();
                    break;
                case 2:
                    scene_1c();
                    break;
                case 3:
                    scene_1d();
                    break;
                case 4:
                    scene_1e();
                    break;
                case 5:
                    scene_1f();
                    break;
                case 6:
                    scene_1g();
                    break;
                case 7:
                    scene_1h();
                    break;
                case 8:
                    scene_1i();
                    break;
                case 9:
                    break;
            }
        }

    }
    //change background
    //$("#background").css("background-image","url('assets/background/fondecranMaxime.png')");
    //senario
    //display_perso(1,"billy","idle");
    /*display_perso(2,"billy","idle");
    display_perso(3,"billy","idle");*/
    //display_perso(4,"billy","idle")

    ecrit_text("Vous arrivez dans la ville")

    function scene_1b() {
        display_perso(1, "champignon", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(3);
        gris(4);
        gris(1);
        ecrit_text("Alors ou est-il ce meccano de génie??")
    }

    function scene_1c() {
        display_perso(1, "champignon", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(3);
        gris(4);
        ecrit_text("Juste un peu plus loin devant.")
    }

    function scene_1d() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(4);
        gris(3);
        ecrit_text("Bonjour, voyageurs que puis-je faire pour vous? ");
    }

    function scene_1e() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(4);
        gris(3);
        gris(1);
        ecrit_text("Faut nous réparer le bazooka.")
    }

    function scene_1f() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(3);
        gris(4);
        gris(1);
        ecrit_text("Ce que mon collègue essaye (habilement) de vous demander c’est est-ce qu’il est possible pour vous de réparer notre équipement?");
    }

    function scene_1g() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(4);
        gris(3);
        ecrit_text("Je vais voir ce que je peux faire...Humm ca va être compliqué.");
    }

    function scene_1h() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(3);
        gris(4);
        gris(1);
        ecrit_text("OK, dis nous ce qu’on doit faire");
    }

    function scene_1i() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(4);
        gris(3);
        ecrit_text("Je vous explique..");
    }

}

function scene_e6defaite(){
	let local = 0;
	document.addEventListener('keydown',key,false)
	function key(event){
		if(event.keyCode == 32 || event.keyCode == 13){
			local++;
			switch(local){
				case 1:
					scene_1b();
					break;
				case 2:
					scene_1c();
					break;
				case 3:
					scene_1d();
					break;
				case 4:
					scene_1e();
					break;
				case 5:
					scene_1f();
					break;
				case 6:
					break;
			}
		}
		
	}
	function scene_1b(){
		display_perso(1,"PA","idle");
		display_perso(4,"billy","idle");
		parle(4);gris(1);
		ecrit_text("C’est t’y pas beau tout ça ?")
	}
	function scene_1c(){
		gris(4);parle(1);
		ecrit_text("Oulaah, mais c’est quoi ce travail d’amateur ?!");
	}
	function scene_1d(){
		parle(4);gris(1);
		ecrit_text("ça fera parfaitement l’affaire, aller, RETOUR MAISON ! ")
	}
	function scene_1e(){
		display_perso(1,"champi","idle");
		display_perso(2,"PA","idle");
		parle(1);gris(2);
		ecrit_text("Tu es sûr que c’est une bonne idée ?");
	}
	function scene_1f(){
		parle(2);gris(1);
		ecrit_text("Bon bah c’est plus mon problème!")
	}

}

function scene_rechargement_suite() { // E6 -> Réparation (suite)
    let local = 0;
    document.addEventListener('keydown', key, false)

    function key(event) {
        if (event.keyCode == 32 || event.keyCode == 13) {
            local++;
            switch (local) {
                case 1:
                    scene_1b();
                    break;
                case 2:
                    scene_1c();
                    break;
                case 3:
                    scene_1d();
                    break;
                case 4:
                    scene_1e();
                    break;
                case 5:
                    scene_1f();
                    break;
                case 6:
                    scene_1g();
                    break;
                case 7:
                    scene_1h();
                    break;
                case 8:
                    scene_1i();
                    break;
                case 9:
                    scene_1j();
                    break;
                case 10:
                    scene_1k();
                    break;
                case 11:
                    break;
            }
        }

    }
    //change background
    //$("#background").css("background-image","url('assets/background/fondecranMaxime.png')");
    //senario
    //display_perso(1,"billy","idle");
    /*display_perso(2,"billy","idle");
    display_perso(3,"billy","idle");*/
    //display_perso(4,"billy","idle")

    ecrit_text("Vous arrivez dans la ville")

    function scene_1b() {
        display_perso(1, "champignon", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(3);
        gris(4);
        gris(1);
        ecrit_text("Alors ou est-il ce meccano de génie??")
    }

    function scene_1c() {
        display_perso(1, "champignon", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(3);
        gris(4);
        ecrit_text("Juste un peu plus loin devant.")
    }

    function scene_1d() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(4);
        gris(3);
        ecrit_text("Bonjour, voyageurs que puis-je faire pour vous? ");
    }

    function scene_1e() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(4);
        gris(3);
        gris(1);
        ecrit_text("Il nous faut une batterie !")
    }

    function scene_1f() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(3);
        gris(4);
        gris(1);
        ecrit_text("Ce que mon collègue essaye (habilement) de vous dire c’est qu’on désire une recharge pour notre bazooka. ");
    }

    function scene_1g() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(4);
        gris(3);
        ecrit_text("Je vais voir ce que je peux faire...Humm ca va être compliqué ce n'est pas une simple batterie je vais voir...");
    }

    function scene_1h() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(3);
        gris(4);
        gris(1);
        ecrit_text("On en a besoin absolument besoin");
    }

    function scene_1i() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(4);
        gris(3);
        ecrit_text("C’est possible mais dangereux et compliqué si vous faites un mauvais mouvement s’en ai terminé de votre bazooka.");
    }

    function scene_1j() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(3);
        gris(4);
        gris(1);
        ecrit_text("OK, dis nous ce qu’on doit faire");
    }

    function scene_1k() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(4);
        gris(3);
        ecrit_text("Je vous explique.");
    }

}


function scene_reparation() { // E6 -> Réparation
    let local = 0;
    document.addEventListener('keydown', key, false)

    function key(event) {
        if (event.keyCode == 32 || event.keyCode == 13) {
            local++;
            switch (local) {
                case 1:
                    scene_1b();
                    break;
                case 2:
                    scene_1c();
                    break;
                case 3:
                    scene_1d();
                    break;
                case 4:
                    scene_1e();
                    break;
                case 5:
                    scene_1f();
                    break;
                case 6:
                    break;
            }
        }

    }
    //change background
    //$("#background").css("background-image","url('assets/background/fondecranMaxime.png')");
    //senario
    //display_perso(1,"billy","idle");
    /*display_perso(2,"billy","idle");
    display_perso(3,"billy","idle");*/
    //display_perso(4,"billy","idle")

    //    ecrit_text("Sonné par la téléportation, vous ne voyez que un puissant rayon de soleil. Après s'être habitué à la luminosité ambiante il fut déçu de voir que ce n'était toujours pas chez lui.")

    function scene_1b() {
        display_perso(1, "champignon", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(3);
        gris(4);
        gris(1);
        ecrit_text("Effectivement ,nous avons besoin de savoir comment réparer notre bazooka")
    }

    function scene_1c() {
        display_perso(1, "champignon", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(3);
        gris(4);
        ecrit_text("Je ne le connais pas personnellement mais il y a un reparateur qui se trouve dans la ville la plus proche.")
    }

    function scene_1d() {
        display_perso(1, "champignon", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(4);
        gris(1);
        gris(3);
        ecrit_text("Très bien ,on vous suit alors.");
    }

    function scene_1e() {
        display_perso(1, "champignon", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(3);
        gris(4);
        gris(1);
        ecrit_text("En espérant qu’on ai de la chance")
    }

    function scene_1f() {
        display_perso(1, "champignon", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(4);
        gris(3);
        ecrit_text("C’est parti !");
    }

}

function scene_recharge() { // E6 -> Recharge
    let local = 0;
    document.addEventListener('keydown', key, false)

    function key(event) {
        if (event.keyCode == 32 || event.keyCode == 13) {
            local++;
            switch (local) {
                case 1:
                    scene_1b();
                    break;
                case 2:
                    scene_1c();
                    break;
                case 3:
                    scene_1d();
                    break;
                case 4:
                    scene_1e();
                    break;
                case 5:
                    scene_1f();
                    break;
                case 6:
                    break;
            }
        }

    }
    //change background
    //$("#background").css("background-image","url('assets/background/fondecranMaxime.png')");
    //senario
    //display_perso(1,"billy","idle");
    /*display_perso(2,"billy","idle");
    display_perso(3,"billy","idle");*/
    //display_perso(4,"billy","idle")

    //    ecrit_text("Sonné par la téléportation, vous ne voyez que un puissant rayon de soleil. Après s'être habitué à la luminosité ambiante il fut déçu de voir que ce n'était toujours pas chez lui.")

    function scene_1b() {
        display_perso(1, "champignon", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(3);
        gris(4);
        gris(1);
        ecrit_text("Effectivement, nous avons besoin de savoir ou trouver une recharge pour notre bazooka")
    }

    function scene_1c() {
        display_perso(1, "champignon", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(3);
        gris(4);
        ecrit_text("Je ne peux pas vous aider,du moins le mieux que je puisse faire c’est vous emmener à la prochaine ville vous trouverez forcément votre recharge.")
    }

    function scene_1d() {
        display_perso(1, "champignon", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(4);
        gris(1);
        gris(3);
        ecrit_text("Très bien ,on vous suit alors.");
    }

    function scene_1e() {
        display_perso(1, "champignon", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(3);
        gris(4);
        gris(1);
        ecrit_text("En espérant qu’on ai de la chance")
    }

    function scene_1f() {
        display_perso(1, "champignon", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(4);
        gris(3);
        ecrit_text("C’est parti !");
    }

}

function scene_monde2() {
    let local = 0;
    document.addEventListener('keydown', key, false)
    function key(event) {
        if (event.keyCode == 32 || event.keyCode == 13) {
            local++;
            switch (local) {
                case 1:
                    scene_1a();
                    break;
                case 2:
                    scene_1b();
                    break;
                case 3:
                    scene_1c();
                    break;
                case 4:
                    scene_1d();
                    break;
                case 5:
                    scene_1e();
                    break;
                case 6:
                    scene_1f();
                    break;
                case 7:
                    scene_1g();
                    break;
                case 8:
                    scene_1h();
                    break;
                case 9:
                    scene_1i();
                    break;
                case 10:
                    scene_1j();
					break;
				case 11:
					scene_1k();
					break;
				case 12:
					scene_1l();
					break;
				case 13:
					scene_1m();
					break;
				case 14:
					scene_1n();
					break;
				case 15:
					scene_1o();
					break;
            }
        }

    }
    //change background
    //$("#background").css("background-image","url('assets/background/fondecranMaxime.png')");
    //senario
    //display_perso(1,"billy","idle");
    /*display_perso(2,"billy","idle");
    display_perso(3,"billy","idle");*/
    //display_perso(4,"billy","idle")

    ecrit_text("Sonné par la téléportation, vous ne voyez que un puissant rayon de soleil. Après s'être habitué à la luminosité ambiante il fut déçu de voir que ce n'était toujours pas chez lui.")

    function scene_1a() {
        display_perso(1, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(4);
        gris(1);
        ecrit_text("Qu’est ce que cette endroit?!Pourquoi ca n’a pas marché??Je veux partir, téléporte moi tout de suite!!!")
    }

    function scene_1b() {
        display_perso(1, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(4);
        ecrit_text("Calme toi !Je suis coincé avec toi donc on va s’en sortir tout les deux ensemble.")
    }

    function scene_1c() {
        display_perso(1, "robot", "idle");
        display_perso(4, "billy", "idle");
        gris(1);
        parle(4);
        ecrit_text("Promis?");
    }

    function scene_1d() {
        display_perso(1, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(4);
        ecrit_text("Oui je ne repartirais pas sans toi, tu peux me croire")
    }

    function scene_1e() {
        display_perso(1, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(4);
        gris(1);
        ecrit_text("Quelle est cette endroit?Pourquoi ces champignons sont si gigantesques?");
    }

    function scene_1f() {
        display_perso(1, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(4);
        ecrit_text("Je ne sais pas mais méfie toi, on ne sait jamais. Re-tire avec ton bazooka fait nous partir d’ici")
    }

    function scene_1g() {
        display_perso(1, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(4);
        gris(1);
        ecrit_text("J’essaye mais ça ne marche pas, on dirait qu’il a besoin d’une autre recharge ou bien qu'il est cassé ")
    }

    function scene_1h() {
        display_perso(1, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(4);
        ecrit_text("Et où allons nous trouver ça ?? ")

    }

    function scene_1i() {
        display_perso(1, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(4);
        gris(1);
        ecrit_text("Ohh regarde par terre !!Qu’es ce que c’est ? ")
    }

    function scene_1j() {
        display_perso(1, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(4);
        gris(1);
        ecrit_text("Et où allons nous trouver ça ?? ")
    }

    function scene_1k() {
        display_perso(1, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(4);
        ecrit_text("EH OH tu m'écoutes??")
    }

    function scene_1l() {
        display_perso(1, "void", "void");
        display_perso(4, "void", "void");
        ecrit_text("Vous attrapez le champignon, celui-ci semble résister. Vous tirez plus fort puis vous voyez une tête émerger du sol, puis un corps et des jambes. Apparaît devant vous un grand bonhomme coiffé d’un champignon en guise de chapeau.")
    }

    function scene_1m() {
        display_perso(1, "champignon", "idle");
        display_perso(4, "billy", "idle");
        parle(4);
        gris(1);
        ecrit_text("Ohh nobles voyageurs merci de m’avoir sorti de ma tourmente!!")
    }

    function scene_1n() {
        display_perso(1, "champignon", "idle");
        display_perso(4, "billy", "idle");
        parle(4);
        gris(1);
        ecrit_text("AAAAH ! Un champignon qui parle ?!")
    }

    function scene_1o() {
        display_perso(1, "champignon", "idle");
        display_perso(4, "billy", "idle");
        parle(4);
        gris(1);
        ecrit_text("Bien-sûr ! Vous êtes à la champiflammière, un lieu magique où nous y habitons. J'ai maintenant une dette envers vous.")
    }

}

function scene_E7(){
	let local = 0;
	document.addEventListener('keydown',key,false)
	function key(event){
		if(event.keyCode == 32 || event.keyCode == 13){
			local++;
			switch(local){
				case 1:
					scene_1a();
					break;
				case 2:
					scene_1b();
					break;
				case 3:
					scene_1c();
					break;
				case 4:
					scene_1d();
					break;
				case 5:
					scene_1e();
					break;
				case 6:
					scene_1f();
					break;
				case 7:
					scene_1g();
					break;
				case 8:
					scene_1h();
					break;
				case 9:
					break;
			}
		}
		
	}
	function scene_1a(){
		display_perso(1,"mechant","idle");
		display_perso(4,"billy","idle");
		parle(4);gris(1);
		ecrit_text("Hein ? Mais.. brrr.. Où suis-je ?")
	}
	function scene_1b(){
		gris(4);parle(1);
		ecrit_text(" Et bien et bien.. Qu’avons-nous là ?Notre cher cobaye est revenu à la maison ");
	}
	function scene_1c(){
		parle(4);gris(1);
		ecrit_text("Un cobaye ?  où ? Je vois pas de rat ?! hein ?! T’es qui ? ")
	}
	function scene_1d(){
		parle(1);gris(4);
		ecrit_text("Je suis le chef de la zone 52, tu m’as dérobé quelque chose qui m’appartient !")
	}
	function scene_1e(){
		parle(4);gris(1);
		ecrit_text("Des robes ? J’ai pas ça moi.")
	}
	function scene_1f(){
		parle(1);gris(4);
		ecrit_text("Non, dérobé du verb.. Bon.. TU M’AS PRIS QUELQUE CHOSE, RENDS LE MOI !")
	}
	function scene_1g(){
		parle(4);gris(1);
		ecrit_text("uh ? ça ?")
	}
	function scene_1h(){
		gris(1);gris(4);
		ecrit_text("Cherche dans ses poches, puis montre le livre.");
	}
}

function scene_mondegeler() {
    let local = 0;
    document.addEventListener('keydown', key, false)

    function key(event) {
        if (event.keyCode == 32 || event.keyCode == 13) {
            local++;
            switch (local) {
                case 1:
                    scene_1k();
                    break;
                case 2:
                    scene_1l();
                    break;
                case 3:
                    scene_1m();
                    break;
                case 4:
                    scene_1n();
                    break;
                case 5:
                    scene_1o();
                    break;
                case 6:
                    break;

            }
        }

    }
    //change background
    //$("#background").css("background-image","url('assets/background/fondecranMaxime.png')");
    //senario
    //display_perso(1,"billy","idle");
    /*display_perso(2,"billy","idle");
    display_perso(3,"billy","idle");*/
    //display_perso(4,"billy","idle")

    ecrit_text("Vous arrivez dans monde gelé mais qui vous fait étrangement penser à univers Far West")


    function scene_1k() {
        display_perso(1, "billy", "idle");
        display_perso(4, "billy", "idle");
        gris(4);
        parle(4);
        ecrit_text("Mais qu’est ce que je fais là moi, ou suis-je ?");
    }

        function scene_1l() {
            parle(1);
            gris(4);
            ecrit_text("Te voila dans un beau pétrin")
        }

        function scene_1m() {
            gris(4);
            parle(4);
            ecrit_text("Qu’ est ce que… ? Tiens un robot qui parle!Vous m’ avez suivi ? ");
        }

        function scene_1n() {
            parle(1);
            gris(4);
            ecrit_text("Oui je vais t’ accompagner, on va s’ échapper ensemble")
        }

        function scene_1o() {
            gris(4);
            parle(4);
            ecrit_text("Ah chouette!J’ aperçois des bâtiments la - bas il doit y’ avoir des gens la - bas qui peuvent peut - être nous aider")
        }
}

function scene_e3_e4v() {
    let local = 0;
    document.addEventListener('keydown', key, false)

    function key(event) {
        if (event.keyCode == 32 || event.keyCode == 13) {
            local++;
            switch (local) {
                case 1:
                    scene_e3Va();
                    break;
                case 2:
                    scene_e3Vb();
                    break;
                case 3:
                    scene_e3Vc();
                    break;
                case 4:
                    scene_e3Vd();
                    break;
                case 5:
                    scene_e3Ve();
                    break;
                case 6:
                    scene_e3Vf();
                    break;
                case 7:
                    scene_e3Vg();
                    break;
                case 8:
                    scene_e3Vh();
                    break;
                case 9:
                    scene_e3Vi();
                    break;

            }
        }

    }
    //change background
    //$("#background").css("background-image","url('assets/background/fondecranMaxime.png')");
    //senario
    //display_perso(1,"billy","idle");
    /*display_perso(2,"billy","idle");
    display_perso(3,"billy","idle");*/
    //display_perso(4,"billy","idle")

    ecrit_text("Vous arrivez non loin d’une grotte, et apercevez un être étrange qui ressemble au mélange étonnant entre un canon et animal doté d’une certaine intelligence, vous vous approchez de lui pour l’interpeller.")


    function scene_e3Va() {
        display_perso(1, "billy", "idle");
        display_perso(2, "billy ","idle ");
            display_perso(4, "billy", "idle"); gris(4); parle(4); ecrit_text("Hého ! Je cherche un animal qui peut créer des portails, il est dans le coin apparemment. Vous ne l’auriez pas vu par hasard ?");
        }

        function scene_e3Vb() {
            parle(2);
            gris(4);
            ecrit_text(" * soupir * ")
        }

        function scene_e3Vc() {
            parle(1);
            gris(4);
            ecrit_text("C’ est moi que vous cherchez, vous voulez aller où ? ")
        }

        function scene_e3Vd() {
            parle(4);
            gris(4);
            ecrit_text("Je cherche à partir de ce monde et à rentrer chez moi")
        }

        function scene_e3Ve() {
            parle(1);
            gris(4);
            ecrit_text("Très bien, mais attention: il faut pouvoir m’ utiliser de manière correcte.La précision du portail que je crée dépend aussi de la précision de mon utilisateur, ça n’ est pas aussi simple que vous ne le pensez, croyez moi.Si vous tremblez lors de la mise à feu, le portail risque d’ être un peu instable, bon j’ ai parfois l’ impression que comprendre des trucs c’ est pas trop votre domaine")
        }

        function scene_e3Vf() {
            parle(4);
            gris(4);
            ecrit_text("Un domaine genre l’ endroit où on habite ? ")
        }

        function scene_e3Vg() {
            parle(1);
            gris(4);
            ecrit_text("Bon bref, vous voyez les cibles là - bas ? Il vous faudra toucher leur centre le plus de fois possible.Si vous réussissez, il n’ y aura aucun problème pour que j’ active le portail; sinon, je ne serai malheureusement d’ aucune utilité.")
        }

        function scene_e3Vh() {
            parle(4);
            gris(4);
            ecrit_text("Euh très bien je vous prends et je vais au stand de tir")
        }


        function scene_e3Vi() {
            display_perso(1, "void", "void");
            display_perso(2, "void ","void ");
            display_perso(4, "void", "void"); 
            ecrit_text("Pour toucher le centre des cibles, cliquez au moment où la jauge arrive au milieu de la barre de puissance.Vous devez réussir 3 essais sur 5.");
        }
}

function scene_e6_e7() { // E6/E7 V
    let local = 0;
    document.addEventListener('keydown', key, false)

    function key(event) {
        if (event.keyCode == 32 || event.keyCode == 13) {
            local++;
            switch (local) {
                case 1:
                    scene_1b();
                    break;
                case 2:
                    scene_1c();
                    break;
                case 3:
                    scene_1d();
                    break;
                case 4:
                    scene_1e();
                    break;
                case 5:
                    scene_1f();
                    break;
                case 6:
                    scene_1g();
                    break;
                case 7:
                    scene_1h();
                    break;
                case 8:
                    break;
            }
        }

    }
    //change background
    //$("#background").css("background-image","url('assets/background/fondecranMaxime.png')");
    //senario
    //display_perso(1,"billy","idle");
    /*display_perso(2,"billy","idle");
    display_perso(3,"billy","idle");*/
    //display_perso(4,"billy","idle")

    ecrit_text("Vous arrivez dans la ville")

    function scene_1b() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(4);
        gris(3);
        ecrit_text("Bravo, vous avez parfaitement bien travaillé.Voilà pour vous votre bazooka comme neuf.")
    }

    function scene_1c() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(4);
        gris(3);
        gris(1);
        ecrit_text("Super on va pouvoir repartir chez nous!!")
    }

    function scene_1d() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(3);
        gris(4);
        gris(1);
        ecrit_text("Oui enfin si ca marche.Merci de nous aider . Allez gogol active le portail.");
    }

    function scene_1e() {
        display_perso(1, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(1);
        gris(3);
        gris(4);
        ecrit_text("Avec plaisir,faite attention a vous")
    }

    function scene_1f() {
        display_perso(1, "réparateur", "idle");
        display_perso(2, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(2);
        gris(4);
        gris(1);
        gris(3);
        ecrit_text("Merci encore à vous de m’avoir sauvé");
    }

    function scene_1g() {
        display_perso(1, "réparateur", "idle");
        display_perso(2, "réparateur", "idle");
        display_perso(3, "robot", "idle");
        display_perso(4, "billy", "idle");
        parle(4);
        gris(2);
        gris(3);
        gris(1);
        ecrit_text("A bientot les copains");
    }

    function scene_1h() {
        display_perso(1, "void", "void");
        display_perso(2, "void", "void");
        display_perso(3, "void", "void");
        display_perso(4, "void", "void");
		ecrit_text("gogol tire et disparaît avec le robot dans un éclair")
	}
}

function scene_FinNulle(){
	let local = 0;
	document.addEventListener('keydown',key,false)
	function key(event){
		if(event.keyCode == 32 || event.keyCode == 13){
			local++;
			switch(local){
				case 1:
					scene_1b();
					break;
				case 2:
					scene_1c();
					break;
				case 3:
					scene_1d();
					break;
				case 4:
					scene_1e();
					break;
				case 5:
					scene_1f();
					break;
				case 6:
					scene_1g();
					break;
				case 7:
					scene_1h();
					break;
				case 8:
					scene_1i();
					break;
				case 9:
					break;
			}
		}
		
	}
	function scene_1a(){
		display_perso(1,"mechant","idle");
		display_perso(4,"billy","idle");
		parle(4);gris(1);
		ecrit_text("C'est terminé maintenant ? ");
	}
	function scene_1b(){
		parle(1);gris(4);
		ecrit_text("C'est pas toi qui décide, c'est que le début.");
	}
	function scene_1c(){
		parle(4);gris(1);
		ecrit_text("Hein, mais non je pars, c'est crêpe ce soir à la maison.");
	}
	function scene_1d(){
		parle(1);gris(4);
		ecrit_text("Tu pars pas mon petit, pas ce soir.");
	}
	function scene_1e(){
		gris(1);gris(4);
		ecrit_text("Le robot retourne sur son épaule.");
	}
	function scene_1f(){
		parle(4);gris(1);
		ecrit_text("Donc c'était vous depuis le début qui me parlais ?? J'ai pas de voix dans ma tête ? .");
	}	
	function scene_1g(){
		parle(1);gris(4);
		ecrit_text("Je m'amusais un peu avec toi, en plus il me fallais que me rendre mon bouquin, c'est le cahier de recette de ma grand-mère.");
	}	
	function scene_1h(){
		parle(4);gris(1);
		ecrit_text("Donc je me baladais dans un monde parallèle au péril de ma vie tout ça pour ça?");
	}	
	function scene_1i(){
		parle(1);gris(4);
		ecrit_text("Oui, maintenant tu es mon esclave.");
	}

}

function scene_FinBof(){
	let local = 0;
	document.addEventListener('keydown',key,false)
	function key(event){
		if(event.keyCode == 32 || event.keyCode == 13){
			local++;
			switch(local){
				case 1:
					scene_1b();
					break;
				case 2:
					scene_1c();
					break;
				case 3:
					scene_1d();
					break;
				case 4:
					scene_1e();
					break;
				case 5:
					scene_1f();
					break;
				case 6:
					scene_1g();
					break;
				case 7:
					scene_1h();
					break;
				case 8:
					scene_1i();
					break;
				case 9:
					scene_1j();
					break;
				case 10:
					e2();
					break;
			}
		}
		
	}


	function scene_1c(){
		display_perso(1,"mechant","idle");
		display_perso(4,"billy","idle");
		parle(4);gris(1);
		ecrit_text("C'est terminé maintenant ?")
	}
	function scene_1d(){
		gris(4);parle(1);
		ecrit_text("Oui enfin, bon rends moi le bouquin maintenant.");
	}
	function scene_1e(){
		parle(4);gris(1);
		ecrit_text("Attends mais t'as la meme voix que la voix dans ma tête.")
	}

	function scene_1h(){
		gris(4);parle(1);
		ecrit_text("Idiot, il n'y a jamais eu de voix dans ta tete, c'etait mon robot et je t'ais guidé pour récupérer mon bouquin.")
	}
	function scene_1e(){
		gris(1);gris(4);
		ecrit_text("Le robot retourne sur son épaule.");
	}
	function scene_1e(){
		parle(4);gris(1);
		ecrit_text("Aah mais mais, je croyais qu'on était pote, mon pote.");
	}	
	function scene_1e(){
		parle(1);gris(4);
		ecrit_text("Je suis pas ton pote, mon gars, bon maintenant tire toi avant que j'appelle le reste de la sécurité.");
	}	
	function scene_1e(){
		parle(4);gris(1);
		ecrit_text("Mais pourquoi tout ceci, pour ce simple bouquin ?");
	}
	function scene_1e(){
		parle(1);gris(4);
		ecrit_text("C'est le livre de recette de ma grand-mère, je voulais pas me faire tuer.");
	}	
	function scene_1e(){
		parle(1);gris(4);
		ecrit_text("Rentres chez toi gamin maintenant.");
	}
	
}

function scene_finbien(){
	let local = 0;
	document.addEventListener('keydown',key,false)
	function key(event){
		if(event.keyCode == 32 || event.keyCode == 13){
			local++;
			switch(local){
				case 1:
					scene_1a();
					break;
				case 2:
					scene_1b();
					break;
				case 3:
					scene_1c();
					break;
				case 4:
					scene_1d();
					break;
				case 5:
					scene_1e();
					break;
				case 6:
					scene_1f();
					break;
				case 7:
					scene_1g();
					break;
				case 8:
					scene_1h();
					break;
				case 9:
					break;
			}
		}
		
	}
  
	function scene_1a(){
		display_perso(1,"mechant","idle");
		display_perso(4,"billy","idle");
		gris(1);parle(4); //le personnage principal parle, le mechant repond
		ecrit_text("Que m’arrive-t-il ? j’ai mal au crâne, je me sens tout bizarre.");
	}
	function scene_1b(){ //le mechant parle
		parle(1);gris(4);
		ecrit_text("Tu me surprends je dois l’avouer, tu as passé pas mal d’épreuves avec brio.");
	}
	function scene_1c(){ //le mechant parle
		parle(4);gris(1);
		ecrit_text("Aie je sens qu’il y a comme une porte qui s’est ouverte dans mon esprit, je commence à penser à plein de choses, à… réfléchir.")
	}

	function scene_1d(){ //le mechant parle
		gris(1);gris(4);
		ecrit_text("Le robot retourne sur son épaule.");
	}
	function scene_1e(){ //le mechant parle
		parle(1);gris(4);
		ecrit_text("Hum intéressant, tu as peut-être beaucoup évolué au cours de ton voyage, mais en tout cas tu m’as beaucoup diverti et j’aimerais bien reprendre mon bouquin.");
	}
	function scene_1f(){ //le mechant parle
		parle(4);gris(1);
		ecrit_text("Depuis le début c’était vous le robot, ah j’aurais du m’en douter ! Tenez voila le livre, je vous le rends.")
	}
	function scene_1g(){ //le mechant parle
		parle(1);gris(4);
		ecrit_text("Oh tu sais ce n’est que le cahier de recette de ma grand-mère, comme tu m’as beaucoup intrigué et amusé tu peux le garder, et puis de toute façon les plats qu’elle me mijote sont moisis.")
	}
	function scene_1h(){ //le mechant parle
		parle(4);gris(1);
		ecrit_text("Super ! Je me suis beaucoup amusé aussi, j’ai l’impression d’être devenu un nouvel homme, je me sens encore tout drôle ")
	}
}


//ALEA
function getRandomIntInclusive(min, max) {
  	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
}

$('main').on('click','#button_play.e1',function(){
	$('#element1_img').addClass('e1');
	$('#element2_img').addClass('e1');
	$('#button_play').removeClass('e1');

	let l_score = 0;
	$('#pop').css("background-color","red")
	ecrit_text_popup("un labyrinthe ?");
	$("#container_pop").css("visibility","visible")
	$('#element1_img').css({'position': 'absolute','top': '200px','left': '720px','height': '60px','width': '60px;','visibility': 'visible','display': 'block'}).attr("src","assets/symbole/flecheD.png");
	$('#element2_img').css({'position': 'absolute','top': '200px','height': '60px','width': '60px;','visibility': 'visible','display': 'block'}).attr("src","assets/symbole/flecheG.png");
	$("body").on('click','#element2_img.e1',function(){
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
				$('#element1_img').removeClass('e1');
				$('#element2_img').removeClass('e1');
				ecrit_text_popup("Un grand batiment... ça doit être ça !");
				setTimeout(end,2000);
					function end(){
					$('#pop').css("display","none");
					clear_minigame();
					scene_1a();
				}
				break;
		}
	})
	$("body").on('click','#element1_img.e1',function(){
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
				$('#element1_img').removeClass('e1');
				$('#element2_img').removeClass('e1');
				ecrit_text_popup("Tiens ? Un batiment");
				setTimeout(end,2000);
					function end(){
					$('#pop').css("display","none");
					clear_minigame();
					scene_1a();
				}
				break;
		}
	})

})
$('main').on('click','#button_play.e2',function(){
	let vie = 2;
	let game_end = 0;
	$('.popup').css("background-image", 'url(assets/symbole/tableau1.jpg)');
	$("#element1").css({'height':'70px','width':'550px','position':'absolute','top':'95px','left':'150px','padding':'8px','color':'yellow'});
	$('#element3').css({'height':'500px','width':'100px','position':'absolute','top':'25px','left':'520px'});
	$("#element4").css({'height':'100px','width':'100px','position':'absolute','top':'300px','left':'120px'});
	$('#element4_img').css({ 'height': '65px', 'width': '65px', 'position': 'absolute', 'top': '-65px', 'left': '-5px' }).attr("src","assets/symbole/bouton_orange.png");
	$('#element2').css({'height': '400px', 'width': '550px', 'position': 'absolute', 'top': '160px', 'left': '120px'});
	$('#element5').css({'height':'65px','width':'65px','position':'absolute','top':'235px','left':'400px'});
	
	$("#element1").addClass("e1");
	$('#element3').addClass("e1");
	$("#element4").addClass("e1");
	$('#element4_img').addClass("e1");
	$('#element2').addClass("e1");
	$('#element5').addClass("e1");

	$('#element4_img.e1').draggable();
	$('#element5.e1').droppable({drop: function(event,ui){
		game_end = 1;
		$('#element4_img.e1').css({'top':'-65px','left':'282px'});
	}})
	$("#element1.e1").html("VIE RESTANTE : "+vie);

	// si temps faire animation levier drag and drop ou flip

	$(".popup").on('click','#element3.e1',function(){
		if(game_end == 0){
			vie = vie - 1;
			if(vie == 0){
				$("#element1").removeClass("e1");
				$('#element3').removeClass("e1");
				$("#element4").removeClass("e1");
				$('#element4_img').removeClass("e1");
				$('#element2').removeClass("e1");
				$('#element5').removeClass("e1");
				$('#pop').css("display","none");
				clear_minigame();
			}
			$("#element1.e1").html("VIE RESTANTE : "+vie)
		} else if(game_end == 1){
			$("#element1").removeClass("e1");
			$('#element3').removeClass("e1");
			$("#element4").removeClass("e1");
			$('#element4_img').removeClass("e1");
			$('#element2').removeClass("e1");
			$('#element5').removeClass("e1");
			$('#pop').css("display","none");
			clear_minigame();
		}
	})
})
$('main').on('click','#button_play.e3',function(){
	var nb = 10;
	$('.popup').css("background-image", "url(assets/background/grotte.jpg)");
	$('#element1').css({'height':'50px','width':'80px','position':'absolute','top':'39px','left':'60px'}).addClass("e3");
	$('#element2').css({'height':'80px','width':'30px','position':'absolute','top':'60px','left':'710px'}).addClass("e3");
	$('#element3').css({'height':'80px','width':'150px','position':'absolute','top':'230px','left':'170px'}).addClass("e3");
	$('#element4').css({'height':'40px','width':'200px','position':'absolute','top':'520px','left':'50px'}).addClass("e3");
	$('#element5').css({'height':'60px','width':'80px','position':'absolute','top':'370px','left':'680px'}).addClass("e3");
	$('#element6').css({'height':'40px','width':'30px','position':'absolute','top':'390px','left':'90px'}).addClass("e3");
	$('#element7').css({'height':'80px','width':'250px','position':'absolute','top':'235px','left':'460px'}).addClass("e3");
	$('#element8').css({'height': '40px', 'width':'200px','position':'absolute','top':'500px','left':'430px'}).addClass("e3");
	$('#element9').css({'height':'60px','width':'40px','position':'absolute','top':'360px','left':'345px'}).addClass("e3");
	$('#element10').css({'height':'100px','width':'80px','position':'absolute','top':'470px','left':'670px'}).addClass("e3");

	$("#container_pop").css({"height": "50px", "width": "50px", "top": "45px", "left": "700px","visibility":"visible"});
	$("#text_pop").css({"margin": "8px", "font-size": "30px"});

	$('.e3').on('click',function(){
		$(this).css("visivility","hidden");
		$(this).removeClass("e3");
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
			for (i = 1; i <= 10; i++) {
				$('#element'+i).removeClass("e3");
			}
			clear_minigame();
			window.clearInterval(timer);
		}
	},1000)
})
$('main').on('click','#button_play.e4v',function(){
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
})
$('main').on('click','#button_play.e4d',function(){

	$('.popup').css("background-color", "mediumorchid");
	$("#text_pop").css({"margin": "8px", "font-size": "30px", "display": "block"});
	$("#text_pop").html("6");
	$("#container_pop").css({"height": "50px", "width": "50px", "top": "45px", "left": "700px"});
	var carte = {"background-color" : "white", "display" : "block", "width" : "100px", "height" : "150px", "position" : "absolute", "transition": "0.5s"};
	$("#element10").css(carte).addClass("e4d");
	$("#element10").css({"left": "200px", "top": "50px"});
	$("#element2").css(carte).addClass("e4d");
	$("#element2").css({"left": "350px", "top": "50px"});
	$("#element3").css(carte).addClass("e4d");
	$("#element3").css({"left": "500px", "top": "50px"});
	$("#element4").css(carte).addClass("e4d");
	$("#element4").css({"left": "200px", "top": "225px"});
	$("#element5").css(carte).addClass("e4d");
	$("#element5").css({"left": "350px", "top": "225px"});
	$("#element6").css(carte).addClass("e4d");
	$("#element6").css({"left": "500px", "top": "225px"});
	$("#element7").css(carte).addClass("e4d");
	$("#element7").css({"left": "200px", "top": "400px"});
	$("#element8").css(carte).addClass("e4d");
	$("#element8").css({"left": "350px", "top": "400px"});
	$("#element9").css(carte).addClass("e4d");
	$("#element9").css({"left": "500px", "top": "400px"});

	$("#element1").css({"background-color": "green","position": "absolute", "left": "150px", "top": "25px", "width": "500px", "height": "550px"});

	var test = [0,0];
	var end = 6;
	var win = 0;
	var lock = {value: 0};
	var count = {value: 0};
	var carte1 = 1, carte2 = 4, carte3 = 0, carte4 = 1, carte5 = 2, carte6 = 4, carte7 = 3, carte8 = 3, carte9 = 2;
	$(".e4d").click(function(){
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
})
$('main').on('click','#button_play.e5',function(){
	var error = 10;
	var champi = 'champignon';
	var i=0;
	$('input').css({"visibility":"visible",'height':'30px','width':'100px','position':'absolute','top':'200px','left':'350px','padding':'12px'});
	$('#element1').css({'height':'30px','width':'100px','background-color':'white','position':'absolute','top':'100px','left':'350px','padding':'12px'});
	$('#element1').html("fqnssd");
	$('#element2').css({'height':'30px','width':'100px','background-color':'white','position':'absolute','top':'300px','left':'350px','padding':'12px'}).addClass("e5");
	$('#element2').html('Envoyer code');
	$('#element3').css({'height':'30px','width':'100px','background-color':'white','position':'absolute','top':'400px','left':'350px','padding':'12px'});

	$('body').on('click', '#element2.e5', function() {
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
$('main').on('click','#button_play.e6d',function(){
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
	$("#element1").css(vis).addClass("e6d");
	$("#element1").css({"left": " 190px", "top": "180px"});
	$("#element2").css(vis).addClass("e6d");
	$("#element2").css({"left": " 290px", "top": "280px"});
	$("#element3").css(vis).addClass("e6d");
	$("#element3").css({"left": " 390px", "top": "180px"});
	$("#element4").css(vis).addClass("e6d");
	$("#element4").css({"left": " 490px", "top": "280px"});
	$("#element5").css(vis).addClass("e6d");
	$("#element5").css({"left": " 590px", "top": "280px"});
	$("#element6").css({"background-color": "red", "display": "block", "width": "500px", "height": "150px", "position": "absolute", "left": "150px", "top": "300px"});

	$('body').on('click', '#element1.e6d', function() {
		if (lock.value == 0){
			nbr_update(t1,"#element1");
			nbr_update(t3,"#element3");
			nbr_update(t5,"#element5");
			test(t1,t2,t3,t4,t5,coup);
		}
	})
	$('body').on('click', '#element2.e6d', function() {
		if (lock.value == 0){
			nbr_update(t1,"#element1");
			nbr_update(t2,"#element2");
			nbr_update(t4,"#element4");
			nbr_update(t5,"#element5");
			test(t1,t2,t3,t4,t5,coup);
		}
	})
	$('body').on('click', '#element3.e6d', function() {
		if (lock.value == 0){
			nbr_update(t3,"#element3");
			nbr_update(t4,"#element4");
			test(t1,t2,t3,t4,t5,coup);
		}	
	})
	$('body').on('click', '#element4.e6d', function() {
		if (lock.value == 0){
			nbr_update(t1,"#element1");
			nbr_update(t4,"#element4");
			test(t1,t2,t3,t4,t5,coup);
		}
	})
	$('body').on('click', '#element5.e6d', function() {
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
})
$('main').on('click','#button_play.e7',function(){
	let hit = 3;
	let boss_hp = 5;
	$('#element1_img').attr('src','assets/symbole/boss.jpg').css({'height':'70px','width':'auto','position':'absolute','top':'230px','left':'330px'}).addClass("e7");

	$('#element2_img').attr('src','assets/symbole/enemy.jpg').css({'height':'70px','width':'auto','position':'absolute','top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'}).addClass('alive').addClass("e7");
	$('#element3_img').attr('src','assets/symbole/enemy.jpg').css({'height':'70px','width':'auto','position':'absolute','top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'}).addClass('alive').addClass("e7");
	$('#element4_img').attr('src','assets/symbole/enemy.jpg').css({'height':'70px','width':'auto','position':'absolute','top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'}).addClass('alive').addClass("e7");

	$("#container_pop").css({"height": "55px", "width": "55px", "top": "45px", "left": "700px","visibility":"visible"});
	$("#text_pop").css({"margin": "1px", "font-size": "25px"});
	
	$("#text_pop").html(boss_hp+' PV')
	
	geneAleaEnemy =  window.setInterval(function(){
		if($('#element2_img').hasClass('alive')){
			$('#element2_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'});
		}
		if($('#element3_img').hasClass('alive')){
			$('#element3_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'});
		}
		if($('#element4_img').hasClass('alive')){
			$('#element4_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'});
		}

		
	},1000)

	$('.alive').on('click',function(){
		$(this).removeClass('alive').css("visibility","hidden")
		hit --;
	})

	//faire des feintes

	$('body').on('click', '#element1_img.e7', function() {
		if(hit == 0){
			boss_hp --;
			$("#text_pop").html(boss_hp+' PV')
			$('#element2_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px','visibility':'visible'}).addClass('alive');
			$('#element3_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px','visibility':'visible'}).addClass('alive');
			$('#element4_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px','visibility':'visible'}).addClass('alive');
			hit = 3;

			if(boss_hp == 0){
				window.clearInterval(geneAleaEnemy);
				$('#pop').css("display","none");
				clear_minigame();
			}
		}
	})
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

function clear_minigame(){
	for (i = 1; i <= 10; i++) {
		$('#element'+i+'_img').attr('src','assets/character/void_void.png');
		$('#element'+i).removeAttr( 'style' );
		//$('#element'+i).html("");
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
	$("#button_play").css("visibility","collapse");
})


function parle(perso){
	$('#perso'+perso+'_img').removeClass('gray').addClass("parle").css("width","200px")
}
function gris(perso){
	$('#perso'+perso+'_img').removeClass('parle').css("width","187px").addClass("gray")
}
