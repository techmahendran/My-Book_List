const fromInput = document.querySelectorAll('form input');
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const isbnInput = document.querySelector('#isbnInput');
const tblBody = document.querySelector('tbody');
const closeBtn = document.querySelector('.closeBtn');
const errorMsg = document.querySelectorAll('.error');
const book_details = document.querySelector('.book_details p');

// submit btn
const btn = document.querySelector('#btn');
btn.addEventListener('click', bookSubmit)

function bookSubmit(e) {
    e.preventDefault();
    // Fields
    if (titleInput.value == '' || authorInput.value == '' || isbnInput.value == '') {
        errorMsg.forEach((error) => {
            error.classList.add('active')
            setTimeout(() => {
                error.classList.remove('active')
            }, 3000);
        })
        fromInput.forEach((inputField) => {
            inputField.classList.add('active')
            setTimeout(() => {
                inputField.classList.remove('active')
            }, 3000);
        })
        
    }
    else {
        // book add msg 
        book_details.innerHTML = 'Book Added'
        book_details.classList.add('active')   
        // book add msg in timing
        setTimeout(() => {
        book_details.classList.remove('active')
        }, 1000);

        // create tr element
        const tr = document.createElement('tr')
        tr.className = 'color'

        // create td elements
        let td_data = document.createElement('td')
        td_data.innerHTML = titleInput.value
        tr.appendChild(td_data)

        let td_data2 = document.createElement('td')
        td_data2.innerHTML = authorInput.value
        tr.appendChild(td_data2)

        let td_data3 = document.createElement('td')
        td_data3.innerHTML = isbnInput.value
        tr.appendChild(td_data3)

        let closeIcon = document.createElement('i')
        closeIcon.className = 'fa fa-close'
        tr.appendChild(closeIcon)

        // append for tbody
        tblBody.appendChild(tr)

        // closebtn
        closeIcon.addEventListener('click', () => {
        tr.style.display = 'none'
        book_details.classList.add('active','remove')   
        // book remove msg
        book_details.innerHTML = 'Book Removed'

        setTimeout(() => {
            book_details.classList.remove('remove','active')   
        }, 1000);
    })
    }
    // clear fields
    titleInput.value = ''
    authorInput.value = ''
    isbnInput.value = ''
    
}
