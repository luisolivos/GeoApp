var fn = {
	init: function(){
		//Posición del mapa
		//geo.getPosition();
		var latlng = new google.maps.LatLng(geo.lat, geo.lng);
		var myOptions = {
			zoom: 16,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
		//Marcador
		var marker = new google.maps.Marker({
			position: latlng, 
			map: map, 
			title:"Mi posición"
		});
	},
	ready: function(){
		//document.addEventListener("deviceready", geo.getPosition, false);
		document.addEventListener("deviceready", fn.barcodereader, false);
	},
	barcodereader: function(){
		$('#bc').click(function(){
			cordova.plugins.barcodeScanner.scan(
			  function (result) {
				  alert("We got a barcode\n" +
						"Result: " + result.text + "\n" +
						"Format: " + result.format + "\n" +
						"Cancelled: " + result.cancelled);
			  }, 
			  function (error) {
				  alert("Scanning failed: " + error);
			  }
		   );
		});
	}
};
$(fn.ready);