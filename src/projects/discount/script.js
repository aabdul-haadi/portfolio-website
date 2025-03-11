function applyDiscount() {
    const originalPrice = 150; // Base price of the Nike product
    const discountCode = "haadi10";
    const enteredCode = document.getElementById("couponCode").value;
    const discountMessage = document.getElementById("discountMessage");
    const finalPriceElement = document.getElementById("finalPrice");

    if (enteredCode === discountCode) {
        const discountAmount = originalPrice * 0.1; 
        const finalPrice = originalPrice - discountAmount;
        discountMessage.textContent = "Coupon applied! You got a 10% discount.";
        discountMessage.style.color = "#28a745";
        finalPriceElement.textContent = `Discounted Price: $${finalPrice.toFixed(2)}`;
    } else {
        discountMessage.textContent = "Invalid coupon code. Please try again.";
        discountMessage.style.color = "#d9534f";
        finalPriceElement.textContent = "";
    }
}
