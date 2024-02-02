// JavaScript for using TypeWrite Effect on the Banner
var element = document.getElementById('templateDescription');
var text = element.textContent;
element.textContent = '';
var i = 0;

function typeWriter() {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    i++;
  } else {
    clearInterval(intervalId);
  }
}

var intervalId = setInterval(typeWriter, 150);


// JavaScript for View Product Button in Banner
function scrollToProduct() {
    var element = document.getElementById("ProductNav");
    element.scrollIntoView({behavior: "smooth"});
  }

// JavaScript for "Looking For:" icon section Button to navigate to the respective section
  function scrollToCanon() {
    var element = document.getElementById("Cannon");
    element.scrollIntoView({behavior: "smooth"});
  }

  function scrollToHp() {
    var element = document.getElementById("Hp");
    element.scrollIntoView({behavior: "smooth"});
  }

  function scrollToEpson() {
    var element = document.getElementById("Epson");
    element.scrollIntoView({behavior: "smooth"});
  }