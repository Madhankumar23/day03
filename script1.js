//Compare two json have same properties without order
let obj1={"name":"Person 1","age":5};
let obj2={"age":5,"name":"Person 1"};

//option 1:
//using javascript
//Convert JSON to String:
//Convert both JSON objects to strings using JSON.stringify. This ensures that the order of properties doesn't affect the comparison.
var objString1=JSON.stringify(obj1);
var objString2=JSON.stringify(obj2);

//Compare String Representations:

if(objString1===objString2){
    console.log("JSON Objects are equal");
}
else{
    console.log("JSON objects are not equal.");
}

//Option 2:
//Using Node.js we can install Lodash using npm
//By "isEqual" function from lodash to compare the JSON Objects
const _ = require('lodash');
if (_.isEqual(obj1, obj2)) {
    console.log("JSON objects are equal.");
  } else {
    console.log("JSON objects are not equal.");
  }