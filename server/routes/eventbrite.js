var path = require('path');
var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../../_config');
var async = require('async');
var a = true;
var pages = 1;
var totalPages;
var attendees = [];
var base_url = 'http://eventbriteapi.com/v3/users/me/owned_event_attendees/?token=' + config.eventbriteSecret+"&page=";
var x = [];

// router.get('/attendees', function (err, req, res, next) {
//     if (err){
//         console.log(err)
//     }
//     async.whilst(function() {
//         console.log(pages)
//        return pages <= totalPages;
//     },
//     function(next) {
//         request(base_url+pages, function(error, response, body) {
//             body = JSON.parse(body);
//             totalPages = body.pagination.page_count;
//             //all data
//              x = x.concat(body.attendees.map(function(current_attendee){
//                 return {
//                         team: current_attendee.team,

//                         //costs > baseprice
//                         costs_base_price_display: current_attendee.costs.base_price.display,
//                         costs_base_price_currency: current_attendee.costs.base_price.currency,
//                         costs_base_price_value: current_attendee.costs.base_price.value,
//                         costs_base_price_major_value: current_attendee.costs.base_price.major_value,

//                         //costs > eventbrite fee
//                         costs_eventbrite_fee_display: current_attendee.costs.eventbrite_fee.display,
//                         costs_eventbrite_fee_currency: current_attendee.costs.eventbrite_fee.currency,
//                         costs_eventbrite_fee_value: current_attendee.costs.eventbrite_fee.value,
//                         costs_eventbrite_fee_major_value: current_attendee.costs.eventbrite_fee.major_value,

//                         //costs > gross
//                         costs_gross_display: current_attendee.costs.gross.display,
//                         costs_gross_currency: current_attendee.costs.gross.currency,
//                         costs_gross_value: current_attendee.costs.gross.value,
//                         costs_gross_major_value: current_attendee.costs.gross.major_value,

//                         //costs > payment fee
//                         costs_payment_fee_display: current_attendee.costs.payment_fee.display,
//                         costs_payment_fee_currency: current_attendee.costs.payment_fee.currency,
//                         costs_payment_fee_value: current_attendee.costs.payment_fee.value,
//                         costs_payment_fee_major_value: current_attendee.costs.payment_fee.major_value,

//                         //costs > tax
//                         costs_tax_display: current_attendee.costs.tax.display,
//                         costs_tax_currency: current_attendee.costs.tax.currency,
//                         costs_tax_value: current_attendee.costs.tax.value,
//                         costs_tax_major_value: current_attendee.costs.tax.major_value,

//                         resource_uri: current_attendee.resource_uri,
//                         id: current_attendee.id,
//                         changed: current_attendee.changed,
//                         created: current_attendee.created,
//                         quantity: current_attendee.quantity,

//                         // profile
//                         profile_first_name: current_attendee.profile.first_name,
//                         profile_last_name: current_attendee.profile.last_name,
//                         profile_email: current_attendee.profile.email,
//                         profile_name: current_attendee.profile.name,
//                         profile_addresses: current_attendee.profile.addresses,

//                         //barcodes
//                         barcodes_status: current_attendee.barcodes[0].status,
//                         barcodes_barcode: current_attendee.barcodes[0].barcode,
//                         barcodes_checkin_type: current_attendee.barcodes[0].checkin_type,
//                         barcodes_created: current_attendee.barcodes[0].created,
//                         barcodes_changed: current_attendee.barcodes[0].changed,

//                         answers: current_attendee.answers,
//                         checked_in: current_attendee.checked_in,
//                         cancelled: current_attendee.cancelled,
//                         refunded: current_attendee.refunded,
//                         affiliate: current_attendee.affiliate,
//                         status: current_attendee.status,
//                         event_id: current_attendee.event_id,
//                         order_id: current_attendee.order_id,
//                         ticket_class_id: current_attendee.ticket_class_id
//                       };
//             }));
//             pages++;
//             next(null, x);
//         });//end request
//     }, //end second function
//     function(err, attendees) {
//         if (err){
//             console.log(err)
//         }
//         res.send(attendees);
//    });
// });//end router.get


module.exports = router;
