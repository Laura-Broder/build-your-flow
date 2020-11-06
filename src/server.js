const fs = require("fs");
const express = require("express");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 4040;
const basePath = __dirname;

const app = express();
app.use(express.json());

app.use(cors());

app.post("/flow-api", async (req, res) => {
  try {
    const newFlow = await req.body.newFlow;
    const flowId = Date.now();

    newFlow.flowId = flowId;
    const newFlowJSON = JSON.stringify(newFlow);
    fs.writeFile(`${basePath}/Flow/flow_${flowId}.json`, newFlowJSON, (err) => {
      if (err) {
        return console.error(err);
      }
    });
    res.send(newFlowJSON);
  } catch (err) {
    return res.status(400).send(err);
  }
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
