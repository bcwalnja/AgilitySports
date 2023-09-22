import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NflRoutingModule } from './nfl-routing.module';
import { NflComponent } from './nfl.component';
import { RosterComponent } from './components/roster/roster.component';
import { TeamComponent } from './components/team/team.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { PlayerComponent } from './components/player/player.component';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    NflComponent,
    RosterComponent,
    TeamComponent,
    ScheduleComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    NflRoutingModule,
    TableModule,
  ]
})
export class NflModule { }
