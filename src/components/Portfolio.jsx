
export default function Portfolio(props) {

  return (

    <div className="d-flex m-0 m-md-0 mt-lg-5 col-11 col-md-5 col-lg-3">
      <div className="card d-flex flex-column">
        <img src={props.illustration_img} className="card-img-top" alt={props.description_img}></img>
        <div className="card-body-1 text-center p-3 p-md-1 p-lg-3 col-lg-12">
          <h5 className="card-title">{props.title_project}</h5>
          <p className="card-text">{props.realisation_description}</p>
          <button className="btn btn-outline-primary mb-2">Voir</button>
        </div>
        <div className="card-footer text-center col-12">
          <small className="text-muted-1">{props.realisation_langage}</small>
        </div>
      </div>
    </div>

  );
}
