// Define toggleSideBar function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    //Toggle the active class to open the sidebar
    sidebar.classList.toggle('active');
}

// Define hideSidebar function to hide sidebar
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    //Remove active class to hide the sidebar
    sidebar.classList.remove('active');
}

// Wait for DOM to be fully loaded before executing the script(javaScript)
document.addEventListener('DOMContentLoaded', function () {
    const menuBarIcon = document.getElementById('menu-bar');
    // Add a click event to the menubar icon
    menuBarIcon.addEventListener('click', toggleSidebar);

    // Select all the links in the sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

    //Add click event listeners to all the sidebar links to hide the sidebar
    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', hideSidebar);
    });

    // Select close icon by ID
    const closeIcon = document.getElementById('hide_sidebar');
    //Add a click event to close the sidebar
    closeIcon.addEventListener('click', hideSidebar);
});

