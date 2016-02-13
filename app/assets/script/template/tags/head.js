(function() {var Handlebars = require("handlebars");if (typeof Handlebars.templates === 'undefined') {Handlebars.templates = {};}Handlebars.templates['tags/head'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <meta name=\"description\" content=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.meta : depth0)) != null ? stack1.description : stack1), depth0))
    + "\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <meta name=\"keywords\" content=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.meta : depth0)) != null ? stack1.keywords : stack1), depth0))
    + "\">\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <meta name=\"apple-mobile-web-app-title\" content=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.meta : depth0)) != null ? stack1["apple-mobile-web-app-title"] : stack1), depth0))
    + "\">\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <meta name=\"twitter:card\" content=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.card : stack1), depth0))
    + "\">\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <meta name=\"twitter:url\" content=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.url : stack1), depth0))
    + "\">\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <meta name=\"twitter:title\" content=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.title : stack1), depth0))
    + "\">\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <meta name=\"twitter:description\" content=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.description : stack1), depth0))
    + "\">\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "    <meta name=\"twitter:image\" content=\""
    + alias1(((helper = (helper = helpers.cdn || (depth0 != null ? depth0.cdn : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"cdn","hash":{},"data":data}) : helper)))
    + "assets/image/"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.image : stack1), depth0))
    + "\">\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <meta property=\"og:title\" content=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.title : stack1), depth0))
    + "\">\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <meta property=\"og:type\" content=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.type : stack1), depth0))
    + "\">\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <meta property=\"og:url\" content=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.url : stack1), depth0))
    + "\">\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "    <meta property=\"og:image\" content=\""
    + alias1(((helper = (helper = helpers.cdn || (depth0 != null ? depth0.cdn : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"cdn","hash":{},"data":data}) : helper)))
    + "assets/image/"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.image : stack1), depth0))
    + "\">\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <meta property=\"og:site_name\" content=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.site_name : stack1), depth0))
    + "\">\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <meta property=\"og:description\" content=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.site_name : stack1), depth0))
    + "\">\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <meta property=\"og:locale\" content=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.locale : stack1), depth0))
    + "\">\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <meta property=\"fb:admins\" content=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.fb : depth0)) != null ? stack1.admins : stack1), depth0))
    + "\">\n";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <meta property=\"fb:app_id\" content=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.fb : depth0)) != null ? stack1.app_id : stack1), depth0))
    + "\">\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "    <link rel=\"icon\" type=\"image/x-icon\" href=\""
    + alias1(((helper = (helper = helpers.cdn || (depth0 != null ? depth0.cdn : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"cdn","hash":{},"data":data}) : helper)))
    + "assets/image/"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1.favicon : stack1), depth0))
    + "\">\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "    <link rel=\"apple-touch-icon-precomposed\" href=\""
    + alias1(((helper = (helper = helpers.cdn || (depth0 != null ? depth0.cdn : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"cdn","hash":{},"data":data}) : helper)))
    + "assets/image/"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1["apple-touch-icon-precomposed"] : stack1), depth0))
    + "\">\n";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <link rel=\"author\" href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1.author : stack1), depth0))
    + "\">\n";
},"41":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <link rel=\"stylesheet\" type=\"text/css\" assets=\"all\" href=\""
    + alias4(((helper = (helper = helpers.cdn || (depth0 != null ? depth0.cdn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cdn","hash":{},"data":data}) : helper)))
    + "assets/style/"
    + alias4(((helper = (helper = helpers.secondaryCSS || (depth0 != null ? depth0.secondaryCSS : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondaryCSS","hash":{},"data":data}) : helper)))
    + ".css\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<head>\n    <title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"x-ua-compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.meta : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.meta : depth0)) != null ? stack1.keywords : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.meta : depth0)) != null ? stack1["apple-mobile-web-app-title"] : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.card : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.image : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.type : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.image : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.site_name : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.locale : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.fb : depth0)) != null ? stack1.admins : stack1),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.fb : depth0)) != null ? stack1.app_id : stack1),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1.favicon : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1["apple-touch-icon-precomposed"] : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1.author : stack1),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <link rel=\"stylesheet\" type=\"text/css\" assets=\"all\" href=\""
    + alias4(((helper = (helper = helpers.cdn || (depth0 != null ? depth0.cdn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cdn","hash":{},"data":data}) : helper)))
    + "assets/style/global.css\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.secondaryCSS : depth0),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</head>\n";
},"useData":true});Handlebars.registerPartial('tags/head', Handlebars.templates['tags/head']);module.exports = Handlebars.templates['tags/head'];})();