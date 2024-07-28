document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector('.content');
    content.style.opacity = 0;
    setTimeout(() => {
        content.style.transition = "opacity 1s";
        content.style.opacity = 1;
    }, 100);
});

function toggleContent(id) {
    const content = document.getElementById(id);
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
    } else {
        content.classList.add('hidden');
    }
}

function toggleSearch() {
    const searchSection = document.getElementById('searchSection');
    if (searchSection.classList.contains('hidden')) {
        searchSection.classList.remove('hidden');
    } else {
        searchSection.classList.add('hidden');
    }
}

function performSearch() {
    const searchInput = document.getElementById('searchInput').value;
    alert('Search functionality is not implemented. You searched for: ' + searchInput);
}
