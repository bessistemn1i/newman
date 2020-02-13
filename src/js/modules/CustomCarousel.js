class CustomCarousel {
    constructor() {
      this.carousel = document.querySelector('.discount__slider');
      if (!this.carousel) {
        return;
      }
  
      this.VISIBLE_SLIDES = 1;
      this.MAGIC_NUMBER = 360;
      this.currentSlideNum = 0;
  
      this.carouselWrapper = this.carousel.querySelector('.slider-discount');
      this.slides = this.carousel.querySelectorAll('.slider-discount__item');
      this.slidesArray = [...this.slides];
      this.maxSlideNum = this.slidesArray.length - 1;
  
      this.prevButton = document.querySelector('.discount__slider-btn--prev');
      this.nextButton = document.querySelector('.discount__slider-btn--next');
  
      this.checkSliderOnResize();
      
      this.addEvents();
    }
  
    checkSliderOnResize() {
        this.prepareSlides();
        this.arrangeSlides(this.currentSlideNum);
        if(window.innerWidth > 1000) {
          this.slides.forEach((el, idx) => {
            if(idx == 2) {
              el.style.opacity = 0.1;
            }
          })
        }
    }
  
    prepareSlides() {
      this.carouselWrapper.style.height = '416px';
      this.carouselWrapper.style.marginBottom = '60px';
      this.carouselWrapper.style.marginRight = -this.MAGIC_NUMBER + 'px';
  
      this.slides.forEach(slide => {
        slide.style.position = 'absolute';
        slide.style.width = '338px';
      });
    }
  
    arrangeSlides(slideNum) {
      this.slides.forEach((slide, index) => {
        let position = (slideNum + index) % (this.slides.length);
        slide.style.left = position * this.MAGIC_NUMBER + 'px';
        if(window.innerWidth > 1000) {
          if (this.direction > 0 && position > 1) {
            slide.style.opacity = '0';
            setTimeout(() => {
                slide.style.opacity = '0.1';
            }, 150);
          } else if (this.direction < 0 && position === 0) {
            slide.style.opacity = '0';
              setTimeout(() => {
                  slide.style.opacity = '0.1';
              }, 150);
          } else {
            slide.style.opacity = '1';
          }
        }
        
        // if (position === 0 || position === this.maxSlideNum ) {
        //   // slide.style.visibility = 'hidden';
        //   slide.style.opacity = '0.5';
        // } else {
        //   // slide.style.visibility = 'visible';
        //   slide.style.opacity = '1';
        // }
      });
    }
  
    setCurrentSlideNum(slideNum) {
      if (slideNum < 0) {
        this.direction = 1;
        slideNum = this.maxSlideNum;
      } else if (slideNum > this.maxSlideNum) {
        this.direction = -1;
        slideNum = 0;
      } else {
        this.direction = this.currentSlideNum - slideNum;
      }
  
      this.currentSlideNum = slideNum;
      this.arrangeSlides(this.currentSlideNum);
    }
  
    addEvents() {
      if(window.innerWidth > 1000) {
        this.VISIBLE_SLIDES = 2;
      }
      this.prevButton.addEventListener('click', () => {
        this.setCurrentSlideNum(this.currentSlideNum + 1);
      });
  
      this.nextButton.addEventListener('click', () => {
        this.setCurrentSlideNum(this.currentSlideNum - 1);
      });
  
      window.addEventListener('resize', () => (this.checkSliderOnResize()));
    }
  
  }
  
  export default CustomCarousel;
  