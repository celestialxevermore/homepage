function toggleDarkMode() {
    const body = document.body; 
    body.classList.toggle('dark-mode'); 
    const isDarkMode = body.classList.contains('dark-mode'); 
    localStorage.setItem('darkMode', isDarkMode);
}


document.addEventListener('DOMContentLoaded', (event) =>{
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
    }
}); 

