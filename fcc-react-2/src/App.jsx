import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"

function App() {
  const imgsAndLocationsAndTitle = [
    { img: '../assets/bourdainGladToBeAlive.jpg', country: 'Japan', title: 'Anthony Bourdain', openSpots: 0 },
    { img: '../assets/daftPunkGrammy.jpg', country: 'France', title: 'Daft Punk', openSpots: 10 },
    { img: '../assets/IMG_3675.jpg', country: 'Singapore', title: 'Sheares band Yipee', openSpots: 0 },
    { img: '../assets/kurtJawa.jpg', country: 'Online', title: 'Kurt Jawa', openSpots: 3 }
  ]

  const cardsList = imgsAndLocationsAndTitle.map(data => {
    return (
      <Card rating={5.0} reviewCount={6} price={50} {...data} /> //spread syntax, basically returns back the params as props of an object without explicitly writing
    )
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section>
        {cardsList}
      </section>
    </div>
  )
}

export default App
