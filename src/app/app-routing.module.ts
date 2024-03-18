import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDevelopmentComponent } from './component-development/component-development.component';
import { GraduateProfileComponent } from './graduate-profile/graduate-profile.component';
import { DirectVacancyComponent } from './direct-vacancy/direct-vacancy.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { VacancyInformationComponent } from './vacancy-information/vacancy-information.component';
import { ContactComponent } from './contact/contact.component';
import { VacancyAdsComponent } from './vacancy-ads/vacancy-ads.component';
import { VacancyPostComponent } from './vacancy-post/vacancy-post.component';
import { CompanyDepartmentsListComponent } from './company-departments-list/company-departments-list.component';
import { CompanyHomepageComponent } from './company-homepage/company-homepage.component';
import { GraduateInformationComponent } from './graduate-information/graduate-information.component';
import { VacancyPdfViewComponent } from './vacancy-pdf-view/vacancy-pdf-view.component';
import { RecruitmentListComponent } from './recruitment-list/recruitment-list.component';
import { BrowseCandidatesComponent } from './browse-candidates/browse-candidates.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './utility/authGuard';

const routes: Routes = [
  { path: '', redirectTo: 'graduate-homepage', pathMatch: 'full' },
  { path: 'graduate-homepage', component: HomepageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'component-development', component: ComponentDevelopmentComponent },
  { path: 'graduate-profile', component: GraduateProfileComponent, canActivate: [AuthGuard] },
  { path: 'direct-vacancy', component: DirectVacancyComponent, },
  { path: 'vacancy-information', component: VacancyInformationComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'vacancy-ad', component: VacancyAdsComponent },
  { path: 'vacancy-post', component: VacancyPostComponent },
  { path: 'departments-list', component: CompanyDepartmentsListComponent },
  { path: 'recruiter-homepage', component: CompanyHomepageComponent },
  { path: 'graduate-information', component: GraduateInformationComponent },
  //duplicate { path: 'vacancy-post', component: VacancyPostComponent },
  { path: 'recruitment-list', component: RecruitmentListComponent },
  { path: 'browse', component: BrowseCandidatesComponent },
  { path: 'vacancy-pdf-view', component: VacancyPdfViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomepageComponent,
  ResetPasswordComponent,
  ForgotPasswordComponent,
  ComponentDevelopmentComponent,
  GraduateProfileComponent,
  DirectVacancyComponent,
  ForgotPasswordComponent,
  ContactComponent,
  VacancyAdsComponent,
  VacancyPostComponent,
  CompanyDepartmentsListComponent,
  RecruitmentListComponent,
  GraduateInformationComponent,
  VacancyPdfViewComponent,
];



