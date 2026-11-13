import style from './style.module.css'





/**
 * Главный блок
 */
export const Main: React.FC = () => {
    return(
        <section className={style.block}>
            <div className={style.text}>
            <h1>Лучшая игра в мире по достойной цене</h1>
            <p>Но это смотря как посмотреть</p>
            </div>
        </section>
    )
}