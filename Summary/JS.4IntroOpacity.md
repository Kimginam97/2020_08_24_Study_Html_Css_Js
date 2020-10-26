# 7.JS.Intro

## JS.Intro

### Intro의 JS 구성
```
//4.홈화면이 점점 옅어진다
const Intro =document.querySelector('.Intro__container');
const IntroHeight=Intro.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  Intro.style.opacity=1-window.scrollY/IntroHeight;
})
```

### 공부하면서 참조한 사이트
1. [window.scrollY](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY) 
2. [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

