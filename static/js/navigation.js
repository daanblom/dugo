const CONFIG = {
    CANVAS_HEIGHT: 55,
    RIVE_SOURCE: {
      light: '/daanblomdotcom-light.riv',
      dark: '/daanblomdotcom-dark.riv'
    },
    DEBOUNCE_DELAY: 250,
    STATE_MACHINES: {
      "/": "Home",
      "/pictures/": "Pictures",
      "/animation/": "Animation",
      "/contact/": "Contact"
    }
  };
  
  // Add back the debounce utility function
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  class Navigation {
    constructor() {
      this.canvasElement = document.getElementById("canvas");
      this.riveInstance = null;
      this.isLoading = true;
  
      if (!this.canvasElement) {
        throw new Error('Canvas element not found');
      }
  
      // Get initial theme
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.init();
      this.setupThemeListener();
    }
  
    setupThemeListener() {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      darkModeMediaQuery.addEventListener('change', (e) => {
        this.isDarkMode = e.matches;
        // Reinitialize with new theme
        this.init();
      });
    }
  
    init() {
      try {
        this.showLoadingState();
  
        // Get current page and state machine
        const currentPage = window.location.pathname;
        const stateMachine = CONFIG.STATE_MACHINES[currentPage] || "Home";
  
        // Clean up existing instance if it exists
        if (this.riveInstance) {
          this.riveInstance.cleanup();
        }
  
        // Initialize Rive with theme-specific file
        const riveSource = this.isDarkMode ? CONFIG.RIVE_SOURCE.dark : CONFIG.RIVE_SOURCE.light;
        
        this.riveInstance = new rive.Rive({
          src: riveSource,
          canvas: this.canvasElement,
          autoplay: true,
          stateMachines: stateMachine,
          onLoad: () => {
            this.hideLoadingState();
            this.riveInstance.resizeDrawingSurfaceToCanvas();
            this.adjustCanvasSize();
          },
          onError: (err) => {
            console.error('Rive animation failed to load:', err);
            this.showFallbackContent();
          }
        });
  
        // Set up event listeners
        this.setupEventListeners();
      } catch (err) {
        console.error('Navigation initialization failed:', err);
        this.showFallbackContent();
      }
    }
  
    showLoadingState() {
      this.isLoading = true;
      this.canvasElement.setAttribute('aria-busy', 'true');
      // Add loading indicator if desired
    }
  
    hideLoadingState() {
      this.isLoading = false;
      this.canvasElement.setAttribute('aria-busy', 'false');
    }
  
    showFallbackContent() {
      const fallback = document.createElement('div');
      fallback.className = 'logo-fallback';
      fallback.textContent = 'Daan Blom';
      this.canvasElement.parentNode.insertBefore(fallback, this.canvasElement);
      this.canvasElement.style.display = 'none';
    }
  
    adjustCanvasSize = () => {
      try {
        this.canvasElement.width = window.innerWidth;
        this.canvasElement.height = CONFIG.CANVAS_HEIGHT;
        this.riveInstance?.resizeDrawingSurfaceToCanvas();
      } catch (err) {
        console.error('Error adjusting canvas size:', err);
      }
    };
  
    setupEventListeners() {
      // Debounced resize handler
      const debouncedAdjustSize = debounce(
        this.adjustCanvasSize,
        CONFIG.DEBOUNCE_DELAY
      );
      window.addEventListener('resize', debouncedAdjustSize);
  
      // Navigation handlers
      const navigateToHome = () => {
        window.location.href = "/";
      };
  
      this.canvasElement.addEventListener("click", navigateToHome);
      this.canvasElement.addEventListener("touchstart", navigateToHome);
    }
  }
