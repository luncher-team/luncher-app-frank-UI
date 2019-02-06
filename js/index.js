// Starting points for variables
let last_known_scroll_position = 0; 
let ticking = false;


// Slide from left component
class IconSlideLeft {
  constructor(icon, scroller) {
    this.icon = icon; // This doesn't do anything
    this.scrollPos = last_known_scroll_position;

    this.iconLeft = document.querySelectorAll('.icon-left');
    this.textLeft = document.querySelectorAll('.text-left');
    
    this.iconLeft.forEach(icon => { 
      if (this.scrollPos > scroller) {
        icon.style = 'left: 0';
      }
      if (this.scrollPos < (scroller - 50)) {
        icon.style = 'left: -1000px';
      }
    });

    this.textLeft.forEach(text => { 
      if (this.scrollPos > scroller) {
        text.style = 'left: 0';
      }
      if (this.scrollPos < (scroller - 60)) {
        text.style = 'left: -1500px';
      }
    });
  }
}

// Slide from right component
class IconSlideRight {
  constructor(icon, scroller) {
    this.icon = icon;
    this.scrollPos = last_known_scroll_position;

    this.iconRight = document.querySelectorAll('.icon-right');
    this.textRight = document.querySelectorAll('.text-right');

    this.iconRight.forEach(icon => { 
      if (this.scrollPos > scroller) {
        icon.style = 'right: 0';
      }
      if (this.scrollPos < (scroller - 50)) {
        icon.style = 'right: -1000px';
      }
    });

    this.textRight.forEach(text => { 
      if (this.scrollPos > scroller) {
        text.style = 'right: 0';
      }
      if (this.scrollPos < (scroller - 60)) {
        text.style = 'right: -1500px';
      }
    });
  }
}

// Scroll Position
// Shove in the last known position
// The number correlates to scroller in the constructor
// Scroller needs to be the starting point for the elements animation
// Scroller is position from the top.
doSomething = () => {
  scroll_pos = new IconSlideLeft(last_known_scroll_position, 400);
  scroll_pos = new IconSlideRight(last_known_scroll_position, 500);
}

window.addEventListener('scroll', () => {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame( () => {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});


