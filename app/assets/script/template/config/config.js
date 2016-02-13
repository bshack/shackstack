(function() {var Handlebars = require("handlebars");if (typeof Handlebars.templates === 'undefined') {Handlebars.templates = {};}Handlebars.templates['config/config'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<script>\n    (function() {\n        'use strict';\n        window.env = {\n            www: '"
    + alias4(((helper = (helper = helpers.www || (depth0 != null ? depth0.www : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"www","hash":{},"data":data}) : helper)))
    + "',\n            cdn: '"
    + alias4(((helper = (helper = helpers.cdn || (depth0 != null ? depth0.cdn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cdn","hash":{},"data":data}) : helper)))
    + "',\n            service: '"
    + alias4(((helper = (helper = helpers.service || (depth0 != null ? depth0.service : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"service","hash":{},"data":data}) : helper)))
    + "',\n            version: '"
    + alias4(((helper = (helper = helpers.version || (depth0 != null ? depth0.version : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"version","hash":{},"data":data}) : helper)))
    + "',\n            'google-analytics-id': '"
    + alias4(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.metrics : depth0)) != null ? stack1["google-analytics"] : stack1)) != null ? stack1.id : stack1), depth0))
    + "'\n        };\n    })();\n</script>\n";
},"useData":true});Handlebars.registerPartial('config/config', Handlebars.templates['config/config']);module.exports = Handlebars.templates['config/config'];})();