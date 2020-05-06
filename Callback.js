first = (value, cb) => {
  setTimeout(() => {
    cb(value + 2, false);
  }, 2000);
};

second = (value, cb) => {
  setTimeout(() => {
    cb(value + 2, false);
  }, 2000);
};

third = (value, cb) => {
  setTimeout(() => {
    cb(value + 2, false);
  }, 2000);
};

// Callback hell means calling functions nestedly. Solution is promises.
first(2, (firstResult, error) => {
  if (!error) {
    second(firstResult, (secondResult, error) => {
      if (!error) {
        third(secondResult, (thirdResult, error) => {
          if (!error) {
            console.log(`Output is: ${thirdResult}`);
          }
        });
      }
    });
  }
});
