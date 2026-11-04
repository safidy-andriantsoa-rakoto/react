import { cards } from "../../const/lists"

function Projects(){
  return (
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
  )
}

export default Projects

