        var prev = document.getElementById("prev");
        var next = document.getElementById("next");
        var thumbnail = document.getElementsByIdByClassName("thumbnail");
        var hero = document.getElementById("hero");

        var backgroundImg = new Array(
            "images/background1.jpg",
            "images/sahara2.jpg",
            "images/nature3.jpg",
            "images/rednature4.jpg",
            "images/waterfall5.jpg",
        );
        let i = 0;
        next.onclick = function() {
            hero.style.backgroundImage = 'img("' + backgroundImg[i + 1] + '")';
            i++;
        }