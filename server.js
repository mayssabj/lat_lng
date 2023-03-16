const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser=require ('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb+srv://mayssa:mayssa@cluster0.ckpide7.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true ,useUnifiedTopology: true});
const LocalisationSchema = {

    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    }

}
const Localisation = mongoose.model('Localisation', LocalisationSchema);

module.exports = Localisation ;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html' );
});

app.post('/', function(req, res) {
    let newLocalisation = new Localisation({
        latitude:req.body.latitude,
        longitude:req.body.longitude
    });
    newLocalisation.save();
});

  
app.listen(3000, () => {
 console.log('Server started on port 3000');
});


const MongoClient = require('mongodb').MongoClient;



  