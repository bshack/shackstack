(function() {var Handlebars = require("handlebars");if (typeof Handlebars.templates === 'undefined') {Handlebars.templates = {};}Handlebars.templates['tags/script'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression;

  return "<script async src=\""
    + alias1(((helper = (helper = helpers.cdn || (depth0 != null ? depth0.cdn : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"cdn","hash":{},"data":data}) : helper)))
    + alias1(container.lambda((depth0 != null ? depth0.script : depth0), depth0))
    + "\"></script>\n";
},"useData":true});Handlebars.registerPartial('tags/script', Handlebars.templates['tags/script']);module.exports = Handlebars.templates['tags/script'];})();