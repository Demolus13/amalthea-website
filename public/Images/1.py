import os
from PIL import Image

input_directory = "public/Images"  # Replace with the path to your input directory
output_directory = "public/Images"  # Replace with the path to your output directory
quality = 50  # Adjust the quality as needed (0-100)

# Ensure the output directory exists
os.makedirs(output_directory, exist_ok=True)

# Loop through all files in the input directory
for filename in os.listdir(input_directory):
    if filename.endswith((".png", ".jpg", ".jpeg")):
        input_path = os.path.join(input_directory, filename)
        output_filename = os.path.splitext(filename)[0] + ".webp"
        output_path = os.path.join(output_directory, output_filename)

        # Open and convert the image
        try:
            img = Image.open(input_path)
            img.save(output_path, 'webp', quality=quality)
            print(f"Converted: {input_path} -> {output_path}")
        except Exception as e:
            print(f"Error converting {input_path}: {str(e)}")

# Remove all files except .svg and .webp in the output directory
for filename in os.listdir(output_directory):
    if not filename.endswith((".svg", ".webp",".py")):
        file_path = os.path.join(output_directory, filename)
        os.remove(file_path)
        print(f"Removed: {file_path}")

print("Conversion and removal complete.")
