#!/usr/bin/env python3
"""
Generate Lightning Bolt Emoji Assets for The Energy Museum
Creates favicon.ico, logo192.png, and logo512.png with ⚡ emoji
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_emoji_image(size, emoji="⚡", bg_color=(10, 15, 28, 255), emoji_color=(0, 212, 255, 255)):
    """Create an image with emoji on colored background"""
    # Create image with transparent background initially
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw background circle/square for better visibility
    margin = size // 10
    draw.rounded_rectangle(
        [margin, margin, size - margin, size - margin], 
        radius=size // 8,
        fill=bg_color
    )
    
    # Try to get system font for emoji
    font_size = int(size * 0.6)  # 60% of image size
    
    try:
        # macOS system fonts that support emoji
        font_paths = [
            '/System/Library/Fonts/Apple Color Emoji.ttc',
            '/System/Library/Fonts/Helvetica.ttc',
            '/Library/Fonts/Arial.ttf'
        ]
        
        font = None
        for font_path in font_paths:
            if os.path.exists(font_path):
                try:
                    font = ImageFont.truetype(font_path, font_size)
                    break
                except:
                    continue
        
        if font is None:
            font = ImageFont.load_default()
            
    except Exception as e:
        print(f"Font loading error: {e}")
        font = ImageFont.load_default()
    
    # Calculate text position for centering
    bbox = draw.textbbox((0, 0), emoji, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (size - text_width) // 2
    y = (size - text_height) // 2 - bbox[1]  # Adjust for text baseline
    
    # Draw the emoji
    draw.text((x, y), emoji, font=font, fill=emoji_color)
    
    return img

def create_favicon_ico(output_path):
    """Create a multi-resolution ICO file"""
    sizes = [16, 24, 32, 64]
    images = []
    
    for size in sizes:
        img = create_emoji_image(size)
        # Convert to RGB for ICO format
        if img.mode == 'RGBA':
            # Create white background for ICO
            background = Image.new('RGB', img.size, (10, 15, 28))
            background.paste(img, mask=img.split()[-1])  # Use alpha channel as mask
            img = background
        images.append(img)
    
    # Save as ICO
    images[0].save(output_path, format='ICO', sizes=[(img.width, img.height) for img in images])
    print(f"✅ Created favicon: {output_path}")

def create_png_logo(size, output_path):
    """Create PNG logo"""
    img = create_emoji_image(size)
    img.save(output_path, format='PNG')
    print(f"✅ Created {size}x{size} PNG: {output_path}")

def main():
    """Generate all lightning bolt assets"""
    print("🔥 Creating Lightning Bolt Emoji Assets for The Energy Museum")
    print("=" * 60)
    
    # Ensure frontend/public directory exists
    os.makedirs('frontend/public', exist_ok=True)
    
    # Create favicon.ico (multi-resolution)
    create_favicon_ico('frontend/public/favicon.ico')
    
    # Create 192x192 PNG (Apple Touch Icon)
    create_png_logo(192, 'frontend/public/logo192.png')
    
    # Create 512x512 PNG (Large App Icon)
    create_png_logo(512, 'frontend/public/logo512.png')
    
    print("\n🎉 All lightning bolt assets created successfully!")
    print("\nFiles created:")
    print("  • frontend/public/favicon.ico (16x16, 24x24, 32x32, 64x64)")
    print("  • frontend/public/logo192.png (192x192)")
    print("  • frontend/public/logo512.png (512x512)")
    print("\n⚡ The Energy Museum branding is now consistent!")

if __name__ == "__main__":
    main()
