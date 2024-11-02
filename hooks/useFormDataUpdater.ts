import { formData } from "@/types/form";
import { useEffect } from "react";
import React from "react";

const useFormDataUpdater = (
  text: string,
  setData: React.Dispatch<React.SetStateAction<formData>>,
  data: formData
) => {
  const handleFormDataUpdation = (
    propertyName: keyof formData,
    value: string
  ) => {
    setData((prev) => ({
      ...prev,
      [propertyName]:
        propertyName === "pinCode" || propertyName === "email"
          ? value.replaceAll(" ", "").toLocaleLowerCase()
          : value,
    }));
  };

  useEffect(() => {
    if (text !== "") {
      const parts = text.split("is");
      const property = parts[0].toLocaleLowerCase();
      const value = parts[1];
      const words = property.split(" ");
      if (words.length > 0) {
        const formattedPropertyName = words
          .map((word) =>
            word.length > 0
              ? word[0].toLocaleUpperCase() + word.substring(1)
              : ""
          )
          .join(" ")
          .replaceAll(" ", "");
        const propertyName =
          formattedPropertyName[0].toLocaleLowerCase() +
          formattedPropertyName.slice(1);
        if (propertyName in data) {
          handleFormDataUpdation(propertyName as keyof formData, value);
        }
      }
    }
  }, [text]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Successfully Submitted 🤠 ");
  };

  return {
    handleChange,
    handleSubmit,
  };
};

export default useFormDataUpdater;
