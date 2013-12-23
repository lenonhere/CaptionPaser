String.prototype.format = function() {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g,                
        function(m,i){
            return args[i];
        });
};

var analysisLine = function(strLine) {
    var pattern = /\s*(-{2,})?\s*\(\s*(.*)\s*,\s*(\d*)\s*,\s*(.*)\s*,\s*(.*)\s*,\s*(\d*)\s*,\s*(.*)\s*,\s*(\d*)\s*,\s*(.*)\s*,\s*(.*)\s*,\s*(.*)\s*\),\s*/i;
    var res = pattern.exec(strLine);
    return res;
};

var generateFormatLine = function(element, fmt) {
    // for (var i = 1; i <= 11; i++) {
    //     console.log("the [{0}] is : {1}".format(i, element[i]));
    // };
    if(element[1] == undefined) element[1] = "";
    return fmt.format(element[1], element[2], element[3],  
        element[4], element[5], element[6],  
        element[7], element[8], element[9],  
        element[10], element[11]);
};

var generateFormatBlock = function (block, fmt) {
    var output = "";
    var i = 0;
    // console.log(block);
    if (fmt == undefined) {
        fmt = "{0}( {1},\t\t\t{2},\t\t{3},\t\t\t{4},\t{5},\t{6},\t{7},\t{8},\t{9},\t{10}),";
    };
    while (i < block.length)
    {
        var j = block.indexOf("\n", i);
        if (j == -1) j = block.length;
        var str = block.substr(i, j - i);
        var result = analysisLine(str);
        var resLine = generateFormatLine(result, fmt);
        // console.log("the [{0}] is : \n {1}".format(i, resLine));
        output += resLine + "\n";
        i = j + 1;
    }
    return output;
}

// var str = "( 'mainid',          0,      'mainid',           '',     1, 'center',   0,'label'    ,'true',   '00'),";
// // var str = "( 'mainid',      0, ";
// var result = analysisLine(str);
// for (var i = 1; i <= 10; i++) {
//     console.log(result[i]);
// };
// console.log(result);

var fmt = "{0}( {1},\t\t\t{2},\t\t\t{3},\t\t\t{4},\t\t\t{5},\t\t\t{6},\t\t\t{7},\t\t\t{8},\t\t\t{9},\t\t\t{10}),";
// var fmtRes = generateFormatLine(result, fmt);
// var fmtRes = generateFormatBlock(result, fmt);
// console.log(fmtRes);


exports.generateFormatBlock = generateFormatBlock;