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

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

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

$(document).ready(function() {
    /**
     * Calculate the Numerologic number of a given string
     * @param  {string}                   text                        The text to evaluate
     * @return {integer}                                              The Numerologic Sum
     */
    function Text_to_Nnumber(text) {
        var numerologic_table = {
                "a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8, "i": 9,
                "j": 1, "k": 2, "l": 3, "m": 4, "n": 5, "o": 6, "p": 7, "q": 8, "r": 9,
                "s": 1, "t": 2, "u": 3, "v": 4, "w": 5, "x": 6, "y": 7, "z": 8
            },
            splitted_text = text.split(""),
            numerologic_sum = "";

        for(t = 0; t < splitted_text.length; t++) {
            numerologic_sum += numerologic_table[splitted_text[t]];
        }
        return numerologic_sum;
    }

    var typewrite = document.getElementsByClassName('typewrite');
    for (var i = 0; i < typewrite.length; i++) {
        var phrases = typewrite[i].getAttribute('data-type');
        if (phrases) {
            new TxtType(typewrite[i], JSON.parse(phrases), Text_to_Nnumber("tree"));
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap";
    document.body.appendChild(css);
});
