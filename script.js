const obj = {
    name: "alex",
    age: 30
};

const arr = [1, 2, 3, 4, 5];

const str = "Hello world";

const num = 17;

function deepCopy(data) {
    let copiedData;
    if (data === null) return null;
    if (Array.isArray(data)) {
        copiedData = [];
        copiedData = data.slice(0);
    } else if (typeof data === "object" && !Array.isArray(data)) {
        copiedData = {};
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                copiedData[key] = deepCopy(data[key]);
            }
        }
    } else {
        copiedData = data;
    }
    return copiedData;
}

console.log(deepCopy(obj));
console.log(deepCopy(arr));
console.log(deepCopy(str));
console.log(deepCopy(num));
