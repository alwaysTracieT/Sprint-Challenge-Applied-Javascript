
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/






class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.images = document.querySelectorAll('.carousel img');
        this.images.style.display = 'block';
        this.index = 0;
        this.leftButton.addEventListener('click', () => {
            this.imageLeft();
        })
        this.rightButton.addEventListener('click', () => {
            this.imageRight();
        });

        
    }
    //iterate through each image and hide the ones outside the display
    hide() {
        this.images.forEach(item => {
            item.style.display = 'none';
        });
    }
    show() {
        this.images[this.index].style.display = 'block';
    }
    imageLeft() {
        if (this.index < Array.from(this.images).length -1){
            this.index++;
            this.hide();
            this.show();
        };
    }
    imageRight() {
        if (this.index > 0){
            this.index--;
            this.hide();
            this.show();
        };
    }


}

let carousel = document.querySelector(".carousel");
carousel.forEach(element => new TabLink(element));
