function toggleMobileMenu(mobileMenuDiv) {
  mobileMenuDiv.classList.toggle('active-mobile-menu-bar');
  const mobileLogoDiv = document.getElementsByClassName('mobile-logo')[0];
  const menuList = document.getElementsByClassName('mobile-menu-list')[0];
  const mobileMenuContainer = document.getElementsByClassName(
    'mobile-menu-container'
  )[0];
  mobileLogoDiv.classList.toggle('hidden');
  mobileMenuContainer.classList.toggle('open-mobile-menu');
  menuList.classList.toggle('open-mobile-menu-list');
}

function toggleMobileMenuItem() {
  const mobileMenuDiv = document.getElementsByClassName('mobile-menu')[0];
  toggleMobileMenu(mobileMenuDiv);
}
