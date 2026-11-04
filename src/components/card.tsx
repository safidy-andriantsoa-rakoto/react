import { ArrowUpRight } from 'lucide-react';
import type { CardProps } from '../interface/interface';

function Card({ title, content, icon: Icon, link = '#' }: CardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
    
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150" />
      
      <div className="relative z-10">
      
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200 transition-transform duration-300 group-hover:scale-110">
          {Icon && <Icon size={28} strokeWidth={1.8} />}
        </div>
      
      
      <h2 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
        {title}
      </h2>
      
      
      <p className="mb-6 leading-7 text-gray-600">
        {content}
      </p>
      
      <a
        href={link}
        className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-all hover:gap-3"
      >
        En savoir plus
        <ArrowUpRight size={18} />
      </a>
      
      </div>
    </div> 
    );
}

export default Card;
