module.exports = function(features) {
  return Object.keys(features).map(function(name) {
    var val = features[name];
    if(val === true)
      val = 'yes';
    if(val === false)
      val = 'no';

    return name + '=' + val;
  }).join(',');
};