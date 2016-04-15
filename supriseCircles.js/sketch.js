function myVarX(){ 
  if (mouseX < width && 0 <  mouseX){
  return mouseX;
  }else{
  return width / 3;
  }
  }

function myVarY(){ 
  if (mouseY < height && 0 <  mouseY){
  return mouseY;
  }else{
  return height / 3;
  }
  }
function setup() {
  createCanvas(1300,1000);


function draw() {

  }
    r=random(255);
    g=random(255);
    b=random(255);
    size=random(10,140)
  fill(r,g,b)
 noStroke();
 ellipse(myVarX,myVarY,size,size);
}


