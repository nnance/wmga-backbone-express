define(function(require) {
  'use strict';

  return {
    getBaseURL: function() {
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:3000';
      } else {
        return '';
      }
    },
    fileURL: 'https://s3-us-west-2.amazonaws.com/wmga/',
    dateFormat: 'MM/DD/YYYY',
    displayDateFormat: 'dddd, MMMM Do YYYY',
    simpleDisplayDateFormat: 'MMMM Do',
    membershipPayNow: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DNR67PXFP5DX8&invoice=2016-',
    teamPayNow: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CAN4SWN98RJGJ&invoice=',
  };
});
