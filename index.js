const Koa = require("koa");
const IO = require("koa-socket-2");

const app = new Koa();
const io = new IO();

io.attach(app);

io.on("message", (ctx, data) => {
  console.log("client sent data to message endpoint :", data);
});

app.listen(5132);
