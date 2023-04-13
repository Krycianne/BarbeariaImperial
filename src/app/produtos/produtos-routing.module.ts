import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { AlisamentoAmericanoComponent } from '../alisamento-americano/alisamento-americano.component';
import { CorteComponent } from '../corte/corte.component';
import { FreeStyleComponent } from '../free-style/free-style.component';
import { LuzesComponent } from '../luzes/luzes.component';
import { PigmentacaoComponent } from '../pigmentacao/pigmentacao.component';
import { PlatinadoComponent } from '../platinado/platinado.component';
import { ProgressivaComponent } from '../progressiva/progressiva.component';
import { ContatoComponent } from '../contato/contato.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: "alisamentoAmericano", component:AlisamentoAmericanoComponent}, // quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//
  { path: "corte", component:CorteComponent}, // quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//
  { path: "freeStyle", component:FreeStyleComponent},// quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//
  { path: "luzes", component:LuzesComponent}, // quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//
  { path: "pigmentacao", component:PigmentacaoComponent}, // quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//
  { path: "platinado", component:PlatinadoComponent}, // quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//
  { path: "progressiva", component:ProgressivaComponent}, // quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//
  { path: "contato", component:ContatoComponent}, // quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
