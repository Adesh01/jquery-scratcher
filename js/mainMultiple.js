
/** Scatrch Reveal with canvas **/
var disk = document.getElementById("disk-canvas"),
bridgeCanvas = disk.getContext('2d'),
brushRadius = (disk.width / 100) * 5,
img = new Image();

if (brushRadius < 50) { brushRadius = 50 }

img.onload = function(){  
	bridgeCanvas.drawImage(img, 0, 0, disk.width, disk.height);
}
img.loc = 'https://mavenprodstorage.blob.core.windows.net/img/LNSE/Holiday-Scratcher/img/';
img.filename = 'disk-default.png';
if (window.devicePixelRatio >= 2) {
  var nameParts = img.filename.split('.');
  img.src = img.loc + nameParts[0]+"-2x"+"."+nameParts[1];
} else {
  img.src = img.loc + img.filename;
}
//img.src = img.loc + img.filename;

function detectLeftButton(event) {
    if ('buttons' in event) {
        return event.buttons === 1;
    } else if ('which' in event) {
        return event.which === 1;
    } else {
        return event.button === 1;
    }
}

function getBrushPos(xRef, yRef, disk) {
	var bridgeRect = disk.getBoundingClientRect();
    return {
	  x: Math.floor((xRef-bridgeRect.left)/(bridgeRect.right-bridgeRect.left)*disk.width),
	  y: Math.floor((yRef-bridgeRect.top)/(bridgeRect.bottom-bridgeRect.top)*disk.height)
    };
}

function getBrushPosTouch(xRef, yRef, disk) {
    var bridgeRect = disk.getBoundingClientRect();
    return {
	  x: Math.floor((xRef-bridgeRect.left)/(bridgeRect.right-bridgeRect.left)*disk.width),
      y: Math.floor(((yRef-$(document).scrollTop())-bridgeRect.top)*2)
    };
}
      
function drawDot(mouseX,mouseY, bridgeCanvas){
	bridgeCanvas.beginPath();
    bridgeCanvas.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
    bridgeCanvas.fillStyle = '#000';
    bridgeCanvas.globalCompositeOperation = "destination-out";
    bridgeCanvas.fill();
}

disk.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos(e.clientX, e.clientY, disk);
  	var leftBut = detectLeftButton(e);
	  if (leftBut == 1) {
			drawDot(brushPos.x, brushPos.y, bridgeCanvas);
	  }
}, false);

disk.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0] || e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    dragging = true;
    if (touch) {
    var brushPos = getBrushPosTouch(touch.pageX, touch.pageY, disk);
        drawDot(brushPos.x, brushPos.y, bridgeCanvas);
    }
}, false);
//added later
/*window.addEventListener('mousemove', function(e) {
    var evt = e || event;
    if (dragging) {
        var delta = evt.clientX - lastX;
        lastX = evt.clientX;
        marginLeft += delta;
        canvas.style.marginLeft = marginLeft + "px";
    }
    e.preventDefault();
}, false);

window.addEventListener('mouseup', function() {
    dragging = false;
}, false);*/
//end added later

/* DISK TWO TWO TWO TWO TWO TWO TWO TWO TWO TWO TWO TWO TWO TWO */
/* DISK TWO TWO TWO TWO TWO TWO TWO TWO */
var disk2 = document.getElementById("disk-canvas2"),
bridgeCanvas2 = disk2.getContext('2d'),
brushRadius2 = (disk2.width / 100) * 3,
img2 = new Image();

if (brushRadius2 < 30) { brushRadius2 = 30 }

img2.onload = function(){  
	bridgeCanvas2.drawImage(img2, 0, 0, disk2.width, disk2.height);
}
img2.loc = 'https://mavenprodstorage.blob.core.windows.net/img/LNSE/Holiday-Scratcher/img/';
img2.filename = 'disk-default.png';
img2.src = img2.loc + img2.filename;


disk2.addEventListener("mousemove", function(e) {
	var brushPos2 = getBrushPos(e.clientX, e.clientY, disk2);
  var leftBut2 = detectLeftButton(e);
  if (leftBut2 == 1) {
		drawDot(brushPos2.x, brushPos2.y, bridgeCanvas2);
  }
}, false);

disk2.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch2 = e.targetTouches[0] || e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    if (touch2) {
    var brushPos2 = getBrushPosTouch(touch2.pageX, touch2.pageY, disk2);
        drawDot(brushPos2.x, brushPos2.y, bridgeCanvas2);
    }
}, false);



// /* DISK THREE THREE THREE THREE THREE THREETHREE THREE THREE */
/* DISK THREE THREE THREE THREE THREE */
var disk3 = document.getElementById("disk-canvas3"),
bridgeCanvas3 = disk3.getContext('2d'),
brushRadius3 = (disk3.width / 100) * 3,
img3 = new Image();

if (brushRadius3 < 30) { brushRadius3 = 30 }

img3.onload = function(){  
	bridgeCanvas3.drawImage(img3, 0, 0, disk3.width, disk3.height);
}
img3.loc = 'https://mavenprodstorage.blob.core.windows.net/img/LNSE/Holiday-Scratcher/img/';
img3.filename = 'disk-default.png';
img3.src = img3.loc + img3.filename;


disk3.addEventListener("mousemove", function(e) {
	var brushPos3 = getBrushPos(e.clientX, e.clientY, disk3);
  var leftBut3 = detectLeftButton(e);
  if (leftBut3 == 1) {
		drawDot(brushPos3.x, brushPos3.y, bridgeCanvas3);
  }
}, false);

disk3.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch3 = e.targetTouches[0] || e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    if (touch3) {
    var brushPos3 = getBrushPosTouch(touch3.pageX, touch3.pageY, disk3);
        drawDot(brushPos3.x, brushPos3.y, bridgeCanvas3);
    }
}, false);
	
// /* DISK FOUR FOUR FOUR FOUR FOUR FOUR FOUR FOUR FOUR FOUR FOUR */
/* DISK FOUR FOUR FOUR FOUR FOUR FOUR FOUR */
var disk4 = document.getElementById("disk-canvas4"),
bridgeCanvas4 = disk4.getContext('2d'),
brushRadius4 = (disk4.width / 100) * 3,
img4 = new Image();

if (brushRadius4 < 30) { brushRadius4 = 30 }

img4.onload = function(){  
	bridgeCanvas4.drawImage(img4, 0, 0, disk4.width, disk4.height);
}
img4.loc = 'https://mavenprodstorage.blob.core.windows.net/img/LNSE/Holiday-Scratcher/img/';
img4.filename = 'disk-default.png';
img4.src = img4.loc + img4.filename;


disk4.addEventListener("mousemove", function(e) {
	var brushPos4 = getBrushPos(e.clientX, e.clientY, disk4);
  var leftBut4 = detectLeftButton(e);
  if (leftBut4 == 1) {
		drawDot(brushPos4.x, brushPos4.y, bridgeCanvas4);
  }
}, false);

disk4.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch4 = e.targetTouches[0] || e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    if (touch4) {
    var brushPos4 = getBrushPosTouch(touch4.pageX, touch4.pageY, disk4);
        drawDot(brushPos4.x, brushPos4.y, bridgeCanvas4);
    }
}, false);

// /* DISK FIVE FIVE FIVE FIVE FIVE FIVE FIVE FIVE FIVE FIVE FIVE */
/* DISK FIVE FIVE FIVE FIVE FIVE  */
var disk5 = document.getElementById("disk-canvas5"),
bridgeCanvas5 = disk5.getContext('2d'),
brushRadius5 = (disk5.width / 100) * 3,
img5 = new Image();

if (brushRadius5 < 30) { brushRadius5 = 30 }

img5.onload = function(){  
	bridgeCanvas5.drawImage(img5, 0, 0, disk5.width, disk5.height);
}
img5.loc = 'https://mavenprodstorage.blob.core.windows.net/img/LNSE/Holiday-Scratcher/img/';
img5.filename = 'disk-default.png';
img5.src = img5.loc + img5.filename;


disk5.addEventListener("mousemove", function(e) {
	var brushPos5 = getBrushPos(e.clientX, e.clientY, disk5);
  var leftBut5 = detectLeftButton(e);
  if (leftBut5 == 1) {
		drawDot(brushPos5.x, brushPos5.y, bridgeCanvas5);
  }
}, false);

disk5.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch5 = e.targetTouches[0] || e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    if (touch5) {
    var brushPos5 = getBrushPosTouch(touch5.pageX, touch5.pageY, disk5);
        drawDot(brushPos5.x, brushPos5.y, bridgeCanvas5);
    }
}, false);

// /* DISK SIX SIX SIX SIX SIX SIX SIX SIX SIX SIX SIX SIX */
/* DISK SIX SIX SIX SIX SIX SIX SIX SIX  */
var disk6 = document.getElementById("disk-canvas6"),
bridgeCanvas6 = disk6.getContext('2d'),
brushRadius6 = (disk6.width / 100) * 3,
img6 = new Image();

if (brushRadius6 < 30) { brushRadius6 = 30 }

img6.onload = function(){  
	bridgeCanvas6.drawImage(img6, 0, 0, disk6.width, disk6.height);
}
img6.loc = 'https://mavenprodstorage.blob.core.windows.net/img/LNSE/Holiday-Scratcher/img/';
img6.filename = 'disk-default.png';
img6.src = img6.loc + img6.filename;


disk6.addEventListener("mousemove", function(e) {
	var brushPos6 = getBrushPos(e.clientX, e.clientY, disk6);
  var leftBut6 = detectLeftButton(e);
  if (leftBut6 == 1) {
		drawDot(brushPos6.x, brushPos6.y, bridgeCanvas6);
  }
}, false);

disk6.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch6 = e.targetTouches[0] || e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    if (touch6) {
    var brushPos6 = getBrushPosTouch(touch6.pageX, touch6.pageY, disk6);
        drawDot(brushPos6.x, brushPos6.y, bridgeCanvas6);
    }
}, false);



