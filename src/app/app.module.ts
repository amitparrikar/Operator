import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RoutesModule } from './routes.module';

import { AppComponent } from './app.component';

import { CommonService } from './services/common.service';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    ReactiveFormsModule
  ],
  providers: [
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
