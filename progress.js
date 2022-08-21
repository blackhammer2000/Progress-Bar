function fillBar(seconds) {
  let progressBar = document.querySelector('.progressBar');

  let currentPercentage = 0;

  let interval = setInterval(() => {
    progressBar.style.width = `${currentPercentage}%`;

    currentPercentage++;
    console.log('we are at' + currentPercentage)
    if (currentPercentage > 100) {
      const completeTone = new Audio('Complete.wav')
      clearInterval(interval);
      try {
       completeTone.play()
      } catch (e) {
        console.log(e)
      }
    }


  }, (seconds * 1000) / 100);
  //  console.log('clicked');


};