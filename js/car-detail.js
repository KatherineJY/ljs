function addLoadEvent(func){
    var oldLoadEvent = window.onload;
    if( typeof oldLoadEvent != 'function' ){
        window.onload = func;
    }
    else{
        window.onload = function(){
            oldLoadEvent();
            func();
        }
    }   
}

function choiceBox(){
    var catagory = document.querySelector(".catagory");
    var para = catagory.querySelector("p");
    var catagory_list = catagory.querySelector(".catagory-list");
    var catagory_items = catagory.querySelectorAll(".catagory-item");

    para.onclick = function(){
        catagory_list.style.display = 'block';
    }

    for(i=0;i<4;i++){
        catagory_items[i].onclick = function(){
            para.innerText = this.querySelector("p").innerHTML;
            catagory_list.style.display = 'none';
        }
    }
}


addLoadEvent( choiceBox );