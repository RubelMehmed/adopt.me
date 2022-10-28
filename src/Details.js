import { Component } from "react";
import { useParams } from "react-router-dom";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
}
async componentDidMount() {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?id=${this.props.id}`
  ) ;
  const json = await res.json();
  this.setState(Object.assign({loading:false}, json.pets[0]));
};

render() {
  if (this.state.loading) {
    return <h2>loading _</h2>
  }
  const { animal, breed, city, state, description, name } = this.state;
  return (
      <div className="details">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {city} , {state}
        </h2>
        <p>{description}</p>
      </div>
  )
  }
}

const WrappedDetails = () => {
  const params = useParams();
  return <Details id={params.id} />
}
export default WrappedDetails;