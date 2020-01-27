import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ListProdutosComponent } from './produtos/list-produtos/list-produtos.component';

export const appRouter: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'produtos', component: ListProdutosComponent },
    { path: 'produto-detalhe/:id', component: ListProdutosComponent }
];




