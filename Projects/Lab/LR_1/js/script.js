let buttons = document.getElementsByClassName('btn');

buttons[0].addEventListener('click', function() {
    alert('Hello, world!')
})

buttons[1].addEventListener('mouseover', function() {
    document.write('<p>Hello, world!</p>')
})

buttons[2].addEventListener('click', function() {
    let userConfirmed = confirm("Hello?");
    
    if (userConfirmed) {
        document.write("Hello, world!");
    }
})

buttons[3].addEventListener('click', function() {
    let userText = prompt('Write some text');
    if (userText != '' && userText != null) {
        alert(userText);
    }
})

buttons[4].addEventListener('mouseover', function() {
    let userText = prompt('Write some text');
    if (userText != '' && userText != null) {
        alert(userText);
    }
})

buttons[5].addEventListener('click', function() {
    let firstNum = Number(prompt('Write first number'));
    let secondNum = Number(prompt('Write second number'));
    if (firstNum != '' && secondNum != '') {
        alert(firstNum+secondNum);
    }
})

buttons[6].addEventListener('click', function() {
    let firstNum = Number(prompt('Write first number'));
    let secondNum = Number(prompt('Write second number'));
    if (firstNum != '' && secondNum != '') {
        if (firstNum > secondNum){
            alert(firstNum);
        } else if (secondNum > firstNum) {
            alert(secondNum);
        } else {
            alert('Числа рівні!');
        }
    }
})

buttons[7].addEventListener('click', function() {
    let num = prompt('Введіть номер місяця:');
    if (num != '' && num != '') {
        if(num > 12 || num < 1) {
            alert('Введено невірне число');
        } else if (num > 2 && num < 6) {
            alert('Весна');
        } else if(num > 5 && num < 9) {
            alert('Літо');
        } else if(num > 8 && num < 12) {
            alert('Осінь');
        } else {
            alert('Зима');
        }
    }
})

buttons[8].addEventListener('click', function() {
    let userConfirmed = confirm("Hello?");
    
    if (userConfirmed) {
        alert("Ок");
    } else {
        alert("Скасувати");
    }
})

buttons[9].addEventListener('click', function() {
    let num = prompt('Введіть кількість студентів:');
    let students = [];
    num++;
    if (num != '' && num != '') {
        for(let i=1; i<num; i++) {
            let student = prompt('Введіть прізвище студента:');
            students.push(student)

            let p = document.createElement('p');
            p.textContent = student
            document.body.appendChild(p);
        }
    }
    document.getElementById("nav-menu").style.display = "none";
})

buttons[10].addEventListener('click', function() {
    let students = [];
    let student;
    while (true) {
        student = prompt('Введіть прізвище:');

        if (student == null || student.trim() == '') {
            break;
        }

        students.push(student)
        
        let p = document.createElement('p');
        p.textContent = student
        document.body.appendChild(p);
    }
    document.getElementById("nav-menu").style.display = "none";
})

buttons[11].addEventListener('click', function() {
    document.getElementById("nav-menu").style.display = "none";

    let tableContainer = document.createElement('div'); 
    document.body.appendChild(tableContainer); 
    tableContainer.style.display = "flex";
    tableContainer.style.flexWrap = "wrap";
    tableContainer.style.width = "800px";
    tableContainer.style.margin = "0 auto";

    let column;
    let row;
    for (column = 1; column <= 10; column++) {
        let columnDiv = document.createElement('div');
        columnDiv.style.padding = "10px";
        columnDiv.style.margin = "5px";
        columnDiv.style.border = "3px solid #4d4d4d";
        columnDiv.style.width = "150px";

        // Чергування кольорів для контейнерів
        if (column % 2 === 0) {
            columnDiv.style.backgroundColor = "black";
            columnDiv.style.color = "white";
        } else {
            columnDiv.style.backgroundColor = "white";
            columnDiv.style.color = "black";
        }

        for (row = 1; row <= 10; row++) {
            let p = document.createElement('p');
            p.textContent = `${column} × ${row} = ${column * row}`;
            columnDiv.appendChild(p);
        }
        tableContainer.appendChild(columnDiv);
    }
});