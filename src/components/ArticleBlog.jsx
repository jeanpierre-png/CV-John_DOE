

export default function ArticleBlog(props) {

    return (

        <div className="card m-2 p-0 col-11 col-md-5 col-lg-3">

            <img src={props.illustration_image} className="card-img-top" alt={props.description_image}></img>
            
            <div className="card-body d-flex flex-column m-2 p-1 m-md-2 p-md-2 m-lg-0 p-lg-3 col-md-11 col-lg-12">
                <h3 className="card-title fs-2">{props.title_blog}</h3>
                <p className="card-text p-lg-1 custom-text">{props.blog_description}</p>
                <button type="button" className="btn btn-primary col-5 col-md-5 col-lg-4">Lire la suite</button>
            </div>

            <div className="card-footer col-12">
                <small className="text-muted-1">{props.date_publication}</small>
            </div>

        </div>

    );
}