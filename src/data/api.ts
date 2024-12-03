import axios from 'axios';
import { ICourse } from '../model/type';

export class Api {
    static async getCourses() {
        const response = await axios('http://localhost:3000/courses');
        return response.data;
    }

    static async postCourse(course: ICourse) {
        const response = await axios('http://localhost:3000/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: course,
        });
        if (response.status === 201) {
            console.log('Course created successfully');
        } else {
            console.error('Failed to create course');
        }
    }
}
