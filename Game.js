class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    background(bg2)
    target1 = createSprite(1000,500);
    target1.addImage(target_1);
    target1.scale = 0.9;
  
    bullet1 = createSprite(1000,496);
    bullet1.addImage(b_1);
    bullet1.scale = 0.7;
  
            p1 = createSprite(130,615);
            p1.addImage(p_1);
            p1.scale = 0.7;

            p2 = createSprite(410,606);
            p2.addImage(p_2);
            p2.scale =  0.7;

            p3 = createSprite(335,540);
            p3.addImage(p_3);
            p3.scale =  0.7;
           
            p4 = createSprite(600,550);
            p4.addImage(p_4);
            p4.scale =  0.7;


            n1 = createSprite(1430,710);
            n1.addImage(n_1);
            n1.scale =  0.7;

            n2 = createSprite(500,550);
            n2.addImage(n_2);
            n2.scale =  0.7;
  
            n3 = createSprite(1510,550);
            n3.addImage(n_3);
            n3.scale =  0.7;

            n4 = createSprite(1800,510);
            n4.addImage(n_4);
            n4.scale =  0.7;

    s1 = createSprite(150,680);
    s1.addImage(s_1);
    s1.scale = 0.7;
  
    s2 = createSprite(450,670);
    s2.addImage(s_2);
    s2.scale = 1.2;
   
    s3 = createSprite(350,600);
    s3.addImage(s_3);
    s3.scale = 1.2;

    s4 = createSprite(600,600);
    s4.addImage(s_4);
    s4.scale = 1.2;
  
    s5 = createSprite(800,900);
    s5.addImage(s_5);
    s5.scale = 1.3;
  
    s6 = createSprite(1500,600);
    s6.addImage(s_6);
    s6.scale = 1.2;

    s7 = createSprite(1500,620);
    s7.addImage(s_7);
    s7.scale = 1.2;
  
    s8 = createSprite(1780,550);
    s8.addImage(s_8);
    s8.scale = 0.8;
  
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(bg);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;

         
          if (index === player.index){
            stroke(10);
            fill("red");
            camera.position.x = displayWidth/2;
            camera.position.y = displayHeight/2;
          }
         
          if (player.index===1){
            gun2 = createSprite(800,700);
            gun2.addImage(gun_2);
            gun2.scale = 1.4;
            
          }
          if (player.index===2){
            gun1 = createSprite(800,700);
            gun1.addImage(gun_1);
            gun1.scale = 1.1;
           
            
          }

          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
    
     
      drawSprites();
    }
  
      
    }
  
  