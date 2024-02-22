import React from "react";
import { ClientData } from "./data/client";

const ClientTestimonials = () => {
  return (
    <div>
      <div>Client Testimonials</div>
      <div>
        {ClientData?.map((test) => (
          <div key={test?.id}>
            <div>
              <div>
                <img src={test?.profile} alt="" />
              </div>
              <div>{test?.para}</div>
              <div>
                <div>{test?.name}</div>
                <div>{test?.roll}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonials;
