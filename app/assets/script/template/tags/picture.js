(function() {var Handlebars = require("handlebars");if (typeof Handlebars.templates === 'undefined') {Handlebars.templates = {};}Handlebars.templates['tags/picture'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " id=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\"";
},"3":function(container,depth0,helpers,partials,data) {
    return " class=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0["class"] : depth0), depth0))
    + "\"";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-label=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0["accessible-title"] : depth0), depth0))
    + "\"";
},"7":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression(container.lambda((depth0 != null ? depth0.alt : depth0), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "<picture"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["accessible-title"] : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " alt=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.alt : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    <source srcset=\""
    + alias3(alias2((depth0 != null ? depth0.image : depth0), depth0))
    + "\" media=\"(max-width: 400px)\">\n    <source srcset=\""
    + alias3(alias2((depth0 != null ? depth0.image : depth0), depth0))
    + "\" media=\"(min-width: 401px)\">\n</picture>\n";
},"useData":true});Handlebars.registerPartial('tags/picture', Handlebars.templates['tags/picture']);module.exports = Handlebars.templates['tags/picture'];})();