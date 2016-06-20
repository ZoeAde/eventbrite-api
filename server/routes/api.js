var express = require('express');
var router = express.Router();
var Attendee = require('../models/attendees.js');


//get all blog interviews
router.get('/attendees', function(req, res, next) {
  Attendee.find(function(err, data) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});


//post new blog interview
router.post('/attendees', function(req, res, next) {
  var newAttendee = new Attendee({
  // page_number: req.body.Number,
  // position_number: Number,
  team: req.body.team,
  costs_base_price_display: req.body.costs_base_price_display,
  costs_base_price_currency: req.body.costs_base_price_currency,
  costs_base_price_value: req.body.costs_base_price_value,
  costs_base_price_major_value: req.body.costs_base_price_major_value,
  costs_eventbrite_fee_display: req.body.costs_eventbrite_fee_display,
  costs_eventbrite_fee_currency: req.body.costs_eventbrite_fee_currency,
  costs_eventbrite_fee_value: req.body.costs_eventbrite_fee_value,
  costs_eventbrite_fee_major_value: req.body.costs_eventbrite_fee_major_value,
  costs_gross_display: req.body.costs_gross_display,
  costs_gross_currency: req.body.costs_gross_currency,
  costs_gross_value: req.body.costs_gross_value,
  costs_gross_major_value: req.body.costs_gross_major_value,
  costs_payment_fee_display: req.body.osts_payment_fee_display,
  costs_payment_fee_currency: req.body.costs_payment_fee_currency,
  costs_payment_fee_value: req.body.costs_payment_fee_value,
  costs_payment_fee_major_value: req.body.costs_payment_fee_major_value,
  costs_tax_display: req.body.costs_tax_display,
  costs_tax_currency: req.body.costs_tax_currency,
  costs_tax_value: req.body.costs_tax_value,
  costs_tax_major_value: req.body.costs_tax_major_value,
  resource_uri: req.body.resource_uri,
  id: req.body.id,
  changed: req.body.changed,
  created: req.body.created,
  quantity: req.body.quantity,
  profile_first_name: req.body.profile_first_name,
  profile_last_name: req.body.profile_last_name,
  profile_email: req.body.profile_email,
  profile_name: req.body.profile_name,
  profile_addresses: req.body.profile_addresses,
  barcodes_status: req.body.barcodes_status,
  barcodes_barcode: req.body.barcodes_barcode,
  barcodes_checkin_type: req.body.barcodes_checkin_type,
  barcodes_created: req.body.barcodes_created,
  barcodes_changed: req.body.barcodes_changed,
  answers: req.body.answers,
  checked_in: req.body.checked_in,
  cancelled: req.body.cancelled,
  refunded: req.body.refunded,
  affiliate: req.body.affiliate,
  status: req.body.status,
  event_id: req.body.event_id,
  order_id: req.body.order_id,
  ticket_class_id: req.body.ticket_class_id,
  });

  newAttendee.save(function(err, data) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});



module.exports = router;
