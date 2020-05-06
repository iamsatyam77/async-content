const async = require('async');
first = cb => {
  setTimeout(() => {
    cb(null, 2);
  }, 2000);
};

second = (value, cb) => {
  setTimeout(() => {
    cb(null, value + 2);
  }, 2000);
};

third = (value, cb) => {
  setTimeout(() => {
    cb(null, value + 2);
  }, 2000);
};

async.waterfall([first, second, third], (err, res) => {
  if (err)
    console.err(`Error is: ${err}`);
  else
    console.log(`Result is:${res}`);
});
