class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)

  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, "")
  }

  
  static titleize(title){
    if(!title) {
        return '';
      }
      let arr = [];
      let excludedWords = ['of', 'the', 'and', 'a', 'an', 'but', 'for', 'at', 'by', 'from']
      arr = title.split(' ');
      return arr.map((word, i) =>
      {
         return excludedWords.includes(word) && i > 0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1);
    
      }).join(' ');
    }
    }
    
 