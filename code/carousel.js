document.addEventListener("DOMContentLoaded", function () {
  var quotes = document.querySelectorAll("#quotes .quote");
  var dots = document.querySelectorAll(".dot");
  var currentQuoteIndex = 0;
  var interval;

  function nextQuote() {
    goToQuote(currentQuoteIndex + 1);
  }

  function goToQuote(index) {
    // Remove active class from current quote and dot
    quotes[currentQuoteIndex].classList.remove("active");
    dots[currentQuoteIndex].classList.remove("active");

    // Update the current index
    currentQuoteIndex = index % quotes.length;

    // Add active class to the new current quote and dot
    quotes[currentQuoteIndex].classList.add("active");
    dots[currentQuoteIndex].classList.add("active");
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      goToQuote(index);
      clearInterval(interval); // Stop auto-switching when a dot is clicked
    });
  });

  // Automatically switch to the next quote every 6 seconds
  interval = setInterval(nextQuote, 6000);
});
