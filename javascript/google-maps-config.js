function initialize () {
    var locations = [
        ['Ayyappa Society, Hyderabad <span>Head Office</span>', 17.443326, 78.390922, 1]
    ];

    /* Map initialize */
    var mapCanvas = document.getElementById('google-map');
    var mapOptions = {
        zoom: 15,
        scrollwheel: false,
        center: new google.maps.LatLng(17.443326, 78.390922),
        panControl: false,
        zoomControl: true,
        scaleControl: false,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    }

google.maps.event.addDomListener(window, 'load', initialize);