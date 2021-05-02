02 / 05 / 2021
Question 1:
    function arrayFor(array) {
        for (var i = 0; i < array.length; i++) {
            console.log(array[i])
        }
    }
undefined
arrayFor([1, 2, 3, 4, 5])
1
2
3
4
5
undefined
Question 2;
function arrayWhile(array) {
    var i = 0
    while (i < array.length) {
        console.log(array[i])
        i++
    }
}
undefined
arrayWhile([1, 2, 3, 4])
1
2
3
4
undefined
Question 3;
function sum(array) {
    var result = 0
    for (var i = 0; i < array.length; i++) {
        result = result + array[i]
    }
    return result
}
undefined
sum([1, 2, 3, 4, 5])
15
sum([1, 2, 3])
6
Question 4;
function sumeveryother(array) {
    var result = 0
    for (var i = 0; i < array.length; i = i + 2) {
        result = result + array[i]
    }
    return result
}
undefined
sumeveryother([1, 2, 3, 4, 5])
9
sumeveryother([1, 2, 4])
5
Question 5;
function sumStartAt(array, index) {
    var result = 0
    for (var i = index; i < array.length; i++) {
        result = result + array[i]
    }
    return result
}
undefined
sumStartAt([1, 2, 3, 4, 5], 1)
14
sumStartAt([1, 2, 4], 2)
4
Question 6;
function sumUntil(array, index) {
    var result = 0
    for (var i = 0; i <= index; i++) {
        result = result + array[i]
    }
    return result
}
undefined
sumUntil([1, 2, 3, 4, 5], 2)
6
Question 7;
function subtractReverse(array) {
    var x = array.length
    var result = array[x - 1]
    for (var i = array[x - 2]; i >= 0; i--) {
        result = result - array[i]
    }
    return result
}
undefined
subtractReverse([0, 1, 2])
1
subtractReverse([0, 1, 2, 3])
0
subtractReverse([0, 1, 2, 3, 4]) -
    2
subtractReverse([1, 2, 3, 4]) -
    6
Question n 8;
function product(array) {
    var result = 1
    for (var i = 0; i < array.length; i++) {
        result = result * array[i]
    }
    return result
}
undefined
product([1, 2, 3])
6
product([0, -1, -2])
0
Question 9;
function average(array) {
    var result = 0
    for (var i = 0; i < array.length; i++) {
        result = result + array[i]
    }
    return result / array.length
}
average([1, 2, 3])
2
average([1, 2, 0])
1
Question 10
function square(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] * array[i]
    }
    return array
}
square([1, 2, 3])
    (3) [1, 4, 9]
Question 11

function isArray(array) {}
function isArray(array) {
    if (Array.isArray(array)) { return true } else { return false }
}
undefined
isArray(23)
false
isArray('hi')
false
isArray([1, 2])
true



Question 12

function min(array) {
    var min = array[0]
    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min
}
min([1, 2, 3])
1
min([5, 2, 3])
2
Question 13
function max(array) {
    var max = array[0]
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}
max([5, 2, 3])
5
max([1, 2, 3])
3
Question 14
function shortestString(array) {
    var short = array[0].length
    for (var i = 1; i < array.length; i++) {
        if (array[i].length < short) {
            short = array[i].length
        }
    }
    return short
}
shortestString(['hi', 'cat', 'hello'])
2
shortestString(['hisdf', 'cat', 'hello'])
3
Question 15
function longestString(array) {
    var long = array[0].length
    for (var i = 1; i < array.length; i++) {
        if (array[i].length > long) {
            long = array[i].length
        }
    }
    return long
}
longestString(['hi', 'cat', 'hello'])
5
longestString(['hi', 'cat', 'hello12345987'])
13
Question 16
// 1st try
function minMax(array) {
    return [min(array), max(array)]
}
minMax([1, 5, 4, 3])
    (2) [1, 5]
minMax([1, 5, 4, -1])
    (2) [-1, 5]
    // 2nd try
function minMax(array) {
    var min = array[0]
    var max = array[0]
    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
        if (array[i] > max) {
            max = array[i]
        }
    }
    return [min, max]
}
Question 17
function shortestString(array) {
    var short = array[0].length
    for (var i = 1; i < array.length; i++) {
        if (array[i].length <= short) {
            short = array[i]
        }
    }
    return short
}
function longestString(array) {
    var long = array[0].length
    for (var i = 1; i < array.length; i++) {
        if (array[i].length >= long) {
            long = array[i]
        }
    }
    return long
}
function shortestLongest(array) {
    return [shortestString(array), longestString(array)]
}
shortestLongest(['hisdf', 'cat', 'hello'])
    (2) ["cat", "hello"]
Question 18
function multiplyBy(array, number) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] * number
    }
    return array
    multiplyBy([5, 3, 4], 2)
        (3) [10, 6, 8]


    Question 19

    function multiplyByIndex(array) {
        for (var i = 0; i < array.length; i++) {
            array[i] = array[i] * i
        }
        return array
        multiplyByIndex([5, 3, 4])
            (3) [0, 3, 8]
        Question 20
        function lengths(array) {
            for (var i = 0; i < array.length; i++) {
                array[i] = array[i].length
            }
            return array
        }
        Question 21
        function totalNumberOfCharacters(array) {
            var result = 0
            for (var i = 0; i < array.length; i++) {
                result += array[i].length
            }
            return result
        }
        totalNumberOfCharacters(['hi', 'cat', 'hello'])
        10
        Question 22
        function filterEvenLengthWords(array) {
            var arra = []
            for (var i = 0; i < array.length; i++) {
                if ((array[i].length) % 2 === 0) {
                    arra = arra.concat(array[i])
                }
            }
            return arra
        }
        filterEvenLengthWords(['hi', 'cat', 'hello', 'caca'])
            (2) ["hi", "caca"]
        Question 23
        function popLastElement(array) {
            for (var i = 0; i < array.length; i++) {
                array[i].pop()
            }
            return array
        }
        Question 24
        function pushLastElement(array, element) {
            for (var i = 0; i < array.length; i++) {
                array[i].push(element)
            }
            return array
        }
        Question 25
        function sum(array) {
            var result = 0
            for (var i = 0; i < array.length; i++) {
                result = result + array[i]
            }
            return result
        }
        function sumArrays(array) {
            var result = 0
            for (var i = 0; i < array.length; i++) {
                result = result + sum(array[i])
            }
            return result
        }

        Question 26; 
        Question 26;

        function min(array) {
            var min = array[0]
            for (var i = 1; i < array.length; i++) {
                if (array[i] < min) {
                    min = array[i]
                }
            }
            return min
        }

        function multiplyBySmallesty(array) {
            z = min(array)
            for (var i = 0; i < array.length; i++) {
                array[i] = array[i] * z
            }
            return array
        }
        undefined
        multiplyBySmallesty([2, 3, 4])
            (3) [4, 6, 8]
        multiplyBySmallesty([0, 1, 4])
            (3) [0, 0, 0]


        Question 27;

        function joinArrays(array) {
            var arr = []
            for (var i = 0; i < array.length; i++) {
                arr = arr.concat(array[i])
            }
            return arr
        }
        undefined
        joinArrays([
                [2, 3],
                [2],
                [3, 4]
            ])
            (5) [2, 3, 2, 3, 4]

        Question 28;

        function sumOddEven(array) {
            var odd = 0
            var even = 0
            for (var i = 0; i < array.length; i++) {
                if (array[i] % 2 === 0) { even = even + array[i] } else { odd = odd + array[i] }
            }
            return [odd, even]
        }
        undefined
        sumOddEven([1, 3, 2, 4])
            (2) [4, 6]

        Question 29;

        function shortestOfMixed(array) {
            var str = ''
            for (var i = 0; i < array.length; i++) {
                if (array[i].length >= 0) {
                    str = array[i]
                    break
                }
            }
            return str
        }

        undefined

        function shortestOfMixed(array) {
            var str = ''
            for (var i = 0; i < array.length; i++) {
                if (array[i].length >= 0) {
                    str = array[i]
                    break
                }
            }
            for (var j = 0; j < array.length; j++) {
                if (array[j].length < str.length) {
                    str = array[j]
                }
            }

            return str
        }

        undefined
        shortestOfMixed([4, 'too', 'three', 2, 'two'])
        "too"
        shortestOfMixed([4, 'too', '', 2, 'two'])
        ""
        shortestOfMixed([4, 'two', 'sdfsdgs', 2, 'too'])
        "two"

        Question 30;

        function smallestOfMixed(array) {
            var result = 0
            for (var i = 0; i < array.length; i++) {
                if (array[i] >= 0) {
                    result = array[i]
                    break
                }
            }
            for (var j = 0; j < array.length; j++) {
                if (array[j] < result) {
                    result = array[j]
                }
            }

            return result
        }

        undefined
        smallestOfMixed(['kj', 'jhjdhd'])
        0
        smallestOfMixed(['kj', 'jhjdhd', -1]) -