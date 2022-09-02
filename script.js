function GetValue() {
    var pelis = new Array(
      "Carol (2015)",
      "Habitación en roma (2010)",
      "Elisa y Marcela (2019)",
      "El secreto de las abejas (2009)",
      "Retrato de una mujer en llamas (2020)",
      "Rosas rojas (2005)",
      "Media hora más contigo (1985)",
      "High Art (1998)",
      "All Over Me (1997)",
      "Thelma & Louise (1991)",
      "But I am a Cheerleader (1999)",
      "With Every Heartbeat / Kyss Mig / Kiss Me (2011)",
      "Rafiki (2018)",
      "Princess Cyd (2017)",
      "Salvando las apariencias (2004)",
      "Pariah (2011)",
      "Loving Annabelle (2006)",
      "My Days of Mercy (2017)",
      "La doncella / 아가씨 (2016)",
      "Desobediencia (2017)",
      "Wild Nights with Emily (2018)",
      "Ammonite (2020)",
      "Eloïse (2009)"
    );
    var random = pelis[Math.floor(Math.random() * pelis.length)];
    //alert(random);
    document.getElementById("pelirandom").innerHTML = random;
    document.getElementById("pelirandom").style.color = "#739c72";
  }