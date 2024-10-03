import { useState } from "react";
import CoffeDto from "../model/CoffeDto";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const PostComponentFrom: React.FC<{}> = () => {
  // Inicijalizujemo objekat sa praznim vrednostima
  const [currentCoffe, setCurrentCoffe] = useState<CoffeDto>({
    id: 0,
    name: "",
    price: 0,
    brand: "",
    description: "",
  });

  function handleInputValues(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    // Postavljamo polja u trenutnom objektu na osnovu imena inputa
    setCurrentCoffe((prevCoffe) => ({
      ...prevCoffe,
      [name]: name === "price" ? Number(value) : value,
    }));
  }

  const persistToDb = async () => {
    try {
      const url = "http://localhost:8080/coffe/api/saveCoffe";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentCoffe),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Successfully saved coffee:", data);
    } catch (error) {
      console.error("Something went wrong persisting object to db", error);
    }
  };

  return (
    <>
      <hr />
      <h1>FORM FOR SAVING COFFE TO DB</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          <strong>Coff-Name</strong>
        </label>
        <input
          type="text"
          name="name"
          id="coffe-form"
          onChange={handleInputValues}
        />
        <br />
        <br />
        <label>
          <strong>Coffe-Price</strong>
        </label>
        <input
          type="number"
          name="price"
          id="coffe-form"
          onChange={handleInputValues}
        />
        <br />
        <br />
        <label>
          <strong>Coffe-Brand</strong>
        </label>
        <input
          type="text"
          name="brand"
          id="coffe-form"
          onChange={handleInputValues}
        />
        <br />
        <br />
        <label>
          <strong>Coffe-Description</strong>
        </label>
        <input
          type="text"
          name="description"
          id="coffe-form"
          onChange={handleInputValues}
        />
        <br />
        <br />
        <input type="button" value="Save" onClick={persistToDb} />
      </form>
      <hr />
    </>
  );
};
