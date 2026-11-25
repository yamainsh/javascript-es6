let height = undefined;
let result;

function calculateHeight(n) {
    return n ??  "Height is not defined"
}

result = calculateHeight(height)

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
