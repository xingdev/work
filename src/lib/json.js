const json = JSON.stringify({ dd: "dd{{}}{d" });

var a = json.replace(/"[^"]*"/g, function(match) {
  var cls = "number";
  if (/^"/.test(match)) {
    if (/:$/.test(match)) {
      cls = "key";
    } else {
      cls = "string";
    }
  } else if (/true|false/.test(match)) {
    cls = "boolean";
  } else if (/null/.test(match)) {
    cls = "null";
  }
  return '<span class="' + cls + '">' + match + "</span>";
});

var b = a.replace(/^{|}$/g, function(match) {
  console.log(match);
  return '"' + match + '"';
});

console.log(b);
