import { Router } from 'express';
import {
  createGuide,
  getGuides,
  getGuideById,
  updateGuide,
  deleteGuide,
} from '../controllers/guide.controller';

const router = Router();

router.post('/guides', createGuide);
router.get('/guides', getGuides);
router.get('/guides/:id', getGuideById);
router.put('/guides/:id', updateGuide);
router.delete('/guides/:id', deleteGuide);

export default router;

