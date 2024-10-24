function mapStringToObject(str) {
    let charMap = {};
    for (let i = 0; i < str.length; i++) {
      charMap[i + 1] = str[i];
    }
    return charMap;
  }
  
  console.log(mapStringToObject("xyz"));