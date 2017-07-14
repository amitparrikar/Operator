import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MdButtonModule, MdSelectModule, MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { ExaminationComponent } from './examination/examination.component';
import { AvatarComponent } from './common/avatar/avatar.component';
import { WebcamBoxComponent } from './common/webcam-box/webcam-box.component';

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
    ExaminationComponent,
    AvatarComponent,
    WebcamBoxComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {}),
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    MdButtonModule,
    MdSelectModule,
    MdInputModule
  ],
  exports: [RouterModule]
})
export class RoutesModule {

}
