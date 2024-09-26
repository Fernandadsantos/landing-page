import React, { useState } from "react";
import CardModel from "../cardModel";
import illustration from "../../assets/IllustrationForm.svg";
import "./style.css";
import ButtonModel from "../button";

export default function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    option: "sayHi",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(newFormData);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <CardModel height="773px" width="100%">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-radio">
            <label>
              <input
                className="radio-input"
                type="radio"
                name="option"
                value="sayHi"
                checked={formData.option === "sayHi"}
                onClick={handleChange}
              />
              Say Hi
            </label>

            <label>
              <input
                className="radio-input"
                type="radio"
                name="option"
                value="GetQuote"
                checked={formData.option === "GetQuote"}
                onClick={handleChange}
              />
              Get a Quote
            </label>
          </div>
          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                className="text-input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>

            <div>
              <label htmlFor="email">Email*</label>
              <input
                className="text-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
              />
            </div>

            <div>
              <label htmlFor="message">Message*</label>
              <textarea
                className="textarea-input"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message"
              />
            </div>
            <div className="btn-submit">
              <ButtonModel
                content={"Send Message"}
                height="30px"
                width="490px"
              />
            </div>
          </div>
        </form>
        <img className="img-form" src={illustration} alt="ilustração" />
      </div>
    </CardModel>
  );
}
