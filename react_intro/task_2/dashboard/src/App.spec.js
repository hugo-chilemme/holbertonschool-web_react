import {render, screen} from '@testing-library/react'
import App from './App'


describe("App", () => {
    it("check if the h1 element with the text School dashboard", () => {
      render(<App />);
  
      const title = screen.getByRole("heading", {level:1, name:/School Dashboard/i});
      expect(title).toBeInTheDocument();
    });

    it("check 2 p elements", () => {
        render(<App />);
    
        const paragraph1 = screen.getByText(/login to access the full dashboard/i);
        const paragraph2 = screen.getByText(/copyright 2025 holberton school/i);
        expect(paragraph1).toBeInTheDocument();
        expect(paragraph2).toBeInTheDocument();
      });

      it("check if an img element is rendered", () => {
        render(<App />);
    
        const image = screen.getByAltText(/holberton logo/i);
        expect(image).toBeInTheDocument();
      });

      it("check input element", () => {
        render(<App />);

        const inputEmail = screen.getByLabelText(/email/i, {selector: "input"});
        const inputPassword = screen.getByLabelText(/password/i, {selector: "input"});

        expect(inputEmail).toBeInTheDocument();
        expect(inputPassword).toBeInTheDocument();
      });

      it("check label text", () => {
        render(<App />);

        const labelEmail = screen.getByRole("textbox", {name: /email:/i});
        const labelPassword = screen.getByText(/password:/i);

        expect(labelEmail).toBeInTheDocument();
        expect(labelPassword).toBeInTheDocument();
      });

      it("check button with the text OK", () => {
        render(<App />);

        const button = screen.getByRole("button", {name: /ok/i});
        expect(button).toBeInTheDocument();
      });
  });









