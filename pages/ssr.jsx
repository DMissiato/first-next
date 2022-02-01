
import LayoutDefault from "../layout";
import axios from "axios";
import { API_URL } from "../libs/variables";
import Post from "../components/Post";
import style from '../styles/Ssr.module.scss';

const Ssr = ({ data }) =>
{
    const posts = data || [{id: 1, title: false, body: false}];

    return (
        <LayoutDefault>
            <div className={style.wrapper}>
                <h1>Server Side Rendering</h1>
                <>
                    {posts.map((post) =>
                        <Post className={style.post} title={post.title} body={post.body} key={post.id} />
                    )}
                </> 
            </div>
        </LayoutDefault>
    );
};

export const getServerSideProps = async () => 
{
    const {data} = await axios(`${API_URL}posts?_limit=10`);
    console.log(data);
    return {
        props: {
            data
        }
    };
};

export default Ssr;