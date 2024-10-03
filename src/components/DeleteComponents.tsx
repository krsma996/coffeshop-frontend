import { useState } from "react";
import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const DeleteComponents: React.FC<{}> = () => {
  const [currentCoffeName, setCurrentCoffeName] = useState("");

  function handleDeleteByName(event: React.ChangeEvent<HTMLInputElement>) {
    const curretValue = event.target.value;
    setCurrentCoffeName(curretValue);
  }

  async function deleteCoffeByName() {
    if (!currentCoffeName) {
      alert("Please enter a coffee name");
      return;
    }
    try {
      const response = await axios.delete(
        `http://localhost:8080/coffe/api/deleteCoffe?coffeName=${currentCoffeName}`
      );
      if (response.status === 200) {
        alert(`Coffee ${currentCoffeName} deleted successfully!`);
      } else {
        alert("Something went wrong, coffee not deleted.");
      }
    } catch (error) {
      console.error("Error deleting coffee:", error);
      alert("An error occurred while trying to delete the coffee.");
    }
  }

  return (
    <div>
      <hr />
      <h2>Delete Coffee By Name</h2>
      <br />
      <form action="deleteCoffeObject">
        <br />
        <input type="text" id="delete-form" onChange={handleDeleteByName} />
        <br />
        <input type="button" value="Delete" onClick={deleteCoffeByName} />
      </form>
    </div>
  );
};
