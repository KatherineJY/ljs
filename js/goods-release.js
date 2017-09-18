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

function choiceItem(catagory){
    var para = catagory.querySelector("p");
    var catagory_list = catagory.querySelector(".catagory-list");
    var catagory_items = catagory.querySelectorAll(".catagory-item");

    para.onclick = function(){
        catagory_list.style.display = 'block';
    }

    len = catagory_items.length;
    for(i=0;i<len;i++){
        catagory_items[i].onclick = function(){
            para.innerText = this.querySelector("p").innerHTML;
            catagory_list.style.display = 'none';
        }
    }
}

function choiceBox(){
    var catagories = document.querySelectorAll(".catagory");

    choiceItem( catagories[0] );
    choiceItem( catagories[1] );
}


addLoadEvent( choiceBox );