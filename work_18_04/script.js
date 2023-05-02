function isEveryElementEven(numbers) {
    return numbers.every((num) => num % 2 === 0);
    }
    
    const formOne = document.getElementById("form1");
    const inputOne = document.getElementById("task1");
    const outputOne = document.querySelector(".task_one output");
    
    formOne.addEventListener("submit", (event) => {
    event.preventDefault();
    const numbers = inputOne.value.split(", ").map((num) => Number(num.trim()));
    const result = isEveryElementEven(numbers);
    outputOne.textContent = result;
    });
    
    const formTwo = document.querySelector(".task_two form");
    const inputTwo = document.querySelector('.task_two input[type="text"]');
    const outputTwo = document.querySelector(".task_two output");
    
    let names = [];
    
    formTwo.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = inputTwo.value.trim();
    if (name) {
    names.push(name);
    inputTwo.value = "";
    const span = document.createElement("span");
    span.textContent =" Name: " + name;
    outputTwo.appendChild(span);
    }
    });
    
    const checkButton = document.querySelector("#coincidences");
    
    checkButton.addEventListener("click", (event) => {
    const result = isEveryNameUnique(names);
    outputTwo.textContent = result ? "true" : "false";
    });
    
    function isEveryNameUnique(namesArr) {
    const uniqueNames = new Set(namesArr);
    return uniqueNames.size === namesArr.length;
    }

    const firstArray = [];
    const secondArray = [];

    function addToFirstArray() {
        const input = document.getElementById("first");
        const value = input.value.trim();
         if (value) {
            firstArray.push(value);
            input.value = "";
            document.getElementById("show_first_array").textContent = firstArray.join(", ");
         }
    }

    function addToSecondArray() {
        const input = document.getElementById("second");
        const value = input.value.trim();
        if (value) {
            secondArray.push(value);
            input.value = "";
            document.getElementById("show_second_array").textContent = secondArray.join(", ");
        }
    }

    function compareArrays() {
        const result = secondArray.every((element) => firstArray.includes(element));
        document.getElementById("show_result").textContent = result ? "true" : "false";
    }

    const strings = [];

    function addLine() {
        const input = document.getElementById("add_line");
        const value = input.value.trim();
        if (value) {
            strings.push(value);
            input.value = "";
            document.getElementById("show_line").textContent = strings.join(", ");
        }
    }
    
    function compareStrings() {
        strings.sort(function(a, b) {
            if (a < b) {
                return -1;
            } else if ( a > b) {
                return 1;
            } else {
                return 0;
            }
        });
        document.getElementById("show_strings").textContent = strings.join(", ");
    }

    let data = [];

    function addData() {
        const nameInput = document.getElementById("name_input");
        const nameValue = nameInput.value.trim();
        const ageInput = document.getElementById("age_input");
        const ageValue = ageInput.value.trim();
        if (nameValue && ageValue) {
            const person = { name: nameValue, age: parseInt(ageValue) };
            data.push(person);
            nameInput.value = "";
            ageInput.value = "";
            const nameAgeArray = data.map(person => `${person.name}: ${person.age}`);
            document.getElementById("show_name_age").textContent = nameAgeArray.join(", ");
        }
    }
    function sortAge() {
        const filteredData = data.filter(person => person.age >= 18);
        const namesOverEighteen = filteredData.map(person => person.name + ': ' + person.age).join(", ");
        document.getElementById("over_eighteen").textContent = `Люди старше 18 лет: ${namesOverEighteen}`;
    }

    