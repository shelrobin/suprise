function setup() {
  createCanvas(1300,1000);
  

  }

function draw() {

  function myVarX(){ 
  if (mouseX < width && 0 <  mouseX){
  myX= mouseX;
  }else{
  myX= width / 3;
  }
  }
  function myVarY(){ 
  if (mouseY < height && 0 <  mouseY){
  myY= mouseY;
  }else{
  myY= width / 3;
  }
  }
      r=random(255);
    g=random(255);
    b=random(255);
    size=random(10,140)
  fill(r,g,b)
 noStroke();
 ellipse(myX,myY,size,size);
}


