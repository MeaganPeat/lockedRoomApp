var app = function(app){
    app.makePages = function(stage, stageW, stageH, layoutManager, assets){
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
        var richBrown = '#281E05';
        
        var inventoryBackground = darkGrey;
        var wallpaper = purpleBlueL;
        var ceilingPaint = greyBlueL;
        var wood = goldD;
        var woodGrains = richBrown;
        
///////////////////////////////////////////////////////////////////////
/////////FRONT WALL////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
        var front = pageList.front = new zim.Container(stageW, stageH);
        front.name = "Front Wall";
        
        //~~//ASSETS//~~//
        
        var door = assets.door;
        door.addTo(front);
            
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
                {object: door, marginTop:5, maxWidth:80, height:70, align:"center", valign:"top"},
                {object: box, marginTop:1, height:20, align:"center", valign:"top", backgroundColor: inventoryBackground}
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
        var curtains = left.curtains = assets.curtainsC;
        curtains.addTo(left);
        
        var curtainsO = left.curtainsO = assets.curtainO;
        
        var boxl = box.clone();
        boxl.addTo(left)
            .pos(0, stageH - 300);
        
        //~~//LAYOUT//~~//
        var leftDesign = new zim.Layout({
            holder:left,
            regions:[
                {object: curtains, marginTop:5, maxWidth:80, height:70, align:"center", valign:"top"},
                {object: boxl, marginTop:1, align:"center", height:20, valign:"top", backgroundColor: inventoryBackground}
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
        
        var lamp = new zim.Container(stageW, stageH).addTo(right);
        var lampP = assets.lampP;
        //lampP.addTo(lamp);
        //lampP.x = -20;
        
        var lampH = assets.lampH.addTo(right);
        lampH.scale(1.5);
        
        //-----//
        
        var doorPuzzle = new zim.Container(stageW, stageH);
          doorPuzzle.center(lamp);

          var animationTime = 1000;
          var space = 10;
          var radius = 70;
          var top = radius + 80;
          var bottom = stageH - radius - 80;
          var checkH = stageH/2;
          var howThick = 8;
          var colorA = gold;
          var colorABorder = goldD;
          var colorB = gold;
          var colorBBorder = goldD;
          var colorC = gold;
          var colorCBorder = goldD;
          
          var colorA1 = new zim.Circle(radius, colorA, colorABorder, howThick);
          var colorA2 = new zim.Circle(radius, colorA, colorABorder, howThick);
          
          var colorB1 = new zim.Circle(radius, colorB, colorBBorder, howThick);
          var colorB2 = new zim.Circle(radius, colorB, colorBBorder, howThick);
          
          var colorC1 = new zim.Circle(radius, colorC, colorCBorder, howThick);
          
          var allBalls = right.allBalls = [colorA1, colorC1, colorB1, colorA2, colorB2];
          
          var ballContainer = new zim.Container(
              ((radius*2*allBalls.length)+space*(allBalls.length) - radius), stageH);
          ballContainer.center(doorPuzzle);
          ballContainer.x += radius/2 + space/2;

          function addBalls(){
            for(i=0; i<allBalls.length; i++){
              var current = allBalls[i];
              var rand = zim.rand(0,1);
              ballContainer.addChild(current);
              current.x = (radius*2 + space)*i
                console.log('adding');
              if(i%2 == 0){
                current.y = top;
              } else {
                current.y = bottom;
              }
            }
            stage.update();
          }
          
          addBalls();
          
        //-----//
        
        var boxr = box.clone();
        boxr.addTo(right)
            .pos(0, stageH - 300);
        
        //~~//LAYOUT//~~//
        var rightDesign = right.design = new zim.Layout({
            holder:right,
            regions:[
                {object: lampH, marginTop:5, width: 100, maxWidth:100, height:30, align:"center", valign:"top"},
                {object: lamp, marginTop:0, width: 100, maxWidth:100, height:30, align:"center", valign:"top"},
                {object: boxr, marginTop:1, height:20, align:"center", valign:"top", backgroundColor: inventoryBackground}
            ],
            lastMargin:0,
            //regionShape: new zim.Shape(),
            scalingObject:stage,
            backgroundColor:wallpaper
        });
        
///////////////////////////////////////////////////////////////////////
/////////BACK WALL/////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
        var back = pageList.back = new zim.Container(stageW, stageH);
        back.name = "Back Wall";
        
        var safe = new zim.Container().addTo(back);
        
        var openedSafe = back.safeO = assets.safeC.addTo(safe);
        
        var closedSafe = back.safeC = assets.safeC.addTo(safe);

        var sliderT = back.st = new zim.Slider(null, 10, 1, null, 600, 10, darkGrey, null, true ).addTo(back);
        
        var sliderB = back.sd = new zim.Slider(null, 10, 1, null, 600, 10, darkGrey, null, true ).addTo(back);
        

        var boxb = box.clone();
        boxb.addTo(back)
            .pos(0, stageH - 300);
        
        //~~//LAYOUT/sliderT/~~//
        var backDesign = new zim.Layout({
            holder:back,
            regions:[
                {object: safe, marginTop:5, maxWidth:80, height:30, align:"center", valign:"top"},
                
                {object: sliderT, marginTop:5, maxWidth:90, height:10, align:"center", valign:"top"},
                
                {object: sliderB, marginTop:5, maxWidth:90, height:10, align:"center", valign:"top"},
                
                {object: boxb, marginTop:1, align:"center", valign:"top", height:20, backgroundColor: inventoryBackground}
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
        var key = ceiling.key = assets.key
            .addTo(ceiling).scale(.3);
        key.x += 25;
        key.y +=100;
        var fan = ceiling.fan = assets.fan
            .addTo(ceiling);
        var label = ceiling.label = new zim.Label("The key is too high up!")
            .addTo(ceiling);
        label.alpha = 0;
        
        var boxc = box.clone();
        boxc.addTo(ceiling)
            .pos(0, stageH - 300);
        
        //~~//LAYOUT//~~//
        var ceilingDesign = new zim.Layout({
            holder:ceiling,
            regions:[
                {object: fan, marginTop:10, maxWidth:80, height:50, align:"center", valign:"top"},
                {object: label, marginTop:1, maxWidth:80, align:"center", valign:"top"},
                {object: boxc, marginTop:1, align:"center", valign:"top", height:20, backgroundColor: inventoryBackground}
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
        var f = new zim.Container().addTo(floor);
        var circles = floor.circles = assets.floorCircles
        .addTo(f);
        var rug = floor.rug = assets.rug.addTo(f);
        
        var boxf = box.clone();
        boxf.addTo(floor)
            .pos(0, stageH - 300);
        
        //~~//LAYOUT//~~//
        var floorDesign = new zim.Layout({
            holder:floor,
            regions:[
                {object: f, marginTop:10, maxWidth:80, height:60, align:"center", valign:"top"},
                {object: boxf, marginTop:1, align:"center", valign:"top", height:20, backgroundColor: inventoryBackground}
            ],
            lastMargin:0,
            //regionShape: new zim.Shape(),
            scalingObject:stage,
            backgroundColor:wood
        }); 
        layoutManager.add(floorDesign);
         
///////////////////////////////////////////////////////////////////////
/////////FLOATING RECTANGLEs///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
        var inventory = pageList.inventory = new zim.Container(stageW, stageH)
            .addTo(stage);
        inventory.name = 'Inventory';
        
        
        var box = pageList.inventory.box =  new zim.Rectangle(900, 300, inventoryBackground)
        .addTo(inventory).pos(0, stageH - 300);
        
        
//        var textBox = pageList.inventory.textBox = box.clone();
//        textBox.addTo(inventory).pos(0, 0);
        
        box.alpha=0.01;
        
        var inventoryLayout = new zim.Layout({
            holder:inventory,
            regions:[
                //{object:textBox, marginTop:0, maxWidth:100, minWidth:100 },
                {object:box, marginTop:80, align:"center", valign:"top", height:20}
                
            ],
            lastMargin:0,
            scalingObject:stage
        });
        layoutManager.add(inventoryLayout);
        
        
        
        return pageList;
    }
    return app;
}(app||{});