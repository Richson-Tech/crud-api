import { Router } from "express";
import { createShop,getAllShop,updateShop,deleteShop } from "../controller/bookShops";

const router = Router();

router.post("/", createShop);

router.get("/", getAllShop);

router.put("/:id", updateShop);

router.delete("/:id", deleteShop);

export default router;