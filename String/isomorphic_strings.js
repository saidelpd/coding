/**
 *
 Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 
Constraints:
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character. 
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
      
     let mapping = [];
     let reverseMapping=[];

     let stringLength = s.length; 

     if(stringLength === 1) return true;

    for(let i = 0; i < stringLength; i++)
     {

        if(mapping[s[i]] === undefined)
        {
            mapping[s[i]] = t[i];
        }

        if(reverseMapping[t[i]] === undefined)
        {
            reverseMapping[t[i]] = s[i];
        }
        
        if(mapping[s[i]] !== t[i] || reverseMapping[t[i]] !== s[i]){          
           return false;
        }    
     }   
     return true;
};

console.log(isIsomorphic('badc','baba'))

