
export default function Portfolio(props) {

  return (

    <div className="d-flex mt-5">
      <div className="card m-2 d-flex flex-column">
        <img src={props.illustration_img} className="card-img-top" alt={props.description_img}></img>
        <div className="card-body-1 pt-3 pb-3 col-md-6 col-md-4">
          <h5 className="card-title">{props.title_project}</h5>
          <p className="card-text">{props.realisation_description}</p>
          <button className="btn btn-outline-primary">Voir</button>
        </div>
        <div className="card-footer col-12">
          <small className="text-muted">{props.realisation_langage}</small>
        </div>
      </div>
    </div>

  );
}
