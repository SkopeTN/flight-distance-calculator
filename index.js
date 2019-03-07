
/* calculates flight distance in Km based on great-circle distance formula
** this link explains how GCD is calculated http://www.movable-type.co.uk/scripts/latlong.html
** params:
** departure: { longitude, latitude }
** arrival: { longitude, latitude }
*/
function calculateFlightDistance(departure, arrival) {
    const deg2rad = deg => deg * (Math.PI / 180);
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(arrival.latitude - departure.latitude);
    const dLon = deg2rad(arrival.longitude - departure.longitude);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(departure.latitude)) * Math.cos(deg2rad(arrival.latitude)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const flightDistance = R * c; // Distance in km
    return flightDistance;
}

module.exports = calculateFlightDistance;