# 7.JS.Navbar

## JS.Navbar

### Navbar의 JS 구성
```
//3.contact me 클릭시 contact로 이동
const IntroContactBtn=document.querySelector('.Intro__contact');
IntroContactBtn.addEventListener('click',()=>{
  scrollIntoView('#contact');
})

function scrollIntoView(selector){
  const scrollTo=document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:'smooth'});
}
```

### 공부하면서 참조한 사이트
1. [window.scrollY](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY) 
2. [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

