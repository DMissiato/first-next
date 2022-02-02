
import { useRouter } from 'next/router';
import Link from 'next/link';
import style from './index.module.scss';

const PATH = '/first-next';

const LayoutDefault = ({ children }) => 
{
    const router = useRouter();
    
    return (
        <>
            <div className={style.nav}>
                <ul>
                    <li className={`${router.pathname === `${PATH}/` && style.activeBtn}`}>
                        <Link href={`${PATH}/`}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className={`${router.pathname === `${PATH}/ssr` && style.activeBtn}`}>
                        <Link href={`${PATH}/ssr`}>
                            <a>SSR</a>
                        </Link>
                    </li>
                    <li className={`${router.pathname === `${PATH}/gallery` && style.activeBtn}`}>
                        <Link href={`${PATH}/gallery`}>
                            <a>Gallery</a>
                        </Link>
                    </li>
                    <li className={`${router.pathname === `${PATH}/experiments` && style.activeBtn}`}>
                        <Link href={`${PATH}/experiments`}>
                            <a>Esperimenti</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={style.children}>
                {children}
            </div>

            <div className={style.footer}>
                <h4>
                    <a href="https://www.linkedin.com/in/davide-missiato/">Davide Missiato</a> - 2022
                </h4>
            </div>
        </>
    );
};

export default LayoutDefault;