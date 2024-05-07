	const widthRI = 440;
    const heightRI = 300;
    const marginRI = 0;
    const paddingRI = 0;
    const adjRI = 5;

    // Append SVG to the container
    const svgRI = d3.select("#ruta_internacional_container_svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "-" + adjRI + " -" + adjRI + " " + (widthRI + adjRI * 3) + " " + (heightRI + adjRI * 3))
        .classed("svg-content", true);


	// Map and projection
	const projection = d3.geoMercator()
	    .scale(72)
	    .translate([widthRI/1.8, heightRI/2*1.4])
	    // .scale(100)
	    // .translate([widthRI/1.6, heightRI/2*2])

	


	// Create data: coordinates of start and end
	const link = [
	  {type: "LineString", coordinates: [[-100, 31], [-122.41, 37.7749] ]},
	  {type: "LineString", coordinates: [[-122.41, 37.7749],[119.2791, 36.0671]]},
	  {type: "LineString", coordinates: [[119.2791, 36.0671],[90.4125, 23.8103]]},
	  {type: "LineString", coordinates: [[90.4125, 23.8103],[115.9648, 36.4420]]},
	  {type: "LineString", coordinates: [[115.9648, 36.4420],[-122.41, 37.7749]]},
	]

	// A path generator
	const path = d3.geoPath()
	    .projection(projection)

	// Load world shape
	d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then( function(data){

	    // Draw the map
	    svgRI.append("g")
	        .selectAll("path")
	        .data(data.features)
	        .join("path")
	            .attr("fill", "transparent")
	            .attr("d", path)
	            .style("stroke", "blue")
	            .style("stroke-width", .3)

	    // Add the path
	    svgRI.selectAll("myPath")
	      .data(link)
	      .join("path")
	        .attr("d", function(d){ return path(d)})
	        .style("fill", "none")
	        .style("stroke", "seagreen")
	        .style("stroke-width", 1)
	        .style("stroke-dasharray", "4")
	})