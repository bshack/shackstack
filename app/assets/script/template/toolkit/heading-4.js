(function() {var Handlebars = require("handlebars");if (typeof Handlebars.templates === 'undefined') {Handlebars.templates = {};}Handlebars.templates['toolkit/heading-4'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression(container.lambda((depth0 != null ? depth0.tag : depth0), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "span";
},"5":function(container,depth0,helpers,partials,data) {
    return " id=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\"";
},"7":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression(container.lambda((depth0 != null ? depth0["class"] : depth0), depth0));
},"9":function(container,depth0,helpers,partials,data) {
    return " aria-label=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0["accessible-title"] : depth0), depth0))
    + "\"";
},"11":function(container,depth0,helpers,partials,data) {
    return " role=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.role : depth0), depth0))
    + "\"";
},"13":function(container,depth0,helpers,partials,data) {
    return " tabindex=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.tabindex : depth0), depth0))
    + "\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tag : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " class=\"heading-4 "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["accessible-title"] : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.role : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tabindex : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.title : depth0), depth0))
    + "</"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.tag : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ">\n";
},"useData":true});Handlebars.registerPartial('toolkit/heading-4', Handlebars.templates['toolkit/heading-4']);module.exports = Handlebars.templates['toolkit/heading-4'];})();