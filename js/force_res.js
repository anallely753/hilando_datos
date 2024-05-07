var w = 1600,
	h = 1600,
	radius = 10,
	node,
	link,
	root;

var force = d3.layout.force()
	.on("tick", tick)
	.charge(function(d) { return -2000; })
	.linkDistance(function(d) { return d.target._children ? 100 : 50; })
	.size([w, h - 160]);

var svg = d3.select("#uym_diagrama").append("svg")
	.attr("width", w)
	.attr("height", h);

root = words[0]; //set root node
root.fixed = true;
root.x = w / 2;
root.y = h / 2 - 80;

var link = svg.selectAll(".link"),
node = svg.selectAll(".node");

update();


function update() {
	var nodes = flatten(root),
	links = d3.layout.tree().links(nodes);

	// Restart the force layout.
	force
		.nodes(nodes)
		.links(links)
		.start();

	// Update the links…
	link = svg.selectAll(".link")
		.data(links);

	// Enter any new links.
	link.enter().insert("svg:line", ".node")
		.attr("class", "link")
		.attr("x1", function(d) { return d.source.x; })
		.attr("y1", function(d) { return d.source.y; })
		.attr("x2", function(d) { return d.target.x; })
		.attr("y2", function(d) { return d.target.y; })


	// Exit any old links.
	link.exit().remove();

	// Update the nodes…
	node = svg.selectAll(".node")
		.data(nodes)
		.style("fill", color);

	node.transition()
		.attr("r", radius);	

	// Enter any new nodes.
	node.enter().append("svg:circle")
		.attr("class", function(d) { return "node " + d.group + " " + d.level; })
		.attr("cx", function(d) { return d.x; })
		.attr("cy", function(d) { return d.y; })
		.attr("r", function(d) { 
		    if (d.level === "one") {
		        return 32;
		    } else if (d.level === "two") {
		        return 20;
		    } else if (d.level === "three") {
		        return 12;
		    } else {
		        // Default radius if level is not one, two, or three
		        return radius; // Replace DEFAULT_RADIUS_VALUE with your default radius
		    }
		})
		.style("fill", color)
		.on("click", click)
		.call(force.drag)
		
	// Exit any old nodes.
	node.exit().remove();


    title = svg.selectAll("text.title")    
         .data(nodes);

    // Enter any new titles.
    title.enter()
        .append("text")
        .attr("class", "title")
      	.text(function(d) { return d.name; });

    
    // Exit any old titles.
    title.exit().remove();
}

function tick() {
	link.attr("x1", function(d) { return d.source.x; })
		.attr("y1", function(d) { return d.source.y; })
		.attr("x2", function(d) { return d.target.x; })
		.attr("y2", function(d) { return d.target.y; });

	node.attr("cx", function(d) { return d.x; })
		  .attr("cy", function(d) { return d.y; });
    
    title.attr("transform", function(d){ return "translate("+d.x+","+d.y+")"; });
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
			default:
				return "transparent";
		}
	}else{
		switch(d.group) {
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
function click(e) {
	if (d.children) {
		d._children = d.children;
		d.children = null;
	} else {
		d.children = d._children;
		d._children = null;
	}
	update();
}

// Toggle children on click.
function click(d) {
	if (d.children) {
		d._children = d.children;
		d.children = null;
	} else {
		d.children = d._children;
		d._children = null;
	}
	update();
}

// Returns a list of all nodes under the root.
function flatten(root) {
	var nodes = [], i = 0;

	function recurse(node) {
		if (node.children) node.size = node.children.reduce(function(p, v) { return p + recurse(v); }, 0);
		if (!node.id) node.id = ++i;
		nodes.push(node);
		return node.size;
	}

	root.size = recurse(root);
	return nodes;
}