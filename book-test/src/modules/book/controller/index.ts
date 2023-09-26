import { Response, Request } from "express";
import { CourseService } from "../service";
import { CreateCourseDto } from "../dto/createCourseDto";
import { UpdateCourseDto } from "../dto/updateCourseDto";

const courseService = new CourseService();
export class CourseController {
  async createCourseController(req: Request, res: Response) {
    const createCourseDto: CreateCourseDto = req.body;
    const response = await courseService.createCourse(createCourseDto);
    res.status(response.statusCode).json(response);
  }

  async updateCourseController(req: Request, res: Response) {
    const updateCourseDto: UpdateCourseDto = req.body;
    const id = req.params.id;
    const response = await courseService.updateCourse(id, updateCourseDto);
    res.status(response.statusCode).json(response);
  }

  async allCourse(req: Request, res: Response) {
    const response = await courseService.courseList();
    res.status(response.statusCode).json(response);
  }

  async singleCourse(req: Request, res: Response) {
    const id = req.params.id;
    const response = await courseService.singleCourse(id);
    res.status(response.statusCode).json(response);
  }

  async deleteCourse(req: Request, res: Response) {
    const id = req.params.id;
    const response = await courseService.deleteCourse(id);
    res.status(response.statusCode).json(response);
  }
}
