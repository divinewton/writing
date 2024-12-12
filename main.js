// Function to open THE MEANING
function openMeaning() {
    document.getElementById("meaning-section").style.display = "flex";
    document.getElementById("moment-section").style.display = "none";
    document.getElementById("meaning-link").style.textDecoration = "underline";
    document.getElementById("moment-link").style.textDecoration = "none";
    window.scrollTo(0, 0);
}
// Function to open THE MOMENT
function openMoment() {
    document.getElementById("moment-section").style.display = "flex";
    document.getElementById("meaning-section").style.display = "none";
    document.getElementById("moment-link").style.textDecoration = "underline";
    document.getElementById("meaning-link").style.textDecoration = "none";
    window.scrollTo(0, 0);
}

// functions to open and close top menu
function openMenu() {
    document.getElementById("menu-container").style.display = "flex";
}
function closeMenu() {
    document.getElementById("menu-container").style.display = "none";
}