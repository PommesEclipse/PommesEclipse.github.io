


//Koppierad Mall
const canvas = document.getElementById("pixelCanvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Pixel size
    const pixelSize = 50; // Adjust this for larger or smaller pixels

    // Gradient colors (purple to magenta shades)
    const colors = ["#6a0dad", "#8a2be2", "#ba55d3", "#ff00ff"];

    // Create the gradient by filling large rectangles
    for (let y = 0; y < canvas.height; y += pixelSize) {
      for (let x = 0; x < canvas.width; x += pixelSize) {
        // Adjust the color calculation to add a slight tilt
        const t = (y + x * 0.15) / (canvas.height + canvas.width * 0.15); // Adding a small x influence creates the tilt
        const colorIndex = Math.min(
          Math.floor(t * (colors.length - 1)),
          colors.length - 2
        );
        const startColor = colors[colorIndex];
        const endColor = colors[colorIndex + 1];

        // Interpolate between colors
        const blend = t * (colors.length - 1) - colorIndex;
        const r = Math.round(
          (1 - blend) * parseInt(startColor.slice(1, 3), 16) +
          blend * parseInt(endColor.slice(1, 3), 16)
        );
        const g = Math.round(
          (1 - blend) * parseInt(startColor.slice(3, 5), 16) +
          blend * parseInt(endColor.slice(3, 5), 16)
        );
        const b = Math.round(
          (1 - blend) * parseInt(startColor.slice(5, 7), 16) +
          blend * parseInt(endColor.slice(5, 7), 16)
        );

        // Set the fill style to the interpolated color
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(x, y, pixelSize, pixelSize);
      }
    }