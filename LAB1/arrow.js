// write a fxn  number b/w 0 to 9  and return in words using arrow fxn
const numberToWords = (num) => {
  switch (num) {
    case 0: return 'Zero';
    case 1: return 'One';
    case 2: return 'Two';
    case 3: return 'Three';
    case 4: return 'Four';
    case 5: return 'Five';
    case 6: return 'Six';
    case 7: return 'Seven';
    case 8: return 'Eight';
    case 9: return 'Nine';
    default: return 'Invalid';
  }
};
console.log(numberToWords(0)); 
console.log(numberToWords(5)); 
console.log(numberToWords(9)); 
console.log(numberToWords(12)); 



