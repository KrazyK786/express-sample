var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');

/* GET home page. */
router.get('/', landing.get_landing);

// POST for landing page
router.post('/', landing.submit_lead);

// GET all leads
router.get('/leads', landing.show_leads);

// GET single lead
router.get('/lead/:lead_id', landing.show_lead);

// GET/POST to edit leads
router.get('/lead/:lead_id/edit', landing.show_edit_lead);
router.post('/lead/:lead_id/edit', landing.edit_lead);

// POST to delete lead
router.post('/lead/:lead_id/delete', landing.delete_lead);

module.exports = router;
