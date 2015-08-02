var regionOccupationCounts = {};

// Loads occupation and region information from the supplied CSV
d3.csv("data/work_visas_cut.csv", function(d) {
  return {
    occupation: d["Standard Submajor Group"],
    region: d["Region"]
  };
  // this function iterates over every entry from the work visa CSV file
}, function(data) {
  data.forEach(function(entry) {
    // If the region is not yet defined, define it
    if(regionOccupationCounts[entry.region] === undefined) {
      regionOccupationCounts[entry.region] = {};
    }

    // If this occupation is not yet defined in the region, set its count equal to one
    if(regionOccupationCounts[entry.region][entry.occupation] === undefined) {
      regionOccupationCounts[entry.region][entry.occupation] = 1;
    }
    else {
      regionOccupationCounts[entry.region][entry.occupation] += 1;
    }
  });
  // Log the regional occupational data to the console
  console.log(regionOccupationCounts);
});

google.setOnLoadCallback(drawChart);
function drawChart(region) {
  var array = [];

  array.push(["Occupation", "Count"]);

  $.map(regionOccupationCounts[region], function(value, index) {
    array.push([index,value]);
  });

  console.log(array);

  var data = google.visualization.arrayToDataTable(array);

  var options = {

    backgroundColor: 'transparent',
    height: 600, width: 600,
    colors: ['#9BBF97', '#687F64', '#CFFFC9', '#344032', '#9FBFB1', '#DDFFDD', '#D5FFEC', '#35403B', '#BFE5D4', '#A5BFBA', '#6E7F7C'],
    is3D: true
  };

  var chartDivId = "region-pie-"+region.toLowerCase().replace(/ /g,"");
  var chartDiv = document.getElementById(chartDivId);
  var chart = new google.visualization.PieChart(chartDiv);

  chart.draw(data, options);
}
