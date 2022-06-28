

let table = $('#table');
let tbody = $('#tbody')
let btn = $('btn');
let flag = false;
let logout = $('#logout')

let url = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users';

$.get(url, (data, status) => {
     
    for (let i = 0; i < data.length; i++) {
        let row = $(`<tr><td>${data[i].id}</td><td><img src=${data[i].profilePic}</td><td>${data[i].fullName}</td><td>${data[i].dob}</td><td>${data[i].gender}</td><td>${data[i].currentCity}</td></tr>`);
        tbody.append(row);
        if (data[i].fullName === undefined) {
            break;
        }
    }
    
    $('#input').on('keyup', function(){
        let value = $(this).val().toLowerCase();
        if(value.length >= 2){
            $('#tbody tr'[2]).filter(function(){
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            })
        }else{
            alert('Please enter at least 2 characters')
        }
        
    })
    $('#btn').click(()=>{
        $('#input').val('');
    })
    $(logout).click(()=>{
        window.location.href = 'login.html'
    })

})


