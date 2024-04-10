const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process'); // Import execSync from child_process module

// Define the file structure
const fileStructure = {
  'src': {
    'assets': {
      'images': {},
      'styles': {
        '_variables.scss': `// Your variable declarations here
$primary-color: #333;
$secondary-color: #666;
$bg-color: #f9f9f9;`,
        '_mixins.scss': `// Your mixins here`,
        '_base.scss': `// Your base styles here`,
        '_header.scss': `// Header styles`,
        '_navbar.scss': `// Navbar styles`,
        '_footer.scss': `// Footer styles`,
        '_buttons.scss': `// Button styles`,
        '_forms.scss': `// Form styles`,
        '_utilities.scss': `// Utility classes`
      }
    },
    'components': {
      'Header': {
        'Header.jsx': `import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      {/* Header content */}
    </header>
  );
}

export default Header;`,
        'Header.scss': `@import '../../assets/styles/_variables';
@import '../../assets/styles/_mixins';

// Header styles here`
      },
      'Navbar': {
        'Navbar.jsx': `import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Navbar content */}
    </nav>
  );
}

export default Navbar;`,
        'Navbar.scss': `@import '../../assets/styles/_variables';
@import '../../assets/styles/_mixins';

// Navbar styles here`
      },
      'Footer': {
        'Footer.jsx': `import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer content */}
    </footer>
  );
}

export default Footer;`,
        'Footer.scss': `@import '../../assets/styles/_variables';
@import '../../assets/styles/_mixins';

// Footer styles here`
      },
      'Button': {
        'Button.jsx': `import React from 'react';
import './Button.scss';

const Button = ({ onClick, children }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;`,
        'Button.scss': `@import '../../assets/styles/_variables';
@import '../../assets/styles/_mixins';

// Button styles here`
      },
      'Form': {
        'Form.jsx': `import React from 'react';
import './Form.scss';

const Form = () => {
  return (
    <form className="form">
      {/* Form content */}
    </form>
  );
}

export default Form;`,
        'Form.scss': `@import '../../assets/styles/_variables';
@import '../../assets/styles/_mixins';

// Form styles here`
      }
      // Add more components here as needed
    },
    'pages': {
      'Home': {
        'Home.jsx': `import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      {/* Home page content */}
    </div>
  );
}

export default Home;`,
        'Home.scss': `@import '../../assets/styles/_variables';
@import '../../assets/styles/_mixins';

// Home page styles here`
      },
      'About': {
        'About.jsx': `import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      {/* About page content */}
    </div>
  );
}

export default About;`,
        'About.scss': `@import '../../assets/styles/_variables';
@import '../../assets/styles/_mixins';

// About page styles here`
      },
      'Contact': {
        'Contact.jsx': `import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      {/* Contact page content */}
    </div>
  );
}

export default Contact;`,
        'Contact.scss': `@import '../../assets/styles/_variables';
@import '../../assets/styles/_mixins';

// Contact page styles here`
      }
      // Add more pages here as needed
    },
    'redux': {
      'actions': {},
      'reducers': {},
      'store.js': `// Redux store configuration`
    },
    'App.jsx': `import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      {/* Your page content here */}
      <Footer />
    </div>
  );
}

export default App;`,
    'App.scss': `@import './assets/styles/_variables';
@import './assets/styles/_mixins';
@import './assets/styles/_header';
@import './assets/styles/_navbar';
@import './assets/styles/_footer';
@import './assets/styles/_buttons';
@import './assets/styles/_forms';
@import './assets/styles/_utilities';

// App styles here`,
    'index.jsx': `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();`,
    'serviceWorker.js': `// Service worker logic`,
    'setupTests.js': `// Test setup logic`,
    '.gitignore': `# Ignore build files
/build
/node_modules
*.env`,
    'package.json': `{
  "name": "your-react-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}`
}}

// Function to create files recursively
function createFiles(dir, structure) {
  Object.keys(structure).forEach(item => {
    const itemPath = path.join(dir, item);
    if (typeof structure[item] === 'object') {
      if (!fs.existsSync(itemPath)) {
        fs.mkdirSync(itemPath);
      }
      createFiles(itemPath, structure[item]);
    } else {
      if (!fs.existsSync(itemPath)) {
        fs.writeFileSync(itemPath, structure[item]);
        console.log(`Created: ${itemPath}`);
      } else {
        console.log(`File already exists: ${itemPath}`);
      }
    }
  });
}

function changeExtensionsAndRename(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const ext = path.extname(file);
        if (fs.statSync(filePath).isDirectory()) {
            changeExtensionsAndRename(filePath);
        } else if (ext === '.js') {
            if (dir.endsWith('components')) {
                const newFilePath = path.join(dir, 'index.jsx');
                fs.renameSync(filePath, newFilePath);
                console.log(`Renamed file: ${filePath} => ${newFilePath}`);
            } else {
                const newFilePath = filePath.replace(/\.js$/, '.jsx');
                fs.renameSync(filePath, newFilePath);
                console.log(`Renamed file: ${filePath} => ${newFilePath}`);
            }
        }
    });
}

// Function to replace .css imports with .scss in files recursively
function replaceCssWithScss(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const ext = path.extname(file);
    if (fs.statSync(filePath).isDirectory()) {
      replaceCssWithScss(filePath);
    } else if (ext === '.jsx' || ext === '.css' || ext === '.sass') {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/\.css/g, '.scss');
      content = content.replace(/\.sass/g, '.scss'); // Also replace .sass with .scss
      fs.writeFileSync(filePath, content);
      console.log(`Replaced .css and .sass with .scss in: ${filePath}`);
    }
  });
}

// Function to remove unnecessary files recursively
function removeFiles(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      removeFiles(filePath);
    } else {
      if (
        file === 'index.css' ||
        file === 'App.css' ||
        file === 'logo.svg' ||
        file === 'favicon.ico'
      ) {
        fs.unlinkSync(filePath);
        console.log(`Removed: ${filePath}`);
      }
    }
  });
}

function removeImports(dir, deletedFiles) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const ext = path.extname(file);
        if (fs.statSync(filePath).isDirectory()) {
            removeImports(filePath, deletedFiles);
        } else if (ext === '.jsx' || ext === '.scss') {
            console.log('filepath:  ' + filePath)
            let content = fs.readFileSync(filePath, 'utf8');
            if (filePath === 'E:\web-code\test\src\index.jsx')
            console.log
            deletedFiles.forEach(deletedFile => {
                // Remove imports of deleted files from JavaScript files
                content = content.replace(new RegExp(`import (\\w+) from ['"]\\.?\\/?${deletedFile}(?:\\.\\w+)?['"];?`, 'g'), '');

                // Remove imports of deleted files from Sass files
                content = content.replace(new RegExp(`@import ['"]\\.?\\/?${deletedFile}(?:\\.\\w+)?['"];?`, 'g'), '');
            });
            fs.writeFileSync(filePath, content);
            //console.log(`Removed imports in: ${filePath}`);
        }
    });
}

function removeImportsFromFiles(dir, filesToRemove) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const ext = path.extname(file);
        if (fs.statSync(filePath).isDirectory()) {
            removeImportsFromFiles(filePath, filesToRemove);
        } else if (ext === '.jsx' || ext === '.scss') {
            let content = fs.readFileSync(filePath, 'utf8');
            let changed = false;
            filesToRemove.forEach(fileToRemove => {
                // Remove imports of specified files from JavaScript files
                const jsImportRegex = new RegExp(`import [\\w\\s{},]*['"]\\.?\\/?${fileToRemove}(?:\\.\\w+)?['"];?`, 'g');
                if (content.match(jsImportRegex)) {
                    content = content.replace(jsImportRegex, '');
                    changed = true;
                    console.log(`Removed import from ${filePath}: ${fileToRemove}`);
                }

                // Remove imports of specified files from Sass files
                const sassImportRegex = new RegExp(`@import ['"]\\.?\\/?${fileToRemove}(?:\\.\\w+)?['"];?`, 'g');
                if (content.match(sassImportRegex)) {
                    content = content.replace(sassImportRegex, '');
                    changed = true;
                    console.log(`Removed import from ${filePath}: ${fileToRemove}`);
                }
            });
            if (changed) {
                fs.writeFileSync(filePath, content);
                console.log(`Updated content of ${filePath}`);
            }
        }
    });
}


function installDependencies() {
    try {
        // Check if node-sass or sass package is installed
        execSync('npm list node-sass || npm list sass');
    } catch (error) {
        console.log('Installing node-sass or sass package...');
        execSync('npm install node-sass || npm install sass');
        console.log('Dependencies installed successfully!');
    }
}

// Function to update webpack config to handle .sass files
function updateWebpackConfig(dir) {
  const webpackConfigPath = path.join(dir, 'node_modules/react-scripts/config/webpack.config.js');
  const webpackConfig = fs.readFileSync(webpackConfigPath, 'utf8');
  const sassRegex = /\.s[ac]ss$/i;
  const sassModuleRegex = /\.module\.s[ac]ss$/i;

  const updatedWebpackConfig = webpackConfig
    // Add Sass handling rules
    .replace(
      `/test: /\.css\$/, // Find existing CSS handling rule`,
      `test: /\\.(css|sass|scss)$/, // Update to handle .sass and .scss files`
    )
    // Add Sass module handling rules
    .replace(
      `/test: /\.module\.css\$/, // Find existing CSS module handling rule`,
      `test: /\\.module\\.(css|sass|scss)$/, // Update to handle .module.sass and .module.scss files`
    );

  fs.writeFileSync(webpackConfigPath, updatedWebpackConfig);
  console.log(`Updated Webpack configuration: ${webpackConfigPath}`);
}

// Function to rename all .jsx files inside components folder and its subfolders to index.jsx
function renameComponents(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const ext = path.extname(file);
        if (fs.statSync(filePath).isDirectory()) {
            renameComponents(filePath);
        } else if (ext === '.jsx' && !filePath.includes('index.jsx')) {
            const newFilePath = path.join(dir, 'index.jsx');
            fs.renameSync(filePath, newFilePath);
            console.log(`Renamed file: ${filePath} => ${newFilePath}`);
        }
    });
}

function rewriteAppFile(filePath) {
  const newContent = `import './App.scss';

function App() {
return (
  <div className="App">
    
  </div>
);
}

export default App;
`;
  fs.writeFileSync(filePath, newContent);
  console.log(`Rewrote ${filePath} with new content.`);
}

// Run the script to install dependencies
installDependencies();

// Run the script to create files
const projectDir = __dirname;
createFiles(projectDir, fileStructure);

// Run the script to change file extensions
changeExtensionsAndRename(path.join(projectDir, 'src'));

// Run the script to replace .css imports with .scss
replaceCssWithScss(path.join(projectDir, 'src'));

// Run the script to remove unnecessary files
removeFiles(projectDir);

// List of deleted files
const deletedFiles = ['logo.svg', 'index.scss'];
removeImportsFromFiles(path.join(projectDir, 'src'), deletedFiles);


// Run the script to rename all .jsx files inside components folder and its subfolders to index.jsx
renameComponents(path.join(projectDir, 'src', 'components'));

// Run the script to remove content inside <div className="app"> in App.jsx
rewriteAppFile(path.join(projectDir, 'src/App.jsx'));

// Run the script to update webpack config
updateWebpackConfig(projectDir);

console.log(`File structure adjusted successfully!`);