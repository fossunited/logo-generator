const campusNameInput = document.getElementById('campusName');
const downloadBtn = document.getElementById('downloadBtn');
const themeToggleBtn = document.getElementById('themeToggle');
const formatToggleBtn = document.getElementById('formatToggle');
const logoPreview = document.getElementById('logoPreview');

let currentTheme = 'light';
let downloadFormat = 'svg';

// Function to update logo text (this is a placeholder function)
function updateLogoText() {
    // In a real implementation, this would update the SVG text
    console.log(`Updating logo text to: ${campusNameInput.value}`);
}

// Function to toggle theme
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme');
}

// Function to toggle download format
function toggleFormat() {
    downloadFormat = downloadFormat === 'svg' ? 'png' : 'svg';
    downloadBtn.textContent = `Download ${downloadFormat.toUpperCase()}`;
}

// Function to download logo (this is a placeholder function)
function downloadLogo() {
    // In a real implementation, this would generate and download the logo
    console.log(`Downloading logo as ${downloadFormat.toUpperCase()}`);
}

// Event Listeners
campusNameInput.addEventListener('input', updateLogoText);
downloadBtn.addEventListener('click', downloadLogo);
themeToggleBtn.addEventListener('click', toggleTheme);
formatToggleBtn.addEventListener('click', toggleFormat);

// Initial setup
updateLogoText();