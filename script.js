var salvarEmail = function(){
    var email = document.getElementById('email').value;
    localStorage.setItem('email', email);
}