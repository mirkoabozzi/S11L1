import { Button, Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favouritesCompany = useSelector((state) => state.favourites.content);

  const dispatch = useDispatch();

  return (
    <Container className="mt-2">
      <h1>My ❤️ Company</h1>
      <ListGroup className="mt-3">
        {favouritesCompany.map((company) => {
          return (
            <div key={company._id}>
              <Link to={`/${company.company_name}`}>{company.company_name}</Link>
              <Button
                variant="danger"
                className="ms-2"
                onClick={() => {
                  dispatch({ type: "REMOVE_FAVOURITE", payload: company._id });
                }}
              >
                {" "}
                🗑️{" "}
              </Button>
            </div>
          );
        })}
      </ListGroup>
    </Container>
  );
};
export default Favourites;
