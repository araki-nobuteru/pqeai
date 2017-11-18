// "use sctrict"

const bunyan = require("bunyan");
const restify = require("restify");

const DEFAULT_PORT = 80;
const serverOptions = {
    name: "pqeai-server"
};

let server = restify.createServer(serverOptions);

// server.use(restify.plugins.CORS());
server.use(restify.plugins.jsonBodyParser());
server.use(
    function crossOrigin(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);

server.post("teste/post", (req, res, next) => {
    let a = req.body;

    res.send(200, a);

    next();
});

server.get("/teste/foo", (req, res, next) => {
    res.send(200, {
        a: "hello!"
    });

    next();
});

server.listen(process.env.PORT || DEFAULT_PORT);