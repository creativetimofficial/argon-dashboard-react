/*
This file is for changeing the broken links scripts src to the right ones
*/
const fs = require('fs');

let fileContents = fs.readFileSync("./broken-links/documentation/overview/index.html");

fileContents = fileContents.toString();

let contentsOfDirectory = fs.readdirSync("./build/static/js/", {
  withFileTypes: true
});
contentsOfDirectory.forEach((object, index) => {
  if(object.name.indexOf("map") === -1 && object.name.indexOf("runtime") === -1) {
    if(object.name.indexOf("main") === -1){
      fileContents = fileContents.replace("{{chunkJS}}", "../../static/js/" + object.name);
    } else {
      fileContents = fileContents.replace("{{mainChunkJS}}", "../../static/js/" + object.name);
    }
  }
});

contentsOfDirectory = fs.readdirSync("./build/static/css/", {
  withFileTypes: true
});
contentsOfDirectory.forEach((object, index) => {
  if(object.name.indexOf("map") === -1 && object.name.indexOf("runtime") === -1) {
    if(object.name.indexOf("main") === -1){
      fileContents = fileContents.replace("{{chunkCSS}}", "../../static/css/" + object.name);
    } else {
      fileContents = fileContents.replace("{{mainChunkCSS}}", "../../static/css/" + object.name);
    }
  }
});

fs.writeFileSync("./build/documentation/overview/index.html",fileContents);
