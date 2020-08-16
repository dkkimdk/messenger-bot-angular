var express = require("express");
var AWS = require('aws-sdk');
const path = require('path');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(function(__, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});


var distDir = __dirname + "/dist/messenger-bot";
app.use(express.static(distDir));

const startExecution = async (
    region,
    stateMachineArn,
    requestBody,
    dateTime,
  ) => {
    const payload = {
        input :requestBody,
        time: new Date(dateTime).toISOString()
    }
    input = JSON.stringify(payload);
    const stepFunctions = new AWS.StepFunctions({ region });
    const opts = {
      stateMachineArn,
      input
    };
    try{
        const { executionArn } = await stepFunctions.startExecution(opts).promise();    
        return executionArn;
    } catch(error) {
        return error;
    }
  };

app.get('/*', function(req,res) {
    
    res.sendFile(distDir + '/index.html')
});

app.use('/passwordcheck', function(req,res) {
    if(req.body.password == process.env.PASSWORD) {
        return res.status(200).json("success");
    } else {
        return res.status(400).json("error");
    }
});
app.use('/api/start', async function(req,res){
    if (!req.body.input.message || !req.body.input.phoneNumber){
        return res.status(400).json({message:"input is missing"})
    }

    const executions = await startExecution('us-east-1','arn:aws:states:us-east-1:441927962368:stateMachine:sampleMessenger-1', req.body.input,req.body.time)
    if (executions.statusCode === 400) {
        return res.status(400).json({message:executions});
    } else {
        return res.status(200).json({message:executions});
    }
});



var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });