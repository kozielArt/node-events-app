const Event = require('../models/event.model.js');

// Create and Save a new Event
exports.create = (req, res) => {
  // Validate request
  console.log(req.body)
  if (!req.body) {
    return res.status(400).send({
      message: "Event content can not be empty"
    });
  }

  // Create an Event
  const event = new Event({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    createdAt: req.body.createdAt,
    email: req.body.email
  });

  // Save Event in the database
  event.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Event."
      });
    });
};
