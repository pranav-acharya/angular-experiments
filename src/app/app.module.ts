import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { MycompComponent } from './mycomp/mycomp.component';
import * as fromMyComp from './mycomp/mycomp.reducer';


@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot({ mycompState: fromMyComp.reducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
