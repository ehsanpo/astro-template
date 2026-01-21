import json

with open('graph-data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

skills = [n for n in data['nodes'] if n['label'] == 'Skill']

print('\n✅ Skills with proficiency levels:\n')
for skill in sorted(skills, key=lambda x: -x['properties']['level']):
    name = skill['properties']['name']
    level = skill['properties']['level']
    category = skill['properties']['category']
    print(f"  {name:30s} Level {level}/10  ({category})")

print(f"\n📊 Total: {len(skills)} skills")
