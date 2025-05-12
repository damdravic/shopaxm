import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { provideEffects } from '@ngrx/effects';
import { loadProductsSSR, ProductEffects } from './features/product/store/product.effects';
import { provideClientHydration } from '@angular/platform-browser';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes),
   
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
