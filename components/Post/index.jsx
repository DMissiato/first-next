
import style from './Post.module.scss';

const Post = (props) => 
{
    const title = props.title || 'This is a title';
    const body = props.body || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit neque tenetur repellat minus quibusdam quo reprehenderit nobis ipsa? Quibusdam optio facere cumque delectus enim animi corporis nostrum alias labore eligendi.';

    return (
        <div className={style.post}>
            <h4 className={style.title}>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Post;