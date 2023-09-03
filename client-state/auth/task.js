
function sendAjaxRequest(url, method, data, successCallback, errorCallback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            successCallback(response);
        } else {
            errorCallback();
        }
    };

    xhr.onerror = function () {
        errorCallback();
    };

    xhr.send(data);
}


function showWelcomeBlock(userId) {
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');
    userIdSpan.textContent = userId;
    welcomeBlock.classList.add('welcome_active');
}


function handleSuccess(response) {
    if (response.success) {
        localStorage.setItem('user_id', response.user_id);
        showWelcomeBlock(response.user_id);
    } else {
        alert('Неверный логин/пароль');
    }
}


function handleError() {
    alert('Произошла ошибка авторизации');
}


window.onload = function () {
    const userId = localStorage.getItem('user_id');
    const signinForm = document.getElementById('signin');

    if (userId) {
        signinForm.style.display = 'none';
        showWelcomeBlock(userId);
    } else {
        signinForm.classList.add('signin__active');
        const signinButton = document.getElementById('signin__btn');

        signinButton.addEventListener('click', function (e) {
            e.preventDefault();
            const formData = new FormData(signinForm);

            sendAjaxRequest(
                'https://students.netoservices.ru/nestjs-backend/auth',
                'POST',
                JSON.stringify(Object.fromEntries(formData.entries())),
                handleSuccess,
                handleError
            );
        });
    }
};