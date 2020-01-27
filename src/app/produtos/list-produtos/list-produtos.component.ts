import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produtos } from '../produtos';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.component.html'
})
export class ListProdutosComponent implements OnInit {

  constructor(private produtosServices: ProdutosService) { }

  public produtos: Produtos[];

  ngOnInit() {
    this.produtosServices.obterProdutos()
        .subscribe(
          produtoss => {
            this.produtos = produtoss
            console.log(produtoss);
          },
          error => console.log(error)
        );
  }

}
