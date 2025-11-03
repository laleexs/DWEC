const changeOpacity = () => {
  reduceOpacity(0);
  setTimeout(() => recoveryOpacity(5),600); // pone 600 porque esperamos a que termine el reduceOpacity() que tarda eso en acabar,
}

const reduceOpacity = (counter) => {
  let interval = setInterval(() => { // guardamos la variable para poder pasarla a clearInterval y parar
      photo[counter].style.opacity = '60%';
      if (counter === 5) clearInterval(interval); // cuando llege a 5 se para por el clearInterval
      counter++
  }, 100) ; // el tiempo que queremos que retrase el bucle o lo que va a hacer
}

const recoveryOpacity = (counter) => {
  let interval = setInterval(() => {
    photo[counter].style.opacity = '100%';
    if (counter === 0) clearInterval(interval);
    counter--;
  },100) ;
}

changeOpacity();

setTimeout(changeOpacity, 1800);