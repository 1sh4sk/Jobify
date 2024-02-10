import { Router } from 'express'

const router = Router()

import { getAllJobs, getSingleJob, creatJob, updateJob, deleteJob, showStats } from '../controllers/jobController.js'
import { validateIdParam, validateJobInput } from '../middleware/validationMiddleware.js'
import { checkForTestUser } from '../middleware/authMiddleware.js'

// THIS IS ONE APPROACH TO ADD ROUTES
// router.get('/', getAllJobs)
// router.post('/', creatJob)

// DIFFERENT APPROACH WHERE IT HELPS TO CHAIN THE CONTROLLER
router.route('/')
    .get(getAllJobs)
    .post(checkForTestUser, validateJobInput, creatJob)

router.route('/stats').get(showStats);

router.route('/:id')
    .get(validateIdParam, getSingleJob)
    .patch(checkForTestUser, validateJobInput, validateIdParam, updateJob)
    .delete(checkForTestUser, validateIdParam, deleteJob)

export default router;
