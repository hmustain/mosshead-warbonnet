document.addEventListener('DOMContentLoaded', function () {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

    let currentPopover = null; // Variable to track the currently open popover

    // Attach event listeners to each popover trigger
    popoverTriggerList.forEach(popoverTriggerEl => {
        popoverTriggerEl.addEventListener('click', function () {
            // If there is an open popover, hide it
            if (currentPopover && currentPopover !== popoverTriggerEl) {
                currentPopover._popover.hide();
            }
            // Update currentPopover to the new popover
            currentPopover = popoverList.find(popover => popover._element === popoverTriggerEl);
        });
    });
});
