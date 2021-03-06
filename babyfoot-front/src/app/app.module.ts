import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import { SidebarModule } from 'ng-sidebar';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TournamentComponent } from './tournament/tournament.component';
import { PlayersComponent } from './players/players.component';
import { CreateTournamentComponent } from './create-tournament/create-tournament.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule, PanelModule, DialogModule, InputTextModule, ButtonModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DashboardComponent,
    TournamentComponent,
    PlayersComponent,
    CreateTournamentComponent,
  ],
  imports: [
    ButtonModule,
    InputTextModule,
    DialogModule,
    PanelModule,
    DropdownModule,
    FormsModule,
    BrowserModule,
    DataViewModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    AccordionModule,
    LayoutModule,
    AutoCompleteModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
