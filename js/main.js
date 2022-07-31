const firstNameInput = document.getElementById("first-name-input");
const lastNameInput = document.getElementById("last-name-input");
const ageInput = document.getElementById("age-input");
const colorInput = document.getElementById("color-input");
const genderMaleInput = document.getElementById("gender-male-input");
const genderFemaleInput = document.getElementById("gender-female-input");
const cardsContainer = document.getElementById("cards-container");


function getUserInfo() {
    let gender;

    if (genderMaleInput.checked) {
        gender = genderMaleInput.value;
    } else if (genderFemaleInput.checked) {
        gender = genderFemaleInput.value
    };

    return {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        age: ageInput.value,
        color: colorInput.value,
        gender: gender,
    };
}

function renderCard(user) {
    return `    <div class="card m-2" style="background-color: ${user.color}">
        <div class="card-header">${user.firstName} ${user.lastName} (${user.gender})</div>
        <div class="card-body">
            <h5 class="card-title">Is ${user.age} years old</h5>
        </div>
    </div>`
}

function checkInfo(user) {
    if (user.age < 0 || user.age > 120) {
        return "Please return valid age number"
    } else if (user.firstName.length < 2 || 
        user.lastName.length < 2 || 
        user.firstName.length > 150 || 
        user.lastName.length > 150) {
        return "Please return valid name"
    } else if (user.gender === undefined) {
        return "Please enter your gender"
    }
    return ""
}

function submitInputs() {
    console.log(getUserInfo())
    const userInfo = getUserInfo();
    const error = checkInfo(userInfo);
    if (error.length > 0) {
        alert(error);
        return;
    }
    cardsContainer.innerHTML += renderCard(userInfo);
}

function clearInputs() {
    lastNameInput.value = "";
    firstNameInput.value = "";
    ageInput.value = "";
    colorInput.value = "#000000";
    genderFemaleInput.checked = undefined;
    genderMaleInput.checked = undefined;
}