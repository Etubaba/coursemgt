import { CreateCourseDto } from "../dto/createCourseDto";
import { UpdateCourseDto } from "../dto/updateCourseDto";
export declare class CourseService {
    createCourse(createCourseDto: CreateCourseDto): Promise<{
        statusCode: number;
        data: {
            id: string;
            title: string;
            lecturer: string;
            course_time: string;
        };
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
    courseList(): Promise<{
        statusCode: number;
        data: {
            id: string;
            title: string;
            lecturer: string;
            course_time: string;
        }[];
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
    singleCourse(id: string): Promise<{
        statusCode: number;
        data: {
            id: string;
            title: string;
            lecturer: string;
            course_time: string;
        };
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
    updateCourse(id: string, updateCourseDto: UpdateCourseDto): Promise<{
        statusCode: number;
        data: {
            id: string;
            title: string;
            lecturer: string;
            course_time: string;
        };
        message?: undefined;
    } | {
        statusCode: number;
        message: any;
        data?: undefined;
    }>;
    deleteCourse(id: string): Promise<{
        statusCode: number;
        message: any;
    }>;
}
