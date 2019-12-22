const circleCollection = [...document.querySelectorAll('.slider__circle-list i')];
const arrowCollection = [...document.querySelectorAll('.slider__arrowsList i')];
const imgCollection = [...document.querySelectorAll('.slider__position img')];

const activeElement = 'slider__active-element--display';
const activeDots = 'slider__active-circle--color';

let slideNumber = 1;







class Slider {
    constructor(time) {
        this.functionsStack = this.functionsStack.bind(this);
        this.slideScroll = this.slideScroll.bind(this);
        this.init();

        this.time = time;
        this.intervalName = '';

        this.circleHandle();
        this.arrowHandle();

        this.interval(this.time, 'true');

    }

    init(){
        this.showSlide(imgCollection, activeElement);
        this.changeSlide(activeElement, imgCollection);
        this.changeSlide(activeDots, circleCollection);
    }


    functionsStack() {

        this.increaseValue();

        this.showSlide(imgCollection, activeElement);
        this.changeSlide(activeElement, imgCollection);
        this.changeSlide(activeDots, circleCollection);

        console.log(slideNumber);
    }


    increaseValue() {
        slideNumber++;
        this.slideScroll();
    }

    reductionValue() {
        slideNumber--;
        this.slideScroll();
    }

    slideScroll() {
        if (slideNumber === imgCollection.length) {
            slideNumber = 0;
        } else if (slideNumber <= -1){
            slideNumber = imgCollection.length -1;
        }
    }


    interval(time, intervalWork) {
        if (intervalWork === 'false') {
            clearInterval(this.intervalName);
        } else if(intervalWork === 'true') {
            this.intervalName = setInterval(this.functionsStack, this.time);
            console.log(this.intervalName);
        }
    }

    restartInterval() {
        this.interval(0, 'false');
        this.interval(this.time, 'true');
    }


    arrowHandle() {
        arrowCollection.forEach(
            (arrow) => {
                arrow.addEventListener('click', () => {
                        console.log(`w co kliknałem ${arrow.dataset.direction}`);

                        if (arrow.dataset.direction === "back") {
                            this.reductionValue();
                            this.init();
                            this.restartInterval();

                        } else if (arrow.dataset.direction === "next") {
                            this.increaseValue();
                            this.init();
                            this.restartInterval();
                        }
                    }
                )
            }
        )
    }

    circleHandle() {
        circleCollection.forEach(
            circle => {
                circle.addEventListener('click', () => {
                    slideNumber = circle.dataset.index;
                    this.init();
                    this.restartInterval();
                })
            }
        )
    }

    showSlide(array, showClass) {
        for (let item of array) {
            item.classList.contains(showClass) ? item.style.display = 'block' : item.style.display = 'none';
        }
    }

    changeSlide(activeClassName, nameCollectionElements) {

        const activeElement = nameCollectionElements.findIndex(title => title.classList.contains(activeClassName));
        nameCollectionElements[activeElement].classList.remove(activeClassName);
        nameCollectionElements[slideNumber].classList.add(activeClassName);
    }


}
