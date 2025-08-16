import { Component } from '@angular/core';
import { AuraGames } from './components/aura-games/aura-games';
import { Banner } from './components/banner/banner';
import { FeatureCards } from './components/feature-cards/feature-cards';
import { Header } from './components/header/header';
import { PopularGames } from './components/popular-games/popular-games';
import { Sidebar } from './components/sidebar/sidebar';
import { Casino } from './components/casino/casino';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [AuraGames,Banner,FeatureCards,Header,PopularGames,Sidebar,Casino,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'casino';
}
