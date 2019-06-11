function toggleMobileMenu(mobileMenuDiv) {
  mobileMenuDiv.classList.toggle('active-mobile-menu-bar');
  const mobileLogoDiv = document.getElementsByClassName('mobile-logo')[0];
  const menuList = document.getElementsByClassName('mobile-menu-list')[0];
  const mobileMenuContainer = document.getElementsByClassName(
    'mobile-menu-container'
  )[0];
  const mobileMenuListContainer = document.getElementsByClassName(
    'mobile-menu-list-container'
  )[0];
  mobileLogoDiv.classList.toggle('hidden');
  mobileMenuContainer.classList.toggle('open-mobile-menu');
  menuList.classList.toggle('open-mobile-menu-list');
  mobileMenuListContainer.classList.toggle('open-mobile-menu-list-container');
  if (mobileLogoDiv.classList.contains("hidden")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

function toggleMobileMenuItem() {
  const mobileMenuDiv = document.getElementsByClassName('mobile-menu')[0];
  toggleMobileMenu(mobileMenuDiv);
}


// window.onscroll = function() {myFunction()};
//
// function myFunction() {
//   const header = document.getElementsByTagName("header")[0];
//   const sticky = header.offsetTop;
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("sticky")
//   } else {
//     header.classList.remove("sticky");
//   }
// }
