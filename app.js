 const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        function updateClock() {
            const now = new Date();

            document.getElementById('day-name').innerText = days[now.getDay()];
            document.getElementById('full-date').innerText = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

            let h = now.getHours();
            let m = now.getMinutes();
            let s = now.getSeconds();
            let period = h >= 12 ? "PM" : "AM";

        
            if (h == 0) {
                h = 12;
            } else if (h > 12) {
                h = h - 12;
            }
            
            h = h < 10 ? "0" + h : h;
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;

            document.getElementById('hours').innerText = h;
            document.getElementById('min').innerText = m;
            document.getElementById('sec').innerText = s;
            document.getElementById('ampm').innerText = period;
        }

        setInterval(updateClock, 1000);
        updateClock(); 