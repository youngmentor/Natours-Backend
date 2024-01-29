const express = require('express');
const tourController = require('./../controllers/tourControllers');

const router = express.Router();

// router.param('id',tourController.checkId)
router
  .route('/top-5-cheap-tour')
  .get(tourController.aliasTopTour, tourController.getAllTour);

router.route('/tour-stats').get(tourController.getTourStats);
router
  .route('/tour-monthly-tours-plan/:year')
  .get(tourController.getMonthlyTours);
router
  .route('/')
  .get(tourController.getAllTour)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getOneTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
