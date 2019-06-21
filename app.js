var picture = [
      " -------++-------",
      " ------+yy+------",
      " ------+yy+------",
      " -----+yyyy+-----",
      " ++++++yyyy++++++",
      " +yyyyyyyyyyyyyy+",
      " -+yyyy+yy+yyyy+-",
      " --+yyy+yy+yyy+--",
      " ---+yy+yy+yy+---",
      " ---+yyyyyyyy+---",
      " --+yyyyyyyyyy+--",
      " --+yyyyyyyyyy+--",
      " -+yyyyy++yyyyy+-",
      " -+yyy++--++yyy+-",
      " +yy++------++yy+",
      " +++----------+++"
    ],
    opts = {
      cellSize: 20
    },

    color = {
      yellow: "yellow",
      black: "black",
      transparent: "rgba(0,0,0,0)"
    },
    
    artHolder = document.getElementById("art-holder");

function initArt(){
  var rows = picture.length;

  for(var i = 0; i < picture.length; i++){
    var rowInfo = "";
    var pixelRow = document.createElement("div");
    for(var f = 0; f < picture[i].length; f++){
      if(picture[i].charAt(f) == "-"){
        rowInfo += Cell(f, color.transparent);
        console.log(i, f)
      } else if (picture[i].charAt(f) == "+") {
        rowInfo += Cell(f, color.black);
      } else if (picture[i].charAt(f) == "y") {
        rowInfo += Cell(f, color.yellow);
      } else {
        rowInfo += Cell(f, color.transparent);
      }
    };
    pixelRow.cloneNode = true;
    rowInfo += "0 0 0 0";
    pixelRow.setAttribute("style", "width: "+ opts.cellSize +"px; height: "+ opts.cellSize +"px; position: absolute; top: "+ opts.cellSize*i +"px; left: 0; box-shadow: "+ rowInfo +"");
    artHolder.appendChild(pixelRow);
    artHolder.style["margin-top"] = opts.cellSize * picture.length * -1 + "px";
    artHolder.style["margin-left"] = opts.cellSize * picture.length * -1 + "px";
  }
}

function Cell(col, color){
  return col*opts.cellSize + "px " + 0 + "px 0 " + color + ", ";
}

initArt()
