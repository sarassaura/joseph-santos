import { Amazon, BMG, Bradesco, BTG, Honda, Ifood, Itau, MercadoLivre, Safira, Santander, Vivo, XP } from '../icons';
import './Carrousel.styles.css'

const icons = [
  {name: "Itaú", Icon: Itau},
  {name: "Santander", Icon: Santander},
  {name: "Honda", Icon: Honda},
  {name: "Vivo", Icon: Vivo},
  {name: "Mercado Livre", Icon: MercadoLivre},
  {name: "Amazon", Icon: Amazon},
  {name: "Bradesco", Icon: Bradesco},
  {name: "BTG", Icon: BTG},
  {name: "Safira", Icon: Safira},
  {name: "BMG", Icon: BMG},
  {name: "XP", Icon: XP},
  {name: "Ifood", Icon: Ifood},
];

const carouselIcons = [...icons, ...icons, ...icons];

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