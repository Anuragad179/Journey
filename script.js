// sidepanel

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const sidePanel = document.getElementById('side-panel');
    const mainContent = document.getElementById('main-content');
    const photoContent = document.getElementById('photo');
    
    // Open/Close Side Panel on Menu Button Click
    menuButton.addEventListener('click', (e) => {
        sidePanel.classList.toggle('-translate-x-full');  // Toggle panel slide-in/out
        // mainContent.classList.toggle('blur-lg');  // Toggle blur effect on main content
        e.stopPropagation();  // Prevent click from propagating to the document
    });

    // Close Side Panel if Clicking on Main Content
    mainContent.addEventListener('click', () => {
        if (!sidePanel.classList.contains('-translate-x-full')) { // Only close if panel is open
            sidePanel.classList.add('-translate-x-full');  // Close panel
            mainContent.classList.remove('blur-lg');  // Remove blur effect from main content
        }
    });

    photoContent.addEventListener('click', () => {
        if (!sidePanel.classList.contains('-translate-x-full')) { // Only close if panel is open
            sidePanel.classList.add('-translate-x-full');  // Close panel
            photoContent.classList.remove('blur-lg');
        }
    });
});


//searchbar

const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

// Toggle search bar visibility on hover
searchBtn.addEventListener('mouseenter', () => {
    searchInput.classList.remove('hidden');
    searchInput.classList.add('translate-x-0');
});

searchBtn.addEventListener('mouseleave', () => {
    setTimeout(() => {
        searchInput.classList.add('hidden');
    }, 1000); // Delay hiding after leaving the button
});

// Handle search functionality (e.g., perform search operation on pressing Enter)
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value;
        // Implement the search logic here
        console.log('Searching for:', query);
        searchInput.classList.add('hidden'); // Hide the input after search
    }
});
