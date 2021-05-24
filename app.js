var min = 0;
var sec = 0;
var milisec = 0;
var interval;
var minutes = document.getElementById('minute')
var second = document.getElementById('second')
var milisecond = document.getElementById('milisecond')
function timer()
{
    milisec++
    milisecond.innerHTML = milisec
    if(milisec >=100)
    {
        sec++
        second.innerHTML = sec
        milisec = 0
    }else if(sec >=60)
    {
        min++
        minutes.innerHTML  = min
        sec=0
    }
}
function start(){
interval = setInterval(timer,10)
var a = document.getElementById('remove').disabled = true
}

function stop()
{
    clearInterval(interval)
    var a = document.getElementById('remove').disabled = false
}
function reset()
{
    var min = 0;
    var sec = 0;
    var milisec = 0;
    minutes.innerHTML=min
    second.innerHTML=sec
    milisecond.innerHTML=milisec
    stop()
}


