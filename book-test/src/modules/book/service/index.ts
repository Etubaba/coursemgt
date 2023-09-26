import { prisma } from "../../../main";
import { CreateCourseDto } from "../dto/createCourseDto";
import { UpdateCourseDto } from "../dto/updateCourseDto";

export class CourseService {
  async createCourse(createCourseDto: CreateCourseDto) {
    try {
      const { title, course_time, lecturer }: CreateCourseDto = createCourseDto;

      //create Courses
      const Course = await prisma.course.create({
        data: { title, course_time, lecturer },
      });

      return {
        statusCode: 201,
        data: Course,
      };
    } catch (err: any) {
      return { statusCode: 500, message: err.message };
    }
  }

  async courseList() {
    try {
      const allCourses = await prisma.course.findMany({});

      return { statusCode: 200, data: allCourses };
    } catch (err) {
      return { statusCode: 500, message: err.message };
    }
  }
  async singleCourse(id: string) {
    try {
      //check if record exist
      const Course = await prisma.course.findUnique({
        where: {
          id,
        },
      });
      if (!Course) return { statusCode: 404, message: "Record not fount" };

      return { statusCode: 200, data: Course };
    } catch (err) {
      return { statusCode: 500, message: err.message };
    }
  }

  async updateCourse(id: string, updateCourseDto: UpdateCourseDto) {
    try {
      const { title, couser_time, lecturer }: UpdateCourseDto = updateCourseDto;
      //check if record exist
      const Course = await prisma.course.findUnique({
        where: {
          id,
        },
      });
      if (!Course) return { statusCode: 404, message: "Record not fount" };

      //update

      const newCourse = await prisma.course.update({
        where: {
          id,
        },
        data: {
          title,
          lecturer,
        },
      });

      return { statusCode: 200, data: newCourse };
    } catch (err) {
      return { statusCode: 500, message: err.message };
    }
  }

  async deleteCourse(id: string) {
    try {
      //check if Course exist
      const Course = await prisma.course.findUnique({
        where: {
          id,
        },
      });
      if (!Course) {
        return { statusCode: 404, message: "Record not found" };
      }

      await prisma.course.delete({
        where: {
          id,
        },
      });

      return {
        statusCode: 200,
        message: "Course  deleted successfully",
      };
    } catch (err) {
      return { statusCode: 500, message: err.message };
    }
  }
}
