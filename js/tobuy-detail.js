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

function collect(){
    var collectBtn = document.querySelector(".small-btn");
    var icon = collectBtn.querySelector(".icon");
    var p = collectBtn.querySelector("p");
    collectBtn.onclick = function(){
        if( p.innerText == "收 藏" ){
            p.innerText = "已收藏";
            icon.className = "icon collected";
            collectBtn.style.color = "rgba(220, 96, 22,1)";
        }
        else{
            p.innerText = "收 藏";
            icon.className = "icon collect";
            collectBtn.style.color = "#000";
        }
    }
}

addLoadEvent( collect );