import NavBar from './components/navbar.tsx'
import Card from './components/card.tsx'
import { cards } from './const/lists.tsx'

function App() {
  return (
    <>
      <div className="pb-[20%] md:pb-[10%]">  
        <NavBar></NavBar>
      </div>
        <div className="pl-[5%] pr-[5%] mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              content={card.content}
              icon={card.icon}
              link={card.link}
            />
          ))} 
        </div>
    </>
  )
}

export default App

