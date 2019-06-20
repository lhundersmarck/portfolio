// Match media query of min-width 991px
const minWidth991 = window.matchMedia("(min-width: 991px)");
// Add a listener to know when the width changes
minWidth991.addListener(handleMinWidth991);

// When the page loads for the first time, we're not going to be notified of the width change
// cause there wasn't any. To apply the correct rule, we need to make sure to call the function
// right after the page loads
document.addEventListener("DOMContentLoaded", function(){
    handleMinWidth991(minWidth991)
});

function handleMinWidth991(minWidth991) {
  // If the media query is matched (screen width is at least 991px),
  // put the content div with text inside the div that has the background image
  // so that it jumps up
  if (minWidth991.matches) {
    const aboutHeroContentDiv = document.getElementsByClassName("about-hero-content")[0];
    const aboutHeroImageDiv = document.getElementsByClassName("about-hero-image")[0];
    aboutHeroImageDiv.appendChild(aboutHeroContentDiv);
  } else {
    // If the media query doesn't match (screen width is less than 991px),
    // take the content div with text and put it back inside the sections
    // so that it doesn't overlap the image
    const aboutHeroContentDiv = document.getElementsByClassName("about-hero-content")[0];
    const aboutSection = document.getElementById("about-hero");
    aboutSection.appendChild(aboutHeroContentDiv);
  }
}
