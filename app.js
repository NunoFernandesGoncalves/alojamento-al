fetch('./guest.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('guestName')
      .textContent = data.guestName;

    document.getElementById('checkout')
      .textContent = data.checkout;

    document.getElementById('wifi')
      .textContent = data.wifi;

    document.getElementById('wifiPassword')
      .textContent = data.wifiPassword;

  });
