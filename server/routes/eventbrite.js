var path = require('path');
var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../../_config');

router.get('/events', function (req, res) {
    var url = 'http://eventbriteapi.com/v3/users/me/owned_events/?token=' + config.eventbriteSecret;

    // var url = 'http://eventbriteapi.com/v3/users/me/?token=' + config.eventbriteSecret;

    request(url, function (error, response, body) {
        var events = [];
        var single_event = [];
        var responseJSON = JSON.parse(response.body);
        var allEventsJSON = responseJSON.events;
        for (var i=0; i < allEventsJSON.length; i++) {
            current_event = allEventsJSON[i];
          single_event = {
            id: current_event.id,
            name: current_event.name.text,
            description: current_event.description.text
          };
          events.push(single_event);
        };
        res.send(events);
      });



});

module.exports = router;
