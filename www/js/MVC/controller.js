var app = function(app){
    app.makeController = function(stage, pageList, pages){
        pages.on("pagetransitioned", function(e){
            //THIS IS PROBABLY WHERE I NEED TO KEEP TRACK OF CURRENT PAGE AND LAST PAGE
            console.log(pages.page.name);
        });
        
        pages.on("lookDown", function(e){
            pages.go(pages.lastPage, "down");
        });
        pages.on("lookUp", function(e){
            pages.go(pages.lastPage, "up");
        });
        
        //handle inventory
        var inventory = pageList.inventory;
        var inventoryBox = pageList.inventory.box;
        var front = pageList.front;
        var ball = pageList.front.testBall;
        ball.drag();
        ball.hit = true;
        
        ball.on('pressup', function(){
            zog('drop');
            checkHitting();
        });
        
        function checkHitting(){
            if(ball.hitTestBounds(inventoryBox)){
                zog('hitting');
                front.removeChild(ball);
                var x = ball.x;
                var y = ball.y;
                
                inventory.addChild(ball);
                ball.x = x;
                ball.y = y;
                stage.update();
            }
        }
        
//        zim.Ticker.add(function(){
//            if (ball.hitTestBounds(inventory)&&ball.hit){
//                zog("hitting");
//                ball.hit=false;
//            }               
//        }, stage);
        
        
        
    }

    return app;
}(app || {});