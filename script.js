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

// function which takes an array containing the names of people that like an item.
function likes(names) {
    switch(names.length) {
        case 0 :
            console.log("no one likes this");
            return ("no one likes this");
        case 1 :
            console.log(`"${names[0]} likes this"`);
            return (`"${names[0]} likes this"`);
        case 2 :
            console.log(`"${names[0]} and ${names[1]} like this"`);
            return (`"${names[0]} and ${names[1]} like this"`);
        case 3 :
            console.log(`"${names[0]}, ${names[1]} and ${names[2]} like this"`);
            return (`"${names[0]}, ${names[1]} and ${names[2]} like this"`);
        default :
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
        if (Math.abs(integers[i]) %2 == 0) {
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
                    arr[letters[i].toLowerCase()]= 1;
                }
                else {
                    arr[letters[i].toLowerCase()]= 2;
                } 
            }
        }
    }
    let count = 0;
    Object.values(arr).forEach(elem => {elem == 2 ? count++ : false});
    console.log(count);
    return(count);
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
    arr.map(elem => {obj[elem] ? obj[elem] += 1 : obj[elem] = 1;})
    // arr.map(elem => { obj[elem] > 1 ? arr.splice(arr.indexOf(elem), 1, ")") : arr.splice(arr.indexOf(elem), 1, "(") })
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] > 1) {
            arr.splice(i,1,")");
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
        n:{
            range:0,
            time:0
        },
        s:{
            range:0,
            time:0
        },
        w:{
            range:0,
            time:0
        },
        e:{
            range:0,
            time:0
        }
    }
    for (let i = 0; i < walk.length; i++) {
        switch(walk[i]) {
            case 'n' :
                walkObj.n.range+=1;
                walkObj.n.time+=1;
                break;
            case 's' :
                walkObj.s.range+=1;
                walkObj.s.time+=1;
                break;
            case 'w' :
                walkObj.w.range+=1;
                walkObj.w.time+=1;
                break;
            case 'e' :
                walkObj.e.range+=1;
                walkObj.e.time+=1;
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