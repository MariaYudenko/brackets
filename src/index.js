module.exports = function check(str, bracketsConfig) {
  let string = str,
  res = 0,
  flag = 0;
if( string.length !== 0 && res === 0 ) {
  let j = 0;
  while ( j < bracketsConfig.length ) {
    const subString = bracketsConfig[j][0] + bracketsConfig[j][1];
      if ( string.indexOf(bracketsConfig[j][0] + bracketsConfig[j][1]) !== -1 ) {
        string = string.replace(subString, '');
        flag += 1; 
        j++;
      }
    if ( flag !== 0 ) { 
      j = 0; 
      flag = 0;
    }
    else { 
      j++; 
    }
  }
  
if ( flag === 0 ) {
  res = 1;
}
}

return string === "";

}