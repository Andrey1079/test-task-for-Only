class Position {
  constructor(container, backgroundImageWidth, backgroundImageHeight, buttonSize) {
    this._background = document.querySelector(container);
    this._imageWidth = backgroundImageWidth;
    this._imageHeight = backgroundImageHeight;
    this._buttonSize = buttonSize;
    this._imageRatio = this._imageWidth / this._imageHeight;
    this._containerWidth = this._background.clientWidth;
    this._containerHeight = this._background.clientHeight;
    this._containerRatio = this._containerWidth / this._containerHeight;
    this._kTransform = '';
    this._xCenter = '';
    this._yCenter = '';
    this.xPosition = '';
    this.yPosition = '';
    this._currentImageWidth = '';
  }
  getContainerSize() {
    this._containerWidth = this._background.clientWidth;
    this._containerHeight = this._background.clientHeight;
    this._containerRatio = this._containerWidth / this._containerHeight;
    return { containerWidth: this._containerWidth, containerHeight: this._containerHeight };
  }
  _setCenterPosition() {
    if (this._containerRatio > this._imageRatio) {
      this._currentImageWidth = this._containerWidth;
    } else {
      this._currentImageWidth = this._containerHeight * this._imageRatio;
    }
    this._kTransform = this._currentImageWidth / this._imageWidth;
    this._xCenter = (this._containerWidth - this._buttonSize) / 2;
    this._yCenter = (this._containerHeight - this._buttonSize) / 2;
  }

  getMarkerPosition(xOffset, yOffset) {
    this.getContainerSize();
    this._setCenterPosition();
    this.yPosition = this._yCenter + yOffset * this._kTransform;
    this.xPosition = this._xCenter + xOffset * this._kTransform;
    return { xPosition: this.xPosition, yPosition: this.yPosition };
  }
}
export default position = new Position('.background', 1920, 1080, 41);
