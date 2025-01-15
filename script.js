// Simulated encryption functions 
function aesEncrypt(plainText) {
    return btoa("AES-" + plainText); // AES ENCRYPTOR
}

function aesDecrypt(encryptedText) {
    return atob(encryptedText).replace("AES-", ""); // AES DECRYPTOR
}

function rsaEncrypt(plainText) {
    return btoa("RSA-" + plainText); // RSA ENCRYPTOR
}

function rsaDecrypt(encryptedText) {
    return atob(encryptedText).replace("RSA-", ""); // RSA DECRYPTOR
}

function desEncrypt(plainText) {
    return btoa("DES-" + plainText); // DES ENCRYPTOR
}

function desDecrypt(encryptedText) {
    return atob(encryptedText).replace("DES-", ""); // DES DECRYPTOR
}

// Main function to handle encryption or decryption
function processText() {
    const plainText = document.getElementById("inputText").value;
    const algorithm = document.getElementById("algorithmSelect").value;
    const mode = document.getElementById("modeSelect").value; // Encrypt or Decrypt
    let resultText = "";

    if (plainText.trim() === "") {
        alert(`Please enter text to ${mode.toLowerCase()}.`);
        return;
    }

    try {
        // Process text based on selected algorithm and mode
        if (mode === "Encrypt") {
            switch (algorithm) {
                case "aes":
                    resultText = aesEncrypt(plainText);
                    break;
                case "rsa":
                    resultText = rsaEncrypt(plainText);
                    break;
                case "des":
                    resultText = desEncrypt(plainText);
                    break;
                default:
                    resultText = "Invalid algorithm selected.";
            }
        } else if (mode === "Decrypt") {
            switch (algorithm) {
                case "aes":
                    resultText = aesDecrypt(plainText);
                    break;
                case "rsa":
                    resultText = rsaDecrypt(plainText);
                    break;
                case "des":
                    resultText = desDecrypt(plainText);
                    break;
                default:
                    resultText = "Invalid algorithm selected.";
            }
        } else {
            resultText = "Invalid mode selected.";
        }
    } catch (error) {
        resultText = "Error processing the text. Ensure valid input for decryption.";
    }

    // Display the result
    document.getElementById("resultText").innerText = resultText;
}
