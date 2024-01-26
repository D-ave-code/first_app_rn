import { useState, useEffect } from "react";
import axios from "axios";
export function useOpen(prompt) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo-1106",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.7,
          max_tokens: 10,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer ",
          },
        }
      )
      /* .then((response) => response.json()) */
      .then((response) => setData(response.data.choices[0].message), console.log(data))
      /* .then(console.log(data.choices[0].message.content)) */
      /* .then(console.log(data.choices[0].message.content)) */
      .catch((err) => console.log(err));
  }, []);

  return  data ;
}
