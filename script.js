document.addEventListener('DOMContentLoaded', () => {
    const showAdBtn = document.getElementById('showAdBtn');
    const showAdBtn2 = document.getElementById('showAdBtn2');
    const adPopup = document.getElementById('adPopup');
    const closeBtn = document.querySelector('.close');

    function showPopup() {
        adPopup.style.display = 'flex';
    }

    showAdBtn.addEventListener('click', showPopup);
    showAdBtn2.addEventListener('click', showPopup);

    closeBtn.addEventListener('click', () => {
        adPopup.style.display = 'none';
    });

    // إغلاق النافذة عند النقر خارج المحتوى
    window.addEventListener('click', (event) => {
        if (event.target === adPopup) {
            adPopup.style.display = 'none';
        }
    });
});
