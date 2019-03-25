import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutoTyperComponent } from './auto-typer/auto-typer.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoTyperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
