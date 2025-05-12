import { ApplicationConfig, inject, PLATFORM_ID, provideZoneChangeDetection, runInInjectionContext } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay
} from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import {  loadProductsSSR, ProductEffects } from './features/product/store/product.effects';
import { productReducer } from './features/product/store/product.reducer';
import { provideStore } from '@ngrx/store';
import { isPlatformBrowser } from '@angular/common';




export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ product: productReducer }),
    provideEffects([ProductEffects]),
  ],
};


