// Task one
// The function

function contains(obj, target) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            if (contains(obj[key], target)) {
                return true;
            }
        } else if (obj[key] === target) {
            return true;
        }
    }
    return false;
}

// Sample usage:

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
};


// Test the function
// 1- True Case 
console.log(contains(nestedObject, 44)); // Should return true

// 2- False Case 
console.log(contains(nestedObject, 'foo3')); // Should return false
