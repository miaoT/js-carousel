(function (w, d) {
    var defaultSetting = {};
    var liNodes = [
        {
            liImgSrc: "img/img1.jpg",
            liHref: "www.google.com"
        },
        {
            liImgSrc: "img/img2.jpg",
            liHref: "www.facebook.com"
        },
        {
            liImgSrc: "img/img3.jpg",
            liHref: "www.google.com"
        },
        {
            liImgSrc: "img/img4.jpg",
            liHref: "www.facebook.com"
        },
        {
            liImgSrc: "img/img5.jpg",
            liHref: "www.google.com"
        },
        {
            liImgSrc: "img/img6.jpg",
            liHref: "www.facebook.com"
        },
        {
            liImgSrc: "img/img7.jpg",
            liHref: "www.google.com"
        },
        {
            liImgSrc: "img/img8.jpg",
            liHref: "www.facebook.com"
        }
    ];

    function setCarousel(options) {
        var self = this;
        self = Object.assign(self, defaultSetting, options);
        self._getDom();
        self._setStyles();
        self._setEvent();
    }

    setCarousel.prototype = {
        _getDom: function () {
            var self = this;
            var carouselList = d.getElementsByClassName("carousel-list")[0];
            // get li nodes and append to ul
            for (var i = 0; i < liNodes.length; i++) {
                var liNode = d.createElement("li");
                var imgNode = d.createElement("img");
                imgNode.src = liNodes[i].liImgSrc;
                liNode.appendChild(imgNode);
                carouselList.appendChild(liNode);
            }
            var liList = carouselList.getElementsByTagName("li");
            var domList = {
                "carouselList": carouselList,
                "liList": liList
            };

            self = Object.assign(self, domList);
        },
        _setStyles: function () {
        },
        _setEvent: function () {
        }
    };
    window.setCarousel = setCarousel;
})(window, document);

