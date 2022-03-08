// window.MathJax = {
//   tex: {
//     inlineMath: [["\\(", "\\)"]],
//     displayMath: [["\\[", "\\]"]],
//     processEscapes: true,
//     processEnvironments: true
//   },
//   options: {
//     ignoreHtmlClass: ".*|",
//     processHtmlClass: "arithmatex"
//   }
// };
//
// document$.subscribe(() => {
//   MathJax.typesetPromise()
// });

/**
 * Typewriting effect
 */
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};
TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    var negativeRand = Math.random() < 0.2 ? 0 : 1;
    var positiveRand = Math.random() < 0.5 ? 0 : 1;

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - negativeRand);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + positiveRand);
    }
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 150 - Math.random() * 75;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        // delta = this.period;
        delta = this.period + 2500;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};
window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var period = elements[i].getAttribute('data-period');
        // var toRotate = elements[i].getAttribute('data-type');
        var toRotate = [
            "not a currency",
            "a symbol to nature",
            "a way to facilitate barter",
            "an ecological concept"
        ];
        if (toRotate) {
            // console.log(JSON.parse(toRotate));
            new TxtType(elements[i], toRotate, period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap";
    document.body.appendChild(css);
};
