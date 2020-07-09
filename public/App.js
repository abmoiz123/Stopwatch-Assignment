var min = 0;
var sec = 0;
var m_sec = 0;
var minutes = document.getElementById("min");
var second = document.getElementById("sec");
var m_second = document.getElementById("msec");
var interval;
function timer() {
    m_sec++
    m_second.innerHTML = m_sec;
    if (m_sec >= 100) {
        m_sec = 0;
        sec++
        second.innerHTML = sec;
    }
    else if (sec >= 60) {
        sec = 0;
        min++
        minutes.innerHTML = min;
    }
}
function hide() {
    var x = document.getElementById("pause");
    x.style.display = "inline-block";
    var z = document.getElementById("str");
    z.style.display = "none";
}
var lap1 = 1;
function lap() {
    var a = document.getElementById("li1");
    var x = document.createElement('li');
    x.innerText = ("user " + lap1 + " = " + min + " : " + sec + " : " + m_sec);
    a.appendChild(x);
    lap1 += 1; 
}
function start() {
    interval = setInterval(timer, 10);
    document.getElementById("lap").disabled = false;
    hide();
}
function pause() {
    clearInterval(interval);
    document.getElementById("lap").disabled = true;
    var x = document.getElementById("pause");
    x.style.display = "none";
    var y = document.getElementById("resume");
    y.style.display = "inline-block";
}
function resume() {
    interval = setInterval(timer, 10);
    document.getElementById("lap").disabled = false;
    var x = document.getElementById("pause");
    x.style.display = "inline-block";
    var y = document.getElementById("resume");
    y.style.display = "none";
}
function reset() {
    min = 0;
    sec = 0;
    m_sec = 0;
    minutes.innerHTML = min;
    second.innerHTML = sec;
    m_second.innerHTML = m_sec;
    clearInterval(interval);
    var x = document.getElementById("pause");
    var y = document.getElementById("resume");
    var z = document.getElementById("str");
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "inline-block";
    if (lap1 >= 2) {
        var a = document.getElementById("lap");
        a.style.display = "none";
        var b = document.getElementById("clr");
        b.style.display = "inline-block";
    }else if (lap1 === 1) {
        document.getElementById("lap").disabled = true;
    }
}
function clr() {
    var a = document.getElementById("li1");
    a.style.display = "none";
    var b = document.getElementById("lap");
    b.style.display = "inline-block";
    var c = document.getElementById("clr");
    c.style.display = "none";
}