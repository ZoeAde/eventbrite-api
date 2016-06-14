$(document).on('ready', function() {
  console.log('sanity check!');
        // HIDE SECTIONS ON LOAD
        // $('#eventData').hide();
        // // $('#attendeeData').hide();

        // // Show Sections on button click
        // $('.event-button-click').on('click', function() {
        //     $('#attendeeData').hide();
        //     $('#eventData').show();
        // });

        // $('.attendee-button-click').on('click', function() {
        //     $('#eventData').hide();
        //     $('#attendeeData').show();
        // });

        // $('#name-select-div').on('click', function() {
        //     if($('[name="name"]').is(':checked')) {
        //         console.log('checked@');
        //     }

        //     if($('[name="name"]')not.(.is(':checked')) {
        //         console.log('checked@');
        //     }


        // });


        // DATA GET REQUESTS
        $.get('http://localhost:5000/eventbrite/attendees').then(function (response) {
           var attendees = response;
                    if(attendees.length) {
                        for(var i=0;i<attendees.length;i++) {
                            var attendee = attendees[i];
                            var newAttendee = "<tr class='attendeeList'><td>" +
                                attendee.team + "</td><td>" +
                                attendee.costs_base_price_display  + "</td><td>" +
                                attendee.costs_base_price_currency + "</td><td>" +
                                attendee.costs_base_price_value + "</td><td>" +
                                attendee.costs_base_price_major_value + "</td><td>" +
                                attendee.costs_eventbrite_fee_display + "</td><td>" +
                                attendee.costs_eventbrite_fee_currency + "</td><td>" +
                                attendee.costs_eventbrite_fee_value + "</td><td>" +
                                attendee.costs_eventbrite_fee_major_value + "</td><td>" +
                                attendee.costs_gross_display + "</td><td>" +
                                attendee.costs_gross_currency + "</td><td>" +
                                attendee.costs_gross_value + "</td><td>" +
                                attendee.costs_gross_major_value + "</td><td>" +
                                attendee.costs_payment_fee_display + "</td><td>" +
                                attendee.costs_payment_fee_currency + "</td><td>" +
                                attendee.costs_payment_fee_value + "</td><td>" +
                                attendee.costs_payment_fee_major_value + "</td><td>" +
                                attendee.costs_tax_display + "</td><td>" +
                                attendee.costs_tax_currency + "</td><td>" +
                                attendee.costs_tax_value + "</td><td>" +
                                attendee.costs_tax_major_value + "</td><td>" +
                                attendee.resource_uri + "</td><td>" +
                                attendee.id + "</td><td>" +
                                attendee.changed + "</td><td>" +
                                attendee.created + "</td><td>" +
                                attendee.quantity + "</td><td>" +
                                attendee.profile_first_name + "</td><td>" +
                                attendee.profile_last_name + "</td><td>" +
                                attendee.profile_email + "</td><td>" +
                                attendee.profile_name + "</td><td>" +
                                attendee.profile_addresses + "</td><td>" +
                                attendee.barcodes_status + "</td><td>" +
                                attendee.barcodes_barcode + "</td><td>" +
                                attendee.barcodes_checkin_type + "</td><td>" +
                                attendee.barcodes_created + "</td><td>" +
                                attendee.barcodes_changed + "</td><td>" +
                                attendee.answers + "</td><td>" +
                                attendee.checked_in + "</td><td>" +
                                attendee.cancelled + "</td><td>" +
                                attendee.refunded + "</td><td>" +
                                attendee.affiliate + "</td><td>" +
                                attendee.status + "</td><td>" +
                                attendee.event_id + "</td><td>" +
                                attendee.order_id + "</td><td>" +
                                attendee.ticket_class_id + "</td></tr>";
                            $('.attendee-table').append(newAttendee);
                        }

                    } else {
                        $('.attendees-table').html("<p>Sorry, there are no attendees.</p>");
                    }
        });


});

