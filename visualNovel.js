//
let nb = 1;
//Function
function text(text){
    if (text == 'void'){
        $('#text').html('')
        $('#container').hide();
    }
    else{
        $('#text').html(text);
    }
}

function character(pos,state,who){
    if(who == 0){
        $('#perso'+pos).attr('src','assets/character/void.png')
    }
    else{$('#perso'+pos).attr('src','assets/character/char'+who+'.png')}

}
function scenetest(){
    $('#background').css('background-image','url(assets/background/fondecranMaxime.png)')
    character(1,0,1);
    character(2,0,2);
    text('Le texte marche car il a des pieds mdr');
}

function scenetest2(){
    $('#background').css('background-image','url(assets/background/fond.jpg)')
    character(1,0,2);
    character(2,0,2);
    text('OUI !fkoezkfpoezkfopezkfzeokpfffffffffffffffffffff efkozfjkoezkfozekfoze ezofkeozfkopekf ezfoezkfoezkfo kzeopfkozpkfeopzkofpzkfopzek opezkofkezofkpezokf kefopzekfopkezopfkzeofk oezkfopezkfokzeopfkezpo kzpoefkzoekfopezkf ezofkezopfkezopf')
}

function scenetest3(){
    $('#background').css('background-image','url(assets/background/fondecranMaxime.png)')
    character(1,0,0);
    character(2,0,0);
    text('LOL y\'a R');
}

scenetest();

$('html').on('click',function(){
    nb++;
    $("#player")[0].play();
    //$("#player2")[0].play();
    console.log('VALIDE ! '+ nb)
    switch(nb){
        case 2:
            scenetest2();
            break;
        case 3:
            scenetest3();
            break;
    }       
})