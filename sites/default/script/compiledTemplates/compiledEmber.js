define(["ember"], function(Ember){

Ember.TEMPLATES["about"] = Ember.HTMLBars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("about");
  },"useData":true});

Ember.TEMPLATES["application"] = Ember.HTMLBars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("index\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"useData":true});

Ember.TEMPLATES["head"] = Ember.HTMLBars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push("<meta name=\"robots\" content=\"noindex, nofollow\">\n");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<title>");
  stack1 = helpers._triageMustache.call(depth0, "title", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</title>\n<meta charset=\"utf-8\">\n");
  stack1 = helpers.unless.call(depth0, "isBuild", {"name":"unless","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("<meta name=\"description\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "meta.description", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta name=\"keywords\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "meta.keywords", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta name=\"viewport\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "meta.viewport", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta name=\"apple-mobile-web-app-title\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "meta.apple-mobile-web-app-title", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta name=\"twitter:card\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "twitter.card", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta name=\"twitter:url\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "twitter.url", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta name=\"twitter:title\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "twitter.title", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta name=\"twitter:description\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "twitter.description", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta name=\"twitter:image\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "path.media", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("/image/");
  stack1 = helpers._triageMustache.call(depth0, "twitter.image", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta property=\"og:title\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "og.title", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta property=\"og:type\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "og.type", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta property=\"og:url\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "og.url", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta property=\"og:image\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "path.media", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("/image/");
  stack1 = helpers._triageMustache.call(depth0, "og.image", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta property=\"og:site_name\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "og.site_name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta property=\"og:description\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "og.site_name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta property=\"og:locale\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "og.site_name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta property=\"fb:admins\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "fb.admins", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<meta property=\"fb:app_id\" content=\"");
  stack1 = helpers._triageMustache.call(depth0, "fb.app_id", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<link rel=\"icon\" type=\"image/x-icon\" href=\"");
  stack1 = helpers._triageMustache.call(depth0, "path.media", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("/image/");
  stack1 = helpers._triageMustache.call(depth0, "link.favicon", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<link rel=\"apple-touch-icon-precomposed\" href=\"");
  stack1 = helpers._triageMustache.call(depth0, "path.media", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("/image/");
  stack1 = helpers._triageMustache.call(depth0, "link.apple-touch-icon-precomposed", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<link rel=\"author\" href=\"");
  stack1 = helpers._triageMustache.call(depth0, "link.author", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\">\n<link rel=\"stylesheet\" type=\"text/css\" media=\"all\" href=\"");
  stack1 = helpers._triageMustache.call(depth0, "path.media", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("/style/global.css\">\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["script"] = Ember.HTMLBars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<script src=\"");
  stack1 = helpers._triageMustache.call(depth0, "path.media", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("/script/global.js\"></script>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<script data-main=\"");
  stack1 = helpers._triageMustache.call(depth0, "path.media", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("/script/global\" src=\"");
  stack1 = helpers._triageMustache.call(depth0, "path.media", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("/bower_components/requirejs/require.js\"></script>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  stack1 = helpers['if'].call(depth0, "isBuild", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.program(3, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"useData":true});

});