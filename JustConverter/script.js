const FileDialogButton = document.getElementById('upload-button');
const fileDialog = document.getElementById('file-dialog');

FileDialogButton.addEventListener('click', () => fileDialog.showModal())

//const fileInput = document.getElementById("converter__file-input");
//const modal = document.getElementById("modal");

/*fileInput.addEventListener("change", function(event) {
    const selectedFiles = event.target.files; 
    
    // Check if a file was actually chosen (handles user hitting 'Cancel') 
    if (selectedFiles.length > 0) { 
        // Display file name in the menu 
        fileNameSpan.textContent = selectedFiles[0].name; 
        // Show the menu 
        modal.style.display = 'flex'; 
    } else { 
        hideMenu(); 
    } 
});

function hideMenu() {
    modal.style.display = 'none';
    fileInput.value = '';
}*/