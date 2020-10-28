# 9.JS.Portfolio Filtering

## JS.Filtering

### Portfolio Filtering의 JS 구성
```
const workBtnContainer=document.querySelector('.Portfolio__categories');
const projectContainer=document.querySelector('.Portfolio__projects');
const projects=document.querySelectorAll('.project');
workBtnContainer.addEventListener('click',(e)=>{
    const filter=e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter==null){
        return;
    }
    projectContainer.classList.add('anim-out');
    setTimeout(()=>{
        projects.forEach((project)=>{
            if(filter== '*' || filter==project.dataset.type){
                project.classList.remove('invisible');
            } else{
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    },300);
  });
```

### Portfolio Filtering의 CSS 구성
```
.project.invisible {
  display: none;
}

.Portfolio__projects.anim-out {
  opacity: 0;
  transform: scale(0.96) translateY(40px);
}

}

```

### Portfolio Filtering의 HTML 구성
```
<!-- Portfolio -->
    <section id="portfolio" class="section">
      <div class="section__container">
          <h1>My Portfolio</h1>
          <h3>Projects</h3>
          <div class="Portfolio__categories">
              <button class="category__btn selected" data-filter="*">
                  All<span class="category__count">2</span>
              </button>
              <button class="category__btn" data-filter="Front-end">
                  Front<span class="category__count">1</span>
              </button>
              <button class="category__btn" data-filter="Back-end">
                  Back-end<span class="category__count">1</span>
              </button>
              <button class="category__btn" data-filter="Mobile">
                  Mobile<span class="category__count">0</span>
              </button>
          </div>
          <div class="Portfolio__projects" ">
              <a href="https://github.com/Kimginam97/WebSitePortpolio"
              class="project"  data-type="Front-end">
              <img src="imgs/github.png" alt="youtube" class="project__img" />
              <div class="project__description">
                  <h3>자기소개 웹사이트!</h3>
                  <span>이미지를 클릭하면 github로 이동합니다!</span>
              </div>

              <a href="https://github.com/Kimginam97/Board"
              class="project"  data-type="Back-end">
              <img src="imgs/github.png" alt="youtube" class="project__img" />
              <div class="project__description">
                  <h3>DB프로젝트 게시판 !</h3>
                  <span>이미지를 클릭하면 github로 이동합니다!</span>
              </div>
            </a>
          </div>
      </div>
      </div>
```
