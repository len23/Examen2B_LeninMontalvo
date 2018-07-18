import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

/* import 'angular-animate';
import 'angular-notification-icons';
import 'angular-notification-icons/dist/angular-notification-icons.css'; */
// Can also use less with a less-loader:
// import 'angular-notification-icons/src/less/angular-notification-icons.less'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
