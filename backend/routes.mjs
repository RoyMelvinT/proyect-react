import express from 'express';
import 

import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();



router.post('/registro',(req, res) => {
    console.log("Estoy registrando");
    res.status(201).send('registro en proceso')
});
router.post('/login', (req, res) => {
    console.log("Estoy logueando")
    res.status(200).send('login en proceso')
});
export default router;