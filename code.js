// Code to read out magnetometer for x, y and z
/*
Puck.magOn();
Puck.on('mag', function(values) {
  console.log(values);
});
*/

//Code to read out light sensor
/*
Puck.light();
*/

//Code to read out temperature
/*
E.getTemperature();
*/

//Code to read out battery level
/*
Puck.getBatteryPercentage();
*/

//Code for NFC - Near field communication
/*
NRF.nfcURL("http://12.168.178.22");
*/

//Code for iBeacons
/*
require("ble_ibeacon").advertise({
  uuid: [0, 2, 0, 1, 1, 9, 9, 0, 0, 2, 0, 1, 1, 9, 9, 0]
});
*/

//Another code for Beacons (Eddystone)
/*
NRF.setAdvertising([
  require("ble_ibeacon").get({
    uuid: [0, 2, 0, 1, 1, 9, 9, 0, 0, 2, 0, 1, 1, 9, 9, 0]
  }),
  require("ble_eddystone").get("192.168.178.22")
  ], {interval:250});
*/

//Advertise temperature, light and battery percentage via NRF
//Broadcast LucaHome IP
NRF.nfcURL("http://12.168.178.22");
setInterval(function() {
   NRF.setAdvertising({
     0x1809: [Math.round(E.getTemperature())],
     0x1819: [Puck.light() * 100],
     0x1829: [Puck.getBatteryPercentage()],
     0x1839: [Puck.mag()]	// Wrong format... TODO: Needs to be improved
  });
}, 30000);