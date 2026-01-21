import json

# Load data
with open('portfolio-data.json', 'r', encoding='utf-16') as f:
    portfolio = json.load(f)
with open('product-data.json', 'r', encoding='utf-16') as f:
    products = json.load(f)

print(f"Portfolio items: {len(portfolio)}")
print(f"Product items: {len(products)}")

# Sample some items to check structure
print("\nSample portfolio item:")
print(json.dumps(portfolio[0], indent=2))

print("\nSample product item:")
print(json.dumps(products[0], indent=2))
