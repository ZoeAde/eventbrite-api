var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Attendee = new Schema({
  // page_number: Number,
  // position_number: Number,
  team: String,
  costs_base_price_display: String,
  costs_base_price_currency: String,
  costs_base_price_value: String,
  costs_base_price_major_value: String,
  costs_eventbrite_fee_display: String,
  costs_eventbrite_fee_currency: String,
  costs_eventbrite_fee_value: String,
  costs_eventbrite_fee_major_value: String,
  costs_gross_display: String,
  costs_gross_currency: String,
  costs_gross_value: String,
  costs_gross_major_value: String,
  costs_payment_fee_display: String,
  costs_payment_fee_currency: String,
  costs_payment_fee_value: String,
  costs_payment_fee_major_value: String,
  costs_tax_display: String,
  costs_tax_currency: String,
  costs_tax_value: String,
  costs_tax_major_value: String,
  resource_uri: String,
  id: String,
  changed: String,
  created: String,
  quantity: String,
  profile_first_name: String,
  profile_last_name: String,
  profile_email: String,
  profile_name: String,
  profile_addresses: String,
  barcodes_status: String,
  barcodes_barcode: String,
  barcodes_checkin_type: String,
  barcodes_created: String,
  barcodes_changed: String,
  answers: String,
  checked_in: String,
  cancelled: String,
  refunded: String,
  affiliate: String,
  status: String,
  event_id: String,
  order_id: String,
  ticket_class_id: String
});

mongoose.connect(process.env.MONGO_URI);

module.exports = mongoose.model('attendees', Attendee);

