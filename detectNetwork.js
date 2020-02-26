// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  
  var prefix2 = parseInt(cardNumber.substring(0,2));
  var prefix3 = parseInt(cardNumber.substring(0,3));
  var prefix4 = parseInt(cardNumber.substring(0,4));
  var prefix6 = parseInt(cardNumber.substring(0,6));
  if (cardNumber[0] === '4' && [13,16,19].includes(cardNumber.length)) {
  	if ([4903,4905,4911,4936].includes(prefix4) && [16,19].includes(cardNumber.length)) {
  		return 'Switch';
  	} else {
  		return 'Visa';
  	}	
  }
  if ([38,39].includes(prefix2) && cardNumber.length === 14) {
    return 'Diner\'s Club';
  } else if ([34,37].includes(prefix2) && cardNumber.length === 15) {
    return 'American Express';
  } else if ([51,52,53,54,55].includes(prefix2) && cardNumber.length === 16) {
    return 'MasterCard';
  } else if ([5018, 5020, 5038, 6304].includes(prefix4) && (12 <= cardNumber.length && cardNumber.length <= 19)) {
    return 'Maestro';
  } else if ((prefix2 === 65 || prefix4 === 6011 || (644 <= prefix3 && prefix3 <= 649)) && [16,19].includes(cardNumber.length)) {
  	return 'Discover';
  } else if (([4903,4905,4911,4936,6333,6759].includes(prefix4) || [564182,633110].includes(prefix6)) && [16,18,19].includes(cardNumber.length)) {
  	return 'Switch';
  } else if (((622126 <= prefix6 && prefix6 <= 622925) || (624 <= prefix3 && prefix3 <= 626) || (6282 <= prefix4 && prefix4 <= 6288)) && (16 <= cardNumber.length && cardNumber.length <= 19)) {
  	return 'China UnionPay';
  }
  return -1;
};
