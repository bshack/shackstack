(function() {var Handlebars = require("handlebars");if (typeof Handlebars.templates === 'undefined') {Handlebars.templates = {};}Handlebars.templates['tags/p'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " class=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0["class"] : depth0), depth0))
    + "\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.text : depth0), depth0))
    + "</p>\n";
},"useData":true});Handlebars.registerPartial('tags/p', Handlebars.templates['tags/p']);module.exports = Handlebars.templates['tags/p'];})();