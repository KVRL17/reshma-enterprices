function toggleText() {
    var moreText = document.getElementById("moreText");
    var readMoreBtn = document.getElementById("readMoreBtn");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        readMoreBtn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        readMoreBtn.textContent = "Read More";
    }
}

// Initialize with the extra text hidden
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("moreText").style.display = "none";
});
