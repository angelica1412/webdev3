import React, { useState } from "react";
import foto from "./foto.jpg";
import "./App.css"

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "Hobi",
      content: "Mendengarkan musik",
    },
    {
      title: "Jurusan",
      content: "Informatika",
    },
    {
      title: "Jalur Sukses",
      content: "CE",
    },
    {
      title: "Angkatan",
      content: "2023",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const [showFoto, setShowFoto] = useState(false);
  const toggleFotoHandler = () => {
    setShowFoto(!showFoto);
  };

  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(
      "div",
      { className: "containerAtas" },
      React.createElement(
        "div",
        { className: "fotoProfile" },
        showFoto
          ? React.createElement("img", {
              src: foto,
              className: "fotodiri",
              alt: "Foto Diri",
            })
          : React.createElement("div", { className: "fotodiri-placeholder" }),
        React.createElement(
          "button",
          { className: "showfoto", onClick: toggleFotoHandler },
          showFoto ? "Sembunyikan Foto" : "Tampilkan Foto"
        )
      ),
      React.createElement(
        "div",
        { className: "biodata" },
        React.createElement(
          "div",
          { className: "nama" },
          React.createElement("h1", null, "Maria Angelica")
        ),
        React.createElement(
          "div",
          { className: "container-kananBawah" },
          items.map((item, index) => {
            return React.createElement(
              "div",
              {
                className: `accordion-item ${
                  index === openIndex ? "open" : ""
                }`,
                key: index,
              },
              React.createElement(
                "div",
                {
                  className: "accordion-title",
                  onClick: () => toggleAccordion(index),
                },
                item.title
              ),
              index === openIndex
                ? React.createElement(
                    "div",
                    { className: "accordion-content" },
                    item.content
                  )
                : null
            );
          })
        )
      )
    ),
    React.createElement(
      "div",
      { className: "containerBawah" },
      React.createElement("h1", null, "Pengalaman Berorganisasi"),
      React.createElement(
        "div",
        { className: "owik" },
        React.createElement(
          "li",
          null,
          React.createElement("mark", null, "PCD O-Week 2023"),
          React.createElement(
            "p",
            null,
            "Di sini saya mengambil bagian sebagai PCD dengan pembagian job desk di bagian rally Games"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "su" },
        React.createElement(
          "li",
          null,
          React.createElement("mark", null, "Informatika Student Union 2023"),
          React.createElement(
            "p",
            null,
            "Di sini saya mengambil bagian sebagai bendahara yang mengurus segala keuangan"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "kepanitiaan" },
        React.createElement(
          "li",
          null,
          React.createElement("mark", null, "Panitia Paskah"),
          React.createElement(
            "p",
            null,
            "Di sini saya mengambil bagian sebagai divisi event yang mengatur segala susunan acara yang akan dilakukan"
          )
        )
      )
    )
  );
}

export default App;
