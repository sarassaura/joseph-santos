import { Amazon, Ifood, Itau, MercadoLivre } from '../icons';
import './Carrousel.styles.css'

const icons = [
  {name: "Itaú", Icon: Itau},
  {name: "Santander", Icon: MercadoLivre},
  {name: "Honda", Icon: Ifood},
  {name: "Vivo", Icon: Amazon},
  {name: "Mercado Livre", Icon: MercadoLivre},
  {name: "Amazon", Icon: Amazon},
  {name: "Bradesco", Icon: Itau},
  {name: "BTG", Icon: Ifood},
  {name: "Safira", Icon: MercadoLivre},
  {name: "BMG", Icon: Amazon},
  {name: "XP", Icon: MercadoLivre},
  {name: "Ifood", Icon: Ifood},
];

const carouselIcons = [...icons, ...icons];

export function IconCarousel() {
  return (
    <div className='carrousel'>
        <div className="icon-carousel">
        <div className="icon-carousel__container">
            {carouselIcons.map(({name, Icon}, index) => (
            <div
                className="icon-carousel__item"
                key={`${name}-${index}`}
            >
                <div className='icon'>
                  <Icon />
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
}