(function (w, d) {
    var index = 0;
    var intervalId;
    var liNodes = [
        {
            // Photo by Pixabay from Pexels
            liImgSrc: "img/img1.jpg",
            liHref: "https://www.google.com/"
        },
        {
            // Photo by Felipe Ferreira from Pexels
            liImgSrc: "img/img2.jpg",
            liHref: "https://www.facebook.com/"
        },
        {
            // Photo by Anastasiya Gepp from Pexels
            liImgSrc: "img/img3.jpg",
            liHref: "https://www.google.com/"
        },
        {
            // Photo by ge yonk from Pexels
            liImgSrc: "img/img4.jpg",
            liHref: "https://www.facebook.com/"
        },
        {
            // Photo by Biuro Tłumaczeń from Pexels
            liImgSrc: "img/img5.jpg",
            liHref: "https://www.google.com/"
        },
        {
            // Photo by Pixabay from Pexels            
            liImgSrc: "img/img6.jpg",
            liHref: "https://www.facebook.com/"
        },
        {
            // Photo by Godisable Jacob from Pexels
            liImgSrc: "img/img7.jpg",
            liHref: "https://www.google.com/"
        },
        {
            // Photo by Shamraevsky Maksim from Pexels
            liImgSrc: "img/img8.jpg",
            liHref: "https://www.facebook.com/"
        }
    ];

    function setCarousel(options) {
        var self = this;
        self = Object.assign(self, options);
        self._getDom();
        self._setStyles();
        self._setEvent();
    }

    setCarousel.prototype = {
        _getDom: function () {
            var self = this;
            var carouselList = d.getElementsByClassName("carousel-list")[0];
            var pagecontrolList = d.getElementsByClassName("pagecontrol");
            // get li nodes and append to ul
            for (var i = 0; i < liNodes.length; i++) {
                var liNode = d.createElement("li");
                var imgNode = d.createElement("img");
                imgNode.src = liNodes[i].liImgSrc;
                liNode.appendChild(imgNode);
                carouselList.appendChild(liNode);
            }
            var liList = carouselList.getElementsByTagName("li");
            // an object as a whole for including all DOM
            var domList = {
                "carouselList": carouselList,
                "liList": liList,
                "pagecontrolList": pagecontrolList
            };
            // copy domList enumerable and its properties to self
            self = Object.assign(self, domList);
        },
        
        _setStyles: function () {
            var self = this;
            self.liList[index].style["opacity"] = 1;
            // set a function for automatically changing to next images.
            // a condition to determine showing images and back to the first image.
            function changeImg() {
                if (index >= (self.liList.length - 1)) {
                    self.liList[index].style["opacity"] = 0;
                    index = 0;
                    self.liList[index].style["opacity"] = 1;
                }
                else {
                    self.liList[index].style["opacity"] = 0;
                    index = index + 1;
                    self.liList[index].style["opacity"] = 1;
                }
            }

            // previous()
            function previous() {
                // clear the auto interval first
                clearInterval(intervalId);
                // a if/else condition to determine showing the current value of index
                if (index <= 0) {
                    self.liList[index].style["opacity"] = 0;
                    index = self.liList.length - 1;
                    self.liList[index].style["opacity"] = 1;
                }
                else {
                    self.liList[index].style["opacity"] = 0;
                    index = index - 1;
                    self.liList[index].style["opacity"] = 1;
                }
                // restart the interval to showing images automatically
                intervalId = setInterval(self.changeImg, 3000);
            }

            // next(), patterns are similar to previous(), but opposite
            function next() {
                clearInterval(intervalId);
                if (index < (self.liList.length - 1)) {
                    self.liList[index].style["opacity"] = 0;
                    index = index + 1;
                    self.liList[index].style["opacity"] = 1;
                }
                else {
                    self.liList[index].style["opacity"] = 0;
                    // it comes to the last image, declare index = 0
                    index = 0;
                    self.liList[index].style["opacity"] = 1;
                }
                intervalId = setInterval(self.changeImg, 3000);
            }

            // an object as a whole for including all functions
            var styleList = {
                "changeImg": changeImg,
                "previous": previous,
                "next": next
            };
            // copy styleList enumerable and its properties to self
            self = Object.assign(self, styleList);
        },
        
        _setEvent: function () {
            var self = this;
            // setInterval() to change images automatically
            intervalId = setInterval(self.changeImg, 3000);
            // already got pagecontrolList from DOM, then setting onclick event, [0] is the previous image
            self.pagecontrolList[0].onclick = function () {
                // invoke previous()
                self.previous();
            };
            // [1] is the next image
            self.pagecontrolList[1].onclick = function () {
                // invoke next()
                self.next();
            }
        }
    };
    w.setCarousel = setCarousel;
})(window, document);
