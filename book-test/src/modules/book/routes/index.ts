import { Router } from "express";
import { CourseController } from "../controller";
import { validateDto } from "../../../middleware/validateDto";
import { CreateCourseDto } from "../dto/createCourseDto";

import { UpdateCourseDto } from "../dto/updateCourseDto";

const router: Router = Router();
const basePath = "/api/";

const courseController = new CourseController();
router.post(
  `${basePath}course`,

  validateDto(CreateCourseDto),
  courseController.createCourseController
);
router.put(
  `${basePath}course/:id`,
  validateDto(UpdateCourseDto),
  courseController.updateCourseController
);
router.get(
  `${basePath}course/:id`,

  courseController.singleCourse
);
router.delete(
  `${basePath}course/:id`,

  courseController.deleteCourse
);
router.get(`${basePath}course`, courseController.allCourse);

export default router;
