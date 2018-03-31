var reverse = function(str) {
  var stack = [];
  for (var i = str.length - 1; i >= 0; i--) {
    stack.push(str[i]);
  }
  return stack.join('');
};

var firstUppercase = function(str) {
  str = reverse(str);
  str = str.toLowerCase().split(' ');
  var p = /[a-z]/i;

  for (var i = 0; i < str.length; i++) {
    var char = '';
    for (var j = 0; j < str[i].length; j++) {
      if (p.test(str[i].charAt(j)) & (char === '')) {
        char = str[i].charAt(j);
      }
      str[i] = str[i].replace(char, function(s) {
        return s.toUpperCase();
      });
    }
  }
  str = str.join(' ');
  return str;
};

firstUppercase('Hello World');
