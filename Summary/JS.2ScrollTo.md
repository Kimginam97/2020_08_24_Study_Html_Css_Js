# 2.JS.Navbar ScrollTo

## JS.Navbar ScrollTo

### Navbar의 JS 구성
```javascript
//2.선택하면 해당 셀렉터 위치에 이동한다
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;

  //data-link 값을 link에 넣어둔다
  const link = target.dataset.link;

  if (link == null) {
    return;
  }

  //scrollTo 함수 활용
  //수직정렬 block 수평정렬 inline
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
});

```

### Navbar의 data-link 변경구성
```html
<ul class="navbar__menu">
        <li class="navbar__menu__item" data-link="#Introduce">자기소개</li>
        <li class="navbar__menu__item" data-link="#studys">공부과목</li>
        <li class="navbar__menu__item" data-link="#portfolio">포트폴리오</li>
        <li class="navbar__menu__item" data-link="#skills">나의기술</li>
        <li class="navbar__menu__item" data-link="#contact">연락처</li>
      </ul>
}

```

### 공부하면서 참조한 사이트
1. [ScrollToIntoView 사이트](https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView) 


