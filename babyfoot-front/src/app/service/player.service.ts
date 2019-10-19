import { Injectable } from '@angular/core';
import { Player } from '../entities/Player';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  players : BehaviorSubject<Player[]> = new BehaviorSubject([
    {pseudo : "saad", score : 45, goals : 35, champions : 3},
    {pseudo : "saad1", score : 50, goals : 47, champions : 4},
    {pseudo : "saad2", score : 25, goals : 35, champions : 2},
    {pseudo : "saad3", score : 10, goals : 10, champions : 1},
    {pseudo : "saad4", score : 30, goals : 20, champions : 2},
    {pseudo : "saad4", score : 30, goals : 20, champions : 2},
  ]) ;

  getPlayers(): Observable< Player[]> {
    return this.players.asObservable();
  }
}
