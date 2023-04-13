import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AlisamentoAmericanoComponent } from './alisamento-americano/alisamento-americano.component';
import { CorteComponent } from './corte/corte.component';
import { FreeStyleComponent } from './free-style/free-style.component';
import { LuzesComponent } from './luzes/luzes.component';
import { PigmentacaoComponent } from './pigmentacao/pigmentacao.component';
import { PlatinadoComponent } from './platinado/platinado.component';
import { ProgressivaComponent } from './progressiva/progressiva.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)},
  { path: "", redirectTo:"produtos", pathMatch: "full"},
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },  // vai redirecionar a pagina de produtos para a pagina principal//
  





  
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
