import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KegComponent } from './keg/keg.component';
import { KegDetailComponent } from './keg-detail/keg-detail.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { OnSalesPipe } from './onSale.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KegComponent,
    KegDetailComponent,
    NewKegComponent,
    OnSalesPipe
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
