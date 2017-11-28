var value = 0 ;

function setup() {
  createCanvas (windowWidth,windowHeight);
 
}

function draw() {
    
    if (value <= 10) { 
    
    fill (50,2,0);
    textSize(30);
    textStyle(BOLD)
    text("SHAKE", width/2, height/2);
    }

    if (value >= 10) { 
    
    fill (255,255,255);
    textSize(30);
    textStyle(BOLD)
    text("SHAKE", width/2, height/2);
    noStroke();
    fill (255,248,127);
    ellipse(width/2,height/2,40,40);
    
    }
    
    if (value >= 25) { 
    
        fill (255,255,255);
    textSize(30);
    textStyle(BOLD)
    text("SHAKE", width/2, height/2);
    noStroke();
    fill (255,238,75);
    ellipse(width/2,height/2,100,100);
    
    }
    
    if (value >= 50) { 
    
    fill (255,255,255);
    textSize(30);
    textStyle(BOLD)
    text("SHAKE", width/2, height/2);
    noStroke();
    fill (255,222,68);
    ellipse(width/2,height/2,150,150);
    
    }
    
    if (value >= 90) { 
    
    fill (255,255,255);
    textSize(30);
    textStyle(BOLD)
    text("SHAKE", width/2, height/2);
    noStroke();
    fill (255,175,5);
    ellipse(width/2,height/2,200,200);
    
    }
    
    if (value >= 130) { 
    
    fill (255,255,255);
    textSize(30);
    textStyle(BOLD)
    text("SHAKE", width/2, height/2);
    noStroke();
    fill (255,95,2);
    ellipse(width/2,height/2,300,300);
    
    }
    
    if (value >= 160) { 
    
    fill (255,255,255);
    textSize(30);
    textStyle(BOLD)
    text("SHAKE", width/2, height/2);
    noStroke();
    fill (236,2,0);
    ellipse(width/2,height/2,450,450);
    
    }
    
    if (value >= 190) { 
    
    fill (255,255,255);
    textSize(30);
    textStyle(BOLD)
    text("SHAKE", width/2, height/2);
    noStroke();
    fill (154,2,0);
    ellipse(width/2,height/2,600,600);
    
    }
    
    
    if (value >= 270) { 
    
    fill (255,255,255);
    textSize(30);
    textStyle(BOLD)
    text("SHAKE", width/2, height/2);
    noStroke();
    fill (93,2,0);
    ellipse(width/2,height/2,900,900);
    
    }
    
    if (value >= 300) { 
    
    fill (50,2,0);
    textSize(30);
    textStyle(BOLD)
    text("SHAKE", width/2, height/2);
    noStroke();
    fill (50,2,0);
    ellipse(width/2,height/2,10000,10000);
    fill(255,255,255);
    textSize(70);
    textStyle(BOLD)
    text("YOU WIN!", width/2, height/2);
    }
}


function deviceShaken() {
    value++;
}
