var generateFormatBlock = require("./CP.js").generateFormatBlock;

var io = require("socket.io").listen(9999);

io.sockets.on("connection", function(socket) {
    socket.emit("news", {
        hello: "world"
    });
    socket.on("my other event", function(data) {
        console.log(data);
    });
    socket.on("startformat", function(data) {
        console.log("startformat called!");
        // console.log(data);
        var toCode = generateFormatBlock(data.code);
        // console.log(toCode);
        socket.emit("formatCompleted", { outputCode: toCode});
    });
});