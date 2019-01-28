import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { HowItWorksModule } from './how-it-works/how-it-works.module';
import { EstimateModule } from './estimate/estimate.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    HowItWorksModule,
    EstimateModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
