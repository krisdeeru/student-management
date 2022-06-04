import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveStudentComponent } from './components/save-student/save-student.component';
import { StudentComponent } from './components/student/student.component';
import { StudentsComponent } from './components/students/students.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';

const routes: Routes = [
  {path: 'students', component: StudentsComponent},
  {path: 'save-student', component: SaveStudentComponent},
  {path: 'update-student', component: UpdateStudentComponent},
  {path: 'view-student/:id', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentsComponent,SaveStudentComponent,UpdateStudentComponent]
