import style from './FeatureCard.module.scss';


interface Props{
    image: string
    name: string
}

export const FeatureCard: React.FC<Props> = (props) => {
    return(
        <div className={style.card}>
            <img src={props.image} alt="icon" />
            <div className={style.name}>
                {props.name}
            </div>
        </div>
    )
}
