const slider = document.getElementById('slider');
const provinces = document.getElementsByTagName('path');

    for (let province of provinces) {
        province.addEventListener('mousemove', function () {
            this.classList.add('province__active');
        });


        province.addEventListener('click', function () {
            let sliderHide = slider.classList.contains('visible__hide');

            if(sliderHide === true){
                new Slider(2000)
            }

            slider.classList.remove('visible__hide');
            slider.classList.add('visible_active');
        });

        province.addEventListener('mouseout', function () {
            province.classList.remove('province__active');
        });

    }

