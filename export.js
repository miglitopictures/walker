function saveCanvasAsPng(canvas){
    // 1. Get the image data as a PNG URL
    const imageURL = canvas.toDataURL("image/png");

    // 2. Create a temporary link element
    const link = document.createElement('a');
    link.href = imageURL;
    
    // 3. Set the desired filename
    link.download = 'my-drawing.png';

    // 4. Trigger the download
    link.click();
}