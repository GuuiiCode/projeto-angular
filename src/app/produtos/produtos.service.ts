import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Produtos } from './produtos'

@Injectable()
export class ProdutosService {

    constructor(private http: HttpClient) {}

    protected urlProdutos = "http://localhost:3000/";

    public obterProdutos(): Observable<Produtos[]> {
        return this.http
                   .get<Produtos[]>(this.urlProdutos + "produtos");
    }

}