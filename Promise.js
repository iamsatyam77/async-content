//! Calling function is in synchronous manner but content inside first function
//! should be exexuted in asynchronous manner.
first = value => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('After');
      resolve(value + 2);
    }, 2000);
    console.log('Before');  // Executed before the After console.
  });
};

second = value => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 2);
    }, 2000);
  });
};

third = value => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 2);
    }, 2000);
  });
};

first(2)
    .then(firstResult => {
      return second(firstResult);
    })
    .then(secondResult => {
      return third(secondResult);
    })
    .then(thirdResult => {
      console.log(`Output is: ${thirdResult}`);
    });
