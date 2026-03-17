function saveWifi() {
  const ssid = document.getElementById("ssid").value;
  const password = document.getElementById("password").value;
  const channel = document.getElementById("channel").value;
  const msg = document.getElementById("wifiMsg");

  if (ssid.trim() === "" || password.trim() === "") {
    msg.style.color = "red";
    msg.textContent = "SSID and Password cannot be empty.";
    return;
  }

  msg.style.color = "green";
  msg.textContent = `WiFi settings saved: SSID=${ssid}, Channel=${channel}`;
}

function rebootRouter() {
  const confirmReboot = confirm("Are you sure you want to reboot the router?");
  if (confirmReboot) {
    alert("Router is rebooting...");
  }
}