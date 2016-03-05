var page = tabris.create("Page", {
  title: "Let's make an app",
  topLevel: true
});

var button = tabris.create("Button", {
  text: "Yo",
  layoutData: {centerX: 0, top: 100}
}).appendTo(page);

var label = tabris.create("TextView", {
  font: "24px",
  layoutData: {centerX: 0, top: [button, 50]}
}).appendTo(page);

button.on("select", function() {
  label.set("text", "ASAP!");
});

page.open();
