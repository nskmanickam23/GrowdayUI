import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Oooops...</h1>
      <h2>This page cannot be found...</h2>
      <p>
        Go back to the
        <Link href="/dashboard">
          <a> Homepage </a>
        </Link>
      </p>
    </div>
  );
};

// {
//     "email": "giri@togethercorporation.com",
//     "password": "mongouser"
//   }

export default NotFound;
