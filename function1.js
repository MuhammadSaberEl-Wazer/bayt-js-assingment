// Task one
// The function of checking true and false of callback

function all(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
}


// _________________________________________________

// Sample usage:
//   1- False Case 

var allAreLessThanSeven = all([1, 2, 9], function (num) {
    return num < 7;
});

console.log(allAreLessThanSeven); // false

// ______________________

//   1- True Case 

var allAreLessThanSeven = all([1, 2, 5], function (num) {
    return num < 7;
});

console.log(allAreLessThanSeven); // True
