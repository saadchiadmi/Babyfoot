import { Injectable } from '@angular/core';
import { Tournament } from '../entities/Tournament';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor() { }

  tounament : BehaviorSubject<Tournament[]> = new BehaviorSubject([
    {date : new Date(2019, 10, 21), pseudo1 : "saad", pseudo2 : "saad1"},
    {date : new Date(2019, 10, 22), pseudo1 : "saad4", pseudo2 : "saad2"},
    {date : new Date(2019, 10, 23), pseudo1 : "saad", pseudo2 : "saad3"},
    {date : new Date(2019, 10, 24), pseudo1 : "saad4", pseudo2 : "saad"},
    {date : new Date(2019, 10, 25), pseudo1 : "saad", pseudo2 : "saad1"},
  ]) ;

  getTournament(): Observable< Tournament[]> {
    return this.tounament.asObservable();
  }
}
