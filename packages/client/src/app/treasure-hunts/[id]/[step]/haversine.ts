const EARTH_RADIUS = 6371e3; // metres

export function distanceBetweenLatLon({
  lat1,
  lat2,
  lon1,
  lon2,
}: {
  lat1: number;
  lat2: number;
  lon1: number;
  lon2: number;
}) {
  // phi, lambda in radians
  const phi = (lat1 * Math.PI) / 180;
  const phi2 = (lat2 * Math.PI) / 180;
  const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi) *
      Math.cos(phi2) *
      Math.sin(deltaLambda / 2) *
      Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(c * EARTH_RADIUS);
}
