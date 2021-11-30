function preload() {
    }
    
    function setup() {
    canvas = createCanvas(650,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
    }
    
    function draw() {
    image(video,0,0,650,480);
    tint(tint_color); 
    fill(0, 255, 255);
    stroke(	0, 255, 255);
    rect(0,0,40,50);
    rect(610,0,40,50);
    rect(0,430,40,50);
    rect(610,430,40,50);

    fill(0,255,0);
    stroke(0,255,0);
    circle(40,50,20);
    circle(610,50,20);
    circle(40,430,20);
    circle(610,430,20);
    }

    function take_snapshot(){
        save('tinted_filter.png');
    }

    function filter_type(){
        tint_color = document.getElementById("name_of_color").value ;
    }