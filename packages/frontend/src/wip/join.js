import React, { useState } from "react";

const Join = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <form className="join">
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <button type="submit">Join our mailing list!</button>
      </form>
    </>
  );
};

export default Join;
