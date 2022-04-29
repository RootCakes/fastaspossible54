
$(window).on('load', function() {
    // Notification 1
    setTimeout(function() {
        var time = "a few seconds ago";
        $.notify({
            icon: 'theme-assets/images/user.png',
            title: 'An Active User',
            message: 'Just Visited The Fuel Station'
        },{
            type: 'minimalist',
            placement: {
                from: "bottom",
                align: "left"
            },
            animate: {
                enter: 'animated fadeInLeftBig',
                exit: 'animated fadeOutLeftBig'
            },
            icon_type: 'image',
            template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<div id="image">' +
                '<img data-notify="icon" class="rounded-circle float-left">' +
                '</div><div id="text">' +
                '<span data-notify="title">{1}</span>' +
                '<span data-notify="message">{2}</span>' +
                '<span data-notify="time">'+time+'</span>' +
                '</div>'+
            '</div>'
        });
    },5000);

    // Notification 2
    setTimeout(function() {
        var time = "a couple minutes ago";
        $.notify({
           icon: 'theme-assets/images/user.png',
            title: 'An Active User',
            message: 'Just Visited The Fuel Station'
        },{
            type: 'minimalist',
            placement: {
                from: "bottom",
                align: "left"
            },
            animate: {
                enter: 'animated fadeInLeftBig',
                exit: 'animated fadeOutLeftBig'
            },
            icon_type: 'image',
            template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<div id="image">' +
                '<img data-notify="icon" class="rounded-circle float-left">' +
                '</div><div id="text">' +
                '<span data-notify="title">{1}</span>' +
                '<span data-notify="message">{2}</span>' +
                '<span data-notify="time">'+time+'</span>' +
                '</div>'+
            '</div>'
        });
    }, 15000);
});