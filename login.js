$(document).ready(() => {

    let userName = $('#userName');
    let password = $('#password');
    let btn = $('#btn');


    //     $(btn).click((e) => {
    //         if ($(userName).val() === $(password).val()) {
    //             alert("Login Successful");
    //         } else if ($(userName).val() === null && $(userName).val() === ' ' && $(password).val() === null && $(password).val() === ' ' && $(userName).val() !== $(password).val()){
    //             alert('Please enter valid credentials!');
    //         }
    //     })

    $(btn).click((e) => {
        if (userName.val() === '' || userName.val() === ' ' || password.val() === '' || password.val() === ' ' || userName.val() !== password.val()) {
            alert('Please enter valid credentials!');
        }else{
            alert('Login Successfull');
            window.location.href = 'orders.html'
        }
    })


})
