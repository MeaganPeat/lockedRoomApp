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
        
    }

    return app;
}(app || {});