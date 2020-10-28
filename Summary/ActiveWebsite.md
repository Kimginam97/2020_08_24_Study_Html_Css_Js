#ActiveWebsite

## ActiveWebsite

### ActiveWebsite CSS구성
```
@media screen and (max-width: 768px) {
  :root {
    /* Font size */
    --font-large: 30px;
    --font-medium: 18px;
    --font-regular: 16px;
    --font-small: 14px;
    --font-micro: 12px;
  }
  .navbar__toggle-btn {
    display: block;
    top: 16px;
    right: 16px;
    font-size: medium;
  }

  #navbar {
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--color-blue);
  }

  #navbar.navbar--dark {
    padding: 16px;
  }

  .navbar__menu {
    flex-direction: column;
    text-align: center;
    width: 100%;
    display: none;
  }

  .navbar__menu.open {
    display: block;
  }
  .section {
    padding: 16px;
    padding-top: 40px;
  }

  .about__majors {
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 0px;
  }
  .major {
    margin: 30px;
  }

  .skillset {
    flex-direction: column;
  }

  .category__btn {
    margin: 4px 0;
    width: 100%;
  }

  .project {
    flex-grow: 1;
  }

  .testimonial {
    flex-direction: column;
    align-items: center;
  }

  .testimonial__avatar {
    width: 120px;
    height: 120px;
  }
  .testimonial__avatar:nth-child(even),
  .testimonial__avatar:nth-child(odd) {
    margin: 0;
    margin-bottom: 8px;
  }

  .testimonial__speech-bubble {
    order: 1;
  }

  .arrow-up {
    width: 50px;
    height: 50px;
    font-size: 30px;
    line-height: 50px;
    right: 16px;
    bottom: 16px;
  }
}
```

