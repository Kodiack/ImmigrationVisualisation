var regionName={
  "Northland":9,
  "Auckland": 1,
  "Waikato":14,
  "Bay of Plenty":2,
  "Gisborne":4,
  "Manawatu":6,
  "Taranaki":12,
  "Wellington":15,
  "Marlborough":7,
  "Nelson":8,
  "West Coast":16,
  "Canterbury":3,
  "Otago":10,
  "Southland":11
};

var regionJobCount = [];

trademeJobsCategoryAndRegion(5000, 9);
// it will get total number of jobs according to category and region.
function trademeJobsCategoryAndRegion(categoryId, regionId) {
  var region="";
  if(regionId)
  {
    region="region=" + regionId + "&"
  }
  
  $.each(regionName, function(region) {
	var id = regionName[region];
	
	  $.ajax({
		dataType: "json",
		url: "https://api.trademe.co.nz/v1/Search/Jobs.json?region=" + id + "&category=" + categoryId + "&oauth_consumer_key=3CDFC85F813DABFCF20B7B203DB0A9B7&oauth_signature_method=PLAINTEXT&oauth_signature=B3E421EDCE2ABFA7D84E4390C17F4E6B%26",
		success: function(data) {
		  regionJobCount.push({regionName: region, count: data.TotalCount});
		}
	  });
  });
  
}


//"[{"regionName":"Northland","count":250},{"regionName":"Taranaki","count":217},{"regionName":"Manawatu","count":410},{"regionName":"Waikato","count":924},{"regionName":"Gisborne","count":52},{"regionName":"Auckland","count":6541},{"regionName":"Canterbury","count":2896},{"regionName":"Bay of Plenty","count":746},{"regionName":"Nelson","count":232},{"regionName":"Marlborough","count":113},{"regionName":"Otago","count":509},{"regionName":"West Coast","count":54},{"regionName":"Southland","count":204},{"regionName":"Wellington","count":2025}]"

