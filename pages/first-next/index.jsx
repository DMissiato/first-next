
import LayoutDefault from '../../layout/index';
import Slider from '../../components/Slider';
import axios from 'axios';
import { API_URL } from '../../libs/variables';
import Post from '../../components/Post';
import style from '../../styles/Index.module.scss';

const Home = ({ data }) => 
{
  const posts = data || [{id: 1, title: false, body: false}];

  return (
    <LayoutDefault>
      <>
        <Slider />
        <div className={style.wrapper}>
          {posts.map((post) =>
            <Post title={post.title} body={post.body} key={post.id} />
          )}
        </div>
      </>
    </LayoutDefault>
  );
};

export const getStaticProps = async () => 
{
  const {data} = await axios(`${API_URL}posts?_limit=6`);
  
  return {
    props: {
      data
    }
  };
};

export default Home;
