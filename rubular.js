// ==UserScript==
// @name        rubular
// @namespace   rubular.com
// @include     http://rubular.com/
// @version     1
// @grant       none
// ==/UserScript==


// this is how it looks like: https://monosnap.com/file/GbI7CKziEtVBpJJ7s3hp3Mze5vwcY9

function addText(targetNode, text){
  var p = document.createElement("p");
  var textnode = document.createTextNode(text);
  p.appendChild(textnode);
  $(p).setAttribute('style', "margin: 0.2em; font-family: sans-serif;");
  targetNode.appendChild(p);
}
function init(){
  var $ = window.$;
  var body = document.getElementsByTagName('body')[0];
  var main = document.getElementById('main');
  $(main).setAttribute('position', 'relative');
  // A $( document ).ready() block.
  console.log("hi");
  var node = document.createElement("DIV");
  addText(node, "grey(?=hound) matches grey, but only if it is followed by hound");
  addText(node, "grey(?!hound) matches grey, but only if it is not followed by hound");
  addText(node, "(?<=grey)hound matches hound, but only if it is preceeded by hound");
  addText(node, "(?<!grey)hound matches hound, but only if it is not preceeded by hound");
  var style = 'position: absolute; width: 35em; height: 10em; top: 0; left: 0; color: white; text-align: left;';
  style = style + 'text-shadow: 3px 3px 3px #232323, -3px -3px 3px #232323, -3px 3px 3px #232323, 3px -3px 3px #232323;';
  $(node).setAttribute('style', style );

  main.appendChild(node);
}

window.setTimeout(init, 2000);
