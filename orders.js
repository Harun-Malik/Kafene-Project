$(document).ready(() => {
    let checkBox = $('input[type=checkbox]');
    let para = $('#filterSection p');
    let span = $('span');
    var res = $(span).html();
    let table = $('#table');
    let logout = $('#logout')

    let url = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders';

    $.get(url, (data, status) => {
        for (let i = 0; i < data.length; i++) {
            let row = $(`<tr><td>${data[i].id}</td><td>${data[i].customerName}</td><td>${data[i].orderDate}</td><td>${data[i].amount}</td><td>${data[i].orderStatus}</td></tr>`);
            table.append(row);
            if (data[i].customerName === undefined) {
                break;
            }
        }
        
    })

    $(logout).click(()=>{
        window.location.href = 'login.html'
    })

})

