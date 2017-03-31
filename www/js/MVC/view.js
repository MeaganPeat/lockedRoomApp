var app = function(app){
    app.makePages = function(stage, stageW, stageH, layoutManager){
        var pageList = {};
        
        ////FRONT WALL/////
        var front = pageList.front = new zim.Container(stageW, stageH);
        front.name = "Front Wall";
        
        var frontButton = new zim.Button({
            color: "blue",
            label:front.name
        }).addTo(front);
        
        
        ///LEFT WALL//////
        var leftWall = pageList.left = new zim.Container(stageW, stageH);
        leftWall.name = "Left Wall";
        
        var leftButton = new zim.Button({
            color: "red",
            label:leftWall.name
        }).addTo(leftWall);
        
        
        ///RIGHT WALL//////
        var rightWall = pageList.right = new zim.Container(stageW, stageH);
        rightWall.name = "Right Wall";
        
        var rightButton = new zim.Button({
            color: "purple",
            label:rightWall.name
        }).addTo(rightWall);
        
        
        ///BACK WALL//////
        var backWall = pageList.back = new zim.Container(stageW, stageH);
        backWall.name = "Back Wall";
        
        
        
        ///CEILING//////
        var ceiling = pageList.ceiling = new zim.Container(stageW, stageH);
        ceiling.name = "Ceiling";
        
        
        
        //////Floor//////
        var floor = pageList.floor = new zim.Container(stageW, stageH);
        floor.name = "Floor";
        
        return pageList;
    }
    return app;
}(app||{});