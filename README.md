# Just Another Text Editor (J.A.T.E.)

![License](https://img.shields.io/github/license/contra19/pwa-text-editor)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Webpack](https://img.shields.io/badge/webpack-5.38.1-blue)
![Babel](https://img.shields.io/badge/Babel-7.14.0-yellow)
![CodeMirror](https://img.shields.io/badge/CodeMirror-5.65.5-brightgreen)
![IndexedDB](https://img.shields.io/badge/IndexedDB-API-blue)
![PWA](https://img.shields.io/badge/PWA-Ready-brightgreen)


Just Another Text Editor (J.A.T.E.) is a progressive web application (PWA) that provides a seamless text editing experience with offline support. It leverages IndexedDB for storing content, enabling users to continue their work even without an internet connection. This application also includes features like syntax highlighting, code formatting, and the ability to install it as a desktop application.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
-[Acknowledgements](#acknowledgements)

## Features

- **Offline Support**: Automatically saves your content in IndexedDB for offline use.
- **Syntax Highlighting**: Supports JavaScript syntax highlighting with CodeMirror.
- **PWA Functionality**: Install the app on your desktop and use it like a native application.
- **Responsive Design**: Works well on both desktop and mobile devices.
- **Automatic Persistence**: Content is saved automatically when the editor loses focus.

## Installation

This project can be viewed at the foolowing link as a deplyed app on Render: [PWA Text Editor](https://just-another-text-editor-yce1.onrender.com)

To install and run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/contra19/pwa-text-editor
    ```
2. **Navigate to the project directory**:
    ```bash
    cd pwa-text-editor
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Build the project**:
    ```bash
    npm run build
    ```
5. **Start the development server**:
    ```bash
    npm start
    ```

## Usage

Once the application is running:

1. Open the app in your browser at `http://localhost:3478`.
2. Start editing text in the editor.
3. Your content will be automatically saved and persisted across sessions.
4. Click the "Install!" button to install the app on your desktop.

## Screenshots

Here are a few screenshots of J.A.T.E. in action:

<p>
  <img src="./screenshots/JATE%20-%20HTML%20Editor.png" alt="Editor Screenshot" width="600" height="400">
</p>
<p><em>Caption: The main editing interface.</em></p>

<p>
  <img src="./screenshots/JATE%20-%20PWA%20Editor.png" alt="PWA Installation" width="600" height="400">
</p>
<p><em>Caption: Installing J.A.T.E. as a PWA.</em></p>


## Technologies Used

- **HTML/CSS/JavaScript**: Core web technologies.
- **Webpack**: Module bundler to manage and bundle dependencies.
- **Babel**: JavaScript compiler for backward compatibility.
- **Workbox**: Handles service workers and caching strategies.
- **IndexedDB**: Used for offline data storage.
- **CodeMirror**: A versatile text editor for the browser.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these guidelines:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request.

Please make sure your code adheres to the project's coding standards and is well-documented.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Contra19** - [contra19](https://github.com/contra19)

## Acknowledgements

I would like to express my gratitude to the following technologies and communities that have contributed to the development of this project:

- **Node.js** - For providing the runtime environment for server-side JavaScript.
- **Webpack** - For bundling the project files and assets efficiently.
- **Babel** - For enabling the use of next-gen JavaScript features in the project.
- **Workbox** - For simplifying service worker management and caching strategies in the PWA.
- **CodeMirror** - For offering a versatile and powerful text editor component for the application.
- **IndexedDB** - For providing a robust client-side database solution, allowing offline functionality.
- **Render** - For hosting and deploying the application with ease.
- **OpenAI's ChatGPT** - For assisting with the code development, getting me through the rough spots and the documentation process.

Special thanks to everyone who has provided feedback and support throughout the development of this project.


