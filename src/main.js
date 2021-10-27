"use strict";
exports.__esModule = true;
var like_component_1 = require("./app/components/like.component");
var core_1 = require("@angular/core");
// import { AppModule } from './app/app.module';
var environment_1 = require("./environments/environment");
if (environment_1.environment.production) {
    (0, core_1.enableProdMode)();
}
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
var likes = new like_component_1.LikeComponent(15, true);
likes.updateLikeCount();
console.log("like count: " + likes.getLikesCount() + " and " + likes.getState());
