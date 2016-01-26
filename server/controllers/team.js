/*eslint-disable no-console*/
var mongoose = require('mongoose');
var Team = mongoose.model('Team');
var _ = require('lodash');

exports.getList = function(req, res){
  console.log('controller/team getList');

  Team.find(req.query, function(err, teams){
    if(err) throw new Error(err);
    res.send(teams);
  });
};

exports.getById = function(req, res){
  console.log('controller/team getById: ' + req.params);

  Team.findById(req.params.id, function(err, team){
    if(err) throw new Error(err);
    res.send(team);
  });
};

exports.addTeam = function(req, res){
  console.log('controller/team postMessage: ' + req.body);

  var team = new Team(req.body);
  team.save(function() {
    res.send(team);
  });
};

exports.updateTeam = function(req, res){
  console.log('controller/team putMessage: ' + req.body);

  var updateObj = _.omit(req.body, ['_id', '__v']);

  Team.findById(req.params.id,function(err, team){
    if(err) throw new Error(err);

    team.update(updateObj,function(err){
      if(err) throw new Error(err);
      res.send(req.body);
    });
  });
};

exports.deleteTeam = function(req, res){
  console.log('controller/team deleteMessage: ' + req.body);

  Team.findById(req.params.id,function(err, team){
    if(err) throw new Error(err);
    team.remove(function(err){
      if(err) throw new Error(err);
      res.send(req.body);
    });
  });
};
