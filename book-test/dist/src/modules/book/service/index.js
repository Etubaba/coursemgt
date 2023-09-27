"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const main_1 = require("../../../main");
class CourseService {
    async createCourse(createCourseDto) {
        try {
            const { title, course_time, lecturer } = createCourseDto;
            const Course = await main_1.prisma.course.create({
                data: { title, course_time, lecturer },
            });
            return {
                statusCode: 201,
                data: Course,
            };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
    async courseList() {
        try {
            const allCourses = await main_1.prisma.course.findMany({});
            return { statusCode: 200, data: allCourses };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
    async singleCourse(id) {
        try {
            const Course = await main_1.prisma.course.findUnique({
                where: {
                    id,
                },
            });
            if (!Course)
                return { statusCode: 404, message: "Record not fount" };
            return { statusCode: 200, data: Course };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
    async updateCourse(id, updateCourseDto) {
        try {
            const { title, couser_time, lecturer } = updateCourseDto;
            const Course = await main_1.prisma.course.findUnique({
                where: {
                    id,
                },
            });
            if (!Course)
                return { statusCode: 404, message: "Record not fount" };
            const newCourse = await main_1.prisma.course.update({
                where: {
                    id,
                },
                data: {
                    title,
                    lecturer,
                },
            });
            return { statusCode: 200, data: newCourse };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
    async deleteCourse(id) {
        try {
            const Course = await main_1.prisma.course.findUnique({
                where: {
                    id,
                },
            });
            if (!Course) {
                return { statusCode: 404, message: "Record not found" };
            }
            await main_1.prisma.course.delete({
                where: {
                    id,
                },
            });
            return {
                statusCode: 200,
                message: "Course  deleted successfully",
            };
        }
        catch (err) {
            return { statusCode: 500, message: err.message };
        }
    }
}
exports.CourseService = CourseService;
//# sourceMappingURL=index.js.map