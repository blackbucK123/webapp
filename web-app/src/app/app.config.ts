import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import { DatePipe } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(HttpClientModule), provideRouter(routes), DatePipe]
};
