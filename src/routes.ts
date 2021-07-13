import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagController"
import { CreateComplimentController } from "./controllers/CreateComplimentController"
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const createUserController = new CreateUserController()
const authenticateUserContoller = new AuthenticateUserController()
const createTagController = new CreateTagController()
const createComplimentController = new CreateComplimentController()


router.post("/tags", ensureAdmin, createTagController.handle)
router.post("/users", createUserController.handle)
router.post("/auth,", authenticateUserContoller.handle)
router.post("/compliments", createComplimentController.handle)

export { router }
