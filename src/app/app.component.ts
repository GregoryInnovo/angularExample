import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
}

/* 
  El componente raíz 
  Conecta la jerarquía de componentes con un modelo de objeto de documento de página (DOM). 
  Cada componente define la clase que contiene los datos y la lógica de la aplicación, 
  y está asociado con la plantilla HTML que define la vista que se mostrará en una 
  aplicación de destino. 

  Los componentes definen vistas, que son conjuntos de elementos de la pantalla que Angular 
  puede elegir y modificar de acuerdo con la lógica y los datos de tu programa.

  El decorador @Component identifica la clase inmediatamente debajo de él como el componente
  y proporciona la plantilla y los metadatos específicos del componente relacionados.

*/