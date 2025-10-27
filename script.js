//your JS code here. If required.
 function updateTimer() {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      document.getElementById("timer").textContent = `${date} ${time}`;
    }

   
    setInterval(updateTimer, 1000);

   
    updateTimer();