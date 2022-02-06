import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleStudentComponent } from 'src/app/single-student/single-student.component';
import { StudentViewComponent } from 'src/app/student-view/student-view.component';
import { AuthComponent } from 'src/app/auth/auth.component';
import { FourOhFourComponent } from 'src/app/four-oh-four/four-oh-four.component';
import { AuthGuard } from 'src/app/services/auth-guard.service';
import { EditStudentComponent } from 'src/app/edit-student/edit-student.component';
import { UserListComponent } from 'src/app/user-list/user-list.component';
import { NewUserComponent } from 'src/app/new-user/new-user.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'students' },
    { path: 'students', canActivate: [AuthGuard], component: StudentViewComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'edit', canActivate: [AuthGuard], component: EditStudentComponent },
    { path: 'students/:id', canActivate: [AuthGuard], component: SingleStudentComponent },
    { path: 'users', component: UserListComponent },
    { path: 'new-user', component: NewUserComponent },
    { path: 'not-found', component: FourOhFourComponent },
    { path: '**', redirectTo: 'not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AppRoutingModule { }
export const routedComponents = [StudentViewComponent, AuthComponent];