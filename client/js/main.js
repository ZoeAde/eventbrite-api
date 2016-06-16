$(document).on('ready', function() {
  console.log('sanity check!');

        //RADIO BUTTON SHOW/HIDE TABLE COLUMNS
        $("input:checkbox:not(:checked)").each(function() {
            var column = "table ." + $(this).attr("name");
            $(column).hide();
        });

        $("input:checkbox").click(function(){
            var column = "table ." + $(this).attr("name");
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
           console.log(response);
           if (attendees) {
            $('.inputsection').html(attendees);
           }
                    if(attendees.length) {
                        for(var i=0;i<attendees.length;i++) {
                            var attendee = attendees[i];
                            console.log(attendee.profile_first_name);
                            var newAttendee = "<tr class='attendeeList'><td class='colData col1'>" +
                                attendee.team + "</td><td class='colData col2'>" +
                                attendee.costs_base_price_display  + "</td><td class='colData col3'>" +
                                attendee.costs_base_price_currency + "</td><td class='colData col4'>" +
                                attendee.costs_base_price_value + "</td><td class='colData col5'>" +
                                attendee.costs_base_price_major_value + "</td><td class='colData col6'>" +
                                attendee.costs_eventbrite_fee_display + "</td><td class='colData col7'>" +
                                attendee.costs_eventbrite_fee_currency + "</td><td class='colData col8'>" +
                                attendee.costs_eventbrite_fee_value + "</td><td class='colData col9'>" +
                                attendee.costs_eventbrite_fee_major_value + "</td><td class='colData col10'>" +
                                attendee.costs_gross_display + "</td><td class='colData col11'>" +
                                attendee.costs_gross_currency + "</td><td class='colData col12'>" +
                                attendee.costs_gross_value + "</td><td class='colData col13'>" +
                                attendee.costs_gross_major_value + "</td><td class='colData col14'>" +
                                attendee.costs_payment_fee_display + "</td><td class='colData col15'>" +
                                attendee.costs_payment_fee_currency + "</td><td class='colData col16'>" +
                                attendee.costs_payment_fee_value + "</td><td class='colData col17'>" +
                                attendee.costs_payment_fee_major_value + "</td><td class='colData col18'>" +
                                attendee.costs_tax_display + "</td><td class='colData col19'>" +
                                attendee.costs_tax_currency + "</td><td class='colData col20'>" +
                                attendee.costs_tax_value + "</td><td class='colData col21'>" +
                                attendee.costs_tax_major_value + "</td><td class='colData col22'>" +
                                attendee.resource_uri + "</td><td class='colData col23'>" +
                                attendee.id + "</td><td class='colData col24'>" +
                                attendee.changed + "</td><td class='colData col25'>" +
                                attendee.created + "</td><td class='colData col26'>" +
                                attendee.quantity + "</td><td class='colData col27'>" +
                                attendee.profile_first_name + "</td><td class='colData col28'>" +
                                attendee.profile_last_name + "</td><td class='colData col29'>" +
                                attendee.profile_email + "</td><td class='colData col30'>" +
                                attendee.profile_name + "</td><td class='colData col31'>" +
                                attendee.profile_addresses + "</td><td class='colData col32'>" +
                                attendee.barcodes_status + "</td><td class='colData col33'>" +
                                attendee.barcodes_barcode + "</td><td class='colData col34'>" +
                                attendee.barcodes_checkin_type + "</td><td class='colData col35'>" +
                                attendee.barcodes_created + "</td><td class='colData col36'>" +
                                attendee.barcodes_changed + "</td><td class='colData col37'>" +
                                attendee.answers + "</td><td class='colData col38'>" +
                                attendee.checked_in + "</td><td class='colData col39'>" +
                                attendee.cancelled + "</td><td class='colData col40'>" +
                                attendee.refunded + "</td><td class='colData col41'>" +
                                attendee.affiliate + "</td><td class='colData col42'>" +
                                attendee.status + "</td><td class='colData col43'>" +
                                attendee.event_id + "</td><td class='colData col44'>" +
                                attendee.order_id + "</td><td class='colData col45'>" +
                                attendee.ticket_class_id + "</td></tr>";
                            $('.attendee-table').append(newAttendee);
                        }

                    } else {
                        $('.attendees-table').html("<p>Sorry, there are no attendees.</p>");
                    }
        });


});

