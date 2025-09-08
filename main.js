      function odliczanie() {
            setInterval(() => {
                let dzisiaj = new Date();
                let dzien = dzisiaj.getDate();
                let miesiac = (dzisiaj.getMonth() + 1).toString().padStart(2, "0");
                let rok = dzisiaj.getFullYear();
                let godzina = dzisiaj.getHours().toString().padStart(2, "0");
                let minuta = dzisiaj.getMinutes().toString().padStart(2, "0");
                let sekunda = dzisiaj.getSeconds().toString().padStart(2, "0");

                document.getElementById("zegar").textContent = 
                    `${dzien}/${miesiac}/${rok} | ${godzina}:${minuta}:${sekunda}`;
            }, 1000);
        }