import os
import re

# Define the directory containing your .js, .jsx, and .css files
directory = 'src'

# Define the regex pattern to match image file extensions (png, jpg, jpeg)
image_extensions_pattern = r'\.(png|jpe?g)'

# Define the replacement extension
replacement_extension = '.webp'

# Function to replace image formats with .webp in a given file
def replace_image_formats_in_file(file_path):
    with open(file_path, 'r') as file:
        file_content = file.read()
    
    # Use re.sub to replace image extensions with .webp
    replaced_content = re.sub(image_extensions_pattern, replacement_extension, file_content, flags=re.IGNORECASE)

    with open(file_path, 'w') as file:
        file.write(replaced_content)

# Recursively iterate through .js, .jsx, and .css files in the directory and its subdirectories
for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(('.js', '.jsx', '.css')):
            file_path = os.path.join(root, file)
            replace_image_formats_in_file(file_path)
            print(f'Replaced image formats in: {file_path}')
