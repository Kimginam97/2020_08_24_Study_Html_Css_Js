# 8.JS.ArrowUp

## JS.ArrowUp

### ArrowUp의 JS 구성
```
//5.위로 올라가는 버튼
const arroUp=document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
    if(window.scrollY>navbarHeight/2){
        arroUp.classList.add('visible');
    } else{
        arroUp.classList.remove('visible');
    }
});

arroUp.addEventListener('click',()=>{
  scrollIntoView('#Introduce')
})
```

### ArrowUp의 CSS 구성
```
/* Scroll */
.arrow-up {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 70px;
  height: 70px;
  font-size: 50px;
  background-color: var(--color-pink);
  color: var(--color-white);
  border-radius: 50%;
  opacity: 0;
  transition: all 300ms ease-in;
  pointer-events: none;
}

.arrow-up.visible {
  opacity: 1;
  pointer-events: auto;
}

```

### ArrowUp의 HTML 구성
```
<!-- Arrow Up -->
  <button class="arrow-up">
    <i class="fas fa-arrow-up"></i>
  </button>
```
