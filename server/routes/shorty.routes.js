import { Router } from "express"
import * as ShortyController from "../controllers/shorty.controller"
const router = new Router()

// Get all Posts
router.route("/shorten").get(ShortyController.getShortys)

// Add a new Post
router.route("/shorten").post(ShortyController.shorten)

router.route("/:encoded_id").get(ShortyController.redirectToLongURL)

export default router
