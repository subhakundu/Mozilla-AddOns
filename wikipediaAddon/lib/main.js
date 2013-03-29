var widgets=require("sdk/widget");
var tabs=require("sdk/tabs");
var self=require("sdk/self");
var widget=widgets.Widget({
id:"wikipedia-link",
label: "Wikipedia Website",
contentURL: self.data.url("wikipedia.png"),
onClick: function(){
tabs.open("http://www.wikipedia.org/");
}});
