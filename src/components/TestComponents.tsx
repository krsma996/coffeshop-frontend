import React, { useState } from "react";
import { ResultFetchCompoent } from "./ResultFetchCompoent";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const TestComponents: React.FC<{}> = () => {
  const [dbString, setCurrentDbString] = useState<string>("");
  const [fetchedDataDb, setFetchedDataDb] = useState<string>("");
  function captureNameFormInput(event: React.ChangeEvent<HTMLInputElement>) {
    const currentValue = event.target.value;
    setCurrentDbString(currentValue);
  }
  async function getByCoffeName() {
    if (!dbString) {
      alert("Please enter value");
    }
    try {
      const response = await fetch(
        `http://localhost:8080/coffe/api/coffeName?name=${dbString}`
      );
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const data = await response.text();
      setFetchedDataDb(data);
      console.log("Data from backend:", data);
    } catch (error) {
      console.error("Error fetching coffee name:", error);
    }
  }

  return (
    <>
      <h2>Test the api calls from backend</h2>
      <p>
        Lets test simple <strong>getByCoffeName</strong> from backed
      </p>
      <form action="" onSubmit={(e) => e.preventDefault}>
        <label>Enter coffeName to be retrived from db</label>
        <br />
        <input
          type="text"
          name="coffeName"
          placeholder="Enter coffeName"
          onChange={captureNameFormInput}
        />
        <br />
        <input type="button" value="Submit" onClick={getByCoffeName} />
      </form>
      <ResultFetchCompoent dbString={fetchedDataDb} />
    </>
  );
};
