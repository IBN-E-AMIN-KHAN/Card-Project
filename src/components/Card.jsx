import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <div>{props.availability && <p>{props.availability}</p>}</div>

        <span>{props.pay}</span>
      </div>

      <div className="profile">
        <img src={props.image} alt="pic" />
        <h3>{props.name}</h3>
        <span>{props.role}</span>
        <p>{props.type}</p>
      </div>

      <div className="skill">
        <h4>{props.skill1}</h4>
        <h4>{props.skill2}</h4>
        <h4>{props.skill3}</h4>
        <h4 className="more">{props.skill4}</h4>
      </div>

      <div className="bottom">
        <p>{props.bio}</p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
