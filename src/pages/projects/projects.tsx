import { cards } from "../../const/lists"
import Card from "../../components/card"
import Footer from "../../components/footer"

function Projects(){
  return (
    <>
      <div className="md:pt-[20%] lg:pt-[10%] pl-[5%] pr-[5%] mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
      <Footer></Footer>
    </>
  )
}

export default Projects

