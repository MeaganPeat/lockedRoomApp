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
        
//        function checkTextBox(obj){
//            if(obj.hitTestBounds(textBox)){
//                zim.move(obj, safeX, safeY, 500);
//            }
//
//        }
            
        
//        zim.Ticker.add(function(){
//            if (ball.hitTestBounds(inventory)&&ball.hit){
//                zog("hitting");
//                ball.hit=false;
//            }               
//        }, stage);
        
        
        
    }

    return app;
}(app || {});