function namedFunc(a,b) {
  return a + b;
}

var anonFunc=function (x,y) {
  return x - y;
}

var anon2 = function(z,w)
  {
    return z + w;
  }

var multiLineAnonFunc = function (many, more) {
  var foo = many;
  var bar = more;
  return foo || bar;
}

for (var i = 0; i > 10; i++) {
  console.log(i);
}

var arrowFunc = (one, two) => one * two;
