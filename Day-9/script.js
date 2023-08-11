// console.log("Hii");
var SmallCircle = document.getElementById("c1");
SmallCircle.setAttribute("onDragStart","onDragStart(event)");

var width1 = SmallCircle.offsetWidth;
var height1 = SmallCircle.offsetHeight;
var c = 1;
var wrapper = document.getElementById("wrapper");
function Creatediv(width1,height1){
     c = c + Math.random();
    var div = document.createElement("div");
    div.style.width = width1;
    div.style.height = height1;
    div.style.borderRadius = "calc(50% -3%)"
    div.style.backgroundColor = "#96B6C5";
    div.classList.add("circle-1");
    div.setAttribute("id" ,c);
    console.log(div);
    div.draggable = "true";
    div.setAttribute("onDragStart" ,"onDragStart(event)");
    // div.ondragstart = onDragStart(e);
    // console.log(div.ondragstart = "onDragStart(event)");
  
    document.getElementById("wrapper").appendChild(div);

}

// Creatediv();

// console.log(SmallCircle);

var BigCircle = document.getElementById("c2");
console.log(BigCircle);

// select the item element


console.log(width1);
console.log(height1);
// attach the dragstart event handler

function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);

  //   event
  // .currentTarget
  // .style
  // .backgroundColor = 'yellow';
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
    try {
        console.log({event});
        var id = event.dataTransfer.getData("text");
        console.log({id});
        var draggableElement = document.getElementById(id);
        console.log({draggableElement});
        var dropzone = event.target;
        console.log(event);
        dropzone.appendChild(draggableElement);    
         
        // Clearing data
          event
        .dataTransfer
        .clearData();
        Creatediv(width1,height1);
              
    } catch (error) {
        console.log('Error in onDrop->',{error});
    }
  
}

//   var SmallCircle = document.getElementById("c1");

