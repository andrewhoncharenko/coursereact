import "./CoreConcept.css";
export default function CoreConcept({title, description, image}) {
    return (
      <li>
        <img src={image} title={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
}