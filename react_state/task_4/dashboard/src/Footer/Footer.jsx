import React, { useContext } from "react";
import { getCurrentYear, getFooterCopy } from "../utils/utils";
import { newContext } from "../Context/context";

function Footer() {
  const { user } = useContext(newContext);

  return (
    <>
      <div>
        <p>
          Copyright {getCurrentYear()} - {getFooterCopy()}
        </p>

        {user?.isLoggedIn && (
          <p>
            <a href="#">Contact us</a>
          </p>
        )}
      </div>
    </>
  );
}

export default Footer;