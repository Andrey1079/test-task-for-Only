import PlaceMarker from '../components/PlaceMarker';
import { markerArray, background, checkbox } from '../variables/variables';
import Position from '../components/Position';
import '../pages/index.css';

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
  if (checkbox.checked) {
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
    checkbox.checked = false;
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
