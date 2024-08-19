import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SkillListComponent} from "./skill-list/skill-list.component";
import {CareerComponent} from "./career/career.component";
import {ProjectComponent} from "./project/project.component";
import {IntroductionComponent} from "./introduction/introduction.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";

export const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'skills', component : SkillListComponent},
  {path: 'career', component : CareerComponent},
  {path: 'projects/:id', component: ProjectDetailComponent},
  {path: 'projects', component : ProjectComponent},
  {path: 'introduction', component : IntroductionComponent},
  {path: '**', component: PageNotFoundComponent},
];

