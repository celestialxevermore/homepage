function applyToggleButtonStyle(isDark) {
    const btn = document.getElementById('dark-mode-toggle');
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
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    applyToggleButtonStyle(isDark);
}

document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('darkMode');
    const isDark = saved !== 'false';

    if (isDark) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    applyToggleButtonStyle(isDark);

    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            toggleDarkMode();
        });
    }
});
