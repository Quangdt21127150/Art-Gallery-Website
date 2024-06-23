import React from "react";

import MapSection from "../MapSection/MapSection";
import Address from "../Address/Address";

const Location = () => {
  return (
    <>
      <header>
        <MapSection />
      </header>
      <main>
        <Address />
      </main>
    </>
  );
};

export default Location;
