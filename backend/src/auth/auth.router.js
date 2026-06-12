import {Router} from 'express'
import {handleRegister} from '../auth/auth.controller.js'

export const router = Router();
router.post('/register', handleRegister);