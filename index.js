function addingEventListener() {
    // Get the button element
    const input = document.getElementById('button');

    // Define a function to handle the click event
    function clickAlert() {
        alert('I was clicked!');
    }

    // Add the event listener to the button
    input.addEventListener('click', clickAlert);
}

// Call the function to set up the event listener
addingEventListener();

