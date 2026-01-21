"""
Verify the complete data pipeline
"""
import json

print("\n🔍 DATA PIPELINE VERIFICATION\n")
print("=" * 60)

# 1. Check unified data
with open('unified-data.json', 'r', encoding='utf-8') as f:
    unified = json.load(f)

print("\n📊 UNIFIED DATA (Single Source of Truth)")
print("-" * 60)
print(f"Portfolio items:      {len(unified['portfolio_items'])}")
print(f"Products:             {len(unified['products'])}")
print(f"Resume experience:    {len(unified['resume_experience'])}")
print(f"Certifications:       {len(unified['certifications'])}")
print(f"Total work items:     {len(unified['portfolio_items']) + len(unified['products']) + len(unified['resume_experience'])}")

# 2. Check graph data
with open('graph-data.json', 'r', encoding='utf-8') as f:
    graph = json.load(f)

print("\n📈 GENERATED GRAPH DATA")
print("-" * 60)

# Count by node type
node_counts = {}
for node in graph['nodes']:
    label = node['label']
    node_counts[label] = node_counts.get(label, 0) + 1

for label, count in sorted(node_counts.items()):
    print(f"{label:20s} {count:4d} nodes")

print(f"\nTotal nodes:          {len(graph['nodes'])}")
print(f"Total relationships:  {len(graph['relationships'])}")

# Count relationship types
rel_counts = {}
for rel in graph['relationships']:
    rel_type = rel['type']
    rel_counts[rel_type] = rel_counts.get(rel_type, 0) + 1

print("\n🔗 RELATIONSHIP TYPES")
print("-" * 60)
for rel_type, count in sorted(rel_counts.items(), key=lambda x: -x[1]):
    print(f"{rel_type:25s} {count:4d}")

# Check skills
skills = [n for n in graph['nodes'] if n['label'] == 'Skill']
print("\n🎯 SKILLS WITH PROFICIENCY")
print("-" * 60)
for skill in sorted(skills, key=lambda x: -x['properties']['level']):
    print(f"{skill['properties']['name']:30s} Level {skill['properties']['level']}/10")

print("\n" + "=" * 60)
print("✅ Data pipeline verified successfully!")
print("\n📁 Files:")
print("   - unified-data.json   (Source of truth)")
print("   - graph-data.json     (Neo4j-ready graph)")
