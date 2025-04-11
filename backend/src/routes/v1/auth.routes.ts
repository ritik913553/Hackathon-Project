import { Router } from "express";
import loginController from "../../controller/auth/login.controller";
import registerController from "../../controller/auth/register.controller";

const router = Router();

router.post("/login", loginController);
router.post("/register", registerController);

export default router;
