import { LikeComponent } from './app/components/like/like.component';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

 import { AppModule } from './app/app.module';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

 platformBrowserDynamic().bootstrapModule(AppModule)
   .catch(err => console.error(err));

let likes = new LikeComponent(15, true);
likes.updateLikeCount();
console.log(`like count: ${likes.getLikesCount()} and ${likes.getState()}`);
