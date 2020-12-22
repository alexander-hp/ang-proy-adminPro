import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe [] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router

  ) {

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      // tslint:disable-next-line: no-string-literal
      // console.log(params['termino']);

      // tslint:disable-next-line: no-string-literal
      this.termino = params['termino'];

      // tslint:disable-next-line: no-string-literal
      this.heroes = this.heroesService.buscarHeroes( params['termino']);
      console.log(this.heroes);

    });
  }

}
