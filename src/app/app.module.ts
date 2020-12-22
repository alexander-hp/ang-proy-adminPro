import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Rutas

import { APP_ROUTING } from './app.routes';

// Servicios
import { HeroesService } from './services/heroes.service';

// componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
