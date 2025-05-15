const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');
const previewImage = document.getElementById('previewImage');

fileInput.addEventListener('change', function () {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function () {
            previewImage.setAttribute('src', this.result);
            imagePreview.style.display = 'block';
        });

        reader.readAsDataURL(file);
    } else {
        imagePreview.style.display = 'none';
        previewImage.setAttribute('src', '#');
    }
});