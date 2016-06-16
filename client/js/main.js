$(document).on('ready', function() {
  console.log('sanity check!');

        //RADIO BUTTON SHOW/HIDE TABLE COLUMNS
        $("input:checkbox:not(:checked)").each(function() {
            var column = "table ." + $(this).attr("name");
            console.log(column);
            $(column).hide();
        });

        $("input:checkbox").click(function(){
            var column = "table ." + $(this).attr("name");
            console.log(column);
            $(column).toggle();
        });

        $("#checkAll").change(function () {
            $("input:checkbox").prop('checked', $(this).prop("checked"));
            $('.col').toggle();
            $('.colData').toggle();
        });

        // DATA GET REQUESTS
        $.get('http://localhost:5000/eventbrite/attendees').then(function (response) {
           var attendees = response;
           console.log('the response', response);
           if (attendees) {
            $('.inputsection').html(attendees);
           }
                    if(attendees.length) {
                        for(var i=0;i<attendees.length;i++) {
                            var attendee = attendees[i];
                            console.log(attendee.profile_first_name);
                            var newAttendee = "<tr class='attendeeList'><td class='col1'>" +
                                attendee.team + "</td><td class='col2'>" +
                                attendee.costs_base_price_display  + "</td><td class='col3'>" +
                                attendee.costs_base_price_currency + "</td><td class='col4'>" +
                                attendee.costs_base_price_value + "</td><td class='col5'>" +
                                attendee.costs_base_price_major_value + "</td><td class='col6'>" +
                                attendee.costs_eventbrite_fee_display + "</td><td class='col7'>" +
                                attendee.costs_eventbrite_fee_currency + "</td><td class='col8'>" +
                                attendee.costs_eventbrite_fee_value + "</td><td class='col9'>" +
                                attendee.costs_eventbrite_fee_major_value + "</td><td class='col10'>" +
                                attendee.costs_gross_display + "</td><td class='col11'>" +
                                attendee.costs_gross_currency + "</td><td class='col12'>" +
                                attendee.costs_gross_value + "</td><td class='col13'>" +
                                attendee.costs_gross_major_value + "</td><td class='col14'>" +
                                attendee.costs_payment_fee_display + "</td><td class='col15'>" +
                                attendee.costs_payment_fee_currency + "</td><td class='col16'>" +
                                attendee.costs_payment_fee_value + "</td><td class='col17'>" +
                                attendee.costs_payment_fee_major_value + "</td><td class='col18'>" +
                                attendee.costs_tax_display + "</td><td class='col19'>" +
                                attendee.costs_tax_currency + "</td><td class='col20'>" +
                                attendee.costs_tax_value + "</td><td class='col21'>" +
                                attendee.costs_tax_major_value + "</td><td class='col22'>" +
                                attendee.resource_uri + "</td><td class='col23'>" +
                                attendee.id + "</td><td class='col24'>" +
                                attendee.changed + "</td><td class='col25'>" +
                                attendee.created + "</td><td class='col26'>" +
                                attendee.quantity + "</td><td class='col27'>" +
                                attendee.profile_first_name + "</td><td class='col28'>" +
                                attendee.profile_last_name + "</td><td class='col29'>" +
                                attendee.profile_email + "</td><td class='col30'>" +
                                attendee.profile_name + "</td><td class='col31'>" +
                                attendee.profile_addresses + "</td><td class='col32'>" +
                                attendee.barcodes_status + "</td><td class='col33'>" +
                                attendee.barcodes_barcode + "</td><td class='col34'>" +
                                attendee.barcodes_checkin_type + "</td><td class='col35'>" +
                                attendee.barcodes_created + "</td><td class='col36'>" +
                                attendee.barcodes_changed + "</td><td class='col37'>" +
                                attendee.answers + "</td><td class='col38'>" +
                                attendee.checked_in + "</td><td class='col39'>" +
                                attendee.cancelled + "</td><td class='col40'>" +
                                attendee.refunded + "</td><td class='col41'>" +
                                attendee.affiliate + "</td><td class='col42'>" +
                                attendee.status + "</td><td class='col43'>" +
                                attendee.event_id + "</td><td class='col44'>" +
                                attendee.order_id + "</td><td class='col45'>" +
                                attendee.ticket_class_id + "</td></tr>";
                            $('.attendee-table').append(newAttendee);
                        }

                    } else {
                        $('.attendees-table').html("<p>Sorry, there are no attendees.</p>");
                    }
        });


});
