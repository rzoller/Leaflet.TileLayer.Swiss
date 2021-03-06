import L from 'leaflet';
import { lv95 } from './crs';

// Areas where tiles are available in lat/lng (same for LV03/LV95)
export const tileBounds = L.latLngBounds(
  lv95.unproject(lv95.projection.bounds.min),
  lv95.unproject(lv95.projection.bounds.max),
);

// Approximate bounding box of Switzerland in lat/lng (same for LV03/LV95)
// This can be used to set the initial map view, such that the entire country is visible
export const switzerlandBounds = L.latLngBounds(
  lv95.unproject(L.point(2485000, 1075000)),
  lv95.unproject(L.point(2835000, 1295000)),
);
