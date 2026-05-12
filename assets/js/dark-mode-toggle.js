function applyToggleButtonStyle(isDark) {
    var btn = document.getElementById('dark-mode-toggle');
    if (!btn) return;
    if (isDark) {
        btn.style.backgroundColor = '#2a2a2a';
        btn.style.color = '#ffffff';
        btn.style.borderBottom = '1px solid #444';
    } else {
        btn.style.backgroundColor = '#ffffff';
        btn.style.color = '#7a8288';
        btn.style.borderBottom = '1px solid #f2f3f3';
    }
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
