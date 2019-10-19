import { Injectable } from '@angular/core';
import { Player } from '../entities/Player';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  players : BehaviorSubject<Player[]> = new BehaviorSubject([
    {pseudo : "saad"},
    {pseudo : "saad1"},
    {pseudo : "saad2"},
    {pseudo : "saad3"},
    {pseudo : "saad4"},
  ]) ;

  getPlayers(): Observable< Player[]> {
    return this.players.asObservable();
  }
}
