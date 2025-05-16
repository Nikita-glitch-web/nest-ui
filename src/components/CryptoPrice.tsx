import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSpring, animated } from "@react-spring/web";

export const CryptoPrice = () => {
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/crypto/price")
      .then((res) => setPrice(res.data))
      .catch(() => setPrice(null));
  }, []);

  const animation = useSpring({
    opacity: price !== null ? 1 : 0,
    transform: price !== null ? "translateY(0px)" : "translateY(-20px)",
    config: { tension: 200, friction: 20 },
  });

  return (
    <div>
      <h2>Bitcoin price</h2>
      {price !== null ? (
        <animated.p style={animation}>${price}</animated.p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
