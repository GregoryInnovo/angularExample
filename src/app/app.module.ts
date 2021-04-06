import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostItComponent } from './post-it/post-it.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PostItComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* 
  Modulo Raíz
  Proporciona el mecanismo de arranque que inicia la aplicación. 
  Una aplicación normalmente contiene muchos módulos funcionales.

  Para agregar módulos especializados

  Pro-tip: 
  La organización de su código en distintos módulos funcionales 
  ayuda a gestionar el desarrollo de aplicaciones complejas
  y a diseñar para su reutilización.
*/