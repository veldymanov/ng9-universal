import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Course } from '../interfaces/course';
import { Lesson } from '../interfaces/lesson';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private readonly apiUrl = 'https://angular-universal-course-ebcc3.firebaseio.com';

  constructor(
    private http: HttpClient
  ) { }

  public findCourseById(courseId: string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/courses/${courseId}.json`)
      .pipe(
        take(1),
      );
  }

  public findAllCourses(): Observable<Course[]> {
    return this.http.get<any>(`${this.apiUrl}/courses.json`)
      .pipe(
        take(1),
        map(courses => Object.values(courses)),
      );
  }

  public findAllCourseLessons(courseId: string): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${this.apiUrl}/lessons/${courseId}.json`)
      .pipe(
        take(1),
      );
  }
}
