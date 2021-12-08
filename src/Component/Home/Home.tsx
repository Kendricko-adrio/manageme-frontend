import style from './Home.module.scss';
import {FeatureCard} from "../FeatureCard/FeatureCard";
import file from '../../image/filefile.png';
import home from '../../image/home.png';
import user from '../../image/usericonwhite.png';
export const Home: React.FC = () => {
    return (
        <div className={style.home}>
            <div className={style.head}>
                Welcome to ManageMe a Social Media Manager and a Brand Sentimental
                Analysis combined into one package.
                <br/>
                <br/>
                There are 3 feature that are available
            </div>
            <div className={style.content}>
                <FeatureCard image={file} name={'To Do List'} />
                <FeatureCard image={file} name={'Scheduling'} />
                <FeatureCard image={user} name={'Brand Sentiment Analysis'} />
            </div>
        </div>
    );
};
