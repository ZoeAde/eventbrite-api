var path = require('path');
var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../../_config');


//show all company Events
router.get('/events', function (req, res) {
    var url = 'http://eventbriteapi.com/v3/users/me/owned_events/?token=' + config.eventbriteSecret;

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

//show all company attendees
router.get('/attendees', function (req, res) {
    var url = 'http://eventbriteapi.com/v3/users/me/owned_event_attendees/?token=' + config.eventbriteSecret;

    request(url, function (error, response, body) {
        var attendees = [];
        var single_attendee = [];
        var responseJSON = JSON.parse(response.body);
        var allAttendeesJSON = responseJSON.attendees;
        for (var i=0; i < allAttendeesJSON.length; i++) {
            current_attendee = allAttendeesJSON[i];
          single_attendee = {
            id: current_attendee.id,
            name: current_attendee.profile.name,
            email: current_attendee.profile.email
          };
          attendees.push(single_attendee);
        };
        res.send(attendees);
      });
});

module.exports = router;
