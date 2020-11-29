# 7.JS.Navbar

## JS.Navbar

### Navbar의 JS 구성
```javascript
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

```

### Navbar의 Css 구성
```css
#navbar {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: var(--color-light-white);
  padding: 16px;
  transition: var(--animation-duration) ease-in-out;
}

//navbar--dark일 경우
#navbar.navbar--dark {
  background-color: var(--color-blue);
  padding: 8px;
}
```

### 공부하면서 참조한 사이트
1. [window.scrollY](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY) 
2. [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

