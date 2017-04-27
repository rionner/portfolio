$(document).ready(function(){
  // Find viewport size, set to feel
  var mapHeight = $(window).height() - $('footer').height();
  $('#map').height(mapHeight);
  var mapWidth = $('#map').width();

  var width = mapWidth;
  var height = mapHeight;
  var centered;

  var projection = d3.geoStereographic();
   // .translate([w/2, h/2])
   // .scale([500]);

  var path = d3.geoPath()
    .projection(projection);

  var svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);

  svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height)
    .on("click", clicked);

  var g = svg.append("g");

  d3.json("/javascripts/world.geo.json", function(error, world) {
    if (error) throw error;

    g.append("g")
      .attr("id", "countries")
      .selectAll("path")
      .data(geojson.feature(world, world.objects.countries).features)
      .enter().append("path")
      .attr("d", path)
      .on("click", clicked);

    g.append("path")
      .datum(geojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
      .attr("id", "country-borders")
      .attr("d", path);
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
