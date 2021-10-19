export class LikeComponent {
  private _likeCount: number;
  private _state: boolean;

  constructor(likeCount: number, state: boolean) {
    this._likeCount = likeCount;
    this._state = state;
  }

  getLikesCount() {
    return this._likeCount;
  }

  getState(){
    return this._state;
  }
  updateLikeCount(){
    this._likeCount += (!this._state) ? 1 : -1;
    this._state = !this._state;
  }
}
