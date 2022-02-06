import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routedComponents } from 'app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentService } from './services/student.service';
import { AuthService } from './services/auth.serivce';
import { SingleStudentComponent } from './single-student/single-student.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    routedComponents,
    SingleStudentComponent,
    FourOhFourComponent,
    EditStudentComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [StudentService, AuthService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }