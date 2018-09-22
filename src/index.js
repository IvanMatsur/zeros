module.exports = function getZerosCount(number) {
  var result = 0;

  while(number > 5) {
    result += parseInt(number / 5);
    number = number / 5;
  } 
  
  return result;
}