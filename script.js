function navigate(targetVariantId) {
    // Hide all variants
    document.querySelectorAll('.variant').forEach(variant => {
        variant.style.display = 'none';
    });

    // Show the target variant
    document.getElementById(targetVariantId).style.display = 'block';
}

// Initialize to show only the first variant
document.addEventListener('DOMContentLoaded', () => {
    navigate('variant1');
});
