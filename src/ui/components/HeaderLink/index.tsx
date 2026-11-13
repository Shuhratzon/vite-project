import style from './style.module.css'





type Props = {
    /**
     * Ссылка для перехода
     */
    href: string;

    /**
     * Наполнение
     */
    text: string;
}

/**
 * Компонент "Ссылка меню"
 */
export const HeaderLink: React.FC<Props> = ({
    href,
    text,
}) => {
    return (
        <a 
            className={style.component}
            href={href}
        >
            {text}
        </a>
    );
}