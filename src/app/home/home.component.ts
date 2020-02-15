import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Title, Meta, makeStateKey, TransferState } from '@angular/platform-browser';

import { tap } from 'rxjs/operators';

import { CoursesService } from '../core/services/courses.service';
import { Course } from '../core/interfaces/course';
import { Lesson } from '../core/interfaces/lesson';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public courses: Course[] = [];
  public lessons: Lesson[] = [];

  private readonly courseId: string = '01';
  private readonly COURSES_KEY = makeStateKey<Course[]>('courses');
  private readonly LESSONS_KEY = makeStateKey<Lesson[]>('lessons');

  constructor(
    private htmlTitle: Title,
    private meta: Meta,
    private coursesService: CoursesService,
    @Inject(PLATFORM_ID) private platformId,
    private transferState: TransferState,
  ) { }

  ngOnInit(): void {
    this.htmlTitle.setTitle('Angular Universal: HomeComponent');
    this.meta.addTag({name: 'description', content: 'HomeComponent content'});
    this.loadData();
  }

  private loadData(): void {
    console.log(this.platformId);
    console.log(this.transferState.hasKey(this.COURSES_KEY));

    if (this.transferState.hasKey(this.COURSES_KEY)) {
      this.courses = this.transferState.get<Course[]>(this.COURSES_KEY, null);
      this.transferState.remove(this.COURSES_KEY);
    } else {
      this.coursesService.findAllCourses()
        .pipe(
          tap(courses => {
            if (isPlatformServer(this.platformId)) {
              this.transferState.set(this.COURSES_KEY, courses);
            }
          })
        )
        .subscribe(courses => {
          console.log(courses);
          this.courses = courses;
        });
    }

    this.coursesService.findAllCourseLessons(this.courseId)
      .subscribe(lessons => {
        console.log(lessons);
        this.lessons = lessons;
      });
  }
}
