# Dettagli tecnici del disegno
## Algoritmo di ramificazione
Il principio è semplice: *traccia linee seguendo un algoritmo*, e l'abbiamo fatto mantenendo questi principi:<br>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/kkGeOWYOFoA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Le radici
<figure markdown style="display: inline;">
  ![Disegno delle radici](../../../assets/images/roots_animation.gif){ align=right width=300 }

  <div style="text-align: left;">
    La formula della direzione delle radici segue la <a href="https://reference.wolfram.com/language/ref/Triangle.html" target="_blank">formula del triangolo regolare</a> (<code>[{p1,p2,p3}]</code>), quindi la rappresentazione grafica di questa è regolare e semplice:
    <blockquote>
      <tt>(+30<sub><i>deg</i></sub>-60<sub><i>deg</i></sub>)+30<sub><i>deg</i></sub></tt>
    </blockquote>
    <br>
  </div>
</figure>
Ciò significa, nello scripting computazionale, avviare un'esecuzione che:<br>
> *Traccia ricorsivamente `n` passaggi:*
>
> 1. _**vai avanti a destra** e traccia a `30deg`_
> 2. _quindi **fermati e vai a sinistra** di `60deg`_
> 3. _quindi **torna indietro** di `30deg`_

!!! info inline end "Il Comitato The Roots"
    ***The Roots*** è il comitato dei (*Jedi*) fondatori dei Tree Coin, forniscono vita e sostenibilità all'intero progetto e le radici sono la giusta rappresentazione grafica di questo.

<br>

### Esempio di programmazione
Abbiamo fatto quanto detto prima utilizzando un semplice script Python con [Turtle](https://docs.python.org/3/library/turtle.html):
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

### Colori delle radici
Le radici sono nel sottosuolo e quindi rappresentate da un unico colore, il grigio, ridimensionato di un quarto per ogni passaggio.<br>
Il colore delle radici degli alberi è un valore casuale compreso tra <code>250</code> e <code>255</code> per ogni valore rgb.<br>
Rappresentano la [cosmologia duale](https://en.wikipedia.org/wiki/Dualism_in_cosmology), come il giorno e la notte, quindi sono duali e geometricamente regolari, con una doppia divisione come `Y`.<br>

<br>

La formula del codice colore è:<br>

``` py linenums="1" title="Generazione di colori grigi"
def grey_colours(branchLen):
  rand = random.randint(250,255);
  r = rand - int((branchLen/4))
  g = rand - int((branchLen/4))
  b = rand - int((branchLen/4))
  return [r,g,b]
```

Il risultato è una scala di colori come questa:

| `rgb(250,250,250)` | `rgb(251,251,251)` | `rgb(252,252,252)` | `rgb(253,253,253)` | `rgb(254,254,254)` | `rgb(255,255,255)` |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| [![#fafafa](https://via.placeholder.com/100x20/fafafa/000000?text=+){class="ok"}<br>`#fafafa`](https://coolors.co/fafafa){:target="_blank"} | [![#fbfbfb](https://via.placeholder.com/100x20/fbfbfb/000000?text=+)<br>`#fbfbfb`](https://coolors.co/fbfbfb){:target="_blank"} | [![#fcfcfc](https://via.placeholder.com/100x20/fcfcfc/000000?text=+)<br>`#fcfcfc`](https://coolors.co/fcfcfc){:target="_blank"} | [![#fdfdfd](https://via.placeholder.com/100x20/fdfdfd/000000?text=+)<br>`#fdfdfd`](https://coolors.co/fdfdfd){:target="_blank"} | [![#fefefe](https://via.placeholder.com/100x20/fefefe/000000?text=+)<br>`#fefefe`](https://coolors.co/fefefe){:target="_blank"} | [![#ffffff](https://via.placeholder.com/100x20/ffffff/000000?text=+)<br>`#ffffff`](https://coolors.co/ffffff){:target="_blank"} |

---

## Tree
Fibonacci [^1]


1. https://www.youtube.com/watch?v=9mozmHgg9Sk
