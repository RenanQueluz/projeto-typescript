import { Router } from "express";
import { StatusCodes } from "http-status-codes";
const router = Router();
//banco fake
const armazenamento = [];
router.post('/teste', (req, res) => {
    const usuario = req.body;
    res.status(StatusCodes.OK).json({
        mensagem: usuario
    });
});
export { router };
//# sourceMappingURL=index.js.map