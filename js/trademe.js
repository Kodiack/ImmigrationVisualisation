
  
  var regionName={
		"Northland":9,
		"Auckland": 1,
		"Waikato":14,
		"Bay of plenty":2,
		"Gisborne":4,
		"Manawatu":6,
		"Taranaki":12,
		"Wellington":15,
		"Marlborough":7,
		"Nelson":8,
		"West Coast":16,
		"Canterbury":3,
		"Otago":10,
		"Southland":11};

   // it will get total number of jobs according to category and region.
   function trademeJobsCategoryAndRegion(categoryId, regionId) {
	 var region="";
	 if(regionId)
	 {
		region="region=" + regionId + "&"
	 }
	  
	  $.ajax({
		  dataType: "json",
		  url: "https://api.trademe.co.nz/v1/Search/Jobs.json?" + region + "category=" + categoryId + "&oauth_consumer_key=3CDFC85F813DABFCF20B7B203DB0A9B7&oauth_signature_method=PLAINTEXT&oauth_signature=B3E421EDCE2ABFA7D84E4390C17F4E6B%26",
		  success: function( data ) {
				console.log(data.TotalCount);
			  }
		  });
   
   }
   
  
