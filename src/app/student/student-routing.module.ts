import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'add', component: AddStudentComponent},
  { path: 'edit/:id', component:EditStudentComponent},
  { path: 'delete/:id', component:DeleteStudentComponent},
  { path: 'search', component:DeleteStudentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
