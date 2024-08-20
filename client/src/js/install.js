const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// Handle the `beforeinstallprompt` event
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default mini-infobar from appearing on mobile
  event.preventDefault();
  
  // Save the event so it can be triggered later
  deferredPrompt = event;
  
  // Show the install button
  butInstall.style.display = 'block';
  
  console.log('beforeinstallprompt event was fired.');
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    console.log(`User response to the install prompt: ${outcome}`);
    
    // Reset the deferred prompt variable, since it can only be used once
    deferredPrompt = null;
    
    // Hide the install button
    butInstall.style.display = 'none';
  }
});

// Handle the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA was installed.', event);
  
  // Optionally, hide the install button since the app is installed
  butInstall.style.display = 'none';
});
