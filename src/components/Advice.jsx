import { useEffect, useState } from "react";

export const Advice = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="p-5 text-center text-red-900 text-4xl border-yellow-600 rounded-md">
      {advice}
    </div>
  );
};