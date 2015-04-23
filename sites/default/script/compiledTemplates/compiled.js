define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["about"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "about";
  },"useData":true});

this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "index\n"
    + escapeExpression(((helper = (helper = helpers.outlet || (depth0 != null ? depth0.outlet : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"outlet","hash":{},"data":data}) : helper)));
},"useData":true});

this["JST"]["head"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "<meta name=\"robots\" content=\"noindex, nofollow\">\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<title>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n<meta charset=\"utf-8\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.isBuild : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<meta name=\"description\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.meta : depth0)) != null ? stack1.description : stack1), depth0))
    + "\">\n<meta name=\"keywords\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.meta : depth0)) != null ? stack1.keywords : stack1), depth0))
    + "\">\n<meta name=\"viewport\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.meta : depth0)) != null ? stack1.viewport : stack1), depth0))
    + "\">\n<meta name=\"apple-mobile-web-app-title\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.meta : depth0)) != null ? stack1['apple-mobile-web-app-title'] : stack1), depth0))
    + "\">\n<meta name=\"twitter:card\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.card : stack1), depth0))
    + "\">\n<meta name=\"twitter:url\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.url : stack1), depth0))
    + "\">\n<meta name=\"twitter:title\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.title : stack1), depth0))
    + "\">\n<meta name=\"twitter:description\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.description : stack1), depth0))
    + "\">\n<meta name=\"twitter:image\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.path : depth0)) != null ? stack1.media : stack1), depth0))
    + "/image/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.image : stack1), depth0))
    + "\">\n<meta property=\"og:title\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.title : stack1), depth0))
    + "\">\n<meta property=\"og:type\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.type : stack1), depth0))
    + "\">\n<meta property=\"og:url\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.url : stack1), depth0))
    + "\">\n<meta property=\"og:image\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.path : depth0)) != null ? stack1.media : stack1), depth0))
    + "/image/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.image : stack1), depth0))
    + "\">\n<meta property=\"og:site_name\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.site_name : stack1), depth0))
    + "\">\n<meta property=\"og:description\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.site_name : stack1), depth0))
    + "\">\n<meta property=\"og:locale\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.og : depth0)) != null ? stack1.site_name : stack1), depth0))
    + "\">\n<meta property=\"fb:admins\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.fb : depth0)) != null ? stack1.admins : stack1), depth0))
    + "\">\n<meta property=\"fb:app_id\" content=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.fb : depth0)) != null ? stack1.app_id : stack1), depth0))
    + "\">\n<link rel=\"icon\" type=\"image/x-icon\" href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.path : depth0)) != null ? stack1.media : stack1), depth0))
    + "/image/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1.favicon : stack1), depth0))
    + "\">\n<link rel=\"apple-touch-icon-precomposed\" href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.path : depth0)) != null ? stack1.media : stack1), depth0))
    + "/image/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1['apple-touch-icon-precomposed'] : stack1), depth0))
    + "\">\n<link rel=\"author\" href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.link : depth0)) != null ? stack1.author : stack1), depth0))
    + "\">\n<link rel=\"stylesheet\" type=\"text/css\" media=\"all\" href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.path : depth0)) != null ? stack1.media : stack1), depth0))
    + "/style/global.css\">\n";
},"useData":true});

this["JST"]["script"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<script src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.path : depth0)) != null ? stack1.media : stack1), depth0))
    + "/script/global.js\"></script>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<script data-main=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.path : depth0)) != null ? stack1.media : stack1), depth0))
    + "/script/global\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.path : depth0)) != null ? stack1.media : stack1), depth0))
    + "/bower_components/requirejs/require.js\"></script>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isBuild : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

return this["JST"];

});