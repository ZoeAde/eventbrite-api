$(document).on('ready', function() {
  console.log('sanity check!');

$.get('http://localhost:5000/eventbrite/events').then(function (response) {
    console.log('YO YO YO');
   var events = response;
   console.log('response', response);
   // $('#event-list').html("YO");

            if(events.length) {
                var s;
                for(var i=0;i<events.length;i++) {

                    var event = events[i];
                    console.dir(event);
                    s += "<tr class='eventList'>";
                    s += "<td>" + event.id + "</td>";
                    s += "<td>" + event.name + "</td>";
                    s += "<td>" + event.description + "</td>";
                    s += "</tr>";
                    $('.events-table').append(s);
                }

            } else {
                $events.html("<p>Sorry, there are no events.</p>");
            }
        });

});

