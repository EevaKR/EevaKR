const numbers2 = [1, 2, 3, 4, 5,];

<script type="text/javascript">
var luku1 = 15;
var luku2 = 15;
var tulos = "Ei tulosta";
var teksti = "";

// Kirjoitetaan muuttujien arvot ennen muutoksia:
teksti = "Ennen laskua: luku1 = "+luku1+", luku2 = "+luku2+" ja tulos = "+tulos;

// Lisätään muuttujan arvon perään rivinvaihtoja (huomaa "+="-merkintä!):
teksti += "<br /><br />"; 

// Suoritetaan kertolasku, jonka vastaus tulee tulos-muuttujan arvoksi:
tulos = luku1*luku2;

// Kirjoitetaan uudet muuttujien arvot taas teksti-muuttujaan:
teksti += "Laskun jälkeen: luku1 = "+luku1+", luku2 = "+luku2+" ja tulos = "+tulos;

document.writeln(teksti);
</script>

new Date();


aikaNyt.getHours();