const fileInput = document.getElementById('profile-pic');
const previewImage = document.getElementById('preview-image');

fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('profile-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

});