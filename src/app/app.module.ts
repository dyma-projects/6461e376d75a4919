import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { Exercice1Component } from './exercice1.component';
import { Exercice2Component } from './exercice2.component';
import { Exercice3Component } from './exercice3.component';
import { Exercice4Component } from './exercice4.component';

@NgModule({
  declarations: [AppComponent, Exercice1Component, Exercice2Component, Exercice3Component, Exercice4Component],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
