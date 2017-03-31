var app = function(app){
    app.makePages = function(stage, stageW, stageH, layoutManager){
        var pageList = {};
        
///////////////////////////////////////////////////////////////////////
/////////FRONT WALL////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
        var front = pageList.front = new zim.Container(stageW, stageH);
        front.name = "Front Wall";
        
        //~~//ASSETS//~~//
        var frontButton = new zim.Button({
            color: "blue",
            label:front.name
        }).addTo(front);
        
        //~~//LAYOUT//~~//
        var frontDesign = new zim.Layout({
            holder:front,
            regions:[
                {object: frontButton, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"}
            ],
            lastMargin:3,
            regionShape: new zim.Shape(),
            scalingObject:stage,
            backgroundColor:'red'
        });

///////////////////////////////////////////////////////////////////////
/////////LEFT WALL/////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
        var left = pageList.left = new zim.Container(stageW, stageH);
        left.name = "Left Wall";
        
        //~~//ASSETS//~~//
        var leftButton = new zim.Button({
            color: "red",
            label:left.name
        }).addTo(left);
        
        //~~//LAYOUT//~~//
        var leftDesign = new zim.Layout({
            holder:left,
            regions:[
                {object: leftButton, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"}
            ],
            lastMargin:3,
            regionShape: new zim.Shape(),
            scalingObject:stage,
            backgroundColor:'orange'
        });
        
///////////////////////////////////////////////////////////////////////
/////////RIGHT WALL////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
        var right = pageList.right = new zim.Container(stageW, stageH);
        right.name = "Right Wall";
        
        //~~//ASSETS//~~//
        var rightButton = new zim.Button({
            color: "purple",
            label:right.name
        }).addTo(right);
        rightButton.x+=100;
        
        //~~//LAYOUT//~~//
        var rightDesign = new zim.Layout({
            holder:right,
            regions:[
                {object: rightButton, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"}
            ],
            lastMargin:3,
            regionShape: new zim.Shape(),
            scalingObject:stage,
            backgroundColor:'skyblue'
        });
        
        
///////////////////////////////////////////////////////////////////////
/////////BACK WALL/////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
        var back = pageList.back = new zim.Container(stageW, stageH);
        back.name = "Back Wall";
        
        //~~//ASSETS//~~//
        var backButton = new zim.Button({
            color: "purple",
            label:back.name
        }).addTo(back);
        
        //~~//LAYOUT//~~//
        var backDesign = new zim.Layout({
            holder:back,
            regions:[
                {object: backButton, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"}
            ],
            lastMargin:3,
            regionShape: new zim.Shape(),
            scalingObject:stage,
            backgroundColor:'yellow'
        });
        
        
///////////////////////////////////////////////////////////////////////
/////////CEILING///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
        var ceiling = pageList.ceiling = new zim.Container(stageW, stageH);
        ceiling.name = "Ceiling";
        
        //~~//ASSETS//~~//
        var ceilingButton = new zim.Button({
            color: "purple",
            label:ceiling.name
        }).addTo(ceiling);
        
        //~~//LAYOUT//~~//
        var ceilingDesign = new zim.Layout({
            holder:ceiling,
            regions:[
                {object: ceilingButton, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"}
            ],
            lastMargin:3,
            regionShape: new zim.Shape(),
            scalingObject:stage,
            backgroundColor:'deeppink'
        }); 
        
///////////////////////////////////////////////////////////////////////
/////////FLOOR/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
        var floor = pageList.floor = new zim.Container(stageW, stageH);
        floor.name = "Floor";
        
        //~~//ASSETS//~~//
        var floorButton = new zim.Button({
            color: "purple",
            label:floor.name
        }).addTo(floor);
        
        //~~//LAYOUT//~~//
        var floorDesign = new zim.Layout({
            holder:floor,
            regions:[
                {object: floorButton, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"}
            ],
            lastMargin:3,
            regionShape: new zim.Shape(),
            scalingObject:stage,
            backgroundColor:'deeppink'
        }); 
        
            
    var rect = new zim.Rectangle(300, 500, "black")
        .addTo(stage).pos(0, stageH - 500);
        
        
        return pageList;
    }
    return app;
}(app||{});