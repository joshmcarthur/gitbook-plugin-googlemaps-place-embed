
var tester = require("gitbook-tester"),
    assert = require("assert");

var myPlugin = require("./index").filters.placeMap;

// Unit tests
var validUrl = "https://www.google.co.nz/maps/place/Imperial+War+Museum/@51.4958308,-0.1108502,17z/data=!3m1!4b1!4m5!3m4!1s0x4876012c1f3ceed3:0xfed51d88d007b387!8m2!3d51.4958308!4d-0.1086615";
var validUrlDifferentDomain = "https://www.google.com/maps/place/Imperial+War+Museum/@51.4958308,-0.1108502,17z/data=!3m1!4b1!4m5!3m4!1s0x4876012c1f3ceed3:0xfed51d88d007b387!8m2!3d51.4958308!4d-0.1086615";
var invalidUrl = "https://google.com/mapz";


assert(myPlugin(invalidUrl) === invalidUrl, "Invalid URL returns URL only");
assert(
  myPlugin(validUrl).replace(".co.nz", ".com") === myPlugin(validUrlDifferentDomain), 
  "A different but valid TLD yields an identical result"
);

var normalResult = myPlugin(validUrl);
var expectedResponse = "[![Imperial+War+Museum](https://maps.googleapis.com/maps/api/staticmap?center=51.4958308,-0.1108502&zoom=17&size=600x600)](https://www.google.co.nz/maps/place/Imperial+War+Museum/@51.4958308,-0.1108502,17z/data=!3m1!4b1!4m5!3m4!1s0x4876012c1f3ceed3:0xfed51d88d007b387!8m2!3d51.4958308!4d-0.1086615)";
assert(normalResult === expectedResponse, "Response matches expected format");

console.info("Unit tests finished");
console.info("Starting integration tests...");
var expectedHtml = '<p><a href="https://www.google.co.nz/maps/place/Imperial+War+Museum/@51.4958308,-0.1108502,17z/data=!3m1!4b1!4m5!3m4!1s0x4876012c1f3ceed3:0xfed51d88d007b387!8m2!3d51.4958308!4d-0.1086615" target="_blank"><img src="https://maps.googleapis.com/maps/api/staticmap?center=51.4958308,-0.1108502&amp;zoom=17&amp;size=600x600" alt="Imperial+War+Museum"></a></p>';
tester.builder()
  .withContent("{{ \"https://www.google.co.nz/maps/place/Imperial+War+Museum/@51.4958308,-0.1108502,17z/data=!3m1!4b1!4m5!3m4!1s0x4876012c1f3ceed3:0xfed51d88d007b387!8m2!3d51.4958308!4d-0.1086615\" | placeMap }}")
  .withBookJson({"plugins": ["googlemaps-place-embed"]})
  .create()
  .then(function(result) {
    assert(result[0].content, expectedHtml, "Produced HTML matches expected response");
  })
  .fin(function() {
    console.log("Integration tests finished");
  })
  .done();



