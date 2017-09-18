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
            para.innerText = this.innerHTML;
            catagory_list.style.display = 'none';
        }
    }
}

function bannerSlide(){
    var bannerlist = document.querySelector(".banner-list");
    var banners = document.querySelectorAll(".banner");
    var dots = document.querySelectorAll(".dot");
    current = 0;

    function moveNext(){
        var oldcurrent = current;
        current = current + 1;
        if( current > 3 ) current = 0;
        bannerlist.style.left = "-" + current*100 + 'vw';
        dots[oldcurrent].className = "dot";
        dots[current].className = "dot dot-on";
    }
    setInterval( moveNext, 1000 );
}

addLoadEvent( choiceBox );
addLoadEvent( bannerSlide );