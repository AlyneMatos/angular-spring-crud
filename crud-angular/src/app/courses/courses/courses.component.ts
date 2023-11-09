import { Observable, catchError, of } from 'rxjs';
import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  courses: Observable<Course[]>;

  displayedColumns = ['name','category'];

  //coursesService : CoursesService;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
    ){
    //this.courses = [];
    //this.coursesService = new CoursesService();
    this.courses = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carreger cursos.');
        return of([])
      })
    )
  }

  onError(errorMsg:string){
    this.dialog.open(ErrorDialogComponent,{
      data:errorMsg
    });
  }

  ngOnInit(): void {

  }
}
