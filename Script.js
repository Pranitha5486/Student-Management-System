const form = document.getElementById('registrationForm');
const studentList = document.getElementById('studentList');

form?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    
    if(studentList) {
        const li = document.createElement('li');
        li.textContent = name;
        studentList.appendChild(li);
        form.reset();
        alert('Student Registered Successfully!');
    } else {
        alert('Form submitted successfully!!!!!!!!!!');
        form.reset();
    }
});
