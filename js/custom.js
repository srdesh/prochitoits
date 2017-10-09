/*--------------------
         slider       |
----------------------*/
$(function() {
				var demo1 = $("#news-slider").slippry({
					transition: 'horizontal',
					useCSS: true,
					speed: 1000,
					pause: 6000,
					auto: true,
					preload: 'visible',
					autoHover: false
				});
			});


			/*--------------------
			         Map       |
			----------------------*/
			function initMap() {
			        var prochito = {lat: 23.793798, lng: 90.404037};
			        var map = new google.maps.Map(document.getElementById('map'), {
			          zoom: 17,
			          center: prochito,
								styles: [
							            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
							            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
							            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
							            {
							              featureType: 'administrative.locality',
							              elementType: 'labels.text.fill',
							              stylers: [{color: '#d59563'}]
							            },
							            {
							              featureType: 'poi',
							              elementType: 'labels.text.fill',
							              stylers: [{color: '#d59563'}]
							            },
							            {
							              featureType: 'poi.park',
							              elementType: 'geometry',
							              stylers: [{color: '#263c3f'}]
							            },
							            {
							              featureType: 'poi.park',
							              elementType: 'labels.text.fill',
							              stylers: [{color: '#6b9a76'}]
							            },
							            {
							              featureType: 'road',
							              elementType: 'geometry',
							              stylers: [{color: '#38414e'}]
							            },
							            {
							              featureType: 'road',
							              elementType: 'geometry.stroke',
							              stylers: [{color: '#212a37'}]
							            },
							            {
							              featureType: 'road',
							              elementType: 'labels.text.fill',
							              stylers: [{color: '#9ca5b3'}]
							            },
							            {
							              featureType: 'road.highway',
							              elementType: 'geometry',
							              stylers: [{color: '#746855'}]
							            },
							            {
							              featureType: 'road.highway',
							              elementType: 'geometry.stroke',
							              stylers: [{color: '#1f2835'}]
							            },
							            {
							              featureType: 'road.highway',
							              elementType: 'labels.text.fill',
							              stylers: [{color: '#f3d19c'}]
							            },
							            {
							              featureType: 'transit',
							              elementType: 'geometry',
							              stylers: [{color: '#2f3948'}]
							            },
							            {
							              featureType: 'transit.station',
							              elementType: 'labels.text.fill',
							              stylers: [{color: '#d59563'}]
							            },
							            {
							              featureType: 'water',
							              elementType: 'geometry',
							              stylers: [{color: '#17263c'}]
							            },
							            {
							              featureType: 'water',
							              elementType: 'labels.text.fill',
							              stylers: [{color: '#515c6d'}]
							            },
							            {
							              featureType: 'water',
							              elementType: 'labels.text.stroke',
							              stylers: [{color: '#17263c'}]
							            }
							          ]

			  						});

							var contentString =
								'<div id="content">'+
							 			'<div id="bodyContent">'+
							 					'<p><b>Prochito ITS</b></p>'+
												'<p>Contact: +88-019000000</p>'+
												'<p>Address: 7th Floor, Hemlet Tower, Banani, Dhaka, Bangladesh</p>'+
							 					'<p>Website: <a href="https://its.prochito.com">'+
							 					'(last visited June 22, 2009).</p>'+
							 			'</div>'+
							 	'</div>';

							 var infowindow = new google.maps.InfoWindow({
								 content: contentString
							 });

				       var marker = new google.maps.Marker({
				          position: prochito,
				          map: map
				       });

				       infowindow.open(map, marker);
							 marker.addListener('click', function() {
				          infowindow.open(map, marker);
				       });

			      }



/*--------------------
		smooth-scrolling       |
----------------------*/