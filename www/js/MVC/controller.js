var app = function(app){
    app.makeController = function(stage, p, pages){
        pages.on("pagetransitioned", function(e){
            //THIS IS PROBABLY WHERE I NEED TO KEEP TRACK OF CURRENT PAGE AND LAST PAGE
            console.log(pages.page.name);
        });

 
        
    }

    return app;
}(app || {});