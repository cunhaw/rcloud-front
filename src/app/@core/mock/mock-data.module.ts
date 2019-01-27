import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { ElectricityService } from './electricity.service';
import { SmartTableService } from './smart-table.service';
import { UserActivityService } from './user-activity.service';
import { TrafficListService } from './traffic-list.service';
import { PeriodsService } from './periods.service';
import { TrafficBarService } from './traffic-bar.service';
import { TemperatureHumidityService } from './temperature-humidity.service';
import { SolarService } from './solar.service';
import { StatsBarService } from './stats-bar.service';
import { CountryOrderService } from './country-order.service';
import { StatsProgressBarService } from './stats-progress-bar.service';
import { VisitorsAnalyticsService } from './visitors-analytics.service';
import { SecurityCamerasService } from './security-cameras.service';

const SERVICES = [
  UserService,
  ElectricityService,
  SmartTableService,  
  UserActivityService,
  TrafficListService,
  PeriodsService,
  TrafficBarService,
  TemperatureHumidityService,
  SolarService,
  StatsBarService,
  CountryOrderService,
  StatsProgressBarService,
  VisitorsAnalyticsService,
  SecurityCamerasService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
} 
