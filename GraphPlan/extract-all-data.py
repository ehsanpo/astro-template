"""
Extract all data from portfolio and product markdown files
This creates the single source of truth for graph generation
"""
import os
import re
import json
from pathlib import Path

def extract_frontmatter(file_path):
    """Extract YAML frontmatter from markdown file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract frontmatter between --- markers
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
    if not match:
        return {}
    
    frontmatter_text = match.group(1)
    data = {}
    
    # Parse YAML-like frontmatter
    current_key = None
    current_list = []
    
    for line in frontmatter_text.split('\n'):
        line = line.rstrip()
        
        # List item
        if line.strip().startswith('- '):
            if current_key:
                item = line.strip()[2:].strip('"').strip("'")
                current_list.append(item)
            continue
        
        # Key-value pair
        if ':' in line and not line.startswith(' '):
            # Save previous list if any
            if current_key and current_list:
                data[current_key] = current_list
                current_list = []
            
            key, _, value = line.partition(':')
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            
            if value:
                data[key] = value
                current_key = None
            else:
                current_key = key
        elif line.strip() and current_key and not line.startswith('  '):
            # Continuation of value
            data[current_key] = line.strip().strip('"').strip("'")
            current_key = None
    
    # Save last list if any
    if current_key and current_list:
        data[current_key] = current_list
    
    return data

def scan_portfolio_items(base_path):
    """Scan all portfolio markdown files"""
    portfolio_dir = Path(base_path) / 'src' / 'content' / 'portfolio'
    items = []
    
    for folder in portfolio_dir.iterdir():
        if folder.is_dir():
            # Look for .md file in folder
            md_files = list(folder.glob('*.md'))
            if md_files:
                md_file = md_files[0]
                data = extract_frontmatter(md_file)
                if data:
                    data['path'] = folder.name
                    data['file'] = md_file.name
                    data['type'] = 'portfolio'
                    items.append(data)
    
    return items

def scan_product_items(base_path):
    """Scan all product markdown files"""
    products_dir = Path(base_path) / 'src' / 'content' / 'products'
    items = []
    
    for folder in products_dir.iterdir():
        if folder.is_dir():
            # Look for .md file in folder
            md_files = list(folder.glob('*.md'))
            if md_files:
                md_file = md_files[0]
                data = extract_frontmatter(md_file)
                if data:
                    data['path'] = folder.name
                    data['file'] = md_file.name
                    data['type'] = 'product'
                    items.append(data)
    
    return items

def load_resume_data(base_path):
    """Load resume data"""
    resume_path = Path(base_path) / 'src' / 'data' / 'resume-en.json'
    with open(resume_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def load_portfolio_config(base_path):
    """Load portfolio.json config"""
    config_path = Path(base_path) / 'src' / 'data' / 'portfolio.json'
    with open(config_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def merge_all_data(base_path):
    """Merge all data sources into unified structure"""
    
    print("📁 Scanning portfolio items...")
    portfolio_items = scan_portfolio_items(base_path)
    print(f"   Found {len(portfolio_items)} portfolio items")
    
    print("📁 Scanning product items...")
    product_items = scan_product_items(base_path)
    print(f"   Found {len(product_items)} product items")
    
    print("📄 Loading resume data...")
    resume_data = load_resume_data(base_path)
    print(f"   Found {len(resume_data.get('experience', []))} experience entries")
    
    print("📄 Loading portfolio config...")
    portfolio_config = load_portfolio_config(base_path)
    
    # Create unified data structure
    unified_data = {
        "meta": {
            "generated": "2026-01-19",
            "source": "Extracted from markdown files, resume, and portfolio config",
            "items_count": {
                "portfolio": len(portfolio_items),
                "products": len(product_items),
                "resume_experience": len(resume_data.get('experience', []))
            }
        },
        "person": {
            "name": portfolio_config['basics']['name'],
            "title": portfolio_config['basics']['title'],
            "currentPosition": portfolio_config['basics']['currentPosition'],
            "location": portfolio_config['basics']['location'],
            "email": portfolio_config['basics']['email'],
            "website": portfolio_config['basics']['website'],
            "linkedin": portfolio_config['basics'].get('linkedin', ''),
            "about": portfolio_config['basics'].get('about', '')
        },
        "portfolio_items": portfolio_items,
        "products": product_items,
        "resume_experience": resume_data.get('experience', []),
        "experience": portfolio_config.get('experience', []),
        "certifications": portfolio_config.get('certifications', []),
        "skills": portfolio_config.get('skills', []),
        "tools": portfolio_config.get('tools', []),
        "services": portfolio_config.get('services', []),
        "stacks": portfolio_config.get('stacks', []),
        "timeline": portfolio_config.get('timeline', []),
        "roles": portfolio_config.get('roles', []),
        "education": resume_data.get('education', []),
        "languages": resume_data.get('languages', [])
    }
    
    return unified_data

if __name__ == "__main__":
    # Get base path (parent of GraphPlan)
    base_path = Path(__file__).parent.parent
    
    print("\n🔍 Extracting all data from source files...\n")
    
    unified_data = merge_all_data(base_path)
    
    # Save unified data
    output_file = Path(__file__).parent / 'unified-data.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(unified_data, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Unified data saved to: {output_file}")
    print(f"\n📊 Summary:")
    print(f"   - Portfolio items: {unified_data['meta']['items_count']['portfolio']}")
    print(f"   - Products: {unified_data['meta']['items_count']['products']}")
    print(f"   - Resume experience: {unified_data['meta']['items_count']['resume_experience']}")
    print(f"   - Total work items: {unified_data['meta']['items_count']['portfolio'] + unified_data['meta']['items_count']['products'] + unified_data['meta']['items_count']['resume_experience']}")
