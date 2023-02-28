import React, { useState } from "react";
import Layout from "./components/Layout";
import Cart from "./components/Cart";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <Layout setIsModalOpen={setIsModalOpen} />
      <Cart isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}

export default App;
