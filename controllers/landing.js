
exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Express',test:'Testing123!!' });
  }

exports.submit_lead = function(req, res, next) {
  console.log("lead email: " + req.body.lead_email);
  res.redirect('/');
}