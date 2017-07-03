import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { ExaminationComponent } from './examination/examination.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'examination', component: ExaminationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    HomeComponent,
    SettingComponent,
    ExaminationComponent
  ],
  imports: [RouterModule.forRoot(appRoutes, {})],
  exports: [RouterModule]
})
export class RoutesModule {

}
