import { Router } from "express";
import { borrarColor, crearColor, editarColor, listarColores, obtenerColor } from "../controllers/colores.controllers.js";

const router = Router();

router.route('/colores').get(listarColores).post(crearColor);
router.route('/colores/:id').get(obtenerColor).put(editarColor).delete(borrarColor)
export default router;