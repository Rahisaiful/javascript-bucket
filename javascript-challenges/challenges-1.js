/*  Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. */


function LongestWord(sen) {

    // code goes here
    let stringToArray = sen.split( ' ' );
  
    let t = stringToArray.sort( function( a, b ) {
  
      return b.length - a.length;
  
    } );
    
    return t.shift();
      
  }
     
  // keep this function call here 
  LongestWord('This challenge to find large word');                            
  
  
    