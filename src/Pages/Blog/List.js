import React from "react";

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        const { id, name, post } = person;
        return (
          <article key={id}>
            <div>
              <h4>{name}</h4>
              <h4>{post} </h4>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
