

export default function ArticleBlog(props) {

    return (

        
            <div className="card m-2 ">
                <img src={props.illustration_image} className="card-img-top" alt={props.description_image}></img>
                <div className="card-body p-3 col col-md-8 ">
                    <h5 className="card-title">{props.title_blog}</h5>
                    <p className="card-text custom-text">{props.blog_description}</p>
                    <button type="button" className="btn btn-primary">lire la suite</button>
                </div>
                <div className="card-footer col-12">
                    <small className="text-muted">{props.date_publication}</small>
                </div>
            </div>
       

    ); 
}