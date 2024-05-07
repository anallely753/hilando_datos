var w = 1600,
h = 1600,
radius = 10,
nodeParent,
linkParent,
nodeChild,
linkChild,
root;

var force = d3.layout.force()
.on("tick", tick)
.charge(function(d) { return -500; })
.linkDistance(function(d) { return d.target._children ? 100 : 50; })
.size([w, h - 160]);

// .linkDistance(function(d){
//  if (d.fam === 'child') {
//           return 100; // Return a different link distance for parents
//       } else {
//           return -130; //Return a different link distance for children
//       }
//   })
// .charge(function(d) {
//     if (d.fam === 'child') {
//        return -2000; // Return a different link distance for parents
//     } else if (d.fam === 'grandchild') {
//        return -4000; // Return a different link distance for children
//     } else{
//       return -10000; 
//     }
//  })

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
   link = link.data(links, function(d) { return d.target.id; });
   link.exit().remove();


   // Enter any new links.
   link.enter().insert("line", ".node")
   .attr("class", "link")

   // Update the nodes…
   node = node.data(nodes, function(d) { return d.id; });
   node.exit().remove();

   var nodeEnter = node.enter().append("g")
   .attr("class", "node")
      // .on("click", click)
      .call(force.drag);

      nodeEnter.append("circle")
      .call(force.drag)
      .attr("r", function(d) {
        return d.value;
    })
      // .attr("r",10)
      .style("fill", color);

      nodeEnter.append("text")
      .attr("text-anchor", "middle")  
      .text(function(d) { return d.name; })
      .attr("dx", function(d) {
        return d.value ;
    })
      .attr("dy", function(d) {
        return d.value;
    })
      .attr("font-family", "sans-serif")
      .attr("letter-spacing", "1.8px")
      .attr("fill", "#fff")
      .attr("font-size", "13px") 
      .attr("font-weight", "bold")
      .attr("transform", function(d) {
        var x = - d.value ;
        var y = - d.value + 10 ;
        return "translate(" + x + "," + y + ")";
    });

      nodeEnter.append("svg:image")
      .attr("xlink:href", function(d) {
        return d.myImg;
    })
      .attr("width", function(d) {
        return d.value ;
    })
      .attr("height", function(d) {
        return d.value;
    })
      .attr("transform", function(d) {
        var x = - d.value / 2;
        var y = - d.value / 2;
        return "translate(" + x + "," + y + ")";
    });
      
  }

  function tick() {
      link.attr("x1", function(d) {
        return d.source.x;
    })
      .attr("y1", function(d) {
        return d.source.y;
    })
      .attr("x2", function(d) {
        return d.target.x;
    })
      .attr("y2", function(d) {
        return d.target.y;
    });

      node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  }


// Color leaf nodes orange, and packages white or blue.
function color(d) {
 switch (d.group) {
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
     return "#cef173";
     break;
     case 'planchado':
     return "#2c4c51";
     break;
     default:
     return "#ca7650";
 }
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

