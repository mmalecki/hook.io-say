var util = require('util'),
    say = require('say'),
    Hook = require('hook.io').Hook;

var Say = exports.Say = function (options) {
  var self = this;
  
  Hook.call(self, options);

  self.on('hook::ready', function () {
    self.on('*::say', function (data, callback) {
      // TODO: use default voice from config.json
      say.speak(data.voice, data.text, callback);
    });
  });
};
util.inherits(Say, Hook);

