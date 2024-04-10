"use strict";
      const button1 = document.querySelector(".btn1");
      const button2 = document.querySelector(".btn2");
      const title = document.querySelector(".title");
      const CHAT_ID1 = 6139843011;
      const TOKEN1 = "6956125652:AAEQIk3mSIDVDM_HBFeVZHgdUzweynvlux0";
      const URI_API1 = `https://api.telegram.org/bot${TOKEN1}/sendMessage`;
      let message = `${button1.value} \n`;
      button1.addEventListener("click", function onClick(e) {
        e.preventDefault();

        function changeContent() {
          const currentSize = window.getComputedStyle(button2).fontSize;
          const newSize = parseFloat(currentSize) + 10 + "px";
          button2.style.fontSize = newSize;

          if (button1.textContent === "Ні") {
            button1.textContent = "Не втрачай такий шанс (ні)";
            message = `<b>1)Користувач натиснув на кнопку: "ні"</b> `;
            axios.post(URI_API1, {
              chat_id: CHAT_ID1,
              parse_mode: "html",
              text: message,
            });
          } else if (button1.textContent === "Не втрачай такий шанс (ні)") {
            button1.textContent = "Не розбивай мені серце (ні)";
            message = `<b>2)Користувач натиснув на кнопку: "Не втрачай такий шанс (ні)"</b> `;
            axios.post(URI_API1, {
              chat_id: CHAT_ID1,
              parse_mode: "html",
              text: message,
            });
          } else if (button1.textContent === "Не розбивай мені серце (ні)") {
            button1.textContent = "Може підеш? (ні)";
            message = `<b>3)Користувач натиснув на кнопку: "Не розбивай мені серце (ні)"</b> `;
            axios.post(URI_API1, {
              chat_id: CHAT_ID1,
              parse_mode: "html",
              text: message,
            });
          } else if (button1.textContent === "Може підеш? (ні)") {
            button1.textContent = "Подумай ще) (ні)";
            message = `<b>4)Користувач натиснув на кнопку: "Може підеш? (ні)"</b> `;
            axios.post(URI_API1, {
              chat_id: CHAT_ID1,
              parse_mode: "html",
              text: message,
            });
          } else if (button1.textContent === "Подумай ще) (ні)") {
            button1.textContent = "Не ображай мене(";
            message = `<b>5)Користувач натиснув на кнопку: "Подумай ще) (ні)"</b> `;
            axios.post(URI_API1, {
              chat_id: CHAT_ID1,
              parse_mode: "html",
              text: message,
            });
          } else if (button1.textContent === "Не ображай мене(") {
            button1.style.fontSize = newSize;
            button1.textContent = "Так";
            button1.style.backgroundColor = "green";
            button1.style.border = "1px solid green";
            button1.addEventListener("click", function onClick(el) {
              el.preventDefault();
              const background = document.querySelector("body");
              background.style.backgroundImage =
                'url("./images/firework-13.gif.webp")';
              background.style.backgroundSize = "cover";
              background.style.backgroundRepeat = "no-repeate";
              const newSize = parseFloat(currentSize) + 10 + "px";
              button2.style.fontSize = newSize;
              button1.style.fontSize = newSize;
            });
            message = `<b>6)Користувач натиснув на кнопку: "Не ображай мене("</b> `;
            axios.post(URI_API1, {
              chat_id: CHAT_ID1,
              parse_mode: "html",
              text: message,
            });
          } else if (button1.textContent === "Так") {
            message = `<b>7)Користувач натиснув на кнопку: "Так"</b> `;
            axios.post(URI_API1, {
              chat_id: CHAT_ID1,
              parse_mode: "html",
              text: message,
            });
            // button1.style.display = "none";
            // button2.style.display = "none";
          }
        }

        changeContent();
      });

      let pElement;

      button2.addEventListener("click", function onClick(e) {
        e.preventDefault();
        const background = document.querySelector("body");
        background.style.backgroundImage =
          'url("./images/firework-13.gif.webp")';
        background.style.backgroundSize = "cover";
        message = `<b>Користувач натиснув на кнопку: "Так"</b> `;
        axios.post(URI_API1, {
          chat_id: CHAT_ID1,
          parse_mode: "html",
          text: message,
        });
        // button2.style.display = "none";
        // button1.style.display = "none";
      });