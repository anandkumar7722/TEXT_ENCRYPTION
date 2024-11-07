// Simulated encryption functions for front-end demonstration

function aesEncrypt(plainText) {
    return btoa("AES-" + plainText); // Placeholder encoding
}

function rsaEncrypt(plainText) {
    return btoa("RSA-" + plainText); // Placeholder encoding
}

function fernetEncrypt(plainText) {
    return btoa("Fernet-" + plainText); // Placeholder encoding
}

function desEncrypt(plainText) {
    return btoa("DES-" + plainText); // Placeholder encoding
}

// Main function to handle encryption
function encryptText() {
    const plainText = document.getElementById("inputText").value;
    const algorithm = document.getElementById("algorithmSelect").value;
    let encryptedText = "";

    if (plainText.trim() === "") {
        alert("Please enter some text to encrypt.");
        return;
    }

    // Encrypt based on selected algorithm
    switch (algorithm) {
        case "aes":
            encryptedText = aesEncrypt(plainText);
            break;
        case "rsa":
            encryptedText = rsaEncrypt(plainText);
            break;
        case "fernet":
            encryptedText = fernetEncrypt(plainText);
            break;
        case "des":
            encryptedText = fernetEncrypt(plainText);
            break;
        default:
            encryptedText = "Invalid algorithm selected.";
    }

    // Display the encrypted result
    document.getElementById("resultText").innerText = encryptedText;
}
