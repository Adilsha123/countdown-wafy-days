
  const endDate = new Date('2024-05-23'); // Set your college ending date (YYYY-MM-DD)

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance < 0) {
      document.getElementById('countdown').innerHTML = 'College has ended!';
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('countdown').innerHTML = `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`;
    }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
