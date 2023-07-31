document.getElementById("form").addEventListener('submit', function(event){
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const Acceptedterm = document.getElementById('Accepted term').value;

    const ans = document.querySelector('#tablebody');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${dob}</td>
    <td>${Acceptedterm ? "yes" : "no"}</td>
    `;
    ans.appendChild(row);
    document.getElementById("form").reset();
})