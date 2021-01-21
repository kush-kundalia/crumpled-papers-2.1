// crumpled papers 1
    let world;
    let engine;
    var defualtBinWidth;
    var defualtBinHeight;
    var backdrop;
    function preload(){
        backdrop = loadImage("bg2.jpg");
        paper = loadImage("paper.png");
        bin = loadImage("dustbingreen.png")
    }
    function setup(){
        engine = Matter.Engine.create();
        world = engine.world
        const Canvas = createCanvas(1200,480);
        defualtBinWidth = (3*2);
        defualtBinHeight = (52*2);
        ground = new Ground(width/2,height-20,width,20);
        binWall1 = new Bin(width/2+50,height-95,defualtBinWidth,defualtBinHeight);
        binWall2 = new Bin(width/2+115,height-37,defualtBinHeight,defualtBinWidth);
        binWall3 = new Bin(width/2+180,height-95,defualtBinWidth,defualtBinHeight);
        paperObject = new Paper(20,20,20);
        // paperObject.scale(20,20)
        //20,20,20

    }



    function draw(){
    background(backdrop);
    Matter.Engine.update(engine);
    ground.spawn();
    binWall1.spawn();
    binWall2.spawn();
    binWall3.spawn();
    paperObject.display();
    // Jumpahead();
    // undoBack();


    }



    function keyPressed(){
        if(keyCode===38){
            Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:65,y:-77})
        }
        
    }
    