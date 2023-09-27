"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const validateDto_1 = require("../../../middleware/validateDto");
const createCourseDto_1 = require("../dto/createCourseDto");
const updateCourseDto_1 = require("../dto/updateCourseDto");
const router = (0, express_1.Router)();
const basePath = "/api/";
const courseController = new controller_1.CourseController();
router.post(`${basePath}course`, (0, validateDto_1.validateDto)(createCourseDto_1.CreateCourseDto), courseController.createCourseController);
router.put(`${basePath}course/:id`, (0, validateDto_1.validateDto)(updateCourseDto_1.UpdateCourseDto), courseController.updateCourseController);
router.get(`${basePath}course/:id`, courseController.singleCourse);
router.delete(`${basePath}course/:id`, courseController.deleteCourse);
router.get(`${basePath}course`, courseController.allCourse);
exports.default = router;
//# sourceMappingURL=index.js.map