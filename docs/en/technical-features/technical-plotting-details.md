# Technical plotting details
## Branching algorithm
The principle is simple: *plot lines following an algorithm*, and we have done by keeping these principles:<br>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/kkGeOWYOFoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Roots
<figure markdown style="display: inline;">
  ![Roots draw](../../assets/images/roots_animation.gif){ align=right width=300 }

  <div style="text-align: left;">
    The roots direction formula follow the <a href="https://reference.wolfram.com/language/ref/Triangle.html" target="_blank">regular triangular formula</a> (<code>[{p1,p2,p3}]</code>), so the graphic representation of this is regular and simple:
    <blockquote>
      <tt>(+30<sub><i>deg</i></sub>-60<sub><i>deg</i></sub>)+30<sub><i>deg</i></sub></tt>
    </blockquote>
    <br>
  </div>
</figure>
This means, in computational scripting, to launch an execution that:<br>
> *Plot recursively of `n` steps:*
>
> 1. _**go right forward** and plot at `30deg`_
> 2. _then **stop and go left** of `60deg`_
> 3. _then **go back** of `30deg`_

!!! info inline end "The Roots Committee"
    ***The Roots*** is the committee of the (*Jedi*) founders of the Tree Coin, they provide life and sustainability for the entire project and the graphic representation of this are just the tree roots.

<br>

### Programmation example
We've done what said before with a simple Python script using [Turtle](https://docs.python.org/3/library/turtle.html):
``` python
def roots(branchLen, pen, window):
    if branchLen > 1:
        #
        # Generate the first branch
        # ----------------------------------
        pen.pencolor(colours.grey_colours(branchLen))

        if (branchLen > 60):
            pen.width(branchLen/4)
        else:
            pen.width(branchLen/5)

        if (branchLen < 90):
            pen.forward(branchLen)

        pen.right(30)
        # ----------------------------------

        #
        # Generate the second branch
        # ----------------------------------
        roots(branchLen-10, pen, window)

        pen.left(60)
        pen.pencolor(254, 254, 254)
        # ----------------------------------

        #
        # Generate the third branch
        # ----------------------------------
        roots(branchLen-10, pen, window)

        pen.right(30)
        if(branchLen <= 10):
            pen.width(2)
            pen.down()
        else:
            pen.width(1)
            pen.down()

        pen.backward(branchLen)
        # ----------------------------------
```

---

### Roots colours
The roots are in the underground and so represented by a single colour, the grey, redimensioned of a fourth of each step.<br>
Tree roots colour is a random value between <code>250</code> and <code>255</code> for each rgb value.<br>
They represents the [dual cosmology](https://en.wikipedia.org/wiki/Dualism_in_cosmology), like the day and the night, so are dual and geometrically regular, with a double division as `Y`.<br>

<br>

The colour code formula is:<br>

``` py linenums="1" title="Grey colours generation"
def grey_colours(branchLen):
  rand = random.randint(250,255);
  r = rand - int((branchLen/4))
  g = rand - int((branchLen/4))
  b = rand - int((branchLen/4))
  return [r,g,b]
```

The result is a colour scale like this:

| `rgb(250,250,250)` | `rgb(251,251,251)` | `rgb(252,252,252)` | `rgb(253,253,253)` | `rgb(254,254,254)` | `rgb(255,255,255)` |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| [![#fafafa](https://via.placeholder.com/100x20/fafafa/000000?text=+){class="ok"}<br>`#fafafa`](https://coolors.co/fafafa){:target="_blank"} | [![#fbfbfb](https://via.placeholder.com/100x20/fbfbfb/000000?text=+)<br>`#fbfbfb`](https://coolors.co/fbfbfb){:target="_blank"} | [![#fcfcfc](https://via.placeholder.com/100x20/fcfcfc/000000?text=+)<br>`#fcfcfc`](https://coolors.co/fcfcfc){:target="_blank"} | [![#fdfdfd](https://via.placeholder.com/100x20/fdfdfd/000000?text=+)<br>`#fdfdfd`](https://coolors.co/fdfdfd){:target="_blank"} | [![#fefefe](https://via.placeholder.com/100x20/fefefe/000000?text=+)<br>`#fefefe`](https://coolors.co/fefefe){:target="_blank"} | [![#ffffff](https://via.placeholder.com/100x20/ffffff/000000?text=+)<br>`#ffffff`](https://coolors.co/ffffff){:target="_blank"} |

---

## Tree
Fibonacci [^1]


1. https://www.youtube.com/watch?v=9mozmHgg9Sk
