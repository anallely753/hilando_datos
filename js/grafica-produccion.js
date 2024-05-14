//------------------------1. PREPARATION FOR INDEX------------------------/
function loadGraficaProduccion(){
    //-----------------------------SVG------------------------------//
    const width = 900;
    const height = 400;
    const margin = 10;
    const padding = 0;
    const adj = 55;
    // we are appending SVG first
    const svg = d3.select("div#produccion_container_grafica").append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "-"
      + adj + " -"
      + adj + " "
      + (width + adj *3) + " "
      + (height + adj*3))
    .style("padding-left", 50)
    .style("margin-left", margin)
    .style("position", 'relative')
    // .style("stroke", 'white')
    .classed("svg-content", true);

    //  Poner fondo
    svg.append("defs")
    .append("pattern")
    .attr("id", "bg-pattern")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("patternContentUnits", "objectBoundingBox")
    .append("image")
    .attr("width", 1)
    .attr("height", 1)
    .attr("preserveAspectRatio", "none")
                .attr("xlink:href", "./img/fibra/textura-grafica.png"); // Replace with the path to your image

                svg.append("rect")
                .attr("width", "81.55%")
                .attr("height", "71.4%")
                .style("opacity", ".39")
                .style("fill", "url(#bg-pattern)");

    //-----------------------------DATA-----------------------------//
    const timeConv = d3.timeParse("%Y");
    const dataset = d3.csv("data.csv");
    dataset.then(function(data) {
        var slices = data.columns.slice(1).map(function(id) {
            return {
                id: id,
                values: data.map(function(d){
                    return {
                        date: +d.date,
                        measurement: +d[id]
                    };
                })
            };
        });

    const formatValue = d3.format(".2s"); // Define format function

    function formatYAxis(number) {
      if (number === 0) {
        return "0"; // Return "0" if the number is zero
      } else {
        return formatValue(number / 1000) + " T"; // Convert to "T" format for non-zero values
      }
    }

    //----------------------------SCALES----------------------------//
    const years = [1975, 1980, 1985, 1990, 1995, 2000, 2005, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

        // const xScale = d3.scaleTime().range([0,width]);
        const xScale = d3.scaleBand()
        .domain(years)
            .range([0, width]); // Assuming 'width' is defined elsewhere
        const yScale = d3.scaleLinear().rangeRound([height, 0]);
            yScale.domain([0, 110000]);

    //-----------------------------AXES-----------------------------//
    const yaxis = d3.axisLeft()
    .ticks((slices[0].values).length/4)
    .scale(yScale)
    .tickFormat(formatYAxis);

    const xaxis = d3.axisBottom()
    .tickValues(years)
    .scale(xScale);

    //----------------------------LINES-----------------------------//
    const line = d3.line()
    .x(function(d) { return xScale(d.date); })
    .y(function(d) { return yScale(d.measurement); });

    let id = 0;
    const ids = function () {
        return "line-"+id++;
    }  

    // Add the Y gridlines
    svg.append("g")         
        .attr("class", "grid")
        .attr("transform", "translate(-20," + height + ")")
        .call(d3.axisBottom(xScale)
            .tickSize(-height) // this will create vertical lines for the grid
            .tickFormat("") // this hides the tick labels
        )
        .selectAll("line")
        .style("stroke", "#fff") // set the color of the gridlines
        .style("stroke-width", 1)
        .style("stroke-dasharray", "8") // this sets the dash pattern, making the lines dotted
        .style("opacity", 0.5); // set the opacity of the gridlines

    //---------------------------TOOLTIP----------------------------//
    const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 1)
    .style("position", "absolute");


    //-------------------------2. DRAWING---------------------------//
    //-----------------------------AXES-----------------------------//
    svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(-17," + height + ")")
    .call(xaxis);

    svg.append("g")
    .attr("class", "axis")
    .call(yaxis)



    //----------------------------LINES-----------------------------//
    const lines = svg.selectAll("lines")
    .data(slices)
    .enter()
    .append("g")
    .attr("class", "line2")
    .attr("id", function(d, i) { // 'd' is the current data, 'i' is the index
      return i === 0 ? "line01" : (i === 1 ? "line02" : null);
    });


    lines.append("path")
    .attr("class", ids)
    .attr("d", function(d) { return line(d.values); })
    // .attr("d", function(d) { return line([]); })

    // Call the callback function after D3.js operation is complete

    // lines.selectAll("path")
    // .transition()
    //   .duration(3000) // Adjust duration as needed
    //   .attrTween("d", function(d) {
    //     const interpolate = d3.interpolateArray([], line(d.values));
    //     return function(t) {
    //       return line(d.values.slice(0, Math.floor(t * d.values.length)));
    //   };
    // });

    //---------------------------POINTS-----------------------------// 
    lines.selectAll("points")
    .data(function(d) {return d.values})
    .enter()
    .append("circle")
    .attr("cx", function(d) { return xScale(d.date); })      
    .attr("cy", function(d) { return yScale(d.measurement); })    
    .attr("r", 2.5)
    .attr("class","point")
    .style("stroke", "#fff")
    .style("stroke-width", "1.5")
    .style("fill", "transparent")
    .style("cursor", "pointer")
    .style("z-index", "4000")
    // .style("animation", "heartbeat 1s infinite");

    lines.selectAll("points")
    .data(function(d) {return d.values})
    .enter()
    .append("circle")
    .attr("cx", function(d) { return xScale(d.date); })      
    .attr("cy", function(d) { return yScale(d.measurement); })    
    .attr("r", 10)
    .attr("class","point2")
    .style("opacity", 1)
    .style("stroke", "transparent")
    .style("stroke-width", "3")
    .style("fill", "transparent")
    // .style("z-index", "2000")
    .style("cursor", "pointer")


    lines.selectAll("#line01 .point")
    .style("opacity", 0)


    lines.selectAll("#line02 .point")
    .style("opacity", 0)




    //---------------------------EVENTS-----------------------------// 
    // lines.selectAll("circles")
    // .data(function(d) { return(d.values); } )
    // .enter()
    // .append("circle")
    // .attr("cx", function(d) { return xScale(d.date); })      
    // .attr("cy", function(d) { return xScale(d.date); })    
    // .attr('r', 10)
    // .style("opacity", 0)


    lines.selectAll("#line01 .point2")
    .on('mouseover', function(event,d) {


        d3.select(this)
        .style("cursor", "pointer")
        .style("stroke", "#ca7650")
        .style("fill","transparent")

        const formatNumber = d3.format(",");
        // alert(event.pageX)
        tooltip
        .style("opacity", 1)
        .html(formatNumber(d.measurement) + " T")
        .style("left", (event.pageX - 45) + "px")
        .style("top", (event.pageY - 55) + "px");
    })     

    .on("mouseout", function(d) {  
        d3.select(this)
        .style("cursor", "pointer")
        .style("stroke", "transparent")
        .style("fill","transparent")

        tooltip      
        .style("opacity", 0);  

    });

    lines.selectAll("#line02 .point2")
    .on('mouseover', function(event, d) {
        d3.select(this)
        .style("cursor", "pointer")
        .style("stroke", "#cde35f")

        const formatNumber = d3.format(",");
        // alert(event.pageX)
        tooltip
        .style("opacity", 1)
        .html(formatNumber(d.measurement) + " T")
        .style("left", (event.pageX - 45) + "px")
        .style("top", (event.pageY - 55) + "px");
        
    })     
        

    .on("mouseout", function(d) {  
        d3.select(this)
        .style("cursor", "pointer")
        .style("stroke", "transparent")
        .style("fill","transparent")    
       
         tooltip     
        .style("opacity", 0);  
    });

    });

    //  chatgtp

}

// loadGraficaProduccion()