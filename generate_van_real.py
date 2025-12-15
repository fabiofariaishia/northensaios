from pathlib import Path
from PIL import Image

base_path = Path('src/assets/images/lab-movel/truck-1.jpg')
logo_path = Path('src/assets/images/logo2.jpg')
out_path = Path('src/assets/images/lab-movel/van-sprinter-real.jpg')

base = Image.open(base_path).convert('RGBA')
logo = Image.open(logo_path).convert('RGBA')

# Helper to create a sticker-like logo with light background and slight transparency
def make_sticker(img, max_w, max_h, padding=12, alpha=235):
    ratio = min(max_w / img.width, max_h / img.height)
    new_size = (int(img.width * ratio), int(img.height * ratio))
    logo_resized = img.resize(new_size, Image.LANCZOS)
    bg = Image.new('RGBA', (logo_resized.width + padding * 2, logo_resized.height + padding * 2), (255, 255, 255, alpha))
    bg.paste(logo_resized, (padding, padding), logo_resized)
    return bg

# Create two stickers: side door and hood
side_sticker = make_sticker(logo, max_w=int(base.width * 0.32), max_h=int(base.height * 0.12))
hood_sticker = make_sticker(logo, max_w=int(base.width * 0.28), max_h=int(base.height * 0.09), padding=10, alpha=230)

# Positions (tuned visually for this photo)
side_pos = (int(base.width * 0.30), int(base.height * 0.45))
hood_pos = (int(base.width * 0.56), int(base.height * 0.18))

composited = base.copy()
composited.alpha_composite(side_sticker, side_pos)
composited.alpha_composite(hood_sticker, hood_pos)

out_path.parent.mkdir(parents=True, exist_ok=True)
composited.convert('RGB').save(out_path, quality=95)
print(f'Created {out_path} (from {base_path.name} with logo {logo_path.name})')
