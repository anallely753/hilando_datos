var pubs =
{
    "name": "",
    "children": [
        {
            "name": "SECOND HAND", "level":"level1","children": [
                {"name": "Troquer", "country": "México", "url": "https://troquer.com.mx"},
                {"name": "Galpón de ropa","country": "Argentina", "url":"https://www.galponderopa.com"},
                {"name": "Eva Fashion Art", "country": "Japón", "url":"https://evafashionart.com"},
                {"name": "Bazar Vntg", "country": "Chile", "url":"https://bazarvintage.cl"},
                {"name": "ClothesFriends", "country": "Alemania", "url":"https://www.clothes-friends.com"},
                {"name": "Original seconds", "country": "Turquía", "url":"https://www.originalseconds.com"},
                {"name": "Olibati", "country": "España", "url":"https://olibati.com"},
                {"name": "Bodements", "country": "India", "url":"https://bodements.in"},
                {"name": "2nd street", "country": "USA", "url":"https://2ndstreetusa.com"},
                {"name": "Thredup", "country": "", "url":"https://www.thredup.com"},
            ]
        },
        {
            "name": "SLOW FASHION","level":"level2","children": [
                {"name": "Arrecife", "country": "México", "url":"https://arrecifenilo.com"},
                {"name": "Noir", "country": "México", "url":"https://www.noirmx.com"},
                {"name": "Sentient", "country": "México", "url":"https://sentientthebrand.com"},
                {"name": "Maison Cleo", "country": "Francia", "url":"https://maisoncleo.com"},
                {"name": "I Owe You", "country": "India", "url":"https://ioweyou.cc/shop/products"},
                {"name": "Annaiss Yucra", "country": "Perú", "url":"https://annaissyucra.com"},
                {"name": "Calmo", "country": "", "url":"https://calmoslow.com"},
                {"name": "Juan de Dios", "country": "Colombia", "url":"https://juandedios.co"},
                {"name": "Osklen", "country": "Brasil", "url":"https://www.osklen.com"},
                {"name": "Paréntesis", "country": "Colombia", "url":"https://parentesisdiseno.co"},
            ]
        },
        {
            "name": "UPCYCLING","level":"level3","children": [
                {"name": "Alterist", "country": "UE", "url":"https://alterist.com"},
                {"name": "Doodlage", "country": "India", "url":"https://doodlage.in"},
                {"name": "Agustina Comas", "country": "Brasil", "url":"https://www.agustinacomas.com/"},
                {"name": "Liz Campos", "country": "México", "url":"https://lizcamposmx.com"},
                {"name": "Tanamachi", "country": "México", "url":"https://www.tanamachi.shop"},
                {"name": "Tania Marcial", "country": "España", "url":"https://taniamarcial.com"},
                {"name": "Selina Sanders", "country": "USA", "url":"https://www.selinasanders.com"},
                {"name": "Gaia Segattini", "country": "Italia", "url":"https://gaiasegattiniknotwear.it"},
                {"name": "12na", "country": "Chile", "url":"https://docena.net"},
                {"name": "Therapy", "country": "Berlin", "url":"https://www.therapy-berlin.com"},
            ]
        },
    ]
};

var diameterNV = 900;

var marginNV = {top: 10, right: 120, bottom: 10, left: 120},
    widthNV = diameterNV,
    heightNV = diameterNV;
    
var iNV = 0,
    durationNV  = 350,
    rootNV ;

var treeNV  = d3.layout.tree()
    .size([360, diameterNV])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 1) / a.depth; });

var diagonalNV = d3.svg.diagonal.radial()
    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

var svgNV  = d3.select("#radial_graph").append("svg")
    .attr("width", widthNV )
    .attr("height", heightNV )
  .append("g")
    .attr("transform", "translate(" + widthNV / 2 + "," + heightNV / 2.4 + ")");


svgNV.append("circle")
  .attr("cx", 0) // X coordinate of the center of the circle
  .attr("cy", 0) // Y coordinate of the center of the circle
  .attr("r", 270) // Radius of the circle
  .style("fill", "transparent") // Transparent fill
  .style("stroke", "#cef173") // Stroke color
  .style("stroke-width", "8px") // Stroke width
  .style("stroke-opacity", "0.27"); // Stroke opacity

svgNV.append("circle")
  .attr("cx", 0) // X coordinate of the center of the circle
  .attr("cy", 0) // Y coordinate of the center of the circle
  .attr("r", 282) // Radius of the circle
  .style("fill", "transparent") // Transparent fill
  .style("stroke", "#cef173") // Stroke color
  .style("stroke-width", "3px") // Stroke width
  .style("stroke-opacity", "1") // Stroke opacity
  .style("stroke-dasharray", "8,8"); // Dashed stroke

rootNV  = pubs;
rootNV .x0 = heightNV / 2;
rootNV .y0 = 0;

//root.children.forEach(collapse); // start with all children collapsed
update(rootNV );

function update(source) {

  // Compute the new tree layout.
  var nodes = treeNV .nodes(rootNV ),
      links = treeNV .links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 135; });

  // Update the nodes…
  var node = svgNV .selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++iNV); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
      .attr("class", "node nodepr")
      //.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
      .on("click", click);

  nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", function(d) { return d._children ? "#fff" : "#fff"; });

  nodeEnter.append("text")
      .attr("x", 10)
      .attr("class", 'textsm')
      .attr("id", function(d) { return d.level; })
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end" })
      .attr("transform", function(d) { return d.x < 180 ? "translate(" + (11)  + ")" : "rotate(180)translate(-" + (31)  + ")"; })
      .text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6)
    
  nodeEnter.append("text")
      .attr("x",10)
      .attr("class", 'textxs')
      .attr("dy", "1.5em")
      .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end" })
      .attr("transform", function(d) { return d.x < 180 ? "translate(" + (10)  + ")" : "rotate(180)translate(-" + (30)  + ")"; })
      .text(function(d) { return d.country; })

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(durationNV )
      .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

  nodeUpdate.select("circle")
      .attr("r", 4.5)
      .style("fill", function(d) { return d._children ? "#fff" : "#fff"; });

  nodeUpdate.select("text")
      .style("fill-opacity", 1)
      .attr("transform", function(d) { return d.x < 180 ? "translate(" + (10)  + ")" : "rotate(180)translate(-" + (30)  + ")"; })
      .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end" });

  // TODO: appropriate transform
  var nodeExit = node.exit().transition()
      .duration(durationNV )
      //.attr("transform", function(d) { return "diagonal(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svgNV .selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonalNV({source: o, target: o});
      });

  // Transition links to their new position.
  link.transition()
      .duration(durationNV )
      .attr("d", diagonalNV);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(durationNV )
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonalNV({source: o, target: o});
      })
      .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
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

  if(d.url){
    window.open(d.url, '_blank');
  }
  
  update(d);
}

// Collapse nodes
function collapse(d) {
  if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
}