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

function buildFinishBtn(){
    var finish = document.querySelectorAll(".finish");
    var len = finish.length;
    for(var i=0;i<len;i++){
        finish[i].onclick = function(){
            var controllers = this.parentNode;
            controllers.children[0].style.display = 'none';
            controllers.children[1].style.display = 'none';
            controllers.children[2].style.display = 'none';
            controllers.children[3].style.display = 'block';

            var info = controllers.parentNode;
            info.children[1].children[0].style.color = 'grey';
            info.children[1].children[2].style.color = 'grey';
            
        }
    }
}

function buildDrawBackBtn(){
    var drawBack = document.querySelectorAll(".drawback");
    var len = drawBack.length;
    for(var i=0;i<len;i++){
        drawBack[i].onclick = function(){
            var controllers = this.parentNode;
            controllers.children[0].style.display = 'none';
            controllers.children[1].style.display = 'none';
            controllers.children[2].style.display = 'none';
            controllers.children[4].style.display = 'block';
        }
    }
}

function buildBtn(){
    buildFinishBtn();
    buildDrawBackBtn();
}

addLoadEvent( buildBtn );

