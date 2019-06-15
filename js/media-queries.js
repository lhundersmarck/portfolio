const minWidth575 = window.matchMedia("(min-width: 575px)");
handleMinWidth575(minWidth575);

function handleMinWidth575(minWidth575) {
  if (minWidth575.matches) {
    const aboutHeroContentDiv = document.getElementsByClassName("about-hero-content")[0];
    const aboutHeroImageDiv = document.getElementsByClassName("about-hero-image")[0];
    if (aboutHeroImageDiv) {
      aboutHeroImageDiv.appendChild(aboutHeroContentDiv);
    }
  } else {
    const aboutHeroContentDiv = document.getElementsByClassName("about-hero-content")[0];
    const aboutSection = document.getElementById("about-hero");
    aboutSection.appendChild(aboutHeroContentDiv);
  }
}

minWidth575.addListener(handleMinWidth575);
