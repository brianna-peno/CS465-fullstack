const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //register the model
const Model = mongoose.model('trips'); 

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client 
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) //  return all records
        .exec();
    
        // 
        //uncomment the following line to see the result of the query in the console
        //console.log(q);

    if(!q) 
    {
        return res
                .status(404)
                .json(err);
    } else { //Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

// GET: /trips - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client 
const tripsFindByCode = async (req, res) => {
    const q = await Model.findOne({ code: req.params.tripCode }).exec();

    return res.json({
        param: req.params.tripCode,
        result: q
    });
};

module.exports = {
    tripsList,
    tripsFindByCode
};