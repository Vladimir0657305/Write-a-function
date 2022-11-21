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
            return (arr[0].split('').reverse().join(''));
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

// function which takes an array containing the names of people that like an item.
function likes(names) {
    switch (names.length) {
        case 0:
            console.log("no one likes this");
            return ("no one likes this");
        case 1:
            console.log(`"${names[0]} likes this"`);
            return (`"${names[0]} likes this"`);
        case 2:
            console.log(`"${names[0]} and ${names[1]} like this"`);
            return (`"${names[0]} and ${names[1]} like this"`);
        case 3:
            console.log(`"${names[0]}, ${names[1]} and ${names[2]} like this"`);
            return (`"${names[0]}, ${names[1]} and ${names[2]} like this"`);
        default:
            console.log(`"${names[0]}, ${names[1]} and ${names.length - 2} others like this"`);
            return (`"${names[0]}, ${names[1]} and ${names.length - 2} others like this"`);
    }
}
// return {
//     0: 'no one likes this',
//     1: `${names[0]} likes this`,
//     2: `${names[0]} and ${names[1]} like this`,
//     3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
//     4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
// }[Math.min(4, names.length)]
// ============================================

// likes(['Alex', 'Jacob', 'Mark', 'Max']);

// Write a method that takes the array as an argument and returns this "outlier" N.
function findOutlier(integers) {
    let countOdd = 0;
    let countEven = 0;
    for (let i = 0; i < 3; i++) {
        if (Math.abs(integers[i]) % 2 == 0) {
            countEven++;
        }
        else {
            countOdd++;
        }
    }
    if (countEven > countOdd) {
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 != 0) console.log(integers[i]);
        }
        // integers.forEach(elem => {if(elem%2 != 0) console.log(elem)});
        // integers.some(elem => {
        //     if (elem % 2 != 0) {
        //         console.log(elem); 
        //         return (elem);
        //     }
        // });
    }
    else {
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 == 0) console.log(integers[i]);
        }
        // integers.forEach(elem => { if (elem % 2 == 0) console.log(elem)});
        // integers.some(elem => { 
        //     if (elem % 2 == 0) {
        //         console.log(elem); 
        //         return (elem);
        //     }
        // });
    }
}
// const even = integers.filter(int => int % 2 === 0);
// const odd = integers.filter(int => int % 2 !== 0);
// return even.length === 1 ? even[0] : odd[0];
// =============================
// return ints.slice(0, 3).reduce((a, b) => b % 2 === 0 ? a : a + 1, 0) >= 2 ?
//     ints.find(i => i % 2 === 0) : ints.find(i => i % 2 !== 0);
// =============================

// findOutlier([
//     97448739, -70307539, 74282899,
//     39892693, 180894747, 162641409,
//     -70810875, 141270229, 121097961,
//     -184784073, 161635979, -93606059,
//     197748443, 136438391, -106201977,
//     -165619227, 149589075, 182225049,
//     55514649, 99671457, -125250663,
//     -169412445, -144419569, 34349617,
//     115499046
// ]);

// Write a function that will return the count of distinct case-insensitive alphabetic characters
function duplicateCount(text) {
    let arr = {};
    let letters = '';
    letters = text.split('');
    console.log(letters);
    for (let i = 0; i < letters.length; i++) {
        for (let k = i; k < letters.length; k++) {
            console.log(arr[letters[i].toLowerCase()])
            if (letters[i].toLowerCase() == letters[k].toLowerCase()) {
                if (!arr[letters[i].toLowerCase()]) {
                    arr[letters[i].toLowerCase()] = 1;
                }
                else {
                    arr[letters[i].toLowerCase()] = 2;
                }
            }
        }
    }
    let count = 0;
    Object.values(arr).forEach(elem => { elem == 2 ? count++ : false });
    console.log(count);
    return (count);
}
// return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// ==============================
// return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi)).size

// duplicateCount("Indivisibilities");

// is to convert a string to a new string
function duplicateEncode(word) {
    console.log(word);
    let obj = {};
    let arr = word.split('').map(elem => elem.toLowerCase());
    arr.map(elem => { obj[elem] ? obj[elem] += 1 : obj[elem] = 1; })
    // arr.map(elem => { obj[elem] > 1 ? arr.splice(arr.indexOf(elem), 1, ")") : arr.splice(arr.indexOf(elem), 1, "(") })
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] > 1) {
            arr.splice(i, 1, ")");
        }
        else {
            arr.splice(i, 1, "(");
        }
    }
    console.log(arr.join(''));
    return (arr.join(''));
}
// return word
//     .toLowerCase()
//     .split('')
//     .map(function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// =================================
// const duplicateEncode = w => w.replace(/./g, c => (new RegExp(`([${c}]).*\\1`, 'gi')).test(w) ? ')' : '(');
// =================================
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/solutions/javascript
// duplicateEncode(" ( ( )");

// create a function that will return true if the walk the app gives you will take you exactly ten minutes and will return you to your starting point. 
function isValidWalk(walk) {
    console.log(walk);
    let walkObj = {
        n: {
            range: 0,
            time: 0
        },
        s: {
            range: 0,
            time: 0
        },
        w: {
            range: 0,
            time: 0
        },
        e: {
            range: 0,
            time: 0
        }
    }
    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n':
                walkObj.n.range += 1;
                walkObj.n.time += 1;
                break;
            case 's':
                walkObj.s.range += 1;
                walkObj.s.time += 1;
                break;
            case 'w':
                walkObj.w.range += 1;
                walkObj.w.time += 1;
                break;
            case 'e':
                walkObj.e.range += 1;
                walkObj.e.time += 1;
                break;
        }
    }
    console.log(walkObj.n.range, walkObj.s.range, walkObj.w.range, walkObj.e.range, walkObj.n.time, walkObj.s.time, walkObj.w.time, walkObj.e.time)
    if ((walkObj.n.range - walkObj.s.range == 0) && (walkObj.w.range - walkObj.e.range == 0) && (walkObj.w.range - walkObj.e.range == 0) && walkObj.n.time + walkObj.s.time + walkObj.w.time + walkObj.e.time == 10) {
        console.log(true);
        return true;
    }
    else {
        console.log(false);
        return false;
    }
}
// var res = { n: 0, w: 0, s: 0, e: 0 };
// walk.forEach((c) => res[c]++);
// return walk.length === 10 && res.n == res.s && res.e == res.w;
// ================
// return walk.length == 10 && !walk.reduce(function(w,step){ return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
// ================
// function count(c) { return walk.filter(function (v) { return v == c }).length }
// return walk.length == 10 && count('w') == count('e') && count('n') == count('s')
// ================

// isValidWalk(['e', 'w', 'e', 'w', 'n', 's', 'n', 's','e', 'w']);

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
function persistence(num) {
    console.log(num);
    if (num < 10) return 0;
    let count = 0;
    let n = num.toString().split('');
    while (n.length > 1) {
        let mult = n.reduce((prev, cur) => +prev * +cur);
        n = mult.toString().split('');
        count++;
    }
    console.log(count);
    return count;
}
// persistence=(n,c)=>n>9?persistence(n.toString().split('').reduce((x,y)=>x*y),c?(c+1):1):c?c:0
// ================

// persistence(999);

// to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
function order(words) {
    let outputWords = [];
    words.split(' ').forEach(elem => { elem.split('').forEach(item => parseInt(item) ? outputWords[parseInt(item) - 1] = elem : false) });
    console.log(outputWords.join(' '));
    return (outputWords.join(' '));
}
// order("4of Fo1r pe6ople g3ood th5e the2");

// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
function toCamelCase(str) {
    if (!str) return ('');
    console.log(str);
    let out = '';
    let output = [];
    let prev = 0;
    out = str.split('')
    console.log(out);
    for (let i = 0; i < out.length; i++) {
        if (out[i] == "_" || out[i] == "-") {
            output.push(out.slice(prev, i).join(''))
            prev = i + 1;
        }
        else {
            if (i == out.length - 1) {
                output.push(out.slice(prev, i + 1).join(''))
            }
        }
    }
    console.log(output);

    out = output.map(elem => (elem.charAt(0).toUpperCase() + elem.slice(1)));
    out[0] = output[0];
    console.log(out.join(''));
    return (out.join(''));
}
// return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// ===================
// return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
// ===================
// return str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase());
// toCamelCase("the_stealth-warrior");

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other
var uniqueInOrder = function (iterable) {
    console.log(iterable);
    let out = [];
    let prev = '';
    let arr = [];
    if (typeof iterable == "string") {
        arr = iterable.split('');
    }
    else {
        arr = iterable;
    }
    prev = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != prev) out.push(prev);
        prev = arr[i];
        if (i == arr.length - 1) out.push(prev);
    }
    console.log(out);
    return (out);
}
// return [...iterable].filter((a, i) => a !== iterable[i-1])
// =====================
// https://www.codewars.com/kata/54e6533c92449cc251001667/solutions/javascript
// =====================
// return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
// =====================
// const uniqueInOrder = d => [...d].filter((x, i, a) => x != a[i + 1])
// =====================
// return Array.prototype.filter.call(iterable, function(current, index){ return iterable[index - 1] !== current})
// =====================
// return Array.prototype.reduce.call(iterable, function(a,b) { if (a[a.length-1] !== b) a.push(b); return a; }, []);
// uniqueInOrder("ABBCcAD");

//  it splits the string into pairs of two characters.
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
function solution(str) {
    console.log([...str]);
    let arr = [];
    let out = [];
    arr = [...str];
    for (let i = 0; i < arr.length; i += 2) {
        out.push(arr[i] + (arr[i + 1] ? arr[i + 1] : "_"))
    }
    console.log(out);
    return (out);
}
// return (s+"_").match(/.{2}/g)||[]
// ====================
// const solution = str => ((str+"_").match(/../g)||[]);
// return str.split("").map((e,i) => i % 2 === 0 ? e + (str[i+1] || "_") : false).filter(e => e)
// ====================
// solution("abcdefg");

// sort the odd numbers in ascending order while leaving the even numbers at their original positions.
https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
function sortArray(array) {
    console.log(array);
    let outNum = [];
    let outInd = [];
    array.forEach(elem => (elem % 2 != 0) ? outNum.push(elem) : elem);
    array.forEach((elem, ind) => (elem % 2 != 0) ? outInd.push(ind) : elem);
    outNum.sort((a, b) => a - b).map((elem, ind) => array[outInd[ind]] = elem);
    // let arr = outNum.map( (elem, ind) => array[outInd[ind]]= elem );
    console.log(array);
    console.log(outNum);
    console.log(outInd);
    return (array);

    // for (let index = 0; index < outNum.length; index++) {
    //     array[outInd[index]] = outNum[index];
    // }
    // console.log(array);
}
// var odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
// return array.map(elem => elem % 2 === 0 ? elem : odd.shift());
// ===========================
// const odds = array.filter(n => n & 1).sort((a, b) => a - b);
// return array.map(n => n & 1 ? odds.shift() : n);
// ===========================
// sortArray=(a,b=a.filter(a=>a%2).sort((a,b)=>a-b))=>a.map(a=>a%2?b.shift():a)
// ===========================
// sortArray([1, 111, 11, 11, 2, 1, 5, 0]);

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
function countSmileys(arr) {
    console.log(arr);
    let count = 0;
    let valid = [":)", ":D", ";-D", ":~)"]
    for (let index = 0; index < arr.length; index++) {
        if (arr[index].length == 2) {
            if (arr[index][0] == ":" || arr[index][0] == ";") {
                if (arr[index][1] == ")" || arr[index][1] == "D") {
                    count++
                }
            }
        }
        else if (arr[index].length == 3) {
            if (arr[index][0] == ":" || arr[index][0] == ";") {
                if (arr[index][1] == "-" || arr[index][1] == "~") {
                    if (arr[index][2] == ")" || arr[index][2] == "D") {
                        count++
                    }
                }

            }
        }

    }
    console.log(count);
    return (count);
}
// return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// ==========================
// const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);
// ==========================
// countSmileys=arr=> arr.filter(v => /(:|;)(-|~)?(\)|D)/.test(v)).length;
// ==========================
// countSmileys([';D', ':-(', ':-)', ';~)']);

// our task is to return the first longest string consisting of k consecutive strings taken in the array.
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/solutions/javascript
function longestConsec(strarr, k) {
    console.log(strarr);
    if (strarr == [] || k <= 0 || k > strarr.length) return ('');
    let count = strarr[0];
    for (let i = 0; i < strarr.length; i++) {
        let temp = '';
        for (let j = i; j < i + k; j++) {
            if (i + k <= strarr.length) { temp += strarr[j]; }
            if (temp.length > count.length) count = temp;
        }
    }
    console.log(count);
    return (count);
}
// return (a.length == 0 || k > a.length || k < 1) ? '' : a.reduce(function (s, c, i) {
//     return i + k > a.length || s.length >= a.slice(i, i + k).join('').length ? s : a.slice(i, i + k).join('');
// }, '');
// ==========================
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2);

// You will be given a number and you will need to return it as a string in Expanded Form.
// https://www.codewars.com/kata/5842df8ccbd22792a4000245
function expandedForm(num) {
    console.log(num);
    let out = [];
    let temp = '';
    for (let i = 1; i <= num.toString().length; i++) {
        temp = (num / 10 ** i) % 1 * 10 ** i;
        out.push(Math.round(temp).toString());
        fractional = num - Math.round(temp);
        num = fractional;
    }
    out.reverse()
    var arr = out.reduce(function (acc, item) {
        if (item != 0) acc += " + " + item;
        return (acc)
    })
    console.log(`"${arr}"`);
    return (`"${arr}"`);
}
// const expandedForm = n => n.toString()
//     .split("")
//     .reverse()
//     .map((a, i) => a * Math.pow(10, i))
//     .filter(a => a > 0)
//     .reverse()
//     .join(" + ");
// ===============================
// return String(num)
//     .split("")
//     .map((num, index, arr) => num + "0".repeat(arr.length - index - 1))
//     .filter((num) => Number(num) != 0)
//     .join(" + ")
// ===============================
// if (num < 10) return `${num}`;
// let over = num % (Math.pow(10, (num.toString().length - 1)));
// if (!over) return `${num}`;
// return `${num - over} + ${expandedForm(over)}`;
// ===============================
// expandedForm = n => [...String(n)].reverse().map((x,i) => x == '0' ? '' : x + '0'.repeat(i)).filter(x => x != '').reverse().join(' + ')
// ===============================
// const expandedForm = n => ("" + n).split("").map((d, i, a) => d + "0".repeat(a.length - i - 1)).filter(m => +m).join(" + ");
// ===============================
// [...`${num}`].reverse().map((val, idx) => val * 10 ** idx).reverse().filter(Boolean).join(` + `);
// ===============================

// expandedForm(54027059);

// Complete the solution so that the function will break up camel casing, using a space between words.
// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
function solution(string) {
    console.log(string.split('').map((val, ind) => val.charAt(0) == val.charAt(0).toUpperCase() ? val = " " + val : val).join(''))
    return string.split('').map((val, ind) => val.charAt(0) == val.charAt(0).toUpperCase() ? val = " " + val : val).join('');
};
// return(string.replace(/([A-Z])/g, ' $1'));
// =========================
// solution("camelCasingTest");

