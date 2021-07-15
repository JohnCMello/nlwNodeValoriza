import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { verifyAdmin } from "./middlewares/verifyAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { verifyUserAuth } from "./middlewares/verifyUserAuth";
import { ListComplimentsSentByUserController } from "./controllers/ListComplimentsSentByUserController";
import { ListComplimentsReceivedByUserController } from "./controllers/ListComplimentsReceivedByUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserContoller = new AuthenticateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const listComplimentsSentByUserController = new ListComplimentsSentByUserController();
const listComplimentsReceivedByUserController = new ListComplimentsReceivedByUserController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post(
  "/tags",
  verifyUserAuth,
  verifyAdmin,
  createTagController.handle
);

router.post(
  "/users",
  createUserController.handle
);

router.post(
  "/auth,",
  authenticateUserContoller.handle
);
router.post(
  "/compliments",
  createComplimentController.handle
);

router.get(
  "/users/compliments/sent",
  listComplimentsSentByUserController.handle
);
router.get(
  "/users/compliments/received",
  listComplimentsReceivedByUserController.handle
);

router.get(
  "/tags",
  verifyUserAuth,
  listTagsController.handle
);

router.get(
  "/users",
  verifyUserAuth,
  listUsersController.handle
);

export { router }
