import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FusionChartsModule } from "angular-fusioncharts";
import { WorldMapComponent } from '../components/world-map/world-map.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import * as Maps from "fusioncharts/fusioncharts.maps";
import * as World from 'fusionmaps/maps/fusioncharts.worldwithcountries';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './card/card.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { SearchComponent } from './search/search.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { ChartComponent } from './chart/chart.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import {MatButtonModule} from '@angular/material/button';

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme, Maps, World);
@NgModule({
 
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FusionChartsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatAutocompleteModule,
    NgbModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    OverlayModule,
    MatButtonModule,
  ],
  exports: [
    DashboardComponent,
  ],
   declarations: [
    WorldMapComponent,
    DashboardComponent,
    CardComponent,
    SearchComponent,
    ChartComponent,
    DatePickerComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
   
})
export class ComponentsModule { }
