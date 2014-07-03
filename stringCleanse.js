// Removes extra white space from a string
function cleanData(d){
 
    // Replace all instances of any white space with a single space
    var p = new RegExp("\\s+","mig");
    var d = new String(d);
    d = d.replace(p," ");
 
    // Trim white space off front of string:
    var p = new RegExp("^\\s*","mig");
    var d = new String(d);
    d = d.replace(p,"");
 
    // Trim white space off end of string:
    var p = new RegExp("\\s*$","mig");
    var d = new String(d);
    d = d.replace(p,"");
 
    return d;
}
function initCap(textStr) {
  var fTextStr   = "";
  if (textStr != null) {
    textStr = cleanData(textStr);
 
// split the string on spaces, in order to format each word in the string
    var arrTextStr = textStr.split(' ');
    for (i=0; i<arrTextStr.length; i++) {
 
// if substring contains hyphens, split on hypen to format each word in substring
      if (arrTextStr[i].indexOf('-') != -1) {
         var arrTextStr2 = arrTextStr[i].split('-');
         for (j=0; j<arrTextStr2.length; j++) {
 
// if there is a hyphen, concatenate word with proper case, then add hyphen back on
            if (arrTextStr2[j].toUpperCase() == "II" || arrTextStr2[j].toUpperCase() == "III"|| arrTextStr2[j].toUpperCase() == "IV"|| arrTextStr2[j].toUpperCase() == "VI"|| arrTextStr2[j].toUpperCase() == "VII"|| arrTextStr2[j].toUpperCase() == "VIII"|| arrTextStr2[j].toUpperCase() == "IX") {
               fTextStr += arrTextStr2[j].toUpperCase() + "-";
            } else {
               fTextStr += arrTextStr2[j].substring(0,1).toUpperCase() + arrTextStr2[j].substring(1,arrTextStr[i].length).toLowerCase() + "-";
            }
         }
 
// replace last hyphen with space per original text
         fTextStr = fTextStr.substring(0,fTextStr.length-1);
         fTextStr += " ";
      } else {
 
// if no hyphen in substring, concatenate word with proper case, then add space back on
         if (arrTextStr[i].toUpperCase() == "II" || arrTextStr[i].toUpperCase() == "III"|| arrTextStr[i].toUpperCase() == "IV"|| arrTextStr[i].toUpperCase() == "VI"|| arrTextStr[i].toUpperCase() == "VII"|| arrTextStr[i].toUpperCase() == "VIII"|| arrTextStr[i].toUpperCase() == "IX") {
            fTextStr += arrTextStr[i].toUpperCase() + " ";
         } else {
            fTextStr += arrTextStr[i].substring(0,1).toUpperCase() + arrTextStr[i].substring(1,arrTextStr[i].length).toLowerCase() + " ";
         }
      }
 
// set arrTextStr2 to null so it can be used again
      arrTextStr2 = null;
    }
 
// take last space off end of name
    fTextStr = fTextStr.substring(0,fTextStr.length-1);
 
  } else {
    var fTextStr   = "";
  }
  return fTextStr;
}
