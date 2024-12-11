const express = require('express'); 
const app = express(); 
const port = 4000;

const cors = require('cors'); 
app.use(cors()); 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); 
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://g00393486:TOBYDOG2002!@toolcluster.4flbd.mongodb.net/'); 
                 

const toolSchema = new mongoose.Schema({
  name: String, 
  state: String,  
  image: String,
  price: String
});

const toolModel = mongoose.model('myTools', toolSchema);

app.post('/api/tools', async (req, res) => {
    console.log("Tool added: " + req.body.name); 

    const { name, state, image, price } = req.body; 
    const newTool = new toolModel({ name, state, image, price });
    newTool.save(); 
    res.send("Tool Added!");
});

app.get('/api/tools', async (req, res) => {
  const tools = await toolModel.find({}); 
  res.json(tools); 
});

app.get('/api/tool/:id', async (req, res) => {
  let tool = await toolModel.findById({ _id: req.params.id });
  res.send(tool);
});

app.put('/api/tool/:id', async (req, res) => {
  let tool = await toolModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(tool);
});

app.delete('/api/tool/:id', async (req, res) => {
  console.log('Deleting tool with ID:', req.params.id);
  const tool = await toolModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Tool deleted successfully", tool });
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); 
});
