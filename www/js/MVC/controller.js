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
        var final = pageList.final;
        
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
        
        //handle inventory
        function checkInventory(obj){
            var x = obj.x;
            var y = obj.y;
            if(obj.hitTestBounds(inventoryBox)){
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
        var door = pageList.front.door;
        var ball = pageList.front.testBall;
        ball.drag();
        ball.loc = front;
        ball.safeCheck = true
        safeX = ball.x;
        safeY = ball.y;

        ball.on('pressup', function(){
            checkInventory(ball);
            checkCircle();
        });
    
        
        ////////////////////////////////////////
        //left curtains
        var rustle = false
        var leftBall = ball.clone();
        leftBall.color = 'blue';
        //leftBall.alpha = 0;
        
        curtains = left.curtains;
        curtains.on('click', function(){
            zim.move({
                target:curtains, 
                x:curtains.x-3, 
                y:curtains.y,
                time: 100,
                ease:"bounceIn",
                loop:true,
                loopCount:3, 
                rewind:true,
                call: dropBall
            });
        });
        
        function dropBall(){
            if(!rustle){
                leftBall.addTo(left).pos(stage.w/2, stage.h/5);
                zim.move({
                    target:leftBall, 
                    x:leftBall.x, 
                    y:stage.w+(stage.w/4),
                    time: 800,
                    ease:"bounceOut",
                }); 
                rustle = true;
                leftBall.drag();
                leftBall.on('pressup', function(){
                    checkCircle();
                    checkInventory(leftBall);
                });
            }
        }
        
        ////////////////////////////////////////
        //right lamp
        var rightBall =  ball.clone();
        rightBall.color = 'red';
        var rightLight = new zim.Rectangle(stage.w, stage.h-(stage.h)*.2, 'yellow');
        rightLight.alpha = .3;

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
                rightLight.addTo(right);
                rightBall.addTo(right).pos(stage.w/2, stage.h - stage.h/3);
                rightBall.drag();
                rightBall.on('pressup', function(){
                    checkCircle();
                    checkInventory(rightBall);
                });
                
                stage.update();
            }
        }
        
        
        //back safe
        var slideT = back.st;
        var slideB = back.sb;
        var safeC = back.safeC;
        var safeO = back.safeO;
        var backBall = ball.clone();
        backBall.color = 'white';
        
        var numT = slideT.currentValue;
        var numB = slideB.currentValue;
        
        slideT.on('change', checkSliders);
        slideB.on('change', checkSliders);
        
        function checkSliders(){
            numT = slideT.currentValue;
            numB = slideB.currentValue;
            if(rugCheck&&
                numT == 3&&
                numB == 5
              ){
                safeC.animate({
                    obj:{alpha:0}, 
                    time:1000,
                    call:addBackBall
                });
            }else if(numT==3&&numB==2){
                 safeC.animate({
                    obj:{alpha:0}, 
                    time:1000,
                    call:addBackBall
                });
            }
        }
        
        function addBackBall(){
            backBall.addTo(back);
            backBall.alpha = 0;
            backBall.y -= 160;
            backBall.animate({
                obj:{alpha:1},
                time:800
            });
            backBall.drag();
            backBall.on("pressup", function(){
                checkCircle();
                checkInventory(backBall);
            });
        }
        
        //ceiling fan
        var fan = ceiling.fan;
        var label = ceiling.label;
        var key = ceiling.key;
        var keyTop = true;
        var circles = floor.circles;
        
        fan.on("click", function(){
            if(keyTop){
                label.animate({
                    obj:{alpha:1}, 
                    time:1000,
                    rewind: true,
                    rewindWait:1800
                });      
            } 
        });
        
        key.on("click", function(){
            if(keyTop){
                label.animate({
                    obj:{alpha:1}, 
                    time:1000,
                    rewind: true,
                    rewindWait:1800
                });      
            } 
        });
        
        //floor rug (combine)
        var rugCheck = true;
        var rug = floor.rug;
        rug.drag();
        rug.on('pressup', function(){
            if(rug.hitTestBounds(inventoryBox)){
                rug.animate({
                    obj:{alpha:0}, 
                    time:1000
                });
                checkCircle();
                rugCheck = false;
            }
        });
        
        function checkCircle(){
            if(
                ball.hitTestBounds(circles)&&
                leftBall.hitTestBounds(circles)&&
                rightBall.hitTestBounds(circles)&&
                backBall.hitTestBounds(circles)&&
                keyTop
              ){
                keyTop=false;
                console.log('dropping');
                key.addTo(floor).pos(stage.w/3+20,-300);
                zim.move({
                    target:key, 
                    x:key.x, 
                    y:stage.h/3,
                    time: 1000,
                    ease:"bounceOut",
                }); 
                
                key.drag();
                key.on('pressup', function(){
                    checkInventory(key);
                    unlock();
                })
            }
        }
        
        function unlock(){
            if(key.hitTestBounds(door)){
                console.log('unlocked');
                final.addTo(stage);
            }
        }
    
    }//end of make controller

    return app;
}(app || {});