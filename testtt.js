//1. 柱状图围成的最大区域面积(每个柱状图的宽度都为1)
(function maxRectArea(arr) {
    var max = Math.max.apply(Math, arr);

    var len = arr.length;

    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            var area = Math.min.apply(Math, arr.slice(i, j + 1)) * (j - i + 1);
            // console.log(i, j, arr.slice(i, j + 1), area);
            if (area > max) {
                max = area;
            }
        }
    }

    console.log(max);
})([281, 179, 386, 165, 88, 500]);


//2. 字符串数组中含有若干的*号,将*号挪到数组的头部(从后往前遍历)
(function moveStarsToHead(arr) {
    var len = arr.length;
    var index = len - 1;
    for (var i = len - 1; i >= 0; i--) {
        if (arr[i] !== '*') {
            arr[index] = arr[i];
            index--;
        }
    }

    for (var j = 0; j < index; j++) {
        arr[j] = '*';
    }

    console.log(arr.join(''));

})(['h', 'e', '*', '*', 'l', '*', 'l', 'o', '*', ',', 'w', 'o', '*', '*', 'r', '*', 'l', 'd', '*', '*', '!']);