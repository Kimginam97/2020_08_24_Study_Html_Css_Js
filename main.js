"use strict";

// 1.navbar 윈도우 스크롤을 이용하여 올라가면 투명 아래로가면 블루로 바꾼다
const navbar = document.querySelector("#navbar");

// getBoundingClientRect()경우 요소에 적용된 변환이 없을 때 의 너비 및 높이와 동일 합니다
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  //   console.log(navbarHeight);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});
