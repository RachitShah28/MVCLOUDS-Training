
// console.log("Hii");
var SmallCircle = document.getElementById("c1");
SmallCircle.setAttribute("onDragStart","onDragStart(event)");

var width1 = SmallCircle.offsetWidth;
var height1 = SmallCircle.offsetHeight;

var c = 1;
var wrapper = document.getElementById("wrapper");

function decrementSize(){
  width1 = parseInt(width1, 10) - 30;
  height1 = parseInt(height1, 10) - 30;
}
// Creatediv();

// console.log(SmallCircle);

var BigCircle = document.getElementById("c2");
console.log(BigCircle);

// select the item element


// console.log(width1);
// console.log(height1);
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
        // console.log({event});
        var id = event.dataTransfer.getData("text");
        // console.log({id});
        var draggableElement = document.getElementById(id);
        console.log({draggableElement});
        var dropzone = event.target;
        // console.log(event);
        dropzone.appendChild(draggableElement);    
         
        // Clearing data
          event
        .dataTransfer
        .clearData();
      
        // var width = $('.circle-2').siblings().css('width') ;
        // console.log('width1--------',width1)
        // var w = parseInt(width1, 10) - 30;
        // console.log('w--------------',w)
        decrementSize();
        // $('.circle-2').siblings().attr('style',`width:${width1}px !important`);
        Creatediv(width1,height1);
    } catch (error) {
        console.log('Error in onDrop->',{error});
    }
  
}

function Creatediv(width1,height1){
  console.log('wwwwwwwwwww',width1);
     c = c + Math.random(); 
    var div = document.createElement("div");
    div.classList.add("circle-3");
    div.style.width = width1 + "px";
    div.style.height =height1 + "px";
    console.log('here',width1,height1)
    div.style.borderRadius = "calc(50% -3%)"
    div.style.backgroundColor = "#96B6C5";
    
    div.setAttribute("id" ,c);
    console.log(div);
    div.draggable = "true";
    div.setAttribute("onDragStart" ,"onDragStart(event)");
    // div.ondragstart = onDragStart(e);
    // console.log(div.ondragstart = "onDragStart(event)");
  
    document.getElementById("wrapper").appendChild(div);
 


}
//   var SmallCircle = document.getElementById("c1");

