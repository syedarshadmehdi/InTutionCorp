import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFormComponent } from './app-form/app-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultipleRadiobuttonsComponent } from './multiple-radiobuttons/multiple-radiobuttons.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFormComponent,
    MultipleRadiobuttonsComponent
    
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
