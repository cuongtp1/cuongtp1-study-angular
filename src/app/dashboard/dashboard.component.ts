import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../heroes/hero';
import { HEROES } from '../heroes/mock-heroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroService
    //   .getHeroes()
    //   .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
    this.heroes = HEROES;
  }
}
