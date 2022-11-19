// rite a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed
function spinWords(str) {
    // console.log(str.split(''));
    let arr = str.split(' ');
    // console.log(arr[0]);
    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length >= 5) {
                arr[i] = arr[i].split('').reverse().join('');
                // console.log(arr[i].split('').reverse().join(''));
            }
        }
        console.log(arr.join(' '));
        return (arr.join(' '));
    }
    else {
        if (arr[0].split('').length >= 5) {
            console.log(arr[0].split('').reverse().join(''));
            return(arr[0].split('').reverse().join(''));
        }
        else {
            console.log(arr[0]);
            return (arr[0]);
        }
    }
}
// return words.split(' ').map(function (word) {
// return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// =======================================
// return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
// spinWords("Hey fellow warriors");

// Digital root is the recursive sum of all the digits in a number.
function digitalRoot(n) {
    // console.log(n.toString().split(''));
    // let sum = 0;
    let num = n.toString().split('');
    // console.log(num);

    if (num.length > 1) {
        
        while (num.length > 1) {
            let sum = 0;
            for (let i = 0; i < num.length; i++) {
                sum += +num[i];
            }
            // console.log(sum);
            num = sum.toString().split('');
        }
        console.log(num[0]);
        return (+num[0]);
    }
    else {
        return n;
    }
}
// n = eval(n.toString().split('').join('+'));
// if (n > 9) {
//     return digital_root(n);
// }
// return n;
// =================================
// return (n - 1) % 9 + 1;
// =================================
// if (n < 10) return n;
// return digital_root(
//     n.toString().split('').reduce(function (acc, d) { return acc + +d; }, 0));
// =================================
// digitalRoot(298203);

