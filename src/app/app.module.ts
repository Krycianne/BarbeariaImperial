import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AlisamentoAmericanoComponent } from './alisamento-americano/alisamento-americano.component';
import { CorteComponent } from './corte/corte.component';
import { FreeStyleComponent } from './free-style/free-style.component';
import { LuzesComponent } from './luzes/luzes.component';
import { PigmentacaoComponent } from './pigmentacao/pigmentacao.component';
import { PlatinadoComponent } from './platinado/platinado.component';
import { ProgressivaComponent } from './progressiva/progressiva.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlisamentoAmericanoComponent,
    CorteComponent,
     LuzesComponent,
    PigmentacaoComponent,
    PlatinadoComponent,
    ProgressivaComponent,
    FreeStyleComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
