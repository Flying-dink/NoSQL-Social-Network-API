const { User, Thought } = require("../models");

const userController = {

  getAllUsers(req, res) {
    User.find({})
      .select("-__v")
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: "thoughts"
      })
      .populate({
        path: "friends"
      })
      .select("-__v")
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }, 

  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }, 

  // add a new friend to a user's friend list
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: params.friendsId } },
      { new: true }
    ).then(dbUserData => {
      if (!dbUserData) {
        return res.status(404).json({ message: "No user found with this id"});
      }
      res.json(dbUserData);
    }) 
    .catch(err => res.json(err));
  },
  
  updateUser({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      body,
      { new: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id."});
          return; 
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }, 

  // deletes user and all of the user's thoughts
  deleteUser({ params }, res) {
    User.findOneAndDelete({ 
      _id: params.id 
    }).then(deletedUser => {
        if (!deletedUser) {
          return res.status(404).json({ message: "No user found with this id." });
        }
        res.json(deletedUser);
      })
      .catch(err => res.json(err));
  },

  // deletes friend from user's friend array
  deleteFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendsId } },
      { new: true }
    ).then(dbUserData => {
      if (!dbUserData) {
        return res.status(404).json({ message: "No user found with this id." });
      }
      res.json(dbUserData); 
    })
    .catch(err => res.json(err));
  }

}

module.exports = userController;




















































































































































































































































































