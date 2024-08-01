import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SkillListComponent} from "./skill-list/skill-list.component";
import {TestComponent} from "./test/test.component";

export const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'skills', component : SkillListComponent},
  {path: 'test', component : TestComponent}

];
