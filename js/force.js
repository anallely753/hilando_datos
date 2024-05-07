var w = 2000,
h = 2000,
radius = 10,
node,
link,
root;

var force = d3.layout.force()
.on("tick", tick)
.charge(function(d) { return -2000; })
.linkDistance(function(d) { return d.target.children ? 170 : 70; })
.size([w, h - 160]);



var svgUyM = d3.select("#uym_diagrama").append("svg")
.attr("width", w)
.attr("height", h);

root = words[0]; //set root node
root.fixed = true;
root.x = w / 2;
root.y = h / 2 - 80;

var link = svgUyM.selectAll(".link"),
node = svgUyM.selectAll(".node");

updateUYM();


function updateUYM() {
	var nodes = flatten(root),
	links = d3.layout.tree().links(nodes);

	// Restart the force layout.
	force
	.nodes(nodes)
	.links(links)
	.start();

	// Update the links…
	link = link.data(links, function(d) { return d.target.id; });
	link.exit().remove();

	// Enter any new links.
	link.enter().insert("svg:line", ".node")
	.attr("class", function(d) { return "link link_" + d.source.id; })
		// .attr("x1", function(d) { return d.source.x; })
		// .attr("y1", function(d) { return d.source.y; })
		// .attr("x2", function(d) { return d.target.x; })
		// .attr("y2", function(d) { return d.target.y; })

	// Update nodes
	node = node.data(nodes, function(d) { return d.id; });
	node.exit().remove();

	var nodeEnter = node.enter().append("g")
	.attr("class", "node")
      .call(force.drag);

      nodeEnter.append("circle")
      .attr("class", function(d) { return "circle " + d.group + " " + d.level; })
      // .call(force.drag)
      .attr("r", function(d) { 
      	if (d.level === "main") {
      		return 100;
      	} else if (d.level === "one") {
      		return 32;
      	} else if (d.level === "two") {
      		return 22;
      	} else if (d.level === "three") {
      		return 18;
      	} else {
		        // Default radius if level is not one, two, or three
		        return radius; // Replace DEFAULT_RADIUS_VALUE with your default radius
		    }
		})
      .on("click", clickUYM)
      .style("fill", color);

      nodeEnter.append("image")
      .attr("xlink:href", function(d) {
      	return d.myimg;
      })
      .on("click", clickUYM)
      .attr("width", function(d) {
      	if (d.level === "main") {
      		return 200;
      	} else if (d.level === "one") {
      		return 40;
      	} else if (d.level === "two") {
      		return 24;
      	} else if (d.level === "three") {
      		return 20;
      	} else {
	        // Default radius if level is not one, two, or three
	        return radius; // Replace DEFAULT_RADIUS_VALUE with your default radius
	    }
      })
      .attr("height", function(d) {
      	if (d.level === "main") {
      		return 200;
      	} else if (d.level === "one") {
      		return 40;
      	} else if (d.level === "two") {
      		return 24;
      	} else if (d.level === "three") {
      		return 20;
      	} else {
	        // Default radius if level is not one, two, or three
	        return radius; // Replace DEFAULT_RADIUS_VALUE with your default radius
	    }
      })
      .attr("class", "myimg")
      .attr("transform", function(d) {
	      	if (d.level === "main") {
	      		var x = - 200 / 2;
  		      	var y = - 200 / 2;
  		      	return "translate(" + x + "," + y + ")";
	      	} else if (d.level === "one") {
	      		var x = - 40 / 2;
  		      	var y = - 40 / 2;
  		      	return "translate(" + x + "," + y + ")";
	      	}
	      	else if (d.level === "two") {
	      		var x = - 24 / 2;
  		      	var y = - 24 / 2;
  		      	return "translate(" + x + "," + y + ")";
	      	} else if (d.level === "three") {
	      		var x = - 20 / 2;
  		      	var y = - 20 / 2;
  		      	return "translate(" + x + "," + y + ")";
	      	} else {
		        // Default radius if level is not one, two, or three
		        return radius; // Replace DEFAULT_RADIUS_VALUE with your default radius
		    }
      });

      nodeEnter.append("text")
      .attr("text-anchor", "middle")  
      .attr("class", function(d) { return "title title-"+d.level; })  
      .text(function(d) { return d.name; })
      .attr("dy", function(d) { 
      	if (d.level === "one") {
      		return -42;
      	} else if (d.level === "two") {
      		return 32;
      	} else if (d.level === "three") {
      		return 26;
      	} else {
		        // Default radius if level is not one, two, or three
		        return radius; // Replace DEFAULT_RADIUS_VALUE with your default radius
		    }
		})
     	.each(function(d) {
     	  var text = d3.select(this);
     	  var words = d.name.split(" ");
     	  var lineHeight = 1.2; // Adjust as needed for line spacing

     	  if (words.length > 2 && words.length <= 5) {
     	    text.text(words[0] + " " + words[1]);
     	    text.append("tspan")
     	      .attr("x", 0)
     	      .attr("dy", lineHeight + "em")
     	      .text(words.slice(2).join(" "));
     	  } else if (words.length > 5) {
     	    text.text(words[0] + " " + words[1]);
     	    text.append("tspan")
     	      .attr("x", 0)
     	      .attr("dy", lineHeight + "em")
     	      .text(words.slice(2, 4).join(" "));
     	    text.append("tspan")
     	      .attr("x", 0)
     	      .attr("dy", lineHeight + "em")
     	      .text(words.slice(4).join(" "));
     	  } else {
     	    text.text(d.name);
     	  }
     	})
    




	// // Update the nodes…
	// node = svg.selectAll(".node")
	// 	.data(nodes)
	// 	.style("fill", color);

	// node.transition()
	// 	.attr("r", radius);	

	// // Enter any new nodes.
	// node.enter().append("svg:circle")
	// 	.attr("class", function(d) { return "node " + d.group + " " + d.level; })
	// 	.attr("cx", function(d) { return d.x; })
	// 	.attr("cy", function(d) { return d.y; })
	// 	.attr("r", function(d) { 
	// 	    if (d.level === "one") {
	// 	        return 32;
	// 	    } else if (d.level === "two") {
	// 	        return 20;
	// 	    } else if (d.level === "three") {
	// 	        return 12;
	// 	    } else {
	// 	        // Default radius if level is not one, two, or three
	// 	        return radius; // Replace DEFAULT_RADIUS_VALUE with your default radius
	// 	    }
	// 	})
	// 	.style("fill", color)
	// 	.on("click", click)
	// 	.call(force.drag)
	
	// // Exit any old nodes.
	// node.exit().remove();


    // title = svg.selectAll("text.title")    
    //      .data(nodes);

    // // Enter any new titles.
    // title.enter()
    //     .append("text")
    //     .attr("class", "title")
    //   	.text(function(d) { return d.name; });

    
    // // Exit any old titles.
    // title.exit().remove();
}

function tick() {
	link.attr("x1", function(d) { return d.source.x; })
	.attr("y1", function(d) { return d.source.y; })
	.attr("x2", function(d) { return d.target.x; })
	.attr("y2", function(d) { return d.target.y; });

	node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
	
    // title.attr("transform", function(d){ return "translate("+d.x+","+d.y+")"; });
}

// Color leaf nodes orange, and packages white or blue.
function color(d) {
	if(d.level == "one"){
		switch(d.group) {
			case 'lavado': //adverb
			return "rgba(68,68,219,.35)";
			break;
			case 'secado': //noun
			return "rgba(90,117,201,.35)";
			break;
			case 'blanquear': //verb
			return "transparent";
			break;
			case 'limpieza': //adjective
			return "rgba(206,241,11,.35)";
			break;
			case 'planchado':
			return "rgba(44,76,81,.35)";
			break;
			case 'main':
			return "transparent";
			break;
			default:
			return "transparent";
		}
	}else{
		switch(d.group) {
			case 'main':
			return "transparent";
			break;
			case 'lavado': //adverb
			return "#4444db";
			break;
			case 'secado': //noun
			return "#5a75c9";
			break;
			case 'blanquear': //verb
			return "#e9851e";
			break;
			case 'limpieza': //adjective
				// return "rgba(206,241,11,.35)";
				return "#cef173"
				break;
				case 'planchado':
				return "#2c4c51";
				break;
				default:
				return "#ca7650";
			}
		}
	}

// Toggle children on click.
function clickUYM(e) {
	if (d.children) {
		d._children = d.children;
		d.children = null;
	} else {
		d.children = d._children;
		d._children = null;
	}
	updateUYM();
}

// Toggle children on click.
function clickUYM(d) {
	if (d.children) {
		d._children = d.children;
		d.children = null;
	} else {
		d.children = d._children;
		d._children = null;
	}
	updateUYM();
}

// Returns a list of all nodes under the root.
function flatten(root) {
	var nodes = [],
	i = 0;

	function recurse(node) {
		if (node.children) node.size = node.children.reduce(function(p, v) {
			return p + recurse(v);
		}, 0);
			if (!node.id) node.id = ++i;
			nodes.push(node);
			return node.size;
		}

		root.size = recurse(root);
		return nodes;
	}