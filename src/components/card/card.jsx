import { Card } from "antd";
import "./card.css";

const CustomCard = ({ user }) => {
  const { name, email, phone, address, website, company, username } = user;
  return (
    <Card hoverable className="base-card">
      <div className="card-container">
        <img
          alt="example"
          className="user-image"
          src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
        />
        <div>
          <h2>{name}</h2>
          <p>
            <strong>Email: </strong>
            {email}
          </p>
          <p>
            <strong>Phone: </strong> {phone}
          </p>
          <p>
            <strong>Company: </strong> {company.name}
          </p>
          <p>
            <strong>Website: </strong> {website}
          </p>
          <p>
            <strong>Address: </strong>{" "}
            {address.street +
              address.suite +
              ", " +
              address.city +
              ", " +
              address.zipcode}
          </p>
        </div>
      </div>
    </Card>
  );
};
export default CustomCard;
