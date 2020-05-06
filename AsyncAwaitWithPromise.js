first = value => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 2);
    }, 2000);
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

total = async value => {
  let firstResult = await first(value);
  let name = 'satyam';
  await new Promise((resolve, reject) => {
    for (var i = 0; i < name.length; i++) {
      // Using IIFE (Immidetialety Invoked Function Expression)
      // (i => {
      //   setTimeout(() => {
      //     console.log(`${i} Character is: ${name.charAt(i)}`);
      //     if ((i = name.length - 1)) {
      //       resolve();
      //     }
      //   }, 3000);
      // })(i);

      // Using let keyword
      let k = i;
      setTimeout(() => {
        console.log(`${k} Character is: ${name.charAt(k)}`);
        if ((k = name.length - 1)) {
          resolve();
        }
      }, 3000);
    }
  });
  console.log(`First function result is: ${firstResult}`);
  if (firstResult) {
    let secondResult = await second(firstResult);
    console.log(`Second function result is: ${secondResult}`);
    if (secondResult) {
      let thirdResult = await third(secondResult);
      console.log(`Third function result is: ${thirdResult}`);
    }
  }
  console.log(`All functions executed in synchronous manner`);
};

total(2);
