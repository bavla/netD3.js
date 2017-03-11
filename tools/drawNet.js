function drawNet(V,L){
// set up the drawing area
// var width = 500, height = 500;
var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("xmlns", "http://www.w3.org/2000/svg");
// create the links
var link = svg.selectAll("line")
  .data(L).enter().append("line")
  .style("stroke", function(d,i) {return((d.type=="arc" ? "magenta" : "blue"))})
  .attr("stroke-width", lw)
  .attr("x1", function(d) {return(V[d.source-s].x*width);})
  .attr("y1", function(d) {return(V[d.source-s].y*height);})
  .attr("x2", function(d) {return(V[d.target-s].x*width);})
  .attr("y2", function(d) {return(V[d.target-s].y*height);});
// create the nodes and set out in a circular layout
var node = svg.selectAll("circle")
  .data(V).enter().append("circle")
  .attr("r", 15)
  .attr("cx", function(d,i) {return(d.x*width);})
  .attr("cy", function(d,i) {return(d.y*height);})
  .attr("fill", "yellow")
  .attr("stroke", "red");
// labels
var label = svg.selectAll("label")
  .data(V).enter().append("text")
  .attr("x", function(d) { return d.x*width+15; })
  .attr("y", function(d) { return d.y*height; })
  .attr("text-anchor", "right")
  .attr("font-family", "Arial")
  .attr("dy", "0.5em")
//  .attr("font-size", function(d) {return (d.size*5); })
  .attr("font-size", 20)
  .text(function(d) { return d.short; })
var icon = svg.selectAll("label")
  .data(V).enter().append("text")
  .attr("x", function(d) { return d.x*width; })
  .attr("y", function(d) { return d.y*height; })
  .attr("text-anchor", "middle")
  .attr("font-family", "Arial Unicode MS")
  .attr("dy", "0.5em")
//  .attr("font-size", function(d) {return (d.size*15); })
  .attr("font-size", function(d) {return (20); })
  .text(function(d) { return d.icon; });
  return 1
}
