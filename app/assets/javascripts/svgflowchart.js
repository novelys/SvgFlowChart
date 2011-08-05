// Filename     : svgflowchart.js
// Version      : 1.0.0 (2011-07-02) YYYY-MM-DD
// Author       : Novelys
// Author's Uri : www.novelys.com
// Description  : NA
// Dependencies : NA



// Summary by anchor (ALT+F for search in file) :SS
// 1)  LAYOUT CLASS
// XX) FUNCTIONS
// XX) DOCUMENT READY CALLS



// ***************************************************************************************
//                                     LAYOUT CLASS
// ***************************************************************************************



// ***************************************************************************************
//                                      FUNCTIONS
// ***************************************************************************************



// ***************************************************************************************
//                                 DOCUMENT READY CALLS
// ***************************************************************************************
// Document ready
$(document).ready(function () {
  var svgcanvas = Raphael("SvgCanvas1", "100%", "100%");
  var rect1     = svgcanvas.rect(40, 40, 200, 100, 2);
  rect1.attr({fill: "white"});
  rect1.attr({cursor: "move"});
  var rect2     = svgcanvas.rect(240, 240, 200, 100, 2);
  rect2.attr({fill: "white"});
  rect2.attr({cursor: "move"});
  var line      = svgcanvas.path("M" + (rect1.attr("x")+100) + " " + (rect1.attr("y")+100) + "L" + (rect2.attr("x")+100) + " " + (rect2.attr("y")));
  var start = function () { 
    this.ox = this.attr("x"); 
    this.oy = this.attr("y"); 
  } 
  var move = function (dx, dy) { 
    // move will be called with dx and dy 
    this.attr({x: this.ox + dx, y: this.oy + dy});
    line.attr({path: "M" + (rect1.attr("x")+100) + " " + (rect1.attr("y")+100) + "L" + (rect2.attr("x")+100) + " " + (rect2.attr("y"))});
  } 
  var up = function () { 
  }
  rect1.drag(move, start, up); 
  rect2.drag(move, start, up); 


  // Document On Resize
  $(window).resize(function() {
  });
});




