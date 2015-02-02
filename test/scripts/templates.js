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
__p += '<header class="jumbotron subhead">\n    <div class="contact-img-title"/>\n    <h2>Contact Information</h2>\n</header>\n\n<div class="container">\n    <div class="row">\n        <div class="col-md-3">\n            <div class="list-group" id="sidebar">\n                <a href="#wmga" class="list-group-item"><i class="icon-chevron-right"></i> WMGA Information</a>\n                <a href="#tnl" class="list-group-item"><i class="icon-chevron-right"></i> Thursday Night League</a>\n                <a href="#saturday" class="list-group-item"><i class="icon-chevron-right"></i> Saturday League</a>\n                <a href="#contacts" class="list-group-item"><i class="icon-chevron-right"></i> Other Contracts</a>\n            </div>\n        </div>\n        <div class="col-md-9">\n            <section id="wmga">\n                <div class="page-header">\n                    <h3 id="wmga">WMGA Information</h3>\n                </div>\n                <p>WMGA is affiliated with the Westwood Park Golf Course in Norman, OK.  We have Thursday night and Saturday morning leagues that hold tournaments and events from March through October.  You must be a member of the WMGA in order to particpate in any of the Thursday Night or Saturday League events.</p>\n                <a href="#signup" class="btn btn-primary">Membership Registration</a>\n                <hr>\n                <p><a href="mailto:rseansimpson@gmail.com">Officers: President - Sean Simpson</a> - President / Matt Pempin - Vice President / <a href="mailto:hymiep@cox.net">Jamie Parkman</a> - Treasurer</p>\n            </section>\n            <section id="tnl">\n                <div class="page-header">\n                    <h3>Thursday Night League Information</h3>\n                </div>\n                <p>Thursday Night League (TNL) is a 4 or 5 man team league that plays a 9 hole format on Thursday nights.  We have over 40 teams play in this league every year.  If you are not on a team you can sign up as an alternate or build your own team.  <b>Note: </b> You must first be a registered WMGA member before you can register a team.</p>\n                <a href="https://s3-us-west-2.amazonaws.com/wmga/2014 Thursday Night Schedule.pdf" class="btn btn-default">2014 Schedule</a> <a href="https://s3-us-west-2.amazonaws.com/wmga/2014 TNL RULES.pdf" class="btn btn-default">2014 Rules</a> <a href="https://s3-us-west-2.amazonaws.com/wmga/TNLRainoutPolicy.pdf" class="btn btn-default">Rain Out Policy</a>\n                <hr>\n                <p>Contacts: <a href="mailto:dcstrait@gmail.com">Chris Strait</a> &amp; <a href="mailto:jsmarley@cox.net">Jeff Marley</a></p>\n            </section>\n            <section id="saturday">\n                <div class="page-header">\n                    <h3>Saturday League Information</h3>\n                </div>\n                <p>Saturday League offers one and two man tournaments held on Saturday mornings.  <b>Note: </b> You must first be a registered WMGA member before you can register for a Saturday tournament.</p>\n                <a href="https://s3-us-west-2.amazonaws.com/wmga/2014 Saturday schedule.pdf" class="btn btn-default">2014 Schedule</a>\n                <hr>\n                <p><a href="mailto:rseansimpson@gmail.com">Sean Simpson</a> &amp; <a href="mailto:hymiep@cox.net">Jamie Parkman</a></p>\n            </section>\n            <section id="contacts">\n                <div class="page-header">\n                    <h3>Web Master</h3>\n                </div>\n                <p>If you have any questions about the site or problems signing up please contact me.</p>\n                <hr>\n                <p><a href="mailto:nance.nick@gmail.com">Nick Nance</a></p>\n            </section>\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/app/footer.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<hr>\n<footer>\n    <p>&copy; Westwood Men&#39s Golf Association 2012-2014</p>\n</footer>\n';

}
return __p
};

this["JST"]["client/templates/app/header-user-signed.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="nav navbar-nav navbar-right">\n    <li class="dropdown">\n        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-user"></span> ' +
((__t = ( model.get('name') )) == null ? '' : __t) +
' <b class="caret"></b></a>\n        <ul class="dropdown-menu">\n            <li><a href="#membership">Membership</a></li>\n            <li><a href="#signout">Sign Out</a></li>\n        </ul>\n    </li>\n</ul>\n';

}
return __p
};

this["JST"]["client/templates/app/header-user.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="nav navbar-nav navbar-right">\n    <li>\n        <a href="#signin"><span class="glyphicon glyphicon-user"></span> Sign In</a>\n    </li>\n</ul>\n';

}
return __p
};

this["JST"]["client/templates/app/header.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">\n    <div class="navbar-header">\n        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n            <span class="sr-only">Toggle navigation</span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href="#">WMGA</a>\n    </div>\n\n    <div class="navbar-collapse collapse">\n        <ul class="nav navbar-nav">\n            <li class="active"><a href="#home"><span class="glyphicon glyphicon-home"></span> Home</a></li>\n            <li class="dropdown">\n                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-calendar"></span> Events <b class="caret"></b></a>\n                <ul class="dropdown-menu">\n                    <li><a href="#events">Calendar</a></li>\n                    <li><a href="#results">Results</a></li>\n                </ul>\n            </li>\n            <li id="nav-news"><a href="#news"><span class="glyphicon glyphicon-envelope"></span> News</a></li>\n            <li id="nav-users"><a href="#users"><span class="glyphicon glyphicon-book"></span> Members</a></li>\n            <li id="nav-teams"><a href="#teams"><span class="glyphicon glyphicon-flag"></span> Teams</a></li>\n            <li><a href="#contact"><span class="glyphicon glyphicon-earphone"></span> Contact</a></li>\n        </ul>\n    </div><!--/.navbar-collapse -->\n</div>\n';

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
((__t = ( getAttr(options.modelAttr) )) == null ? '' : __t) +
'</b> ' +
((__t = ( options.modelTypeName )) == null ? '' : __t) +
'?</p>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n        <button type="button" class="btn btn-primary" id="delete-confirm">Confirm</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n';

}
return __p
};

this["JST"]["client/templates/events/addbutton.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#events/create" class="btn btn-primary"><span class="glyphicon glyphicon-plus"></span> Event</a>\n';

}
return __p
};

this["JST"]["client/templates/events/editbuttons.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#events/update/' +
((__t = ( model.id )) == null ? '' : __t) +
'" class="btn btn-default"> Edit Event</a>\n<a id="delete-btn" class="btn btn-default"> Delete Event</a>\n';

}
return __p
};

this["JST"]["client/templates/events/form.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form method="POST" role="form">\n    <h3 id="formtitle">Add new event</h3>\n    <div id="alert"></div>\n    <fieldset>\n        <legend>Summary</legend>\n        <div class="form-group">\n            <label>Event Title:</label>\n            <input class="form-control" type="text" name="title" value="' +
((__t = ( getAttr('title') )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>Description</label>\n            <textarea rows="5" class="form-control" name="description">' +
((__t = ( getAttr('description') )) == null ? '' : __t) +
'</textarea>\n        </div>\n    </fieldset>\n    <fieldset>\n        <legend>Details</legend>\n        <div class="row">\n            <div class="col-md-4">\n                <div class="form-group">\n                    <label >Start Date</label>\n                    <div class="input-group" id="startdatepicker">\n                        <input class="form-control" type="text" name="startdate" value="' +
((__t = ( getDateAttr('startdate') )) == null ? '' : __t) +
'">\n                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-md-4">\n                <div class="form-group">\n                    <label >End Date</label>\n                    <div class="input-group" id="enddatepicker">\n                        <input class="form-control" type="text" name="enddate" value="' +
((__t = ( getDateAttr('enddate') )) == null ? '' : __t) +
'">\n                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n    <fieldset>\n        <legend>Attach File</legend>\n        <div class="form-group">\n            <label for="attachedfile">File Name</label>\n            <input type="file" id="attachedfile">\n        </div>\n    </fieldset>\n    <div class="form-actions">\n        <a id="save-button" class="btn btn-primary">Save changes</a>\n        <a id="cancel-button" class="btn btn-default">Cancel</a>\n    </div>\n</form>\n<div class="row status-bar">\n    <div class="span9">\n        <div class="alert alert-success" style="display: none">\n            <b>Success!</b> Record saved successfully\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/events/index.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header class="jumbotron subhead">\n    <div class="events-img-title"/>\n    <h2>Event Calendar</h2>\n</header>\n\n<div class="row">\n    <div class="col-md-3">\n        <div class="well">\n            <h4 id="helptitle">Event Calendar</h4>\n            <p>The event calendar is a list of WMGA tournaments and events that are taking place this season.  This calendar also includes all Westwood Golf Course events as well. </p>\n        </div>\n    </div>\n    <div class="col-md-9" id="index">\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/events/list.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="btn-group" data-toggle="buttons" id="filter">\n    <label class="btn btn-default active" id="all">\n        <input type="radio"> All\n    </label>\n    <label class="btn btn-default" id="upcoming">\n        <input type="radio"> Upcoming\n    </label>\n    <label class="btn btn-default" id="past">\n        <input type="radio"> Past\n    </label>\n</div>\n<br><br>\n<div class="container">\n</div>\n';

}
return __p
};

this["JST"]["client/templates/events/listitem.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n    <div class="col-md-1"><b>' +
((__t = ( model.dateAsString('startdate') )) == null ? '' : __t) +
'</b></div>\n    <div class="col-md-4"><a href="#events/read/' +
((__t = ( model.id )) == null ? '' : __t) +
'">' +
((__t = ( model.get('title') )) == null ? '' : __t) +
'</a></div>\n</div>\n<div class="row">\n    <div class="col-md-8 well">' +
((__t = ( model.get('description') )) == null ? '' : __t) +
'</div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/events/review.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="btn-toolbar pull-right">\n</div>\n<h3>' +
((__t = ( model.get('title') )) == null ? '' : __t) +
'</h3>\n<h4>' +
((__t = ( model.dateAsString('startdate') )) == null ? '' : __t) +
'</h4>\n<p>' +
((__t = ( model.get('description') )) == null ? '' : __t) +
'</p>\n<p>Attached file: <a href="' +
((__t = ( getFileUrl() )) == null ? '' : __t) +
'">' +
((__t = ( model.get('attachedfile') )) == null ? '' : __t) +
'</a>\n';

}
return __p
};

this["JST"]["client/templates/home/eventsitem.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h4>' +
((__t = ( getAttr('title') )) == null ? '' : __t) +
'</h4>\n<p>' +
((__t = ( getAttr('description') )) == null ? '' : __t) +
'</p>\n<p><a class="btn btn-default" href="#events/read/' +
((__t = (getAttr('_id'))) == null ? '' : __t) +
'" role="button">View details &raquo;</a></p>\n';

}
return __p
};

this["JST"]["client/templates/home/index.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="jumbotron-index masthead">\n    <div class="row">\n        <div class="col-md-10 golf-background" id="jumbotron">\n            <h2>Westwood Men&#39s Golf Association</h2>\n            <p class="hidden-phone">Welcome to the Westwood Men&#39s Golf Association.  WMGA is affiliated with the Westwood Park Golf Course in Norman, OK. We have Thursday night and Saturday morning leagues that hold tournaments and events from March through October. If you live in Norman or the surrounding area come out and join the association and participate in some events.</p>\n            <a href="#signup" class="btn btn-primary btn-lg">Sign Up Today</a>\n        </div>\n    </div>\n</div>\n\n<div class="marketing text-center">\n  <!-- Three columns of text below the carousel -->\n  <div class="row">\n    <div class="col-lg-4">\n        <div class="news-img"/>\n        <h2>Recent News</h2>\n        <div id="news-item"></div>\n    </div><!-- /.col-lg-4 -->\n    <div class="col-lg-4">\n        <div class="events-img"/>\n        <h2>Upcoming Events</h2>\n        <div id="events-item"></div>\n    </div><!-- /.col-lg-4 -->\n    <div class="col-lg-4">\n        <div class="contact-img"/>\n        <h2>Contact</h2>\n        <p>View our contact page for league schedules, rules and more contact information.</p>\n        <p><a class="btn btn-default" href="#contact" role="button">View details &raquo;</a></p>\n    </div><!-- /.col-lg-4 -->\n  </div><!-- /.row -->\n</div>\n\n';

}
return __p
};

this["JST"]["client/templates/home/newsitem.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h4>' +
((__t = ( getAttr('title') )) == null ? '' : __t) +
'</h4>\n<p>' +
((__t = ( getAttr('text') )) == null ? '' : __t) +
'</p>\n<p><a class="btn btn-default" href="#news/read/' +
((__t = (getAttr('_id'))) == null ? '' : __t) +
'" role="button">View details &raquo;</a></p>\n';

}
return __p
};

this["JST"]["client/templates/news/addbutton.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += ' <a href="#news/create" class="btn btn-primary"><span class="glyphicon glyphicon-plus"></span> Article</a>\n';

}
return __p
};

this["JST"]["client/templates/news/editbuttons.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#news/update/' +
((__t = ( model.id )) == null ? '' : __t) +
'" class="btn btn-default"> Edit Article</a>\n<a id="delete-btn" class="btn btn-default"> Delete Article</a>\n';

}
return __p
};

this["JST"]["client/templates/news/form.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form method="POST" role="form">\n    <h3 id="formtitle">Add new article</h3>\n    <div id="alert"></div>\n    <fieldset>\n        <legend>Summary</legend>\n        <div class="form-group">\n            <label>Article Heading:</label>\n            <input class="form-control" type="text" name="title" value="' +
((__t = ( getAttr('title') )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>Description</label>\n            <textarea rows="5" class="form-control" name="text">' +
((__t = ( getAttr('text') )) == null ? '' : __t) +
'</textarea>\n        </div>\n        <div class="row">\n            <div class="col-md-3">\n                <div class="form-group">\n                    <label >Article Date</label>\n                    <div class="input-group" id="itemdatepicker">\n                        <input class="form-control" type="text" name="itemdate" value="' +
((__t = ( getDateAttr('itemdate') )) == null ? '' : __t) +
'">\n                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n    <fieldset>\n        <legend>Attach File</legend>\n        <div class="form-group">\n            <label for="attachedfile">File Name</label>\n            <input type="file" id="attachedfile">\n        </div>\n    </fieldset>\n    <div class="form-actions">\n        <a id="save-button" class="btn btn-primary">Save changes</a>\n        <a id="cancel-button" class="btn btn-default">Cancel</a>\n    </div>\n</form>\n<div class="row status-bar">\n    <div class="span9">\n        <div class="alert alert-success" style="display: none">\n            <b>Success!</b> Record saved successfully\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/news/index.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header class="jumbotron subhead">\n    <div class="news-img-title"/>\n    <h2>News Articles</h2>\n</header>\n\n<div class="row">\n    <div class="col-md-3">\n        <div class="well">\n            <h4 id="helptitle">News Articles</h4>\n            <p>This is a complete list of the latest news articles at WMGA. You can also find current and historical tournament results.</p>\n        </div>\n    </div>\n    <div class="col-md-9" id="index">\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/news/list.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="btn-group" data-toggle="buttons" id="filter">\n    <label class="btn btn-default active" id="all">\n        <input type="radio"> All\n    </label>\n    <label class="btn btn-default" id="recent">\n        <input type="radio"> Recent\n    </label>\n    <label class="btn btn-default" id ="past">\n        <input type="radio"> Past\n    </label>\n</div>\n<br><br>\n<div class="container">\n</div>\n';

}
return __p
};

this["JST"]["client/templates/news/listitem.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n    <div class="col-md-1"><b>' +
((__t = ( getDateAttr('itemdate') )) == null ? '' : __t) +
'</b></div>\n    <div class="col-md-4"><a href="#news/read/' +
((__t = ( model.id )) == null ? '' : __t) +
'">' +
((__t = ( getAttr('title') )) == null ? '' : __t) +
'</a></div>\n</div>\n<div class="row">\n    <div class="col-md-8 well">' +
((__t = ( getAttr('text') )) == null ? '' : __t) +
'</div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/news/review.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="btn-toolbar pull-right">\n</div>\n<h3>' +
((__t = ( getAttr('title') )) == null ? '' : __t) +
'</h3>\n<h4>' +
((__t = ( getDateAttr('itemdate') )) == null ? '' : __t) +
'</h4>\n<p>' +
((__t = ( getAttr('text') )) == null ? '' : __t) +
'</p>\n<p>Attached file: <a href="' +
((__t = ( getFileUrl() )) == null ? '' : __t) +
'">' +
((__t = ( getAttr('attachedfile') )) == null ? '' : __t) +
'</a>\n';

}
return __p
};

this["JST"]["client/templates/results/addbutton.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#results/create" class="btn btn-primary"><span class="glyphicon glyphicon-plus"></span> Results</a>\n';

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
__p += '<form method="POST" role="form">\n    <h3 id="formtitle">Add tournament results</h3>\n    <div id="alert"></div>\n    <fieldset>\n        <legend>Summary</legend>\n        <div class="form-group">\n            <label>Heading:</label>\n            <input class="form-control" type="text" name="title" value="' +
((__t = ( model.get('title') )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>Description</label>\n            <textarea rows="5" class="form-control" name="text">' +
((__t = ( model.get('text') )) == null ? '' : __t) +
'</textarea>\n        </div>\n        <div class="row">\n            <div class="col-md-3">\n                <div class="form-group">\n                    <label >Tournament Date</label>\n                    <div class="input-group" id="itemdatepicker">\n                        <input class="form-control" type="text" name="itemdate" value="' +
((__t = ( model.dateAsString('itemdate') )) == null ? '' : __t) +
'">\n                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n    <fieldset>\n        <legend>Attach File</legend>\n        <div class="form-group">\n            <label for="attachedfile">File Name</label>\n            <input type="file" id="attachedfile">\n        </div>\n    </fieldset>\n    <div class="form-actions">\n        <a id="save-button" class="btn btn-primary">Save changes</a>\n        <a id="cancel-button" class="btn btn-default">Cancel</a>\n    </div>\n</form>\n<div class="row status-bar">\n    <div class="span9">\n        <div class="alert alert-success" style="display: none">\n            <b>Success!</b> Record saved successfully\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/results/index.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header class="jumbotron subhead">\n    <div class="events-img-title"/>\n    <h2>Tournament Results</h2>\n</header>\n\n<div class="row">\n    <div class="col-md-3">\n        <div class="well">\n            <h4 id="helptitle">Tournament Results</h4>\n            <p>This is a where you can also find current and historical tournament results.</p>\n        </div>\n    </div>\n    <div class="col-md-9" id="index">\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/results/list.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="btn-group" data-toggle="buttons" id="filter">\n    <label class="btn btn-default active" id="all">\n        <input type="radio"> All\n    </label>\n    <label class="btn btn-default" id="recent">\n        <input type="radio"> Recent\n    </label>\n    <label class="btn btn-default" id ="past">\n        <input type="radio"> Past\n    </label>\n</div>\n<br><br>\n<div class="container">\n</div>\n';

}
return __p
};

this["JST"]["client/templates/results/listitem.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n    <div class="col-md-1"><b>' +
((__t = ( model.dateAsString('itemdate') )) == null ? '' : __t) +
'</b></div>\n    <div class="col-md-4"><a href="#results/read/' +
((__t = ( model.id )) == null ? '' : __t) +
'">' +
((__t = ( model.get('title') )) == null ? '' : __t) +
'</a></div>\n</div>\n<div class="row">\n    <div class="col-md-8 well">' +
((__t = ( model.get('text') )) == null ? '' : __t) +
'</div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/results/review.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="btn-toolbar pull-right">\n</div>\n<h3>' +
((__t = ( model.get('title') )) == null ? '' : __t) +
'</h3>\n<h4>' +
((__t = ( model.dateAsString('itemdate') )) == null ? '' : __t) +
'</h4>\n<p>' +
((__t = ( model.get('text') )) == null ? '' : __t) +
'</p>\n<p>Attached file: <a href="' +
((__t = ( getFileUrl() )) == null ? '' : __t) +
'">' +
((__t = ( model.get('attachedfile') )) == null ? '' : __t) +
'</a>\n';

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
__p += '<div class="row">\n    <div class="col-sm-2">\n    </div>\n    <div class="col-sm-8 well">\n        <div class="row">\n            <div class="col-sm-2">\n            </div>\n            <div class="col-sm-8" id="stepContent">\n            </div>\n            <div class="col-sm-2">\n            </div>\n        </div>\n    </div>\n    <div class="col-sm-2">\n    </div>\n</div>\n';

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

this["JST"]["client/templates/teams/editbuttons.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#teams/update/' +
((__t = ( model.id )) == null ? '' : __t) +
'" class="btn btn-default"> Edit Team</a>\n<a id="delete-btn" class="btn btn-default"> Delete Team</a>\n';

}
return __p
};

this["JST"]["client/templates/teams/form.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form method="POST" role="form">\n    <h3 id="formtitle">Add team</h3>\n    <div id="alert"></div>\n    <fieldset id="required">\n        <legend>Required Information</legend>\n        <div class="form-group">\n            <label>Team Name</label>\n            <input class="form-control" type="text" name="name" value="' +
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
__p += '<header class="jumbotron subhead">\n    <div class="contact-img-title"/>\n    <h2>Teams</h2>\n</header>\n\n<div class="row">\n    <div class="col-md-3" id="help">\n        <div class="well">\n            <h4 id="helptitle">Teams</h4>\n            <p>The team list is a complete list of all the Thursday night teams.  There is an annual membership cost required to register a team.  You can register your team from the <a href="#membership">membership</a> page.The team manager is responsible for signing up a team and managing the team roster.</p>\n        </div>\n    </div>\n    <div class="col-md-9" id="index">\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/teams/list.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="input-group">\n    <input type="text" class="form-control" placeholder="Search"/>\n</div>\n<br/>\n<table class="table table-striped">\n    <thead>\n        <tr>\n            <td>Team Name</td>\n            <td>Paid</td>\n            <td>Tee Time</td>\n            <td>Sign Up</td>\n            <td>Comments</td>\n        </tr>\n    </thead>\n    <tbody>\n    </tbody>\n</table>\n';

}
return __p
};

this["JST"]["client/templates/teams/listitem.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td><b><a href="#teams/read/' +
((__t = ( model.id )) == null ? '' : __t) +
'">' +
((__t = ( model.get('name') )) == null ? '' : __t) +
'</a></b></td>\n<td><span class="glyphicon glyphicon-ok ' +
((__t = ( model.get('paid') ? '' : 'hidden' )) == null ? '' : __t) +
'"></span></td>\n<td>' +
((__t = ( model.get('teetime') )) == null ? '' : __t) +
'</td>\n<td>' +
((__t = ( model.dateAsString('createdate') )) == null ? '' : __t) +
'</td>\n<td>' +
((__t = ( model.get('comments') )) == null ? '' : __t) +
'</td>\n';

}
return __p
};

this["JST"]["client/templates/teams/listitemmember.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td colspan="6">Members: ' +
((__t = ( renderMembers() )) == null ? '' : __t) +
'</td>\n';

}
return __p
};

this["JST"]["client/templates/teams/review.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="btn-toolbar pull-right">\n</div>\n<div id="info">\n    <div class="page-header">\n        <h3>Team Info</h3>\n    </div>\n    <h4>' +
((__t = ( model.get('name') )) == null ? '' : __t) +
'</h4>\n    <p>Captain: ' +
((__t = ( getCaptainName() )) == null ? '' : __t) +
'</p>\n    <p>Tee Time: ' +
((__t = ( model.get('teetime') )) == null ? '' : __t) +
'</p>\n    <p>Comments:</p>\n    <p>' +
((__t = ( model.get('comments') )) == null ? '' : __t) +
'</p>\n    <p>Photo: <a href="' +
((__t = ( getFileUrl() )) == null ? '' : __t) +
'">' +
((__t = ( model.get('photo') )) == null ? '' : __t) +
'</a></p>\n</div>\n<div id="team">\n    <div class="page-header">\n        <h3>Team Dues</h3>\n    </div>\n    <p>There is an annual membership cost required to register a team.  The team manager is responsible for signing up a team and managing the team roster. The team registration fee $300 per season.</p>\n    <p>Team Status: <b>' +
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
__p += '<span class="input-group-btn">\n    <a href="#users/create" class="btn btn-primary"><span class="glyphicon glyphicon-plus"></span> User</a>\n    <a href="#users/email" class="btn btn-default">Send Email</a>\n</span>\n';

}
return __p
};

this["JST"]["client/templates/users/editbuttons.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#users/update/' +
((__t = ( model.id )) == null ? '' : __t) +
'" class="btn btn-default"> Edit Member</a>\n<a id="delete-btn" class="btn btn-default"> Delete Member</a>\n';

}
return __p
};

this["JST"]["client/templates/users/email.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form method="POST" role="form">\n    <h3 id="formtitle">Email Members</h3>\n    <div id="alert"></div>\n    <fieldset>\n        <div class="form-group">\n            <label>Subject</label>\n            <input class="form-control" type="text" name="subject" id="subject"/>\n        </div>\n        <div class="form-group">\n            <label>Email Body</label>\n            <textarea class="form-control" rows="10" name="body"></textarea>\n        </div>\n    </fieldset>\n    <div class="form-actions">\n        <a id="save-button" class="btn btn-primary">Send &raquo;</a>\n        <a id="cancel-button" class="btn btn-default">Cancel</a>\n    </div>\n</form>\n';

}
return __p
};

this["JST"]["client/templates/users/form.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form method="POST" role="form">\n    <h3 id="formtitle">Add member</h3>\n    <div id="alert"></div>\n    <fieldset id="required">\n        <legend>Required Information</legend>\n        <div class="form-group">\n            <label>First Name</label>\n            <input class="form-control" type="text" name="firstname" value="' +
((__t = ( model.get('firstname') )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>Last Name</label>\n            <input class="form-control" type="text" name="lastname" value="' +
((__t = ( model.get('lastname') )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>Email</label>\n            <input class="form-control" type="text" name="email" value="' +
((__t = ( model.get('email') )) == null ? '' : __t) +
'"/>\n        </div>\n    </fiedlset>\n    <fieldset id="additional">\n        <legend>Additional Information</legend>\n        <div class="form-group">\n            <label>Street Address</label>\n            <input class="form-control" type="text" name="address" value="' +
((__t = ( model.get('address') )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>City, State Zip</label>\n            <input class="form-control" type="text" name="address2" value="' +
((__t = ( model.get('address2') )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>Phone</label>\n            <input class="form-control" type="text" name="phone" value="' +
((__t = ( model.get('phone') )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="form-group">\n            <label>Alt Phone</label>\n            <input class="form-control" type="text" name="altphone" value="' +
((__t = ( model.get('altphone') )) == null ? '' : __t) +
'"/>\n        </div>\n        <div class="row">\n            <div class="col-md-3">\n                <div class="form-group">\n                    <label >Birth Date</label>\n                    <div class="input-group" id="birthdatepicker">\n                        <input class="form-control" type="text" name="birthdate" value="' +
((__t = ( model.dateAsString('birthdate') )) == null ? '' : __t) +
'">\n                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </fieldset>\n    <fieldset>\n        <legend>Profile Picture</legend>\n        <div class="form-group">\n            <label for="attachedfile">File Name</label>\n            <input type="file" id="picture">\n        </div>\n    </fieldset>\n    <div class="form-actions">\n        <a id="save-button" class="btn btn-primary">Save changes</a>\n        <a id="cancel-button" class="btn btn-default">Cancel</a>\n    </div>\n</form>\n<div class="row status-bar">\n    <div class="span9">\n        <div class="alert alert-success" style="display: none">\n            <b>Success!</b> Record saved successfully\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/users/index.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header class="jumbotron subhead">\n    <div class="contact-img-title"/>\n    <h2>Members</h2>\n</header>\n\n<div class="row">\n    <div class="col-md-3">\n        <div class="well">\n            <h4 id="helptitle">Members</h4>\n            <p>The member list is a complete list of all registered WMGA members. This list is only available to members and is not available to the public. This is a great way to keep in touch with other members or get in contact with them for tournaments and events.</p>\n        </div>\n    </div>\n    <div class="col-md-9" id="index">\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["client/templates/users/list.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="input-group">\n    <input type="text" class="form-control" placeholder="Search"/>\n</div>\n<br/>\n<table class="table">\n</table>\n';

}
return __p
};

this["JST"]["client/templates/users/listitem.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td><b><a href="#users/read/' +
((__t = ( model.id )) == null ? '' : __t) +
'">' +
((__t = ( model.getFullName() )) == null ? '' : __t) +
'</a></b></td>\n<td>' +
((__t = ( model.get('email') )) == null ? '' : __t) +
'</td>\n<td>' +
((__t = ( model.get('phone') )) == null ? '' : __t) +
'</td>\n';

}
return __p
};

this["JST"]["client/templates/users/review.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="btn-toolbar pull-right"></div>\n<div id="info">\n    <div class="page-header">\n        <h3>Membership Info</h3>\n    </div>\n    <h4>' +
((__t = ( model.get('firstname') )) == null ? '' : __t) +
' ' +
((__t = ( model.get('lastname') )) == null ? '' : __t) +
'</h4>\n    <p>' +
((__t = ( model.get('address') )) == null ? '' : __t) +
'<br>\n        ' +
((__t = ( model.get('address2') )) == null ? '' : __t) +
'\n    </p>\n    <abbr title="Phone">P:</abbr> ' +
((__t = ( model.get('phone') )) == null ? '' : __t) +
'<br/>\n    <p>Photo: <a href="' +
((__t = ( getFileUrl() )) == null ? '' : __t) +
'">' +
((__t = ( model.get('photo') )) == null ? '' : __t) +
'</a></p>\n    <label class="checkbox">\n        <input type="checkbox" id="mark-paid" ' +
((__t = ( model.get('paid') ? 'checked' : '' )) == null ? '' : __t) +
'> Mark Paid\n    </label>\n    <label class="checkbox">\n        <input type="checkbox" id="admin" ' +
((__t = ( model.get('admin') ? 'checked' : '' )) == null ? '' : __t) +
'> Make Administrator\n    </label>\n    <label class="checkbox">\n        <input type="checkbox" id="treasure" ' +
((__t = ( model.get('treasure') ? 'checked' : '' )) == null ? '' : __t) +
'> Make Treasure\n    </label>\n</div>\n<div id="dues">\n    <div class="page-header">\n        <h3>Annual Dues</h3>\n    </div>\n    <p>There is an annual membership cost required to join the association.  It is also important to understand that you must be a member of the WMGA in order to participate in any WMGA tournament or event.  Use the pay now button below to be able to participate in WMGA events this year. The annual membership fee $25.</p>\n    <p>Membership Status: <b>' +
((__t = ( model.get('paid') ? 'Paid' : '$25 Payment Due' )) == null ? '' : __t) +
'</b></p>\n    <div id="member-unpaid">\n        <a href="' +
((__t = ( getPayNow() )) == null ? '' : __t) +
'">\n            <img src="https://www.sandbox.paypal.com/en_US/i/btn/btn_paynowCC_LG.gif">\n        </a><br/>\n        <br/>\n    </div>\n    <p id="member-unpaid"><b>Note:</b> If you have paid using PayPal it can take up to 10 minutes before your payment is reflected on our site.  You will need to refresh this page to see your current status.</p>\n    <p id="member-unpaid">Do not pay more than once.  If your payment status isn\'t updated within 24 hours please contact the <a href="#contact">Treasurer.</a></p>\n</div>\n<div id="team">\n    <div class="page-header">\n        <h3>Thursday Night Team</h3>\n    </div>\n    <p>There is an annual membership cost required to register a team.  The team manager is responsible for signing up a team and managing the team roster. The team registration fee $300 per season.</p>\n    <a class="btn btn-primary" id="team-btn">Team Registration</a>\n    <a class="btn btn-primary" id="team-btn-edit">Manage Team</a>\n</div>\n';

}
return __p
};