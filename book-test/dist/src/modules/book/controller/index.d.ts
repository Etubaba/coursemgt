import { Response, Request } from "express";
export declare class CourseController {
    createCourseController(req: Request, res: Response): Promise<void>;
    updateCourseController(req: Request, res: Response): Promise<void>;
    allCourse(req: Request, res: Response): Promise<void>;
    singleCourse(req: Request, res: Response): Promise<void>;
    deleteCourse(req: Request, res: Response): Promise<void>;
}
