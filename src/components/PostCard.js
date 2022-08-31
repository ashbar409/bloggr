import {useNavigate} from 'react-router-dom'

function PostCard(props){

    const navigate = useNavigate()


    return(
        <div className="item" key={props.id}>
            <img src={`https://picsum.photos/${props.image}`} alt='Post banner'/>
            <div className="modal">
                <h3>{props.title}</h3>
                <button onClick={() => navigate(`./${props.id}`)}>
                    Read More
                </button>
            </div>
        </div>
    )
}

export default PostCard