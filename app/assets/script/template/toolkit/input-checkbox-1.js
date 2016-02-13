(function() {var Handlebars = require("handlebars");if (typeof Handlebars.templates === 'undefined') {Handlebars.templates = {};}Handlebars.templates['toolkit/input-checkbox-1'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["tags/input"],depth0,{"name":"tags/input","hash":{"type":"checkbox","class":"input-checkbox-1"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});Handlebars.registerPartial('toolkit/input-checkbox-1', Handlebars.templates['toolkit/input-checkbox-1']);module.exports = Handlebars.templates['toolkit/input-checkbox-1'];})();