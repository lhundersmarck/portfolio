document.addEventListener("DOMContentLoaded", function(){
    fillFooterWithCurentYear();
});

function fillFooterWithCurentYear() {
  const date = new Date();
  const year = date.getFullYear();
  const copyrightPs = document.getElementsByClassName("copyright");
  for (let i = 0; i < copyrightPs.length; i++) {
    copyrightPs[i].innerText = `Laura Hundersmarck ${year}`;
  }
}
