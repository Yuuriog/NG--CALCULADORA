import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecladoComponent } from './components/teclado/teclado.component';
import { InformacoesModule } from './informacoes/informacoes.module';

@NgModule({
  declarations: [AppComponent, TecladoComponent],
  imports: [BrowserModule, AppRoutingModule, InformacoesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
