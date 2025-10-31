/*
Password Strength Checker Rules:
    1. At least 8 characters
    2. At least one lowercase character
    3. At least one uppercase character
    4. At least one number
    5. At least one special character ($, @, #)
    6. No easy passwords

Category:
    - Strong (6/6 criteria met)
    - Moderate (4-5 criteria met)
    - Weak (0-3 criteria met)
*/

let lastPasswordStrength = null; // Track the last password strength to avoid repeated sounds

function validatePassword(pwd) {
    // Clear previous results
    clearPreviousResults();
    
    // Check: Password is empty or null
    if (!pwd) {
        document.getElementById('invalid-pwd-alert').style.display = 'block';
        lastPasswordStrength = null;
        return;
    } else {
        document.getElementById('invalid-pwd-alert').style.display = 'none';
    }

    let score = 0;

    // Check: 1. At least 8 characters
    if (pwd.length >= 8) {
        document.getElementById('length-check').innerText = '✅';
        document.getElementById('length-check-container').classList.add('list-group-item-success');
        score++;
    } else {
        document.getElementById('length-check').innerText = '⚠️';
        document.getElementById('length-check-container').classList.add('list-group-item-danger');
    }

    let hasLowercaseChar = false;
    let hasUppercaseChar = false;
    let hasNumber = false;
    let hasSpecialChar = false;

    // Iterate through each character of the password string
    for (let i = 0; i < pwd.length; i++) {
        let char = pwd[i];
        if (char >= 'a' && char <= 'z') {
            hasLowercaseChar = true;
        }
        if (char >= 'A' && char <= 'Z') {
            hasUppercaseChar = true;
        }
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
        if (char == '$' || char == '@' || char == '#') {
            hasSpecialChar = true;
        }
    }

    // Check: 2. At least one lowercase character
    if (hasLowercaseChar) {
        document.getElementById('lowercase-check').innerText = '✅';
        document.getElementById('lowercase-check-container').classList.add('list-group-item-success');
        score++;
    } else {
        document.getElementById('lowercase-check').innerText = '⚠️';
        document.getElementById('lowercase-check-container').classList.add('list-group-item-danger');
    }

    // Check: 3. At least one uppercase character
    if (hasUppercaseChar) {
        document.getElementById('uppercase-check').innerText = '✅';
        document.getElementById('uppercase-check-container').classList.add('list-group-item-success');
        score++;
    } else {
        document.getElementById('uppercase-check').innerText = '⚠️';
        document.getElementById('uppercase-check-container').classList.add('list-group-item-danger');
    }

    // Check: 4. At least one number
    if (hasNumber) {
        document.getElementById('number-check').innerText = '✅';
        document.getElementById('number-check-container').classList.add('list-group-item-success');
        score++;
    } else {
        document.getElementById('number-check').innerText = '⚠️';
        document.getElementById('number-check-container').classList.add('list-group-item-danger');
    }

    // Check: 5. At least one special character ($, @, #)
    if (hasSpecialChar) {
        document.getElementById('special-char-check').innerText = '✅';
        document.getElementById('special-char-check-container').classList.add('list-group-item-success');
        score++;
    } else {
        document.getElementById('special-char-check').innerText = '⚠️';
        document.getElementById('special-char-check-container').classList.add('list-group-item-danger');
    }

    const easyPwds = ['user123', 'admin123', 'password123', 'test123', '12345', 'qwerty123', 'password', '123456', 'qwerty'];

    // Check: 6. No easy passwords allowed
    if (!easyPwds.includes(pwd.toLowerCase())) {
        document.getElementById('no-easy-pwd-check').innerText = '✅';
        document.getElementById('no-easy-pwd-container').classList.add('list-group-item-success');
        score++;
    } else {
        document.getElementById('no-easy-pwd-check').innerText = '⚠️';
        document.getElementById('no-easy-pwd-container').classList.add('list-group-item-danger');
    }

    // Display password strength and handle effects
    if (score >= 6) {
        document.getElementById('strong-pwd').style.display = 'inline-block';
        
        // Show strong password image and play sound only if not already strong
        if (lastPasswordStrength !== 'strong') {
            showStrongPasswordEffects();
        } else {
            // Still show the image even if not playing sound
            document.getElementById('strong-password-display').style.display = 'block';
        }
        lastPasswordStrength = 'strong';
    } else if (score >= 4) {
        document.getElementById('moderate-pwd').style.display = 'inline-block';
        lastPasswordStrength = 'moderate';
    } else {
        document.getElementById('weak-pwd').style.display = 'inline-block';
        
        // Show weak password image and play sound only if not already weak
        if (lastPasswordStrength !== 'weak') {
            showWeakPasswordEffects();
        } else {
            // Still show the image even if not playing sound
            document.getElementById('weak-password-display').style.display = 'block';
        }
        lastPasswordStrength = 'weak';
    }
}

function showStrongPasswordEffects() {
    // Stop any currently playing audio
    stopAllAudio();
    
    // Show the strong password image
    document.getElementById('strong-password-display').style.display = 'block';
    
    // Play the crowd cheer sound effect
    const audio = document.getElementById('strong-password-sound');
    
    if (audio) {
        // Reset audio to beginning and play
        audio.currentTime = 0;
        
        // Play the audio with error handling
        audio.play().catch(function(error) {
            console.log('Strong password audio playback failed:', error);
            // Audio autoplay might be blocked by browser - this is normal
            // Could add visual feedback here if needed
        });
    }
}

function showWeakPasswordEffects() {
    // Stop any currently playing audio
    stopAllAudio();
    
    // Show the weak password image
    document.getElementById('weak-password-display').style.display = 'block';
    
    // Play the womp womp sound effect
    const audio = document.getElementById('weak-password-sound');
    
    if (audio) {
        // Reset audio to beginning and play
        audio.currentTime = 0;
        
        // Play the audio with error handling
        audio.play().catch(function(error) {
            console.log('Weak password audio playback failed:', error);
            // Audio autoplay might be blocked by browser - this is normal
            // Could add visual feedback here if needed
        });
    }
}

function stopAllAudio() {
    // Stop and reset all audio elements
    const strongAudio = document.getElementById('strong-password-sound');
    const weakAudio = document.getElementById('weak-password-sound');
    
    if (strongAudio) {
        strongAudio.pause();
        strongAudio.currentTime = 0;
    }
    
    if (weakAudio) {
        weakAudio.pause();
        weakAudio.currentTime = 0;
    }
}

function clearPreviousResults() {
    // Stop any playing audio
    stopAllAudio();
    
    // Clear all badges
    document.getElementById('strong-pwd').style.display = 'none';
    document.getElementById('moderate-pwd').style.display = 'none';
    document.getElementById('weak-pwd').style.display = 'none';
    
    // Hide both password strength images
    document.getElementById('strong-password-display').style.display = 'none';
    document.getElementById('weak-password-display').style.display = 'none';

    // Clear all check marks and styling
    const containers = [
        'length-check-container',
        'lowercase-check-container', 
        'uppercase-check-container',
        'number-check-container',
        'special-char-check-container',
        'no-easy-pwd-container'
    ];

    const checks = [
        'length-check',
        'lowercase-check',
        'uppercase-check', 
        'number-check',
        'special-char-check',
        'no-easy-pwd-check'
    ];

    containers.forEach(id => {
        const element = document.getElementById(id);
        element.classList.remove('list-group-item-success', 'list-group-item-danger');
    });

    checks.forEach(id => {
        document.getElementById(id).innerText = '';
    });
}

// Event listener for real-time password checking
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password-input');
    
    // Add a small delay to prevent sound from playing on every keystroke
    let typingTimer;
    const typeInterval = 500; // Wait 500ms after user stops typing
    
    passwordInput.addEventListener('input', function() {
        clearTimeout(typingTimer);
        
        // Clear previous results immediately for responsive UI
        const currentValue = this.value;
        
        if (currentValue === '') {
            clearPreviousResults();
            return;
        }
        
        // Set a timer to validate after user stops typing
        typingTimer = setTimeout(() => {
            validatePassword(currentValue);
        }, typeInterval);
    });
    
    // Also validate on blur (when user clicks away)
    passwordInput.addEventListener('blur', function() {
        clearTimeout(typingTimer);
        if (this.value) {
            validatePassword(this.value);
        }
    });
});