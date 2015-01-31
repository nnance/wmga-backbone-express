this["JST"] = this["JST"] || {};

this["JST"]["client/templates/index.jst"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="yeogurt-info">\n  <h1>Welcome to Yeogurt!</h1>\n  <p>\n    Take a look at the <a href="https://github.com/larsonjj/generator-yeogurt#yeogurt-generator---" data-bypass>documentation</a> and start mixing up something awesome.\n  </p>\n  <p>\n    <img src="/images/yeogurt-swirl.png" width="75px" class="logo" />\n  </p>\n  <p class="links">\n    <a href="/docs/styleguide/index.html" data-bypass>Styleguide</a>\n    <a href="/docs/api/index.html" data-bypass>API</a>\n  </p>\n</div>\n<code class="version">v0.14.2</code>\n';

}
return __p
};