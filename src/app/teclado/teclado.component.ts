import { Component } from '@angular/core';

@Component({
  selector: 'app-teclado',
  standalone: true,
  imports: [],
  templateUrl: './teclado.component.html',
  styleUrl: './teclado.component.css'
})
export class TecladoComponent {

public resultado = "";

clicar(valor:string){
this.resultado+=valor;
}
limpar(){
this.resultado = "";
}
finalizar(){
this.resultado = eval(this.resultado);
}

}
