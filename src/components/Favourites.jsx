import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favouritesCompany = useSelector((state) => state.favourites.content);

  return (
    <ListGroup>
      {favouritesCompany.map((company, index) => {
        return (
          <Link to={`/${company.company_name}`} key={index}>
            {" "}
            {company.company_name}{" "}
          </Link>
        );
      })}
    </ListGroup>
  );
};
export default Favourites;
