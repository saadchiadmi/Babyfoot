import { Component, OnInit } from '@angular/core';
import { Tournament } from '../entities/Tournament';
import { SelectItem } from 'primeng/primeng';
import { TournamentService } from '../service/tournament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  tournaments: Tournament[];
  selectedTournament: Tournament;
  displayDialog: boolean;
  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;

  constructor(private tournamentservice: TournamentService) { }

  ngOnInit() {
      this.tournamentservice.getTournament().subscribe(tournament => this.tournaments = tournament);

      this.sortOptions = [
          {label: 'Old to new', value: 'date'},
          {label: 'New to old', value: '!date'},
      ];
  }

  selectPlayer(event: Event, tournament: Tournament) {
      this.selectedTournament = tournament;
      this.displayDialog = true;
      event.preventDefault();
  }

  onSortChange(event) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }

  onDialogHide() {
      this.selectedTournament = null;
  }

}
