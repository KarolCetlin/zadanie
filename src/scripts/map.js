const $slider = document.getElementById('slider');
const $provinces = document.getElementsByTagName('path');

(function provincesInteraction() {

    for (let province of $provinces) {

        eventHandle('mousemove', province);
        eventHandle('mouseout', province);
        eventHandle('click', province);

    }

})();

function eventHandle(initEvent, forElement) {

    forElement.addEventListener(initEvent, () => {

        mouseEvent(initEvent, forElement);

    });
}

function mouseEvent(typeEvent, forElement){

    switch (typeEvent) {

        case 'mousemove':

            visible(forElement, 'add', 'province__active');
            break;

        case 'mouseout':

            visible(forElement, 'remove', 'province__active');
            break;

        case 'click':

            let sliderState = checkTrue($slider, 'visible__hide');
            changeSliderState(sliderState, 2000);
            break;

    }
}


function visible(element, type, visibleClass) {

    if (type === 'add') {

        element.classList.add(visibleClass);

    } else if (type === 'remove') {
        element.classList.remove(visibleClass);
    }
}

function changeSliderState(requirement, time) {

    if (requirement === true) {
        new Slider(time);
        visible($slider, 'remove', 'visible__hide');
        visible($slider, 'add', 'visible__active');

    } else {
        visible($slider, 'remove', 'visible__active');
        visible($slider, 'add', 'visible__hide');

    }
}

function checkTrue(element, toCheck) {

    let classToCheck = toCheck.toString();
    return element.classList.contains(classToCheck);

}

