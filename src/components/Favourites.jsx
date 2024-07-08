import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const Favourites = () => {
  const favouritesCompany = useSelector((state) => state.favourites.content);

  return (
    <ListGroup>
      {favouritesCompany.map((company, index) => {
        return <ListGroup.Item key={index}> {company.company_name} </ListGroup.Item>;
      })}
    </ListGroup>
  );
};
export default Favourites;
