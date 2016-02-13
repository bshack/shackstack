(function() {var Handlebars = require("handlebars");if (typeof Handlebars.templates === 'undefined') {Handlebars.templates = {};}Handlebars.templates['toolkit/list-1'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["tags/ul"],depth0,{"name":"tags/ul","hash":{"class":"list-1"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});Handlebars.registerPartial('toolkit/list-1', Handlebars.templates['toolkit/list-1']);module.exports = Handlebars.templates['toolkit/list-1'];})();