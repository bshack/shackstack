(function() {var Handlebars = require("handlebars");if (typeof Handlebars.templates === 'undefined') {Handlebars.templates = {};}Handlebars.templates['tags/input'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<input id=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.placeholder : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.value : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.disabled : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.checked : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labelledby : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">";
},"2":function(container,depth0,helpers,partials,data) {
    return " class=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0["class"] : depth0), depth0))
    + "\"";
},"4":function(container,depth0,helpers,partials,data) {
    return " placeholder=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.placeholder : depth0), depth0))
    + "\"";
},"6":function(container,depth0,helpers,partials,data) {
    return " type=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.type : depth0), depth0))
    + "\"";
},"8":function(container,depth0,helpers,partials,data) {
    return " type=\"text\"";
},"10":function(container,depth0,helpers,partials,data) {
    return " name=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "\"";
},"12":function(container,depth0,helpers,partials,data) {
    return " value=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.value : depth0), depth0))
    + "\"";
},"14":function(container,depth0,helpers,partials,data) {
    return " required";
},"16":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"18":function(container,depth0,helpers,partials,data) {
    return " checked";
},"20":function(container,depth0,helpers,partials,data) {
    return " aria-labelledby=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.labelledby : depth0), depth0))
    + "\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"useData":true});Handlebars.registerPartial('tags/input', Handlebars.templates['tags/input']);module.exports = Handlebars.templates['tags/input'];})();