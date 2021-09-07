// Set the date we're counting down to
var countDownDate = new Date("Jul 1, 2031 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  // TODO: Months fix is extremely rag-tag, find a new way to handle months so that all data can be displayed accurately
  // UPDATE: Apparently this works????
  var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
  var months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.43));
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.43)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the results in elements
  document.getElementById("countdown").innerHTML =
    years + "y " + months + "m " + days + "d "; // + hours + "h " + minutes + "m " + seconds + "s "
  document.getElementById("years").innerHTML = years;
  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "HOY";
    document.getElementById("years").innerHTML = "HOY";
  }
}, 1000);
