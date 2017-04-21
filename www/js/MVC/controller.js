var app = function(app){
    app.makeController = function(stage, pageList, pages){
                
        //get pages and objects
        ////PAGES////
        //might not need actually
        var front = pageList.front;
        var left = pageList.left;
        var right = pageList.right;
        var back = pageList.back;
        var ceiling = pageList.ceiling;
        var floor = pageList.floor;
        
        //get first page
        var currentPage = pageList.front;      
        pages.on("pagetransitioned", function(e){
            //inventoryBox.alpha=.01;
            //console.log(pages.page.name);
            //console.log(pages.page);
            
            switch(pages.page.name){
                case "Front Wall":
                    currentPage = pageList.front;
                    break;
                case "Left Wall":
                    currentPage = pageList.left;
                    break;
                case "Right Wall":
                    currentPage = pageList.right;
                    break;
                case "Back Wall":
                    currentPage = pageList.back;
                    break;
                case "Ceiling":
                    currentPage = pageList.ceiling;
                    break;
                case "Floor":
                    currentPage = pageList.floor;
            }
            //console.log(currentPage.name);
            stage.update();
        });
        
        pages.on("lookDown", function(e){
            //inventoryBox.alpha=1;
            stage.update();
            pages.go(pages.lastPage, "down");
        });
        pages.on("lookUp", function(e){
            //inventoryBox.alpha=1;
            stage.update();
            pages.go(pages.lastPage, "up");
        });
        
        
        var inventory = pageList.inventory;
        var inventoryBox = pageList.inventory.box;
        //var textBox = pageList.inventory.textBox;
        //var front = pageList.front;
        var ball = pageList.front.testBall;
        ball.drag();
        ball.loc = front;
        ball.safeCheck = true
        safeX = ball.x;
        safeY = ball.y;

        ball.on('pressup', function(){
                //checkTextBox(ball);
            zog('drop');
                checkInventory(ball);
        });
    
        
        //handle inventory
        function checkInventory(obj){
            var x = obj.x;
            var y = ball.y;
            if(obj.hitTestBounds(inventoryBox)){
                zog('hitting');
                currentPage.removeChild(obj);
                inventory.addChild(obj);
                obj.loc=inventory;
                obj.x = x;
                obj.y = y;
            } else {
                inventory.removeChild(obj);
                currentPage.addChild(obj);
                obj.loc=currentPage;
                obj.x = x;
                obj.y = y;
            }
            stage.update();
        }
        
        
        //front door
        
        //left curtains
        
        //right lamp

        var animationTime = 1000;
        var space = 10;
        var radius = 70;
        var top = radius + 80;
        var bottom = stage.h - radius - 80;
        var checkH = stage.h/2;
        var beadsWin = false;
        
        var allBalls = right.allBalls;
        
        function moveBlocks(ball){
            if(ball.y>stage.h/2){
                zim.move(ball, ball.x, top, animationTime/2, null, checkBeadWin);
            } else {
                zim.move(ball, ball.x, bottom, animationTime/2, null, checkBeadWin);
            }
        }
        
        function moveA(){
            moveBlocks(allBalls[0]);
            moveBlocks(allBalls[3]);
        }
          
        function moveB(){
            moveBlocks(allBalls[2]);
            moveBlocks(allBalls[4]);
        }
        
        
        function moveC(){
            if(allBalls[1].y > checkH && 
              allBalls[0].y > checkH &&
              allBalls[2].y > checkH){
              moveBlocks(allBalls[1]);
              moveBlocks(allBalls[2]);
              moveBlocks(allBalls[0]);
            } else if(allBalls[1].y < checkH && 
              allBalls[0].y < checkH &&
              allBalls[2].y < checkH){
              moveBlocks(allBalls[1]);
              moveBlocks(allBalls[0]);
              moveBlocks(allBalls[2]);
            } else if(
                allBalls[1].y > checkH &&
              allBalls[0].y > checkH){
              moveBlocks(allBalls[1]);
              moveBlocks(allBalls[0]);
            } else if(allBalls[1].y < checkH &&
              allBalls[0].y < checkH){
              moveBlocks(allBalls[1]);
              moveBlocks(allBalls[0]);
            } else if(allBalls[1].y > checkH &&
              allBalls[2].y > checkH){
              moveBlocks(allBalls[1]);
              moveBlocks(allBalls[2]);
            } else if(allBalls[1].y < checkH && 
              allBalls[2].y < checkH){
              moveBlocks(allBalls[1]);
              moveBlocks(allBalls[2]);
            } else {
              moveBlocks(allBalls[1]);
            }
          }
        function initBeads(){
            allBalls[0].on("click", function(){
                if(!beadsWin){
                   moveA(); 
            }});
            allBalls[3].on("click", function(){
                if(!beadsWin){
                   moveA(); 
            }});
            allBalls[2].on("click", function(){
                if(!beadsWin){
                   moveB(); 
            }});
            allBalls[4].on("click", function(){
                if(!beadsWin){
                   moveB(); 
            }});
            allBalls[1].on("click", function(){
               if(!beadsWin){
                   moveC();
               } 
            });
        }
        initBeads();
              
        function checkBeadWin() {
            if(allBalls[0].y < checkH &&
               allBalls[0].y == allBalls[1].y &&
               allBalls[0].y == allBalls[2].y &&
               allBalls[0].y == allBalls[3].y &&
               allBalls[0].y == allBalls[4].y ) {
                //turn on light
                beadsWin = true;
                console.log('win');
                stage.update();
            }
        }
        
        //back safe
        
        //ceiling fan
        
        //floor rug (combine)
        
        
        
        
    }

    return app;
}(app || {});