import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NflModule } from './nfl/nfl.module';
import { NbaModule } from './nba/nba.module';
import { NhlModule } from './nhl/nhl.module';
import { PgaModule } from './pga/pga.module';
import { MlbModule } from './mlb/mlb.module';

import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NflModule,
    NbaModule,
    NhlModule,
    PgaModule,
    MlbModule,
    MegaMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
