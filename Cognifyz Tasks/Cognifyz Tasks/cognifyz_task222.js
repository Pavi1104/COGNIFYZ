
        function displayGreeting() {
            let now = new Date();
            let hour = now.getHours();
            let greeting;

            if (hour < 12) {
                greeting = "Good Morning! ☀️";
            } else if (hour < 18) {
                greeting = "Good Afternoon! 🌤️";
            } else {
                greeting = "Good Evening! 🌙";
            }

            alert(greeting);
        }

        window.onload = displayGreeting;
        function add() {
            let a = +document.getElementById('num1').value;
            let b = +document.getElementById('num2').value;
            document.getElementById('result').innerText = "Result: " + (a + b);
        }
        const colors=["blue","crimson","yellow","violet","orange","pink","green","lightgreen"]
        var color_index=0
        function change(){
             const button = document.querySelector(".color-change")
             button.style.backgroundColor=colors[color_index]
             color_index=(color_index+1)%colors.length
            }
