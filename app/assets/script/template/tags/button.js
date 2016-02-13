(function() {var Handlebars = require("handlebars");if (typeof Handlebars.templates === 'undefined') {Handlebars.templates = {};}Handlebars.templates['tags/button'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<button id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\""
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0["accessible-title"] : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.disabled : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.role : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.tabindex : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</button>";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " class=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0["class"] : depth0), depth0))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"";
},"3":function(container,depth0,helpers,partials,data) {
    return " selected";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-label=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0["accessible-title"] : depth0), depth0))
    + "\"";
},"7":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"9":function(container,depth0,helpers,partials,data) {
    return " type=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.type : depth0), depth0))
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
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});Handlebars.registerPartial('tags/button', Handlebars.templates['tags/button']);module.exports = Handlebars.templates['tags/button'];})();