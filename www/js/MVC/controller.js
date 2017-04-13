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
        var inventory = pageList.inventory.box;
        
        var ball = pageList.front.testBall;
        ball.drag();
        ball.hit = false;
        
        zim.Ticker.add(function(){
            if (ball.hitTestBounds(inventory)){
                zog("hitting");
            }               
        }, stage);
    }

    return app;
}(app || {});