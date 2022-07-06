$(document).ready(() => {
    let checkBox = $('input[type=checkbox]');
    let span = $('span');
    let table = $('#table')
    let logout = $('#logout')


    let url = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products'
    $.get(url, (data, status) => {
        for (let i = 0; i < data.length; i++) {
            let row = $(`<tr><td>${data[i].id}</td><td>${data[i].medicineName}</td><td>${data[i].medicineBrand}</td><td>${data[i].expiryDate}</td><td>${data[i].unitPrice}</td><td>${data[i].stock}</td></tr>`);
            table.append(row);
            if (data[i].medicineName === undefined) {
                break;
            }
        }

    })
    $(logout).click(()=>{
        window.location.href = 'index.html';
    })

})
