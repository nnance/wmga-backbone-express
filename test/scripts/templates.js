this["JST"] = this["JST"] || {};

this["JST"]["client/templates/alert.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n<strong>Warning!</strong>\n<ul>\n    ';
 _.each(errors, function(item) { ;
__p += '\n    <li>' +
((__t = ( item )) == null ? '' : __t) +
'</li>\n    ';
 }); ;
__p += '\n</ul>\n';

}
return __p
};

this["JST"]["client/templates/app/contact.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <h1>Contact Information</h1>\n</div>\n<p>WMGA is affiliated with the Westwood Park Golf Course in Norman, OK. We have Thursday night and Saturday morning leagues that hold tournaments and events from March through October.</p>\n<div class="col-md-9">\n    <section id="wmga">\n        <div class="page-header">\n            <h3 id="wmga">WMGA Information</h3>\n        </div>\n        <p>You must be a member of the WMGA in order to particpate in any of the Thursday Night or Saturday League events.</p>\n        <a href="#signup" class="btn btn-primary">Membership Registration</a>\n        <hr>\n        <p><a href="mailto:rseansimpson@gmail.com">Officers: President - Sean Simpson</a> - President / Matt Pempin - Vice President / <a href="mailto:hymiep@cox.net">Jamie Parkman</a> - Treasurer</p>\n    </section>\n    <section id="tnl">\n        <div class="page-header">\n            <h3>Thursday Night League Information</h3>\n        </div>\n        <p>Thursday Night League (TNL) is a 4 or 5 man team league that plays a 9 hole format on Thursday nights.  We have over 40 teams play in this league every year.  If you are not on a team you can sign up as an alternate or build your own team.  <b>Note: </b> You must first be a registered WMGA member before you can register a team.</p>\n        <a href="https://s3-us-west-2.amazonaws.com/wmga/2015 Thursday Night Schedule 020215.pdf" class="btn btn-default">2015 Schedule</a> <a href="https://s3-us-west-2.amazonaws.com/wmga/2015 TNL RULES.pdf" class="btn btn-default">2015 Rules</a> <a href="https://s3-us-west-2.amazonaws.com/wmga/TNLRainoutPolicy.pdf" class="btn btn-default">Rain Out Policy</a>\n        <hr>\n        <p>Contacts: <a href="mailto:dcstrait@gmail.com">Chris Strait</a> &amp; <a href="mailto:jsmarley@cox.net">Jeff Marley</a></p>\n    </section>\n    <section id="saturday">\n        <div class="page-header">\n            <h3>Saturday League Information</h3>\n        </div>\n        <p>Saturday League offers one and two man tournaments held on Saturday mornings.  <b>Note: </b> You must first be a registered WMGA member before you can register for a Saturday tournament.</p>\n        <a href="https://s3-us-west-2.amazonaws.com/wmga/2014 Saturday schedule.pdf" class="btn btn-default">2014 Schedule</a>\n        <hr>\n        <p><a href="mailto:rseansimpson@gmail.com">Sean Simpson</a> &amp; <a href="mailto:hymiep@cox.net">Jamie Parkman</a></p>\n    </section>\n    <section id="contacts">\n        <div class="page-header">\n            <h3>Web Master</h3>\n        </div>\n        <p>If you have any questions about the site or problems signing up please contact me.</p>\n        <hr>\n        <p><a href="mailto:nance.nick@gmail.com">Nick Nance</a></p>\n    </section>\n';

}
return __p
};

this["JST"]["client/templates/app/footer.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<hr>\n<footer>\n    <p>&copy; Westwood Men&#39s Golf Association 2012-2015</p>\n</footer>\n';

}
return __p
};

this["JST"]["client/templates/app/header.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="navbar-header">\n    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n    </button>\n    <a class="navbar-brand" href="#">WMGA <span class="glyphicon glyphicon-flag"></span></a>\n</div>\n\n<div class="navbar-collapse collapse">\n    <ul class="nav navbar-nav">\n        <li><a href="#events">Calendar</a></li>\n        <li><a href="#results">Results</a></li>\n        <li id="nav-news"><a href="#news">News</a></li>\n        <li id="nav-users"><a href="#users">Members</a></li>\n        <li id="nav-teams"><a href="#teams">Teams</a></li>\n        <li><a href="#contact">Contact</a></li>\n    </ul>\n    <ul class="nav navbar-nav navbar-right" id="signed-out">\n        <li>\n            <a href="#signin">Sign In</a>\n        </li>\n    </ul>\n    <ul class="nav navbar-nav navbar-right" id="signed-in">\n        <li class="dropdown">\n            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-user"></span> ' +
((__t = ( name )) == null ? '' : __t) +
' <b class="caret"></b></a>\n            <ul class="dropdown-menu">\n                <li><a href="#membership">Membership</a></li>\n                <li><a href="#signout">Sign Out</a></li>\n            </ul>\n        </li>\n    </ul>\n\n</div><!--/.navbar-collapse -->\n';

}
return __p
};

this["JST"]["client/templates/app/signin.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="form-signin" role="form">\n    <h2 class="form-signin-heading">Please sign in</h2>\n    <div id="alert"></div>\n    <input type="email" class="form-control" placeholder="Email address" name="email" autofocus>\n    <input type="password" class="form-control" placeholder="Password" name="password">\n    <label class="checkbox">\n        <input type="checkbox" value="true" name="rememberMe"> Remember me\n    </label>\n    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>\n    <p>\n        <a id="forgotPassword" href="#">Forgot password</a>\n    </p>\n</form>\n';

}
return __p
};

this["JST"]["client/templates/delete.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n        <h4 class="modal-title">Confirm Delete</h4>\n      </div>\n      <div class="modal-body">\n        <p>Are you sure you want to delete the <b>' +
((__t = ( getAttr(modelAttr) )) == null ? '' : __t) +
'</b> ' +
((__t = ( modelTypeName )) == null ? '' : __t) +
'?</p>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n        <button type="button" class="btn btn-primary" id="delete-confirm">Confirm</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n';

}
return __p
};

this["JST"]["client/templates/events/addbutton.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#events/create" class="btn btn-primary pull-right"><span class="glyphicon glyphicon-plus"></span> Event</a>\n';

}
return __p
};

this["JST"]["client/templates/events/form.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <h1>' +
((__t = ( isNew ? 'Add new' : 'Edit' )) == null ? '' : __t) +
' event</h1>\n</div>\n<form method="POST" role="form">\n    <div id="alert"></div>\n    <fieldset>\n        <div class="form-group">\n            <label>Event Title:</label>\n            <input class="form-control" type="text" name="title" value="' +
((__t = ( title )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>Description</label>\n            <textarea rows="5" class="form-control" name="description">' +
((__t = ( description )) == null ? '' : __t) +
'</textarea>\n        </div>\n    </fieldset>\n    <fieldset>\n        <legend>Details</legend>\n        <div class="row">\n            <div class="col-md-4">\n                <div class="form-group">\n                    <label >Start Date</label>\n                    <div class="input-group" id="startdatepicker">\n                        <input class="form-control" type="text" name="startdate" value="' +
((__t = ( startdate )) == null ? '' : __t) +
'">\n                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n    <fieldset>\n        <legend>Attach File</legend>\n        <div class="form-group">\n            <label for="attachedfile">File Name</label>\n            <input type="file" id="attachedfile">\n        </div>\n    </fieldset>\n    <div class="form-actions">\n        <a id="save-button" class="btn btn-primary">Save changes</a>\n        <a id="cancel-button" class="btn btn-default">Cancel</a>\n    </div>\n</form>\n<div class="row status-bar">\n    <div class="span9">\n        <div class="alert alert-success" style="display: none">\n            <b>Success!</b> Record saved successfully\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/events/index.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="index"></div>\n';

}
return __p
};

this["JST"]["client/templates/events/list.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <h1>Event Calendar</h1>\n  <p>The event calendar is a list of WMGA tournaments and events that are taking place this season.  This calendar also includes all Westwood Golf Course events as well.</p>\n</div>\n\n<div class="btn-group" data-toggle="buttons" id="filter">\n    <label class="btn btn-default active" id="all">\n        <input type="radio"> All\n    </label>\n    <label class="btn btn-default" id="upcoming">\n        <input type="radio"> Upcoming\n    </label>\n    <label class="btn btn-default" id="past">\n        <input type="radio"> Past\n    </label>\n</div>\n<br><br>\n<div class="eventList">\n</div>\n';

}
return __p
};

this["JST"]["client/templates/events/listitem.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--<a href="#events/read/' +
((__t = ( _id )) == null ? '' : __t) +
'" class="listItem panel">-->\n<div class="panel panel-default listItem">\n\t<div class="panel-heading">\n\t\t<h1 class="panel-title">\n\t\t\t' +
((__t = ( title )) == null ? '' : __t) +
'\n\t\t</h1>\n\t</div>\n\t<div class="panel-body">\n\t\t<p class="highlightedInfo">' +
((__t = ( startdate )) == null ? '' : __t) +
'</p>\n    <p>' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n\t</div>\n\t<div class="panel-footer">\n\t\t<a href="#events/read/' +
((__t = ( _id )) == null ? '' : __t) +
'">View Details <span class="glyphicon glyphicon-arrow-right"></span></a>\n\t</div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/events/review.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\n</div>\n<div class="btn-group pull-right" id="action-menu">\n  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">\n    Action <span class="caret"></span>\n  </button>\n  <ul class="dropdown-menu" role="menu">\n    <li><a href="#events/update/' +
((__t = ( _id )) == null ? '' : __t) +
'"> Edit Event</a></li>\n    <li><a id="delete-btn"> Delete Event</a></li>\n  </ul>\n</div>\n<div class="item-view">\n\t<h4>' +
((__t = ( startdate )) == null ? '' : __t) +
'</h4>\n\t<p>' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n\t<p class="' +
((__t = ( attachedfile ? '' : 'hidden')) == null ? '' : __t) +
'">Attached file: <a href="' +
((__t = ( fileUrl )) == null ? '' : __t) +
'">' +
((__t = ( attachedfile )) == null ? '' : __t) +
'</a></p>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/home/eventsitem.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="panel panel-default listItem">\n\t<div class="panel-heading">\n\t\t<h1 class="panel-title">\n\t\t\t' +
((__t = ( title )) == null ? '' : __t) +
'\n\t\t</h1>\n\t</div>\n\t<div class="panel-body">\n\t\t<p>' +
((__t = ( startdate )) == null ? '' : __t) +
'</p>\n\t\t<p>' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n\t</div>\n\t<div class="panel-footer">\n\t\t<a href="#events/read/' +
((__t = ( _id )) == null ? '' : __t) +
'">View Details <span class="glyphicon glyphicon-arrow-right"></span></a>\n\t</div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/home/index.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="jumbotron-index masthead">\n  <div id="jumbotron">\n      <h2>Westwood Men&#39s Golf Association</h2>\n      <p class="hidden-phone">Welcome to the Westwood Men&#39s Golf Association.  WMGA is affiliated with the Westwood Park Golf Course in Norman, OK. We have Thursday night and Saturday morning leagues that hold tournaments and events from March through October. If you live in Norman or the surrounding area come out and join the association and participate in some events.</p>\n      <a href="#signup" class="btn btn-primary btn-lg">Sign Up Today</a>\n  </div>\n</div>\n\n<div class="page-header">\n  <h1>Recent News</h1>\n</div>\n<div id="news-item" class="itemList"></div>\n<p class="clearfix"><a class="btn btn-default pull-right" href="#news" role="button">View All News</a></p>\n\n<div class="page-header">\n  <h1>Upcoming Events</h1>\n</div>\n<div id="events-item"></div>\n<p class="clearfix"><a class="btn btn-default pull-right" href="#events" role="button">View All Events</a></p>\n\n<div class="page-header">\n  <h1>Contact Us</h1>\n</div>\n<div class="well">View our contact page for league schedules, rules and more information.</div>\n<p class="clearfix"><a class="btn btn-default pull-right" href="#contact" role="button">View Contact Page</a></p>\n\n';

}
return __p
};

this["JST"]["client/templates/home/newsitem.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="panel panel-default listItem">\n\t<div class="panel-heading">\n\t\t<h1 class="panel-title">\n\t\t\t' +
((__t = ( title )) == null ? '' : __t) +
'\n\t\t</h1>\n\t</div>\n\t<div class="panel-body">\n\t\t<p>' +
((__t = ( text )) == null ? '' : __t) +
'</p>\n\t</div>\n\t<div class="panel-footer">\n\t\t<a href="#news/read/' +
((__t = ( _id )) == null ? '' : __t) +
'">View Details <span class="glyphicon glyphicon-arrow-right"></span></a>\n\t</div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/news/addbutton.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += ' <a href="#news/create" class="btn btn-primary pull-right"><span class="glyphicon glyphicon-plus"></span> Article</a>\n';

}
return __p
};

this["JST"]["client/templates/news/form.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <h1>' +
((__t = ( isNew ? 'Add new' : 'Edit' )) == null ? '' : __t) +
' article</h1>\n</div>\n<form method="POST" role="form">\n    <div id="alert"></div>\n    <fieldset>\n        <div class="form-group">\n            <label>Article Heading:</label>\n            <input class="form-control" type="text" name="title" value="' +
((__t = ( title )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>Description</label>\n            <textarea rows="5" class="form-control" name="text">' +
((__t = ( text )) == null ? '' : __t) +
'</textarea>\n        </div>\n        <div class="row">\n            <div class="col-md-3">\n                <div class="form-group">\n                    <label >Article Date</label>\n                    <div class="input-group" id="itemdatepicker">\n                        <input class="form-control" type="text" name="itemdate" value="' +
((__t = ( itemdate )) == null ? '' : __t) +
'">\n                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n    <fieldset>\n        <legend>Attach File</legend>\n        <div class="form-group">\n            <label for="attachedfile">File Name</label>\n            <input type="file" id="attachedfile">\n        </div>\n    </fieldset>\n    <div class="form-actions">\n        <a id="save-button" class="btn btn-primary">Save changes</a>\n        <a id="cancel-button" class="btn btn-default">Cancel</a>\n    </div>\n</form>\n<div class="row status-bar">\n    <div class="span9">\n        <div class="alert alert-success" style="display: none">\n            <b>Success!</b> Record saved successfully\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/news/index.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="index"></div>\n';

}
return __p
};

this["JST"]["client/templates/news/list.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <h1>News Articles</h1>\n  <p>This is a complete list of the latest news articles at WMGA. You can also find current and historical tournament results.</p>\n</div>\n\n<div class="btn-group" data-toggle="buttons" id="filter">\n    <label class="btn btn-default active" id="all">\n        <input type="radio"> All\n    </label>\n    <label class="btn btn-default" id="recent">\n        <input type="radio"> Recent\n    </label>\n    <label class="btn btn-default" id ="past">\n        <input type="radio"> Past\n    </label>\n</div>\n<br><br>\n<div class="eventList">\n</div>\n';

}
return __p
};

this["JST"]["client/templates/news/listitem.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="panel panel-default listItem">\n\t<div class="panel-heading">\n\t\t<h1 class="panel-title">\n\t\t\t' +
((__t = ( title )) == null ? '' : __t) +
'\n\t\t</h1>\n\t</div>\n\t<div class="panel-body">\n\t\t<p class="highlightedInfo">' +
((__t = ( itemdate )) == null ? '' : __t) +
'</p>\n    <p>' +
((__t = ( text )) == null ? '' : __t) +
'</p>\n\t</div>\n\t<div class="panel-footer">\n\t\t<a href="#news/read/' +
((__t = ( _id )) == null ? '' : __t) +
'">View Details <span class="glyphicon glyphicon-arrow-right"></span></a>\n\t</div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/news/review.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\n</div>\n<div class="btn-group pull-right" id="action-menu">\n  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">\n    Action <span class="caret"></span>\n  </button>\n  <ul class="dropdown-menu" role="menu">\n    <li><a href="#news/update/' +
((__t = ( _id )) == null ? '' : __t) +
'"> Edit Article</a></li>\n    <li><a id="delete-btn"> Delete Article</a></li>\n  </ul>\n</div>\n<div class="item-view">\n\t<h4>' +
((__t = ( itemdate )) == null ? '' : __t) +
'</h4>\n\t<p>' +
((__t = ( text )) == null ? '' : __t) +
'</p>\n\t<p class="' +
((__t = ( attachedfile ? '' : 'hidden')) == null ? '' : __t) +
'">Attached file: <a href="' +
((__t = ( fileUrl )) == null ? '' : __t) +
'">' +
((__t = ( attachedfile )) == null ? '' : __t) +
'</a></p>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/results/addbutton.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#results/create" class="btn btn-primary pull-right"><span class="glyphicon glyphicon-plus"></span> Results</a>\n';

}
return __p
};

this["JST"]["client/templates/results/editbuttons.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#results/update/' +
((__t = ( model.id )) == null ? '' : __t) +
'" class="btn btn-default"> Edit Results</a>\n<a id="delete-btn" class="btn btn-default"> Delete Results</a>\n';

}
return __p
};

this["JST"]["client/templates/results/form.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <h1>' +
((__t = ( isNew ? 'Add new' : 'Edit' )) == null ? '' : __t) +
' results</h1>\n</div>\n<form method="POST" role="form">\n    <div id="alert"></div>\n    <fieldset>\n        <div class="form-group">\n            <label>Heading:</label>\n            <input class="form-control" type="text" name="title" value="' +
((__t = ( title )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>Description</label>\n            <textarea rows="5" class="form-control" name="text">' +
((__t = ( text )) == null ? '' : __t) +
'</textarea>\n        </div>\n        <div class="row">\n            <div class="col-md-3">\n                <div class="form-group">\n                    <label >Tournament Date</label>\n                    <div class="input-group" id="itemdatepicker">\n                        <input class="form-control" type="text" name="itemdate" value="' +
((__t = ( itemdate )) == null ? '' : __t) +
'">\n                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n    <fieldset>\n        <legend>Attach File</legend>\n        <div class="form-group">\n            <label for="attachedfile">File Name</label>\n            <input type="file" id="attachedfile">\n        </div>\n    </fieldset>\n    <div class="form-actions">\n        <a id="save-button" class="btn btn-primary">Save changes</a>\n        <a id="cancel-button" class="btn btn-default">Cancel</a>\n    </div>\n</form>\n<div class="row status-bar">\n    <div class="span9">\n        <div class="alert alert-success" style="display: none">\n            <b>Success!</b> Record saved successfully\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/results/index.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="index"></div>\n';

}
return __p
};

this["JST"]["client/templates/results/list.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <h1>Tournament Results</h1>\n  <p>This is a where you can also find current and historical tournament results.</p>\n</div>\n\n<div class="btn-group" data-toggle="buttons" id="filter">\n    <label class="btn btn-default active" id="all">\n        <input type="radio"> All\n    </label>\n    <label class="btn btn-default" id="recent">\n        <input type="radio"> Recent\n    </label>\n    <label class="btn btn-default" id ="past">\n        <input type="radio"> Past\n    </label>\n</div>\n<br><br>\n<div class="eventList">\n</div>\n';

}
return __p
};

this["JST"]["client/templates/results/listitem.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="panel panel-default listItem">\n\t<div class="panel-heading">\n\t\t<h1 class="panel-title">\n\t\t\t' +
((__t = ( title )) == null ? '' : __t) +
'\n\t\t</h1>\n\t</div>\n\t<div class="panel-body">\n\t\t<p class="highlightedInfo">' +
((__t = ( itemdate )) == null ? '' : __t) +
'</p>\n    <p>' +
((__t = ( text )) == null ? '' : __t) +
'</p>\n\t</div>\n\t<div class="panel-footer">\n\t\t<a href="#results/read/' +
((__t = ( _id )) == null ? '' : __t) +
'">View Details <span class="glyphicon glyphicon-arrow-right"></span></a>\n\t</div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/results/review.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <h1>' +
((__t = ( title )) == null ? '' : __t) +
'</h1>\n</div>\n<div class="btn-group pull-right" id="action-menu">\n  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">\n    Action <span class="caret"></span>\n  </button>\n  <ul class="dropdown-menu" role="menu">\n    <li><a href="#results/update/' +
((__t = ( _id )) == null ? '' : __t) +
'"> Edit Results</a></li>\n    <li><a id="delete-btn"> Delete Results</a></li>\n  </ul>\n</div>\n<div class="item-view">\n\t<h4>' +
((__t = ( itemdate )) == null ? '' : __t) +
'</h4>\n\t<p>' +
((__t = ( text )) == null ? '' : __t) +
'</p>\n\t<p class="' +
((__t = ( attachedfile ? '' : 'hidden')) == null ? '' : __t) +
'">Attached file: <a href="' +
((__t = ( fileUrl )) == null ? '' : __t) +
'">' +
((__t = ( attachedfile )) == null ? '' : __t) +
'</a></p>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/signup/createstep.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>New Account</h2>\n<p>Please complete the information below to create your new account.</p>\n<form role="form">\n    <div id="alert"/>\n    <div class="form-group">\n        <label>First Name</label>\n        <input type="text" class="form-control" name="firstname" value="' +
((__t = ( model.get('firstname'))) == null ? '' : __t) +
'" autofocus>\n    </div>\n    <div class="form-group">\n        <label>Last Name</label>\n        <input type="text" class="form-control" name="lastname" value="' +
((__t = ( model.get('lastname'))) == null ? '' : __t) +
'">\n    </div>\n    <div class="form-group">\n        <label>Email address</label>\n        <input type="email" class="form-control" name="email" value="' +
((__t = ( model.get('email'))) == null ? '' : __t) +
'">\n    </div>\n    <div class="form-group">\n        <label>Password</label>\n        <input type="password" class="form-control" name="password">\n    </div>\n</form>\n<p>\n    <a class="btn btn-primary" role="button">Next &raquo;</a>\n    <a class="btn btn-default hidden" role="button">Use existing account</a>\n</p>\n';

}
return __p
};

this["JST"]["client/templates/signup/emailstep.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Existing Account</h2>\n<p>Please complete the information below to create your new account.</p>\n<form role="form">\n    <div id="alert"/>\n    <div class="form-group">\n        <label>Email address</label>\n        <input type="email" class="form-control" name="email" value="' +
((__t = ( model.get('email'))) == null ? '' : __t) +
'" autofocus>\n    </div>\n</form>\n<p>\n    <a class="btn btn-primary" role="button">Next &raquo;</a>\n    <a class="btn btn-default hidden" role="button">Create new account</a>\n</p>\n';

}
return __p
};

this["JST"]["client/templates/signup/index.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n    <div class="col-xs-1 col-sm-2">\n    </div>\n    <div class="col-xs-10 col-sm-8 well">\n        <div class="row">\n            <div class="col-sm-2">\n            </div>\n            <div class="col-sm-8" id="stepContent">\n            </div>\n            <div class="col-sm-2">\n            </div>\n        </div>\n    </div>\n    <div class="col-xs-1 col-sm-2">\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/signup/passwordstep.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>We found it!</h2>\n<p>Please enter your password to sign into the site and complete the sign up.</p>\n<form role="form">\n    <div id="alert"/>\n    <div class="form-group">\n        <label>Password</label>\n        <input type="password" class="form-control" name="password" placeholder="Password" autofocus>\n    </div>\n</form>\n<p>\n    <a class="btn btn-primary" role="button">Next &raquo;</a>\n    <a id="forgotPassword" href="#">Forgot password</a>\n</p>\n';

}
return __p
};

this["JST"]["client/templates/signup/paynowcreatedstep.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Account created!</h2>\n<p>Your account has been created.  To become a WMGA member you must pay your anual dues of $25 via PayPal.  You can do this now or wait and pay later.  If you choose to pay later you will find the dues payment button on the membership page.</p>\n<p class="lead">Pay your dues now?</p>\n<p>\n    <a class="btn btn-primary" role="button">Pay Now &raquo;</a>\n    <a class="btn btn-default" role="button">Not now</a>\n</p>\n';

}
return __p
};

this["JST"]["client/templates/signup/paynowstep.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Signed in!</h2>\n<p>You are now signed in.  To keep your WMGA membership active you must pay your anual dues of $25 via PayPal.  You can do this now or wait and pay later.  If you choose to pay later you will find the dues payment button on the membership page.</p>\n<p class="lead">Pay your dues now?</p>\n<p>\n    <a class="btn btn-primary" role="button">Pay Now &raquo;</a>\n    <a class="btn btn-default" role="button">Not now</a>\n</p>\n';

}
return __p
};

this["JST"]["client/templates/signup/typestep.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3>Welcome</h3>\n<p>The Westwood Men\'s Golf Association would like to welcome you to our golf league.  Please be sure to select the appropriate option below.</p>\n<p class="lead">Are you an existing member?</p>\n<form role="form">\n    <div class="radio">\n        <label>\n            <input type="radio" name="existingMember" value="yes" checked> Yes. I want to use my existing account\n        </label>\n    </div>\n    <div class="radio">\n        <label>\n            <input type="radio" name="existingMember" value="no"> No. I would like to create a new account\n        </label>\n    </div>\n</form>\n<p>\n    <a class="btn btn-primary" role="button">Next &raquo;</a>\n</p>\n';

}
return __p
};

this["JST"]["client/templates/teams/addbutton.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span class="input-group-btn">\n    <a href="#teams/create" class="btn btn-primary"><span class="glyphicon glyphicon-plus"></span> Team</a>\n</span>\n';

}
return __p
};

this["JST"]["client/templates/teams/form.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <h1>' +
((__t = ( model.isNew() ? 'Add new' : 'Edit' )) == null ? '' : __t) +
' team</h1>\n</div>\n<form method="POST" role="form">\n    <div id="alert"></div>\n    <fieldset id="required">\n        <legend>Required Information</legend>\n        <div class="form-group">\n            <label>Team Name</label>\n            <input class="form-control" type="text" name="name" value="' +
((__t = ( model.get('name') )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>Requested Tee Time</label>\n            <input class="form-control" type="text" name="teetime" value="' +
((__t = ( model.get('teetime') )) == null ? '' : __t) +
'"/>\n        </div>\n    </fiedlset>\n    <fieldset id="additional">\n        <legend>Additional Information</legend>\n        <div class="form-group">\n            <label>Comments</label>\n            <textarea class="form-control" rows="5" name="comments">' +
((__t = ( model.get('comments'))) == null ? '' : __t) +
'</textarea>\n        </div>\n    </fieldset>\n    <fieldset id="additional">\n        <legend>Team Members</legend>\n        <div class="form-group">\n            <label>Team Members</label>\n            <select class="form-control select2 select2-multiple" name="members" multiple></select>\n        </div>\n    </fieldset>\n    <div class="form-actions">\n        <a id="save-button" class="btn btn-primary">Save changes</a>\n        <a id="cancel-button" class="btn btn-default">Cancel</a>\n    </div>\n</form>\n<div class="row status-bar">\n    <div class="span9">\n        <div class="alert alert-success" style="display: none">\n            <b>Success!</b> Record saved successfully\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/teams/index.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="index"></div>\n';

}
return __p
};

this["JST"]["client/templates/teams/list.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <h1>Team</h1>\n  <p>The team list is a complete list of all the Thursday night teams.  There is an annual membership cost required to register a team.  You can register your team from the <a href="#membership">membership</a> page.The team manager is responsible for signing up a team and managing the team roster.</p>\n</div>\n<div class="input-group">\n    <input type="text" class="form-control" placeholder="Search"/>\n</div>\n<br/>\n<div class="row" id="table">\n</div>\n';

}
return __p
};

this["JST"]["client/templates/teams/listitem.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="panel panel-default listItem">\n\t<div class="panel-heading">\n\t\t<h1 class="panel-title">' +
((__t = ( name )) == null ? '' : __t) +
'</h1>\n\t</div>\n\t<div class="panel-body">\n    <div class="row">\n      <div class="col-xs-2"><strong>Tee: </strong></div>\n      <div class="col-xs-4">' +
((__t = ( teetime )) == null ? '' : __t) +
'</div>\n      <div class="col-xs-2"><strong>Paid: </strong></div>\n      <div class="col-xs-4"><span class="glyphicon glyphicon-ok ' +
((__t = ( paid ? '' : 'hidden' )) == null ? '' : __t) +
'"></span></div>\n    </div>\n    <div class="row">\n      <div class="col-xs-2"><strong>Date: </strong></div>\n      <div class="col-xs-10">' +
((__t = ( createdate )) == null ? '' : __t) +
'</div>\n    </div>\n    <div class="row">\n      <div class="col-xs-2"><strong>Notes: </strong></div>\n      <div class="col-xs-10">' +
((__t = ( comments )) == null ? '' : __t) +
'</div>\n    </div>\n    <div class="row">\n      <div class="col-xs-12">' +
((__t = ( members )) == null ? '' : __t) +
'</div>\n    </div>\n\t</div>\n\t<div class="panel-footer">\n\t\t<a href="#teams/read/' +
((__t = ( _id )) == null ? '' : __t) +
'">View Details <span class="glyphicon glyphicon-arrow-right"></span></a>\n\t</div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/teams/review.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n    <h1>' +
((__t = ( model.get('name') )) == null ? '' : __t) +
'</h1>\n</div>\n<div id="info">\n  <div class="row">\n    <div class="col-xs-3"><strong>Captain:</strong></div>\n    <div class="col-xs-7">' +
((__t = ( getCaptainName())) == null ? '' : __t) +
'</div>\n    <div class="col-xs-2">\n      <div class="btn-group pull-right" id="action-menu">\n        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">\n          Action <span class="caret"></span>\n        </button>\n        <ul class="dropdown-menu" role="menu">\n          <li><a href="#teams/update/' +
((__t = ( model.id )) == null ? '' : __t) +
'"> Edit Team</a></li>\n          <li><a id="delete-btn"> Delete Team</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col-xs-3"><strong>Tee Time:</strong></div>\n    <div class="col-xs-9">' +
((__t = ( model.get('teetime') )) == null ? '' : __t) +
'</div>\n  </div>\n  <div class="row">\n    <div class="col-xs-3"><strong>Comments:</strong></div>\n    <div class="col-xs-9">' +
((__t = ( model.get('comments') )) == null ? '' : __t) +
'</div>\n  </div>\n</div>\n<div id="team">\n    <div class="page-header">\n        <h3>Team Dues</h3>\n    </div>\n    <p>There is an annual membership cost required to register a team.  The team manager is responsible for signing up a team and managing the team roster. The team registration fee $300 per season.</p>\n    <p>Team Status: <b>' +
((__t = ( model.get('paid') ? 'Paid' : '$300 Payment Due' )) == null ? '' : __t) +
'</b></p>\n    <div id="team-unpaid">\n        <a href="' +
((__t = ( getPayNow() )) == null ? '' : __t) +
'"><img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_paynowCC_LG.gif"></a>\n    </div>\n    <hr>\n    <h4>Team Members</h4>\n    <hr>\n    <div id="team-table">\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/users/addbutton.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span class="input-group-btn" id="action-menu">\n  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">\n    Action <span class="caret"></span>\n  </button>\n  <ul class="dropdown-menu dropdown-menu-right" role="menu">\n    <li><a href="#users/create">Add Member</a></li>\n    <li><a href="#users/email">Send Email</a></li>\n  </ul>\n</span>\n';

}
return __p
};

this["JST"]["client/templates/users/email.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <h1>Email Members</h1>\n  <p>Use this form to send an email to all the members.</p>\n</div>\n<form method="POST" role="form">\n    <div id="alert"></div>\n    <fieldset>\n        <div class="form-group">\n            <label>Subject</label>\n            <input class="form-control" type="text" name="subject" id="subject"/>\n        </div>\n        <div class="form-group">\n            <label>Email Body</label>\n            <textarea class="form-control" rows="10" name="body"></textarea>\n        </div>\n    </fieldset>\n    <div class="form-actions">\n        <a id="save-button" class="btn btn-primary">Send &raquo;</a>\n        <a id="cancel-button" class="btn btn-default">Cancel</a>\n    </div>\n</form>\n';

}
return __p
};

this["JST"]["client/templates/users/form.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <h1>' +
((__t = ( isNew ? 'Add new' : 'Edit' )) == null ? '' : __t) +
' member</h1>\n</div>\n<form method="POST" role="form">\n    <div id="alert"></div>\n    <fieldset id="required">\n        <legend>Required Information</legend>\n        <div class="form-group">\n            <label>First Name</label>\n            <input class="form-control" type="text" name="firstname" value="' +
((__t = ( firstname )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>Last Name</label>\n            <input class="form-control" type="text" name="lastname" value="' +
((__t = ( lastname )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>Email</label>\n            <input class="form-control" type="text" name="email" value="' +
((__t = ( email )) == null ? '' : __t) +
'"/>\n        </div>\n    </fiedlset>\n    <fieldset id="additional">\n        <legend>Additional Information</legend>\n        <div class="form-group">\n            <label>Street Address</label>\n            <input class="form-control" type="text" name="address" value="' +
((__t = ( address )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>City, State Zip</label>\n            <input class="form-control" type="text" name="address2" value="' +
((__t = ( address2 )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>Phone</label>\n            <input class="form-control" type="text" name="phone" value="' +
((__t = ( phone )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>Alt Phone</label>\n            <input class="form-control" type="text" name="altphone" value="' +
((__t = ( altphone )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="row">\n            <div class="col-md-3">\n                <div class="form-group">\n                    <label >Birth Date</label>\n                    <div class="input-group" id="birthdatepicker">\n                        <input class="form-control" type="text" name="birthdate" value="' +
((__t = ( birthdate )) == null ? '' : __t) +
'">\n                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n    <fieldset>\n        <legend>Profile Picture</legend>\n        <div class="form-group">\n            <label for="attachedfile">File Name</label>\n            <input type="file" id="picture">\n        </div>\n    </fieldset>\n    <div class="form-actions">\n        <a id="save-button" class="btn btn-primary">Save changes</a>\n        <a id="cancel-button" class="btn btn-default">Cancel</a>\n    </div>\n</form>\n<div class="row status-bar">\n    <div class="span9">\n        <div class="alert alert-success" style="display: none">\n            <b>Success!</b> Record saved successfully\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/users/index.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="index"></div>\n';

}
return __p
};

this["JST"]["client/templates/users/list.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="page-header">\n  <h1>Members</h1>\n  <p>The member list is a complete list of all registered WMGA members. This is a great way to keep in touch with other members or get in contact with them for tournaments and events.</p>\n</div>\n<div class="input-group">\n    <input type="text" class="form-control" placeholder="Search"/>\n</div>\n<br/>\n<div id="table">\n</div>\n';

}
return __p
};

this["JST"]["client/templates/users/listitem.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-xs-6 col-sm-4"><b><a href="#users/read/' +
((__t = ( _id )) == null ? '' : __t) +
'">' +
((__t = ( fullName )) == null ? '' : __t) +
'</a></b></div>\n<div class="col-xs-6 col-sm-4">' +
((__t = ( phone )) == null ? '' : __t) +
'</div>\n<div class="col-xs-12 col-sm-4">' +
((__t = ( email )) == null ? '' : __t) +
'</div>\n';

}
return __p
};

this["JST"]["client/templates/users/review.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="info">\n    <div class="page-header">\n        <h1>' +
((__t = ( firstname )) == null ? '' : __t) +
' ' +
((__t = ( lastname )) == null ? '' : __t) +
'</h1>\n    </div>\n    <div class="btn-group pull-right" id="action-menu">\n      <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">\n        Action <span class="caret"></span>\n      </button>\n      <ul class="dropdown-menu" role="menu">\n        <li><a href="#users/update/' +
((__t = ( _id )) == null ? '' : __t) +
'"> Edit Member</a><li>\n        <li><a id="delete-btn"> Delete Member</a></li>\n      </ul>\n    </div>\n    <p>\n        ' +
((__t = ( address )) == null ? '' : __t) +
'<br>\n        ' +
((__t = ( address2 )) == null ? '' : __t) +
'\n    </p>\n    <abbr title="Phone">P:</abbr> ' +
((__t = ( phone )) == null ? '' : __t) +
'<br/>\n    <p>Email: <a href="mailto:' +
((__t = ( email )) == null ? '' : __t) +
'">' +
((__t = ( email )) == null ? '' : __t) +
'</a></p>\n    <div class="checkbox">\n      <label>\n        <input type="checkbox" id="mark-paid" ' +
((__t = ( paid ? 'checked' : '' )) == null ? '' : __t) +
'> Mark Paid\n      </label>\n    </div>\n    <div class="checkbox">\n      <label>\n        <input type="checkbox" id="admin" ' +
((__t = ( admin ? 'checked' : '' )) == null ? '' : __t) +
'> Make Administrator\n      </label>\n    </div>\n    <div class="checkbox">\n      <label>\n        <input type="checkbox" id="treasure" ' +
((__t = ( treasure ? 'checked' : '' )) == null ? '' : __t) +
'> Make Treasure\n      </label>\n    </div>\n</div>\n<div id="dues">\n    <div class="page-header">\n        <h3>Annual Dues</h3>\n    </div>\n    <p>There is an annual membership cost required to join the association.  It is also important to understand that you must be a member of the WMGA in order to participate in any WMGA tournament or event.  Use the pay now button below to be able to participate in WMGA events this year. The annual membership fee $25.</p>\n    <p>Membership Status: <b>' +
((__t = ( paid ? 'Paid' : '$25 Payment Due' )) == null ? '' : __t) +
'</b></p>\n    <div id="member-unpaid">\n        <a href="' +
((__t = ( payNow )) == null ? '' : __t) +
'">\n            <img src="https://www.sandbox.paypal.com/en_US/i/btn/btn_paynowCC_LG.gif">\n        </a><br/>\n        <br/>\n    </div>\n    <p id="member-unpaid"><b>Note:</b> If you have paid using PayPal it can take up to 10 minutes before your payment is reflected on our site.  You will need to refresh this page to see your current status.</p>\n    <p id="member-unpaid">Do not pay more than once.  If your payment status isn\'t updated within 24 hours please contact the <a href="#contact">Treasurer.</a></p>\n</div>\n<div id="team">\n    <div class="page-header">\n        <h3>Thursday Night Team</h3>\n    </div>\n    <p>There is an annual membership cost required to register a team.  The team manager is responsible for signing up a team and managing the team roster. The team registration fee $300 per season.</p>\n    <a class="btn btn-primary" id="team-btn">Team Registration</a>\n    <a class="btn btn-primary" id="team-btn-edit">Manage Team</a>\n</div>\n';

}
return __p
};