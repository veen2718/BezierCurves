let n = 1//will become negative after a single rendition, and positive again. Will multiple to t
let canErase = true
let t = 0
let points = []//points are calculated and then added to this list until a single rotation is finished, each time, every point in this will be drawn.
let coords = []
clickmode = true
let degree = 0;
let ogcoords
let newcoords
let curveName
t = 0
let drawn = false
let clicksleft = degree + 1
let maxcount
let count = 0
let color1 = true
let namesID = [1,2,3,4,5,6,7,8,9,10]
let names = {
    2:"quadratic",
    3: "cubic",
    4: "quartic",
    5: "qunitic",
    6: "sextic",
    7:"septic",
    8:"octic",
    9:"nonic",
    10:"decic"
}




if(canErase){
    r2 = r1
}
function P(a,b,t){
    return (b-a)*t+a
  }

function drawPoints(points){
  let p
  let p2
for(let i = 0;i<points.length-1;i++){
    p = points[i]
    p2 = points[i+1]
    line(p[0],p[1],p2[0],p2[1])
    if(i==points.length-2&&devMode){
      text(p2[0],100,60)
      text(p2[1],100,80)
    }
  }
}

function getlastpoint(points){
  let p
  let p2
  for(let i = 0;i<points.length-1;i++){
    p = points[i]
    p2 = points[i+1]
  }
  return p2
}
