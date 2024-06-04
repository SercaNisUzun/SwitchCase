let but = document.querySelector ("button");
let result = document.getElementById ("result");
let input = document.querySelector ("input");

but.addEventListener ("click", function e () {
    if (!input.value) {
        result.innerHTML = "Not correct info !"
    } else {
        switch (Number(input.value)) {
            case 0:
            case 1:
                result.innerHTML = "Monday";
            break;
            case 2:
            case 3:
                result.innerHTML = "Tuesday";
            break;
            case 4:
            case 5:
                result.innerHTML = "Wednesday";
            break;
            case 6:
            case 7:
                result.innerHTML = "Thursday";
            break;
            case 8:
            case 9:
                result.innerHTML = "Friday";
            break;
            default : 
            case "":
                result.innerHTML = "Not correct info !" ;
        }  } 
})
