// 1.2;

// let productName = 'Droid';
// productName = 'Repair droid';
// console.log(productName);
// let pricePerItem = 2000;
// pricePerItem = 3500;
// console.log(pricePerItem);

// 1.3
// Change code below this line

// let topSpeed = 160;
// let distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

// 1.4

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

// 1.5

// const productName = 'Droid';
// const pricePerItem = 3500;

// Change code below this line
// const message = 'You picked Droid, price per item is 3500 credits';

// 1.6

// Change code below this line
// let pricePerDroid = 800;
// let orderedQuantity = 6;
// let deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// 1.7
// Change code below this line
// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// 1.8
// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// 1.9

// function add(a, b, c) {
// Change code below this line

//   return a + b + c;

// Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// 1.10

// function makeMessage(name, price) {
// Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
// Change code above this line
//   return message;
// }
// makeMessage(`Radar`, 6150);
// makeMessage(`Scanner`, 3500);
// makeMessage(`Reactor`, 8000);
// makeMessage(`Engine`, 4070);

// 1.11

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
// Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

// Change code above this line
//   return totalPrice;
// }
// calculateTotalPrice(5, 100);

// 1.12

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// Change code below this line

//   const message = `You ordered droids worth ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`;

// Change code above this line
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// 1.13;

// function isAdult(age) {
// Change code below this line
//   const passed = age >= 18;

// Change code above this line
//   return passed;
// }
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

// 1.14

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
// // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

// // Change code above this line
//   return isMatch;
// }

// console.log(isValidPassword(`mangodab3st`));
// console.log(isValidPassword(`kiwirul3z`));
// console.log(isValidPassword('jqueryismyjam'));

// 1.15

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
// Change this line

//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// 1.16

// function checkStorage(available, ordered) {
//   let message;
// Change code below this line
//   if (available < ordered) {
//     message = `Not enough goods in stock!`;
//   } else {
//     message = `Order is processed, our manager will contact you.`;
//   }
// Change code above this line
//   return message;
// }

// 1.17

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// 1.18

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;

//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = `Insufficient funds!`;
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }

//   return message;
// }

// 1.19

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// checkPassword('mangohackzor');
// checkPassword(null);
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');

// 1.20

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = `There are no products in the order!`;
//   } else if (ordered > available) {
//     message = `Your order is too large, there are not enough items in stock!`;
//   } else {
//     message = `The order is accepted, our manager will contact you`;
//   }

//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// 1.21

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;

//   return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

// 1.22

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip';

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent('pro'));
// console.log(checkIfCanAccessContent('starter'));
// console.log(checkIfCanAccessContent('vip'));
// console.log(checkIfCanAccessContent('free'));

// 1.23

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;

//   return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

// 1.24

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent <= 49999) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent <= 19999) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

// 1.25
// function checkStorage(available, ordered) {
//   let message;
// Change code below this line

//   if (ordered > available) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }

// message =
//   ordered > available
//     ? 'Not enough goods in stock!'
//     : 'The order is accepted, our manager will contact you';

//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// 1.26

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   message =
//     password === ADMIN_PASSWORD
//       ? 'Access is allowed'
//       : 'Access denied, wrong password!';
//   return message;
// }
// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('angul4r1sl1f3'));
// console.log(checkPassword('r3actsux'));

// 1.27

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (type) {
//     case 'professional':
//       price = 20;
//       break;

//     case 'organization':
//       price = 50;
//       break;

//     case 'starter':
//       price = 0;
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// console.log();

// 1.28

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line

//   // if (password === null) {
//   //   message = "Canceled by user!";
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = "Welcome!";
//   // } else {
//   //   message = "Access denied, wrong password!";
//   // }

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;

//     case 'jqueryismyjam':
//       message = 'Welcome!';
//       break;

//     case 'mangohackzor':
//       message = 'Access denied, wrong password!';
//       break;

//     default:
//       message = 'Access denied, wrong password!';
//       break;
//   }
//   // Change code above this line
//   return message;
// }

// 1.29

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case 'China':
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Chile':
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Australia':
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case 'Jamaica':
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = `Sorry, there is no delivery to your country`;
//   }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost('Australia'));
// console.log(getShippingCost('Germany'));
// console.log(getShippingCost('China'));
// console.log(getShippingCost('Chile'));
// console.log(getShippingCost('Jamaica'));
// console.log(getShippingCost('Sweden'));

// 1.30

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// getNameLength('Poly');
// getNameLength('Harambe');
// getNameLength('Billy');
// getNameLength('Joe');

// 1.31
// const courseTopic = 'JavaScript essentials';
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// console.log(courseTopicLength);
// const firstElement = courseTopic[0];
// console.log(firstElement);
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(lastElement);
// // Change code above this line

// 1.32
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// console.log(getSubstring('Hello world', 3));
// console.log(getSubstring('Hello world', 6));
// console.log(getSubstring('Hello world', 8));
// console.log(getSubstring('Hello world', 11));
// console.log(getSubstring('Hello world', 0));

// 1.33
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + `...`;
//   }
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage('Curabitur ligula sapien', 16));
// console.log(formatMessage('Curabitur ligula sapien', 23));
// console.log(formatMessage('Vestibulum facilisis purus nec', 20));
// console.log(formatMessage('Vestibulum facilisis purus nec', 30));
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));

// 1.34

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// console.log(normalizeInput('Hello world'));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput('Big SALE'));

// 1.35

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }
// console.log(checkForName('Egor Kolbasov', 'Egor'));
// console.log(checkForName('Egor Kolbasov', 'egor'));
// console.log(checkForName('Egor Kolbasov', 'egOr'));
// console.log(checkForName('Vadim Nekrasov', 'Dima'));

// 1.36

function checkForSpam(message) {
  let result;
  // Change code below this line
  message = message.toLowerCase();
  if (message.includes('spam') || message.includes('sale')) {
    result = true;
  } else {
    result = false;
  }

  // Change code above this line
  return result;
}
console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('Amazing SalE, only tonight!'));
console.log(checkForSpam('Trust me, this is not a spam message'));
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));
