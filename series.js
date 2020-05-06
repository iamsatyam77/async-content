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
  }, 2000);
};

async.series([first, second, third], (err, res) => {
  if (err)
    console.err(`Error is: ${err}`);
  else
    console.log(`Result is:${res}`);
});
