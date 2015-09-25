/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res){
    User.find({}).exec(function(err, users){
      res.view({
        users: users
      })
    });
  },

	new: function(req, res){
    res.view();
  }
};

