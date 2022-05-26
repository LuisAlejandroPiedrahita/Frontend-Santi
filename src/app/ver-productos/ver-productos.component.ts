import {Component, OnInit} from '@angular/core';
import {Producto} from '../models/producto';
import {ProductoService} from '../service/producto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css']
})
export class VerProductosComponent implements OnInit {

  productosEncontrados: Producto[];

  constructor(private productoService: ProductoService, private router: Router) {
  }

  ngOnInit() {
    this.productoService.lista().subscribe(dato => {
      this.productosEncontrados = dato;
    });
  }

  volver(): void {
    this.router.navigate(['/index']);
  }
}
