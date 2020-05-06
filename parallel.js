const async = require('async');
first = cb => {
  console.log('Inside a');
  setTimeout(() => {
    cb(null, 2);
  }, 2000);
};

second = cb => {
  console.log('Inside b');
  setTimeout(() => {
    cb(null, 2 + 2);
  }, 2000);
};

third = cb => {
  console.log('Inside c');
  setTimeout(() => {
    cb(null, 4 + 2);
  }, 6000);
};

async.parallel([first, second, third], (err, res) => {
  if (err)
    console.log(`Error is: ${err}`);
  else
    console.log(`Result is:${res}`);
});
