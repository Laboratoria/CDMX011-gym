function removeChar(str){
    let letters= str.split('')
    letters.pop(),letters.shift();
     return letters.join('');
   };

   removeChar('eloquent')