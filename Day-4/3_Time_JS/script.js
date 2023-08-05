function getTimeRemaining(targetDate) {
    const a = new Date();
    const b = targetDate - a;
    
    const seconds = Math.floor(b / 1000) % 60;
    const minutes = Math.floor(b / 1000 / 60) % 60;
    const hours = Math.floor(b / 1000 / 60 / 60) % 24;
    const days = Math.floor(b / 1000 / 60 / 60 / 24);
    
    return { days, hours, minutes, seconds };
  }
  
  function ans() {
    const c = document.getElementById("dateInput").value;
    const targetDate = new Date(c + "T00:00:00");
    
    const b = getTimeRemaining(targetDate);
    const fianlans = document.getElementById("finalans");
    
// console.log(`${b.days} days, ${b.hours} hours, ${b.minutes} minutes, ${b.seconds} seconds`);
    fianlans.innerHTML = `${b.days} days, ${b.hours} hours, ${b.minutes} minutes, ${b.seconds} seconds`;
    
  }
  
  
  