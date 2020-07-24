var pane = $('#pane'),
    box = $('#box'), 
    box2 = $('#box2'),
    w = pane.width() - box.width(),
    d = {},
    value = 'box',
    x = 1;
var oldx = 0, oldy= 0;

function activeA(){
    value = "box";
}
function activeB(){
    value = "box2";
}

function newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    //alert(n);
    return n < 0 ? 0 : n > w ? w : n;
}

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function() {
    $("#"+value).css({
        left: function(i,v) { return newv(v, 37, 39); },
        top: function(i,v) { return newv(v, 38, 40); }
    });
}, 20);