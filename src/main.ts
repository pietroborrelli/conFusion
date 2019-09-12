//from this libraries i'm importing these modules
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//app module is the root module, from which the application bootstraps
//see src/app module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

