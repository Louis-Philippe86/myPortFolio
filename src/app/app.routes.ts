import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SkillListComponent} from "./skill-list/skill-list.component";
import {TestComponent} from "./test/test.component";
import {CareerComponent} from "./career/career.component";
import {ProjectComponent} from "./project/project.component";
import {IntroductionComponent} from "./introduction/introduction.component";

export const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'skills', component : SkillListComponent},
  {path: 'career', component : CareerComponent},
  {path: 'projects', component : ProjectComponent},
  {path: 'test', component : TestComponent},
  {path: 'introduction', component : IntroductionComponent},
];
