# Dugo - A Modern Portfolio Hugo Theme

[![Hugo](https://img.shields.io/badge/Hugo-0.41.0+-blue.svg)](https://gohugo.io)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/daanblom/dugo/blob/master/LICENSE)

Dugo is a modern, responsive Hugo theme designed specifically for portfolio websites. It features a clean, minimal design with support for both light and dark modes, making it perfect for showcasing your work and personal brand.

## 🌟 Features

- 🎨 **Modern Design**: Clean and minimal aesthetic
- 🌓 **Dark/Light Mode**: Built-in support for both themes
- 📱 **Responsive**: Fully responsive design for all devices
- 🎭 **Bootstrap Integration**: Built on Bootstrap for reliable styling
- 🎬 **Animation Support**: Includes Rive animations
- 📝 **Blog Support**: Built-in blog functionality
- 📸 **Picture Gallery**: Dedicated picture showcase section

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
├── data/          # Data files
├── layouts/       # Theme templates
│   ├── _default/  # Default templates
│   ├── animation/ # Animation components
│   ├── blog/      # Blog templates
│   ├── contact/   # Contact section
│   ├── pictures/  # Picture gallery
│   ├── partials/  # Reusable components
│   └── shortcodes/# Custom shortcodes
├── static/        # Static assets
└── theme.toml     # Theme configuration
```

## 🛠️ Usage and Customization

TO BE ADDED

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

---

Made with ❤️ by [Daan Blom](https://daanblom.com)
