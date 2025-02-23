document.addEventListener('DOMContentLoaded', function() {
    const favoriteBtn = document.querySelector('.favorite-btn');
    
    favoriteBtn.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
