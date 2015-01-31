/**
 * paypal ipn
 */

'use strict';

var PayPalIPN = require('../controllers/paypalipn');

var routes = function(app) {
  app.get('/paypal/cancel', PayPalIPN.cancelTakePayment);
  app.get('/paypal/success', PayPalIPN.successfulTakePayment);
  app.post('/paypal/ipn', PayPalIPN.processIPN);
};

module.exports = routes;
