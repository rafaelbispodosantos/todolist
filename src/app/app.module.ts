import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContagemComponent } from './components/contagem/contagem.component';
import { FacingComponent } from './facing/facing.component';
import { FluxoComponent } from './fluxo/fluxo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContagemComponent,
    FacingComponent,
    FluxoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
