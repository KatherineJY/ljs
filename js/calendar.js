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

function buildMonth(month){
    var months = document.querySelectorAll(".month-item");
    months[0].innerHTML = '<p>'+month+'</p>';
    month = month+1;
    months[1].innerHTML = '<p>'+month+'</p>';
    month = month+1;
    months[2].innerHTML = '<p>'+month+'</p>';
}

function buildDay(month,year,day,weekday){
    var dayHolder = document.querySelector(".day");
    var monthDay = new Array(0,31,28,31,30,31,30,31,31,30,31,30,31);
    var weekDayName = new Array('','一','二','三','四','五','六','日');
    if( year%400 == 0  || ( year%100 != 0 && year%4 ==0 ) )
        monthDay[2] = monthDay[2]+1;

    //build Weekday
    for(i=1;i<=7;i++){
        var item = document.createElement('div');
        item.className = 'day-item';
        item.innerHTML = '<p>'+ weekDayName[i] +'</p>';
        dayHolder.appendChild( item );
    }

    //calculate first day
    var firstday = 1;
    if( day <= 7 ){
        firstday = (weekday-day+1+7)%7;
    }
    else{
        var leftday = ( day-1 )%7;
        firstday = (weekday-leftday+7)%7;
    }
    for(i=1;i<firstday;i++){
        var item = document.createElement('div');
        item.className = 'day-item';
        dayHolder.appendChild( item );
    }
    for(i=1;i<=monthDay[month];i++){
        var item = document.createElement('div');
        item.className = 'day-item';
        item.innerHTML = '<p>'+ i +'</p>';
        dayHolder.appendChild( item );
    }
}

function buildCalendar(){
    var date = new Date();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    var day = date.getDate();
    var weekday = date.getDay();
    if( weekday == 0 ) weekday = 7;

    buildMonth(month);
    buildDay(month,year,day,weekday);
}

addLoadEvent( buildCalendar );

