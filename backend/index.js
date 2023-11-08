const express = require("express"); //import express to run the HTTP server
const cors = require("cors"); 
const axios = require("axios");

//call cors to call the server from any other origin
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

//run the port
/*
*create a post endpoint for authenticate
*takes in a username from the request body and return a fake username and password
*Using chatengine.io
*Project ID - API key that connects the API calls to the project (5af0330f-df8f-4a9f-b563-951a504931f3)
*Private Key - gives me permison to create and delete users on the project (3dccccbb-87be-4c35-89dc-9183a42ff7e1)
*/
app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    // Get or create user on Chat Engine
    try { 
      const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "private-key": "3dccccbb-87be-4c35-89dc-9183a42ff7e1" }}
      );
      return res.status(r.status).json(r.data);
    } catch (e) {
      // Use e.response instead of r.response
      return res.status(e.response.status).json(e.response.data);
    }
  });

//run the app on port 3001
app.listen(3001);