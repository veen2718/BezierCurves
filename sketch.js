//**OPTIONS FOUND IN options.js FILE**


let drawing = true

function setup() {
  createCanvas(windowWidth,windowHeight);
}
writetext = false
function draw() {
  if(writetext&&devMode){
    text("Something broke",20,20)
  }
  pixelDensity(quality)
  background(220);
  stroke("black")
  strokeWeight(2)
  
  
  
  if(clickmode){
    strokeWeight(1)
    text("Bézier Curves",20,windowHeight-20)
    txt = ("Click points, and these points will be the verticies of the shape. Right Click to start draw. If that doesnt work, use space key")
    strokeWeight(2)
    stroke('red')
    text(txt,25,50)
    strokeWeight(5)
    for(let i = 0;i<coords.length-1;i+=2){
      point(coords[i],coords[i+1])
    }
  }
  
  
  else{
    strokeWeight(1)
    if(degree <= 10){
      curveName = names[degree]
    }else{
      curveName = "Degree "+degree
    }
    text((curveName+" Bézier Curve"),20,windowHeight-20)
    ogcoords = coords
    let checkX
    let checkY
    for(let k = degree;k>0;k--){
    stroke(155-(degree-k)*(100/degree))
    newcoords = []
    for(let i = 0;i<coords.length-2;i+=2){
      x01 = coords[i]
      x02 = coords[i+2]
      y01 = coords[i+1]
      y02 = coords[i+3]
      strokeWeight(6)
      point(x01,y01)
      point(x02,y02)
      strokeWeight(2)
      if(k == 1){
        strokeWeight(4)
        stroke('black')
      }
      line(x01,y01,x02,y02)  
      
      newcoords.push(P(x02,x01,t))
      newcoords.push(P(y02,y01,t))
      if(k == 1){
        strokeWeight(10)
        x03 = P(x02,x01,t)
        y03 = P(y02,y01,t)
        if(color1){
          stroke(255,255,0)
        }else{
          stroke(0,255,255)
        }
        color1 = !color1
        point(x03,y03)
        if(!drawn){
          points.push([x03,y03])
          checkX = x03
          checkY = y03
        }
      }
    }
    coords = newcoords
  
  }
  coords = ogcoords
  
  
  if(!drawn){
    t += r1*n
  }
  if(repeat&&drawn){
    t += r2*n
  }
  strokeWeight(3)
  stroke('red')
  let rr = [9,0]
  if(!drawn){
    drawPoints(points)
    rr = points
  }else if(n<0){
    drawPoints(points.slice(0,maxcount-count+1))
    rr = points.slice(0,maxcount-count).length
    
  }else if(n>0){
    drawPoints(points.slice(0,count))
    rr = points.slice(0,count)
  }else{
    rr = points
  }
  if(devMode){
    text(checkX,70,60)
    text(checkY,70,80)
    rrr = rr[rr.length-1]
    text(rrr[0])
    text(rrr[1])
  }
  stroke(0)
  
  if(t > 1){
    if(!drawn){
      maxcount = count
    }
    n = -1
    drawn = true
    count = 0
    t = 1
  }
  if(t < 0){
    n = 1
    count = 0
    t = 0
  }
  count++
}
}

function mouseClicked(){
  if(clickmode){
    if(mouseButton === LEFT){
      coords.push(mouseX)
      coords.push(mouseY)
      degree++
    }else if (mouseButton === RIGHT||mouseButton===CENTER&& drawing==true){
      clickmode = false
      degree--
      writetext = true
      drawing=false
      console.log("middle button  or right button pressed")
    }
  }
}
function keyPressed() {
  if (keyCode === 32 && drawing==true) {//keycode for space is 32//
      clickmode = false
      degree--
      writetext = true
      console.log("space pressed")
      drawing=false
  }
}