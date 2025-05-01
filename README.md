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
