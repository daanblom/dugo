## Dugo - A Modern Portfolio Hugo Theme

[![Hugo](https://img.shields.io/badge/Hugo-0.41.0+-blue.svg)](https://gohugo.io)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/daanblom/dugo/blob/master/LICENSE)

Dugo is a modern, responsive Hugo theme designed specifically for portfolio websites. It features a clean, minimal design with support for both light and dark modes, making it perfect for showcasing your work and personal brand.

## 🌟 Features

- 🎨 **Modern Design**: Clean and minimal aesthetic
- 🌓 **Dark/Light Mode**: Built-in support for both themes
- 📱 **Responsive**: Fully responsive design for all devices
- 🎭 **Bootstrap Integration**: Built on Bootstrap for reliable styling
- 📸 **Photo Gallery**: Dedicated picture showcase section
- 🍿 **Showreel page**: Dedicated page to display showreel using the [plyr.io](https://plyr.io) player
- 🎬 **Animation Support**: Includes Rive animations
- 📝 **Blog Support**: Built-in blog functionality
- 🔒 **Security Features**: Built-in CSRF protection and security headers

## 🚀 Quick Start

1. **Install Hugo** (version 0.41.0 or higher)
   ```bash
   # For macOS
   brew install hugo
   
   # For Windows
   choco install hugo

   # For Linux
   available in the package manager of your choice/distro
   ```

2. **Create a new Hugo site**
   ```bash
   hugo new site my-portfolio
   cd my-portfolio
   ```

3. **Add the theme**
   ```bash
   git init
   git submodule add https://github.com/daanblom/dugo.git themes/dugo
   ```

4. **Configure your site**
   Edit your `config.toml` to include:
   ```toml
   baseURL = "https://your-domain.com"
   languageCode = "en-us"
   title = "Your Portfolio"
   theme = "dugo"
   ```

5. **Start the development server**
   ```bash
   hugo server -D
   ```

6. **Set up security features**
   ```bash
   # Generate a secure CSRF secret
   export CSRF_SECRET=$(openssl rand -base64 32)
   
   # Or using Python
   export CSRF_SECRET=$(python3 -c "import secrets; print(secrets.token_urlsafe(32))")
   
   # Add to your shell's rc file for persistence
   echo "export CSRF_SECRET=$CSRF_SECRET" >> ~/.zshrc  # or ~/.bashrc
   ```

   For production deployments, make sure to:
   - Set the `CSRF_SECRET` environment variable in your deployment environment
   - Configure security headers at the web server level (see [Security Headers](#security-headers) section)

## 📁 Theme Structure

```
dugo/
├── archetypes/     # Content templates
├── data/           # Data files
├── layouts/        # Theme templates
│   ├── _default/   # Default templates
│   ├── animation/  # Animation components
│   ├── blog/       # Blog templates
│   ├── contact/    # Contact section
│   ├── pictures/   # Picture gallery
│   ├── partials/   # Reusable components
│   └── shortcodes/ # Custom shortcodes
├── static/         # Static assets
└── theme.toml      # Theme configuration
```

## 🛠️ Shortcodes

Dugo provides several shortcodes to help you create beautiful and responsive layouts for your portfolio. Here's a detailed explanation of each:

### Image Layout Shortcodes

All image shortcodes are based on Bootstrap's grid system and use the `coverimage` class for consistent image styling.

- `gallery.html`: Creates a gallery section with optional top and bottom text
  ```html
  {{< gallery 
    top="Your introduction text here"
    bottom="Your outro text here"
  >}}
  ```
  This shortcode will display your introduction text, followed by all pictures in the current section, and end with your outro text.

- `image-1-3.html`: Creates a two-column layout with a 1:3 ratio
  ```html
  {{< image-1-3 image1="path/to/image1.jpg" image2="path/to/image2.jpg" >}}
  ```

- `image-2-2-2.html`: Creates a three-column layout with equal width columns
  ```html
  {{< image-2-2-2 image1="path/to/image1.jpg" image2="path/to/image2.jpg" image3="path/to/image3.jpg" >}}
  ```

- `image-3-1.html`: Creates a two-column layout with a 3:1 ratio
  ```html
  {{< image-3-1 image1="path/to/image1.jpg" image2="path/to/image2.jpg" >}}
  ```

- `image-fullwidth.html`: Creates a full-width image layout
  ```html
  {{< image-fullwidth image="path/to/image.jpg" >}}
  ```

- `image-left.html`: Creates a two-column layout with image on the left
  ```html
  {{< image-left image="path/to/image.jpg" >}}
  Content goes here
  {{< /image-left >}}
  ```

- `image-right.html`: Creates a two-column layout with image on the right
  ```html
  {{< image-right image="path/to/image.jpg" >}}
  Content goes here
  {{< /image-right >}}
  ```

- `image-sidebyside.html`: Creates a two-column layout with equal width columns
  ```html
  {{< image-sidebyside image1="path/to/image1.jpg" image2="path/to/image2.jpg" >}}
  ```

### Special Shortcodes

- `notice.html`: Creates a styled notice box with an icon
  ```html
  {{< notice type >}}
  Your notice content here
  {{< /notice >}}
  ```
  Available types: info, warning, success, error

- `rive.html`: Embeds a Rive animation
  ```html
  {{< rive 
    script="path/to/rive-script.js"
    src="path/to/animation.riv"
    width="500"
    height="500"
    stateMachine="StateMachine"
  >}}
  ```

- `video.html`: Embeds a video player using plyr.io
  ```html
  {{< video 
    src="path/to/video.mp4"
    poster="path/to/poster.jpg"
    title="Video Title"
  >}}
  ```
  Optionally, you can include timecodes by adding a `timestamps.md` file in the same directory as the video shortcode.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This theme is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Hugo](https://gohugo.io/) - The world's fastest framework for building websites
- [Bootstrap](https://getbootstrap.com/) - The world's most popular CSS framework
- [Rive](https://rive.app/) - For animation support

## 📞 Support

For support, please open an issue in the [GitHub repository](https://github.com/daanblom/dugo/issues).

## 🔒 Security Setup

The theme includes several security features that require environment variables to be set:

1. **CSRF Protection**
   - Set the `CSRF_SECRET` environment variable:
     ```bash
     # Generate a secure secret
     export CSRF_SECRET=$(openssl rand -base64 32)
     
     # Or using Python
     export CSRF_SECRET=$(python3 -c "import secrets; print(secrets.token_urlsafe(32))")
     ```
   - Add this to your deployment environment
   - For local development, add to your shell's rc file (e.g., `.bashrc`, `.zshrc`)

2. **Security Headers**
   - The theme includes security headers by default
   - For production, consider adding these headers at the web server level
   - See the [Security Headers](#security-headers) section for details

### Security Headers

The theme includes the following security headers by default:

```html
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://unpkg.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; media-src 'self'; frame-src 'self'; connect-src 'self' https://unpkg.com https://cdn.jsdelivr.net; font-src 'self' data:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()
```

For production deployments, it's recommended to set these headers at the web server level. Here's an example for Nginx:

```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://unpkg.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; media-src 'self'; frame-src 'self'; connect-src 'self' https://unpkg.com https://cdn.jsdelivr.net; font-src 'self' data:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()" always;
```

Note that the Content-Security-Policy has been updated to include:
- `'wasm-unsafe-eval'` for WebAssembly support
- `https://unpkg.com` and `https://cdn.jsdelivr.net` for CDN resources
- Removed YouTube and Vimeo domains as they're not currently used
