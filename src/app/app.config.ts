import { ApplicationConfig, inject, PLATFORM_ID, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

import { provideDefaultClient } from '../api';
import { routes } from './app.routes';
import { LocalStorage, MemoryStorage } from './local-storage';
import { WINDOW } from './window';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(),),
    provideDefaultClient({
      basePath: ''
    }),
    {
      provide: LocalStorage,
      useFactory: () => {
        if (isPlatformBrowser(inject(PLATFORM_ID))) {
          return inject(WINDOW).localStorage;
        }
        return new MemoryStorage();
      }
    }
  ]
};
