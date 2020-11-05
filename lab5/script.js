
$(document).ready(function() {


    // Accordion

    $(".accordion__sections").accordion()


    // Slider

    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 950,
        values: [ 75, 500 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );

    // Tabs

    $(".tabs").tabs();

    $("#gallery").unitegallery();

    $(function() {

        $('.weather-temperature').openWeather({
            city: 'Kyiv, UA', // city name, country / province/ state
            lat: null, // defines the latitude
            lng: null, // defines the longitude
            key: 'be79ccdc28a89d0a74a469cf2736e3ab',
            units: "c", // defines the type of units (c or f).
            lang: 'en',
            descriptionTarget: '.weather-description',
            windSpeedTarget: '.weather-wind-speed',
            minTemperatureTarget: '.weather-min-temperature',
            maxTemperatureTarget: '.weather-max-temperature',
            humidityTarget: '.weather-humidity',
            sunriseTarget: '.weather-sunrise',
            sunsetTarget: '.weather-sunset',
            placeTarget: '.weather-place',
            iconTarget: '.weather-icon',
            customIcons: 'img/icons/weather/',
            success: function() {

                //show weather
                $('.weather-wrapper').show();

            },
            error: function(message) {}
        });

    });

    $('.jic').inlineCurrency();



});