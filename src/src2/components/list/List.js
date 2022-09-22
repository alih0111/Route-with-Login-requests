import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function List({ contact, delHandler }) {
  return (
    <div>
      {contact.map((item, index) => {
        return (
          <div key={index} className="list">
            <div className="list-out">
              <FaUserCircle />
              <div className="list-in">
                <p>{item.name}</p>
                <p>{item.email}</p>
              </div>
            </div>
            <button className="delbut" onClick={() => delHandler(item.email)}><RiDeleteBin6Line /></button>
          </div>
        );
      })}
    </div>
  );
}
