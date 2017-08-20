$(document).ready(function(){
  // Find viewport size

  var mapHeight = $(window).height() - $('footer').height();
  $('#map').height(mapHeight);
  var mapWidth = $('#map').width();

  var width = mapWidth;
  var height = mapHeight;
  var centered;

  var projection = d3.geoMercator()
    .scale([200]);

  var path = d3.geoPath()
    .projection(projection);

  var svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "map-background")
    .on("click", clicked);

  var g = svg.append("g");

  d3.json("/javascripts/world.geo.json", function(error, world) {
    if (error) throw error;

    g.append("g")
      .attr("id", "countries")
      .selectAll("path")
      .data(world.features)
      .enter().append("path")
      .attr("d", path)
      .on("click", clicked);

    // g.append("path")
    //   .datum(world.mesh(world, world.features.properties, function(a, b) { return a !== b; }))
    //   .attr("d", d3.geoPath);
  });

  function clicked(d) {
    var x, y, k;

    if (d && centered !== d) {
      var centroid = path.centroid(d);
      x = centroid[0];
      y = centroid[1];
      k = 4;
      centered = d;
    } else {
      x = width / 2;
      y = height / 2;
      k = 1;
      centered = null;
    }

    g.selectAll("path")
      .classed("active", centered && function(d) { return d === centered; });

    g.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
  }
});
