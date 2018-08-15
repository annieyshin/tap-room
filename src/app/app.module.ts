import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KegComponent } from './keg/keg.component';
import { KegDetailComponent } from './keg-detail/keg-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    KegComponent,
    KegDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
