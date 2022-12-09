const express = require("express");

const app = express();
const PORT = 5000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send(
    "hello world this is backend practise of Ridesharing and carpooling app"
  );
});

app.listen(PORT, () => {
  console.log(`server is listening in http://localhost:${PORT}`);
});
