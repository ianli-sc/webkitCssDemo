var
    anim = document.getElementById("anim"),
    log = document.getElementById("log"),
    pfx = ["webkit", "moz", "MS", "o", ""];

// button click event
anim.addEventListener("click", ToggleAnimation, false);

// animation listener events
PrefixedEvent(anim, "AnimationStart", AnimationListener);
PrefixedEvent(anim, "AnimationIteration", AnimationListener);
PrefixedEvent(anim, "AnimationEnd", AnimationListener);


// apply prefixed event handlers
function PrefixedEvent(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p]+type, callback, false);
    }
}

// handle animation events
function AnimationListener(e) {
    LogEvent("Animation '"+e.animationName+"' type '"+e.type+"' at "+e.elapsedTime.toFixed(2)+" seconds");
    if (e.type.toLowerCase().indexOf("animationend") >= 0) {
        LogEvent("Stopping animation...");
        ToggleAnimation();
    }
}

// start/stop animation
function ToggleAnimation(e) {
    var on = (anim.className != "");
    LogEvent("Animation is " +(on ? "disabled.\n" : "enabled."));
    anim.textContent = "Click to "+(on ? "start" : "stop")+" animation";
    anim.className = (on ? "" : "enable");
    if (e) e.preventDefault();
};

// log event in the console
function LogEvent(msg) {
    log.textContent += msg + "\n";
    var ot = log.scrollHeight - log.clientHeight;
    if (ot > 0) log.scrollTop = ot;
}

// backface visibility
addedNone = false;
document.getElementById('visibility').onclick = function() {
    var faces = document.getElementsByClassName('face');
    var item ;
    var visibleStyle = addedNone ? 'visible' : 'hidden';
    for(var i = 0, len = faces.length; i < len; i++) {
        item = faces[i];
        item.style.webkitBackfaceVisibility = visibleStyle;
    }
    addedNone = !addedNone;
}

