import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { SecondaryButtonComponent } from './components/secondary-button/secondary-button.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { ProjectPreviewComponent } from './components/project-preview/project-preview.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    MainButtonComponent,
    SecondaryButtonComponent,
    FooterBarComponent,
    ProjectPreviewComponent,
    ProjectsComponent,
    ProjectPageComponent,
    ContactFormComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, LayoutModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
