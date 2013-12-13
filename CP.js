String.prototype.format = function() {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g,                
        function(m,i){
            return args[i];
        });
};

var analysisLine = function(strLine) {
    var pattern = /\(\s*(.*)\s*,\s*(\d*)\s*,\s*(.*)\s*,\s*(.*)\s*,\s*(\d*)\s*,\s*(.*)\s*,\s*(\d*)\s*,\s*(.*)\s*,\s*(.*)\s*,\s*(.*)\s*\),\s*/i;
    var res = pattern.exec(strLine);
    return res;
};

var generateFormatLine = function(element, fmt) {
    return fmt.format(element[1], element[2], element[3],  
        element[4], element[5], element[6],  
        element[7], element[8], element[9],  
        element[10]);
};

var str = "( 'mainid',          0,      'mainid',           '',     1, 'center',   0,'label'    ,'true',   '00'),";
// var str = "( 'mainid',      0, ";
var result = analysisLine(str);
for (var i = 1; i <= 10; i++) {
    console.log(result[i]);
};
// console.log(result);

var fmt = "( {0},\t\t\t{1},\t\t\t{2},\t\t\t{3},\t\t\t{4},\t\t\t{5},\t\t\t{6},\t\t\t{7},\t\t\t{8},\t\t\t{9}),";
var fmtRes = generateFormatLine(result, fmt);
console.log(fmtRes);