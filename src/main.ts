import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app';  // sửa thành AppComponent
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),       // Provider cho định tuyến
    provideHttpClient()             // Provider cho HTTP Client
  ]
});