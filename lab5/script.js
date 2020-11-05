
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



});