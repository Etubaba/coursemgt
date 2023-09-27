"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
const service_1 = require("../service");
const courseService = new service_1.CourseService();
class CourseController {
    async createCourseController(req, res) {
        const createCourseDto = req.body;
        const response = await courseService.createCourse(createCourseDto);
        res.status(response.statusCode).json(response);
    }
    async updateCourseController(req, res) {
        const updateCourseDto = req.body;
        const id = req.params.id;
        const response = await courseService.updateCourse(id, updateCourseDto);
        res.status(response.statusCode).json(response);
    }
    async allCourse(req, res) {
        const response = await courseService.courseList();
        res.status(response.statusCode).json(response);
    }
    async singleCourse(req, res) {
        const id = req.params.id;
        const response = await courseService.singleCourse(id);
        res.status(response.statusCode).json(response);
    }
    async deleteCourse(req, res) {
        const id = req.params.id;
        const response = await courseService.deleteCourse(id);
        res.status(response.statusCode).json(response);
    }
}
exports.CourseController = CourseController;
//# sourceMappingURL=index.js.map