import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControlComponent } from './components/game-control/game-control.component';
import { EvenOddComponent } from './components/even-odd/even-odd.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    EvenOddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
