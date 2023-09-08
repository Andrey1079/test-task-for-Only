const markerArray = [
  {
    name: 'Мост',
    color: 'blue',
    xOffset: -501,
    yOffset: 194,
  },
  {
    name: 'Стадион',
    color: 'green',
    xOffset: -260,
    yOffset: -38.5,
  },
  {
    name: 'Дом',
    color: 'blue',
    xOffset: -367,
    yOffset: -238.5,
  },
  {
    name: 'Многоэтажка',
    color: 'blue',
    xOffset: 426,
    yOffset: -295.5,
  },
  {
    name: 'Лаборатория',
    color: 'blue',
    xOffset: 467,
    yOffset: -45.5,
  },
  {
    name: 'Библиотека',
    color: 'green',
    xOffset: 200,
    yOffset: -116,
  },
  {
    name: 'Паркинг',
    color: 'blue',
    xOffset: 133,
    yOffset: 109,
  },
  {
    name: 'Общежитеие',
    color: 'green',
    xOffset: 360,
    yOffset: 150,
  },
  {
    name: 'Отель',
    color: 'green',
    xOffset: 160,
    yOffset: 270,
  },
  {
    name: 'Общежитие',
    color: 'blue',
    xOffset: 646,
    yOffset: 192,
  },
];
const background = document.querySelector('.background');
// const imageWidth = 1920;
// const imageHeight = 1080;
// const buttonSize = 41;
// const imageRatio = imageWidth / imageHeight;
// let currentImageWidth;
// let containerWidth;
// let containerHeight;
// let containerRatio;
// let kTransform;
// let resizeDelay;
// let xCenter;
// let yCenter;

class PlaceMarker {
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
    // this._button.style.top = `${this._yCenter + this._yOffset * this._kTransform}px`;
    // this._button.style.left = `${this._xCenter + this._xOffset * this._kTransform}px`;
    this._button.style.top = `${yPosition}px`;
    this._button.style.left = `${xPosition}px`;
    return this._markerTemplate;
  }
}

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
const position = new Position('.background', 1920, 1080, 41);

function createMarker(marker) {
  const newMarker = new PlaceMarker(marker, '.marker-template', getPosition);
  renderMarker(newMarker);
}

function getPosition(xOffset, yOffset) {
  return position.getMarkerPosition(xOffset, yOffset);
}

function renderMarker(marker) {
  background.append(marker.setMarker());
}

function rePositionMarker(marker) {
  const xOffset = marker.dataset.xOffset;
  const yOffset = marker.dataset.yOffset;
  const { xPosition, yPosition } = position.getMarkerPosition(xOffset, yOffset);
  marker.style.top = `${yPosition}px`;
  marker.style.left = `${xPosition}px`;
}
let resizeDelay;
window.addEventListener('resize', () => {
  clearTimeout(resizeDelay);
  resizeDelay = setTimeout(() => {
    background.querySelectorAll('.button').forEach((marker) => {
      rePositionMarker(marker);
    });
  }, 100);
});
background.addEventListener('click', (e) => {
  if (false) {
    const pointName = prompt('Название объекта');
    const pointColor = prompt('Цвет маркера green/blue');
    const { containerWidth, containerHeight } = position.getContainerSize();
    const marker = {
      name: `${pointName}`,
      color: `${pointColor}`,
      xOffset: e.clientX - containerWidth / 2,
      yOffset: e.clientY - containerHeight / 2,
    };
    markerArray.push(marker);
    createMarker(marker);
    console.log(markerArray);
  } else {
    if (e.target !== e.currentTarget) {
      e.target.classList.toggle('button_active');
    } else {
      background.querySelectorAll('.button_active').forEach((activeMarker) => {
        activeMarker.classList.remove('button_active');
      });
    }
  }
});

markerArray.forEach((marker) => {
  createMarker(marker);
});
