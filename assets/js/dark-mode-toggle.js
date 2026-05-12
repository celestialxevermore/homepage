function applyToggleButtonStyle(isDark) {
    var btn = document.getElementById('dark-mode-toggle');
    if (!btn) return;
    btn.style.backgroundColor = 'transparent';
    btn.style.border = '0';
    btn.style.boxShadow = 'none';
    btn.style.color = isDark ? '#ffffff' : '#7a8288';
}

function toggleDarkMode() {
    var body = document.body;
    var willBeDark = !body.classList.contains('dark-mode');
    if (willBeDark) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
    try { localStorage.setItem('darkMode', willBeDark ? 'true' : 'false'); } catch (e) {}
    applyToggleButtonStyle(willBeDark);
}

document.addEventListener('DOMContentLoaded', function () {
    var saved = null;
    try { saved = localStorage.getItem('darkMode'); } catch (e) {}
    var isDark = saved !== 'false';
    if (isDark) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    applyToggleButtonStyle(isDark);
});
