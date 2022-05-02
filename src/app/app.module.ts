import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ModalComponent } from './core/modal/modal.component';
import { AddStudentComponent } from './core/modal/components/add-student/add-student.component';
import { StudentDetailsComponent } from './core/modal/components/student-details/student-details.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { HeroComponent } from './views/home-page/components/hero/hero.component';
import { StudentsListComponent } from './views/home-page/components/students-list/students-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalComponent,
    AddStudentComponent,
    StudentDetailsComponent,
    HomePageComponent,
    HeroComponent,
    StudentsListComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
