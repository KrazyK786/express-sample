
exports.index = function(req, res, next) {
    res.render('index', { title: 'Express',test:'Testing123!!' });
  }