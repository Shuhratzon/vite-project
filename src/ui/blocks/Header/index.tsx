import classNames from 'classnames';
import style from './style.module.css'
import { HeaderLink } from '../../components/HeaderLink';




/**
 * Шапка сайта
 */
export const Header: React.FC = () => {
    return (
    <header className={classNames(
        'flex content',
        style.header,
    )}>
        <img 
        className={style.logo}
        src="/logo1.jpg" 
        alt="" 
        />

        <nav className='flex gap-4'>
            <HeaderLink
                href=''
                text='Ссылка 1'
            />
            <HeaderLink
                href=''
                text='Ссылка 2'
            />
            <HeaderLink
                href=''
                text='Ссылка 3'
            />
        </nav>
    </header>
    );
}