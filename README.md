## js-carousel

![carousel effect](./img/carousel.gif)

	
	
A JavaScript plugin for carousel effect.  
This plugin also demonstrates the way of implementing prototypal inheritance in JavaScript closure.

### Features
- No dependencies.
- Without jQuery.
- Displays carousel effect, with arrow key navigation to swipe images.

### To use
Insert its CSS at the `<head>` section.
```
	<link rel="stylesheet" type="text/css" href="css/carousel.css">
```

To initialize it, add the below codes at the `<body>` section.  
The parameter is the `id` of div in line 8, which designs for the carousel.
```
<script type="text/javascript" src="js/carousel.js"></script>
<script type="text/javascript">
    var carousel1 = new setCarousel({
        container: "carousel"
    });
</script>
```

### Description	
This JavaScript plugin defines three main parts in its `.prototype`, `_getDom` getting DOM objects, `_setStyles` setting the custom styles and `_setEvent` setting trigger events.  
Apart from that, here are some notes for myself during developing.
  
　  
  
a) An array, `liNodes`, which sets sources of images and their hyperlinks.    
```javascript
var liNodes = [
        {
            // Photo by Pixabay from Pexels
            liImgSrc: "img/img1.jpg",
            liHref: "https://www.google.com/"
        },
```
  
　　　　
  
b) A `for` loop to get all images created into each `li`, and append back to `ul`.
```javascript
for (var i = 0; i < liNodes.length; i++) {
    var liNode = d.createElement("li");
    var imgNode = d.createElement("img");
    imgNode.src = liNodes[i].liImgSrc;
    liNode.appendChild(imgNode);
    carouselList.appendChild(liNode);
    }
```	

c) Considering its expandability, set `self.liList.length` instead of the actual number of images, in this case : (7).

``` diff
+ if (index >= (self.liList.length - 1)) {...}
- if (index >= 7) {...}
```


d) `[index]` determines which image to show and which image to hide by changing its `opacity`. 


```javascript
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
```

e) At the last part, `self.pagecontrolList[0].onclick` as triggering previous images, and `self.pagecontrolList[1].onclick` as triggering next images.

```javascript
    self.pagecontrolList[0].onclick = function () {
        self.previous();
    };
    self.pagecontrolList[1].onclick = function () {
        self.next();
    }
```