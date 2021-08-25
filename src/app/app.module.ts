import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LettermovementComponent } from './components/lettermovement/lettermovement.component';
import { LettercutupsComponent } from './components/lettercutups/lettercutups.component';
import { MouseoutClassDirective } from './directives/mouseoutClass';

@NgModule({
  declarations: [
    AppComponent,
    LettermovementComponent,
    LettercutupsComponent,
    MouseoutClassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
