
import { useRouter } from 'next/router';
import Link from 'next/link';
import style from './index.module.scss';

const LayoutDefault = ({ children }) => 
{
    const router = useRouter();
    
    return (
        <>
            <div className={style.nav}>
                <ul>
                    <li className={`${router.pathname === "/" && style.activeBtn}`}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className={`${router.pathname === "/ssr" && style.activeBtn}`}>
                        <Link href="/ssr">
                            <a>SSR</a>
                        </Link>
                    </li>
                    <li className={`${router.pathname === "/gallery" && style.activeBtn}`}>
                        <Link href="/gallery">
                            <a>Gallery</a>
                        </Link>
                    </li>
                    <li className={`${router.pathname === "/experiments" && style.activeBtn}`}>
                        <Link href="/experiments">
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