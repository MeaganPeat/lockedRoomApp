var app = function(app){
    app.makePages = function(stage, stageW, stageH, layoutManager){
        var pageList = {};


///``~~~~~~~~~~~~~``//COLOURS//``~~~~~~~~~~~~~``//
        //pallet colours
        var purple = "#6A27AA";
        var purpleL = "#EBE2F4";
        var purpleBlue = '#4F06C5';
        var purpleBlueL = '#C5ADEC';
        var greyBlue= '#76A0AE';
        var greyBlueL= '#EDF2F4';
        var gold = '#ECB31C';
        var goldD = '#4E3A09';
        var darkGrey = '#252831';
        
        var inventoryBackground = darkGrey;
        var wallpaper = purpleBlueL;
        var ceilingPaint = greyBlueL;
        var carpet = goldD;
        
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
        
            
        var testBall = new zim.Circle(50, "orange")
            .addTo(front)
            .pos(stageW/2, stageH/2);
        pageList.front.testBall = testBall;
        
        var box = new zim.Rectangle(900, 300, inventoryBackground)
            .addTo(front)
            .pos(0, stageH - 300);
        
        //~~//LAYOUT//~~//
        var frontDesign = new zim.Layout({
            holder:front,
            regions:[
                {object: frontButton, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"},
                {object: box, marginTop:1, align:"center", valign:"top"}
            ],
            lastMargin:0,
            //regionShape: new zim.Shape(),
            scalingObject:stage,
            backgroundColor:wallpaper
        });
        layoutManager.add(frontDesign);
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
        
        var boxl = box.clone();
        boxl.addTo(left)
            .pos(0, stageH - 300);
        
        //~~//LAYOUT//~~//
        var leftDesign = new zim.Layout({
            holder:left,
            regions:[
                {object: leftButton, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"},
                {object: boxl, marginTop:1, align:"center", valign:"top"}
            ],
            lastMargin:0,
            //regionShape: new zim.Shape(),
            scalingObject:stage,
            backgroundColor:wallpaper
        });
        layoutManager.add(leftDesign);
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
        
        var boxr = box.clone();
        boxr.addTo(right)
            .pos(0, stageH - 300);
        
        //~~//LAYOUT//~~//
        var rightDesign = new zim.Layout({
            holder:right,
            regions:[
                {object: rightButton, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"},
                {object: boxr, marginTop:1, align:"center", valign:"top"}
            ],
            lastMargin:0,
            //regionShape: new zim.Shape(),
            scalingObject:stage,
            backgroundColor:wallpaper
        });
        layoutManager.add(rightDesign);
        
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

        var boxb = box.clone();
        boxb.addTo(back)
            .pos(0, stageH - 300);
        
        //~~//LAYOUT//~~//
        var backDesign = new zim.Layout({
            holder:back,
            regions:[
                {object: backButton, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"},
                {object: boxb, marginTop:1, align:"center", valign:"top"}
            ],
            lastMargin:0,
            //regionShape: new zim.Shape(),
            scalingObject:stage,
            backgroundColor:wallpaper
        });
        layoutManager.add(backDesign);
        
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
        
        var boxc = box.clone();
        boxc.addTo(ceiling)
            .pos(0, stageH - 300);
        
        //~~//LAYOUT//~~//
        var ceilingDesign = new zim.Layout({
            holder:ceiling,
            regions:[
                {object: ceilingButton, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"},
                {object: boxc, marginTop:1, align:"center", valign:"top"}
            ],
            lastMargin:0,
            //regionShape: new zim.Shape(),
            scalingObject:stage,
            backgroundColor:ceilingPaint
        }); 
        layoutManager.add(ceilingDesign);
        
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
        
        var boxf = box.clone();
        boxf.addTo(floor)
            .pos(0, stageH - 300);
        
        //~~//LAYOUT//~~//
        var floorDesign = new zim.Layout({
            holder:floor,
            regions:[
                {object: floorButton, marginTop:5, maxWidth:80, height:15, align:"center", valign:"top"},
                {object: boxf, marginTop:1, align:"center", valign:"top"}
            ],
            lastMargin:0,
            //regionShape: new zim.Shape(),
            scalingObject:stage,
            backgroundColor:carpet
        }); 
        layoutManager.add(floorDesign);
         
///////////////////////////////////////////////////////////////////////
/////////FLOATING RECTANGLEs///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
        //var inventoryBackground = frame.dark;
        
        var inventory = pageList.inventory = new zim.Container(stageW, stageH)
            .addTo(stage);
        inventory.name = 'Inventory';
        
        
        var box = pageList.inventory.box =  new zim.Rectangle(900, 300, inventoryBackground)
        .addTo(inventory).pos(0, stageH - 300);
        box.alpha=0.01;
        
        var inventoryLayout = new zim.Layout({
            holder:inventory,
            regions:[
                {object:box, marginTop:80, maxWidth:100, minWidth:100, height:20}
            ],
            lastMargin:0,
            scalingObject:stage
        });
        layoutManager.add(inventoryLayout);
        
        
        
        return pageList;
    }
    return app;
}(app||{});