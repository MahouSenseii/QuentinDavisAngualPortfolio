import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomebodyComponent } from './homebody/homebody.component';
import { AboutbodyComponent } from './aboutbody/aboutbody.component';
import { Routes, RouterModule } from '@angular/router';
import { ResumebodyComponent } from './resumebody/resumebody.component';
import { ContactbodyComponent } from './contactbody/contactbody.component';
import { DropdownDirective, } from './Shared/dropdown.directive';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsbodyComponent } from './projectsbody/projectsbody.component';
import { ProjectHunterBodyComponent } from './project-hunter-body/project-hunter-body.component';



const appRoutes: Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component:HomebodyComponent},
  { path: 'about', component:AboutbodyComponent},
  { path: 'contact', component:ContactbodyComponent},
  { path: 'resume', component:ResumebodyComponent},
  { path: 'project', component:ProjectsbodyComponent},
  { path: 'projectHunter', component:ProjectHunterBodyComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomebodyComponent,
    AboutbodyComponent,
    ResumebodyComponent,
    ContactbodyComponent,
    DropdownDirective,
    ProjectsbodyComponent,
    ProjectHunterBodyComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    PdfViewerModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
