function lauchGame() {
    // initialisation du jeu et déclaration variables
    // déclarations nbr de vies = 3
    let life_count =3;
    // temps de jeu
    let time =60;
    // 
    let score =0;
    // plein écran
    let wl_full =0;
    // chargement page et script
    let loading =0;
    // émettre et recevoir de la donnée id balise html
    let canvas = document.getElementById("board");

    // conditions authentification
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        // gestion interval de temps et charger valeurs clé de clavier
        // boucle jeu et affichage des déclaration et autres
        setInterval(main_loop, 16);
        // action / fonction de l'action
         // initialisation touches clavier (touches numérotées de 1 à 100) entrée et flèches
        window.addEventListener ('keydown', whatKey, true);
        // touche entée
        loading = loading +5;
    }

    // saut grenouille son(biblio son) mis en mémoire = nav peu le lire sans arrêter = .vaw et pas .mp3
    // possible de simplifier code = mettre code dans un tableau
    // for possible pour le son
    let frog_sound = new Audio ("sounds/frog.wav");
    // son eau
    let water_sound = new Audio("sounds/water.wav");
    // 
    let hit_sound = new audio("sounds/hit.wav");
    // 
    let boing_sound = new audio("sounds/boing.wav");
    // 
    let bell_sound = new audio("sounds/bell.wav");

    frog_sound.oncanplaythrough = loading = loading + 3;
    water_sound.oncanplaythrough = loading = loading + 3;
    hit_sound.oncanplaythrough = loading = loading + 3;
    boing_sound.oncanplaythrough = loading = loading + 3;
    bell_sound.oncanplaythrough = loading = loading + 3;

    let imgs = new Array(21);
    //  loop
    for(i = 0; i < imgs.length; i++){
        imgs[i] = new Image();
        imgs[i].onload = function (){
            // temps chargement des 21 images .gif
            loading = loading +3;
        };
        // [clé]
        imgs[i].src = "imgs/img_"+i+" .gif";
    }

    function setTimer (){
        time = 60;
        // decompte temps
        interval = setInterval (function(){
            if (time == 0){
            // 2 fonctions
                // son
                playSound(bell_sound);
                // message
                loseLife ();
            }
        }, 1000);
    };

    function playSound(){

    }

    function loseLife(){

    }

    function writeMessage(){

    }

    // decla VOITURE et CAMION: random parenthèse bleu=speed - dir-width - type et position
    let line1 = new Line (Math.floor((Math.random()* 3) =1), -1, 34, 1);
    let line2 = new Line (Math.floor((Math.random()* 3) =1), 1, 28, 2);
    let line3 = new Line (Math.floor((Math.random()* 3) =1), -1, 33, 3);
    let line4 = new Line (Math.floor((Math.random()* 3) =1), 1, 34, 4);
    let line5 = new Line (Math.floor((Math.random()* 3) =1), -1, 54, 5);
    // decla TRONCS: random parenthèse bleu=speed - dir-width - type et position chiffres déterminé par taille écran
    let line6 = new Line (Math.floor((Math.random()* 3) =1), 1, 117, 6);
    let line7 = new Line (Math.floor((Math.random()* 3) =1), -1, 180, 7);
    let line8 = new Line (Math.floor((Math.random()* 3) =1), -1, 84, 8);
    let line9 = new Line (Math.floor((Math.random()* 3) =1), -1, 180, 7);
    let line10 = new Line (Math.floor((Math.random()* 3) =1), -1, 117, 6);

    // Position Voiture
    let emms = new Array;
    emms[0] = navigatorObj(50, 350, line1);
    emms[1] = navigatorObj(250, 350, line1);
    emms[2] = navigatorObj(450, 350, line1);
    emms[3] = navigatorObj(120, 320, line2);
    emms[4] = navigatorObj(250, 320, line2);
    emms[5] = navigatorObj(380, 320, line2);
    emms[6] = navigatorObj(120, 290, line3);
    emms[7] = navigatorObj(250, 290, line3);
    emms[8] = navigatorObj(380, 290, line3);
    emms[9] = navigatorObj(120, 260, line4);
    emms[10] = navigatorObj(250, 260, line4);
    emms[11] = navigatorObj(380, 260, line4);
    emms[12] = navigatorObj(120, 230, line5);
    emms[13] = navigatorObj(250, 230, line5);

    // Troncs
    let plts = new Array;
    plts[0] = new Obj(50, 170, Line6);
    plts[1] = new Obj(450, 170, Line6);
    plts[2] = new Obj(850, 170, Line6);
    plts[3] = new Obj(120, 140, Line7);
    plts[4] = new Obj(450, 140, Line7);
    plts[5] = new Obj(790, 140, Line7);
    plts[6] = new Obj(320, 110, Line8);
    plts[7] = new Obj(720, 110, Line8);
    plts[8] = new Obj(920, 110, Line8);
    plts[9] = new Obj(120, 80, Line9);
    plts[10] = new Obj(420, 80, Line9);
    plts[11] = new Obj(720, 80, Line9);
    plts[12] = new Obj(120, 50, Line10);
    plts[13] = new Obj(320, 80, Line10);
    plts[14] = new Obj(720, 50, Line10);

    // Nenuphares
    let wls = new Array;
    wls[0] = new Waterlily (42, 0);
    wls[1] = new Waterlily (162, 0);
    wls[2] = new Waterlily (282, 0);
    wls[3] = new Waterlily (402, 0);
    wls[4] = new Waterlily (522, 0);


    let frog = new Frog ();
    loading = loading + 17;
    

    function main_loop (){

    }

    // type de code diff à utiliser avec parcimonie
    function whatKey (evt){
        switch(evt.keyCode){
            // Clavier
            case 37:
                frog.goLeft();
                playSound(boing_sound);
                anim_time = 8;
            break;
            case 39:
                frog.goRight();
                playSound(boing_sound);
                anim_time = 8;
            break;
            case 40:
                frog.goDown();
                playSound(boing_sound);
                anim_time = 8;
            break;
            case 38:
                frog.goUp();
                playSound(boing_sound);
                anim_time = 8;
                if(frog.y < last_y && frog.state == true){
                    last_y = frog.y;
                    score = score + 50;
                }
            break;
            case 82:
                if (message_state == 2 || message_state == 3){
                    live_count = 3;
                    score = 0;
                    last_y = 380;
                    wl_full = 0;
                    for (i = 0; i< wls.length; i ++){
                        wls[i].setUnused();   
                    }
                    message_state = 0;
                    frog.initPos();
                    setTimer();
                }
            break;
            case 13:
                if(loading == 100){
                    loading = 0;
                    frog.unBlock();
                    begin = true;
                    setTimer();
                }
            break; 
            // case break obligé d'écrire tout le code= obligatoire dans ce cas mais peut çetre remplacé par des conditions
            

        }
    }


}