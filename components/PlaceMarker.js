export default class PlaceMarker {
  constructor(marker, markerTemplate, getPosition) {
    this._markerTemplate = document.querySelector(markerTemplate).content.cloneNode(true);
    this._button = this._markerTemplate.querySelector('.button');
    this._xOffset = marker.xOffset;
    this._yOffset = marker.yOffset;
    this._name = marker.name;
    this._color = marker.color;
    this._getPosition = getPosition;
  }
  setMarker() {
    const { xPosition, yPosition } = this._getPosition(this._xOffset, this._yOffset);
    this._button.dataset.xOffset = this._xOffset;
    this._button.dataset.yOffset = this._yOffset;
    this._button.dataset.name = this._name;
    this._button.classList.add(`button_color_${this._color}`);
    this._button.style.top = `${yPosition}px`;
    this._button.style.left = `${xPosition}px`;
    return this._markerTemplate;
  }
}
