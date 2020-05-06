function pattern1(number) {
  for (var i = 0; i < number; i++) {
    var str = '';
    for (var j = 0; j <= i; j++) {
      str += '*';
    }
    console.log(str);
  }
}

function pattern2(number) {
  for (var i = number; i > 0; i--) {
    var str = '';
    for (var j = 0; j < i; j++) {
      str += '*';
    }
    console.log(str);
  }
}

function pattern3(n) {
  for (var i = 0; i < n; i++) {
    var str = '';
    for (var j = 0; j < n - i; j++) {
      str = str + ' ';
    }
    for (var k = 0; k < 2 * i + 1; k++) {
      str = str + '*';
    }
    console.log(str);
  }
}

function pattern4(n) {
  for (var i = n; i > 0; i--) {
    var str = '';
    for (var j = n; j > i; j--) {
      str = str + ' ';
    }
    for (var k = 0; k < 2 * i - 1; k++) {
      str = str + '*';
    }
    console.log(str);
  }
}

function pattern5(n) {
  for (var i = 0; i < n; i++) {
    var str = '';
    for (var j = 0; j <= i; j++) {
      str += +'' + (j + 1);
    }
    console.log(str);
  }
}

pattern1(5);
pattern2(5);
pattern3(5);
pattern4(5);
pattern5(5);
