document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('problemSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        // Find all the list items inside the accordion tiers
        const listItems = document.querySelectorAll('.link-collection li');
        
        listItems.forEach(li => {
            const text = li.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                li.style.display = '';
            } else {
                li.style.display = 'none';
            }
        });

        // Optional UX: If a user is searching, automatically open all details tags
        // so they can see the filtered results
        if (searchTerm.length > 0) {
            document.querySelectorAll('.tier-section').forEach(detail => {
                detail.setAttribute('open', '');
            });
        }
    });
});
