"use strict";
exports.__esModule = true;
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likeCount, state) {
        this._likeCount = likeCount;
        this._state = state;
    }
    LikeComponent.prototype.getLikesCount = function () {
        return this._likeCount;
    };
    LikeComponent.prototype.getState = function () {
        return this._state;
    };
    LikeComponent.prototype.updateLikeCount = function () {
        this._likeCount += (!this._state) ? 1 : -1;
        this._state = !this._state;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
