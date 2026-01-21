import json
import re
from datetime import datetime

# Load unified data (single source of truth)
with open('unified-data.json', 'r', encoding='utf-8') as f:
    unified_data = json.load(f)

# Extract data sections
person_data = unified_data['person']
portfolio_data = unified_data['portfolio_items']
product_data = unified_data['products']
resume_experience = unified_data['resume_experience']
portfolio_experience = unified_data.get('experience', [])
certifications_data = unified_data['certifications']
services_data = unified_data.get('services', [])
stacks_data = unified_data.get('stacks', [])
timeline_data = unified_data.get('timeline', [])
roles_data = unified_data.get('roles', [])

# Initialize graph structure
graph = {
    "nodes": [],
    "relationships": []
}

# Helper functions
def normalize_id(text):
    """Convert text to kebab-case ID"""
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'\s+', '-', text)
    text = re.sub(r'-+', '-', text)
    return text.strip('-')

def extract_year(date_str):
    """Extract year from date string"""
    if not date_str:
        return None
    # Try to find 4-digit year
    match = re.search(r'(\d{4})', str(date_str))
    if match:
        return int(match.group(1))
    return None

def parse_technologies(tech_string):
    """Parse comma-separated technologies"""
    if not tech_string:
        return []
    techs = [t.strip() for t in tech_string.split(',')]
    return techs

def normalize_tool_name(name):
    """Normalize tool names"""
    mapping = {
        'nodejs': 'Node.js',
        'node.js': 'Node.js',
        'nextjs': 'Next.js',
        'next.js': 'Next.js',
        'wordpress': 'WordPress',
        'javascript': 'JavaScript',
        'typescript': 'TypeScript',
        'mongodb': 'MongoDB',
        'mysql': 'MySQL',
        'postgresql': 'PostgreSQL',
        'graphql': 'GraphQL',
        'jquery': 'jQuery',
        'css': 'CSS',
        'html': 'HTML',
        'php': 'PHP',
        'shadcn/ui': 'shadcn/ui',
        'tailwindcss': 'Tailwind CSS',
        'tailwind': 'Tailwind CSS',
        'web development': None,  # Skip generic terms
        'maintenance': None,
        'support': None,
        'ux': None,
        'design': None,
    }
    return mapping.get(name.lower(), name)

def categorize_tool(name):
    """Categorize tool type"""
    name_lower = name.lower()
    
    # Languages
    if name_lower in ['javascript', 'typescript', 'php', 'go', 'java', 'python', 'ruby']:
        return 'language'
    
    # Frameworks
    if any(x in name_lower for x in ['react', 'next.js', 'gatsby', 'angular', 'vue', 'express', 'spring boot', 'rails', 'laravel', 'django', 'electron', 'expo', 'vite']):
        return 'framework'
    
    # Libraries
    if any(x in name_lower for x in ['jquery', 'three.js', 'zustand', 'redux', 'langchain', 'shadcn']):
        return 'library'
    
    # Databases
    if any(x in name_lower for x in ['mysql', 'postgres', 'mongodb', 'redis', 'elasticsearch', 'supabase']):
        return 'database'
    
    # Services/APIs
    if 'api' in name_lower or name_lower in ['vercel', 'openai', 'stripe', 'slack api']:
        return 'service'
    
    # Platforms
    return 'platform'

def derive_skills_from_tech(technologies, categories=[]):
    """Derive abstract skills from technologies and categories"""
    skills = set()
    
    tech_lower = [t.lower() for t in technologies]
    
    # Frontend skills
    if any(t in tech_lower for t in ['react', 'next.js', 'gatsby', 'angular', 'vue']):
        skills.add('Frontend Architecture')
    if any(t in tech_lower for t in ['css', 'html', 'tailwind css']):
        skills.add('Responsive Design')
    
    # Backend skills
    if any(t in tech_lower for t in ['node.js', 'php', 'ruby on rails', 'spring boot', 'express']):
        skills.add('Backend Development')
    if any(t in tech_lower for t in ['mysql', 'postgresql', 'mongodb']):
        skills.add('Database Design')
    if any(t in tech_lower for t in ['graphql', 'api']):
        skills.add('API Design')
    
    # Cloud/DevOps
    if any(t in tech_lower for t in ['docker', 'aws', 'vercel']):
        skills.add('DevOps')
    
    # AI/ML
    if any(t in tech_lower for t in ['ai', 'langchain', 'openai']):
        skills.add('AI Integration')
    
    # Mobile
    if any(t in tech_lower for t in ['react native', 'expo']):
        skills.add('Mobile Development')
    
    # Design
    if any(t in tech_lower for t in ['ux', 'figma', 'design']):
        skills.add('UI/UX Design')
    
    # E-commerce
    if any(t in tech_lower for t in ['woocommerce', 'stripe', 'ecommerce']):
        skills.add('E-commerce Development')
    
    return list(skills)

def calculate_skill_level(skill_name, skill_usage_data):
    """Calculate skill proficiency based on usage frequency and recency"""
    if skill_name not in skill_usage_data:
        return 7  # Default for new skills
    
    usage = skill_usage_data[skill_name]
    frequency = usage['count']
    latest_year = usage['latest_year']
    
    # Base level on frequency (1-10 scale)
    if frequency >= 15:
        base_level = 10
    elif frequency >= 10:
        base_level = 9
    elif frequency >= 6:
        base_level = 8
    else:
        base_level = 7
    
    # Adjust for recency (newer projects indicate current proficiency)
    current_year = 2026
    years_since = current_year - latest_year
    
    if years_since <= 1:
        recency_bonus = 0
    elif years_since <= 3:
        recency_bonus = -1
    else:
        recency_bonus = -2
    
    return max(1, min(10, base_level + recency_bonus))

# Collections for deduplication
organizations = {}
tools = {}
skills_set = {}
skill_usage_tracker = {}  # Track skill frequency and recency
roles = {}

# 1. Create Person node
graph['nodes'].append({
    "label": "Person",
    "id": "person:ehsan-pourhadi",
    "properties": {
        "name": person_data['name'],
        "title": person_data['title'],
        "location": person_data['location'],
        "website": person_data['website']
    }
})

# First pass: Track skill usage across all projects
all_projects = portfolio_data + product_data
for item in all_projects:
    year = extract_year(item.get('date', ''))
    if not year:
        year = 2020  # Default for undated items
    
    # Get technologies from either 'tag' or 'technologies' field
    techs = item.get('tag', item.get('technologies', []))
    if isinstance(techs, str):
        techs = [t.strip() for t in techs.split(',')]
    
    derived_skills = derive_skills_from_tech(techs)
    for skill_name in derived_skills:
        if skill_name not in skill_usage_tracker:
            skill_usage_tracker[skill_name] = {'count': 0, 'latest_year': 0}
        
        skill_usage_tracker[skill_name]['count'] += 1
        if year > skill_usage_tracker[skill_name]['latest_year']:
            skill_usage_tracker[skill_name]['latest_year'] = year

# Second pass: Add data from stacks (proficiency levels per category)
stack_categories = {}
for stack in stacks_data:
    category = stack.get('slug', '')
    labels = stack.get('labels', [])
    data = stack.get('data', [])
    
    for i, label in enumerate(labels):
        proficiency = int(data[i]) if i < len(data) else 7
        if label not in stack_categories:
            stack_categories[label] = proficiency

# 2. Process Portfolio items (Work nodes)
for item in portfolio_data:
    work_id = f"work:{normalize_id(item.get('path', item['title']))}"
    
    # Parse technologies
    tech_str = item.get('technologies', item.get('tag', ''))
    if isinstance(tech_str, list):
        techs = tech_str
    else:
        techs = [t.strip() for t in tech_str.split(',')] if tech_str else []
    
    # Create Work node
    work_node = {
        "label": "Work",
        "id": work_id,
        "properties": {
            "title": item['title'],
            "type": "client",
            "highlighted": False
        }
    }
    
    if item.get('description'):
        work_node['properties']['summary'] = item['description']
    
    # Parse date
    date_str = item.get('date', '')
    if date_str:
        try:
            if 'T' in date_str:
                year = date_str.split('-')[0]
            else:
                year = date_str
            work_node['properties']['startDate'] = year
        except:
            pass
    
    graph['nodes'].append(work_node)
    
    # PERFORMED relationship
    graph['relationships'].append({
        "type": "PERFORMED",
        "from": "person:ehsan-pourhadi",
        "to": work_id
    })
    
    # Organizations
    agency = item.get('agency', '').strip()
    client = item.get('client', '').strip()
    
    if agency and agency != '':
        org_id = f"org:{normalize_id(agency)}"
        if org_id not in organizations:
            organizations[org_id] = {
                "label": "Organization",
                "id": org_id,
                "properties": {
                    "name": agency,
                    "type": "company"
                }
            }
    
    if client and client != '':
        org_id = f"org:{normalize_id(client)}"
        if org_id not in organizations:
            organizations[org_id] = {
                "label": "Organization",
                "id": org_id,
                "properties": {
                    "name": client,
                    "type": "client"
                }
            }
        
        # DELIVERED_FOR relationship
        graph['relationships'].append({
            "type": "DELIVERED_FOR",
            "from": work_id,
            "to": org_id
        })
    
    # Tools
    for tech in techs:
        normalized = normalize_tool_name(tech)
        if normalized is None:
            continue
        
        tool_id = f"tool:{normalize_id(normalized)}"
        if tool_id not in tools:
            # Find timeline data for this tool
            timeline_entry = next((t for t in timeline_data if t.get('name', '').lower() == normalized.lower()), None)
            
            tool_props = {
                "name": normalized,
                "type": categorize_tool(normalized)
            }
            
            # Add timeline duration if available
            if timeline_entry and timeline_entry.get('duration'):
                tool_props['duration'] = timeline_entry['duration']
            
            # Add proficiency from stacks if available
            if normalized in stack_categories:
                tool_props['proficiency'] = stack_categories[normalized]
            
            tools[tool_id] = {
                "label": "Tool",
                "id": tool_id,
                "properties": tool_props
            }
        
        # USES_TOOL relationship
        graph['relationships'].append({
            "type": "USES_TOOL",
            "from": work_id,
            "to": tool_id
        })
    
    # Derive skills
    derived_skills = derive_skills_from_tech(techs)
    for skill_name in derived_skills:
        skill_id = f"skill:{normalize_id(skill_name)}"
        if skill_id not in skills_set:
            category = 'frontend' if 'Frontend' in skill_name or 'Design' in skill_name else 'backend'
            if 'DevOps' in skill_name:
                category = 'devops'
            elif 'AI' in skill_name:
                category = 'backend'
            elif 'Mobile' in skill_name:
                category = 'frontend'
            
            # Calculate proficiency level based on usage
            level = calculate_skill_level(skill_name, skill_usage_tracker)
            
            skills_set[skill_id] = {
                "label": "Skill",
                "id": skill_id,
                "properties": {
                    "name": skill_name,
                    "category": category,
                    "level": level
                }
            }
        
        # DEMONSTRATES relationship
        graph['relationships'].append({
            "type": "DEMONSTRATES",
            "from": work_id,
            "to": skill_id
        })

# 3. Process Products
for item in product_data:
    product_id = f"product:{normalize_id(item.get('path', item['title']))}"
    
    # Create Product node
    product_node = {
        "label": "Product",
        "id": product_id,
        "properties": {
            "name": item['title'],
            "status": "active"
        }
    }
    
    if item.get('description'):
        product_node['properties']['description'] = item['description']
    
    graph['nodes'].append(product_node)
    
    # Parse technologies for products too
    techs = parse_technologies(item.get('technologies', ''))
    
    for tech in techs:
        normalized = normalize_tool_name(tech)
        if normalized is None:
            continue
        
        tool_id = f"tool:{normalize_id(normalized)}"
        if tool_id not in tools:
            tools[tool_id] = {
                "label": "Tool",
                "id": tool_id,
                "properties": {
                    "name": normalized,
                    "type": categorize_tool(normalized)
                }
            }

# 4. Process Resume Experience (additional Work nodes from resume)
for exp in resume_experience:
    # Create work ID from company and title
    work_id = f"work:{normalize_id(exp.get('company', '') + '-' + exp.get('position', ''))}"
    
    # Skip if already exists (might be in portfolio)
    if any(n['id'] == work_id for n in graph['nodes']):
        continue
    
    work_node = {
        "label": "Work",
        "id": work_id,
        "properties": {
            "title": exp.get('position', ''),
            "type": "employment",
            "highlighted": False
        }
    }
    
    if exp.get('description'):
        work_node['properties']['summary'] = exp['description']
    
    if exp.get('startDate'):
        work_node['properties']['startDate'] = exp['startDate']
    if exp.get('endDate'):
        work_node['properties']['endDate'] = exp['endDate']
    
    graph['nodes'].append(work_node)
    
    # PERFORMED relationship
    graph['relationships'].append({
        "type": "PERFORMED",
        "from": "person:ehsan-pourhadi",
        "to": work_id
    })
    
    # Organization (employer)
    company = exp.get('company', '').strip()
    if company:
        org_id = f"org:{normalize_id(company)}"
        if org_id not in organizations:
            organizations[org_id] = {
                "label": "Organization",
                "id": org_id,
                "properties": {
                    "name": company,
                    "type": "company"
                }
            }
        
        # DELIVERED_FOR relationship
        graph['relationships'].append({
            "type": "DELIVERED_FOR",
            "from": work_id,
            "to": org_id
        })
    
    # Technologies from tags
    techs = exp.get('tags', [])
    if isinstance(techs, str):
        techs = [t.strip() for t in techs.split(',')]
    
    for tech in techs:
        normalized = normalize_tool_name(tech)
        if normalized is None:
            continue
        
        tool_id = f"tool:{normalize_id(normalized)}"
        if tool_id not in tools:
            tools[tool_id] = {
                "label": "Tool",
                "id": tool_id,
                "properties": {
                    "name": normalized,
                    "type": categorize_tool(normalized)
                }
            }
        
        # USES_TOOL relationship
        graph['relationships'].append({
            "type": "USES_TOOL",
            "from": work_id,
            "to": tool_id
        })
    
    # Derive skills
    derived_skills = derive_skills_from_tech(techs)
    for skill_name in derived_skills:
        skill_id = f"skill:{normalize_id(skill_name)}"
        if skill_id not in skills_set:
            category = 'frontend' if 'Frontend' in skill_name or 'Design' in skill_name else 'backend'
            if 'DevOps' in skill_name:
                category = 'devops'
            elif 'AI' in skill_name:
                category = 'backend'
            elif 'Mobile' in skill_name:
                category = 'frontend'
            
            level = calculate_skill_level(skill_name, skill_usage_tracker)
            
            skills_set[skill_id] = {
                "label": "Skill",
                "id": skill_id,
                "properties": {
                    "name": skill_name,
                    "category": category,
                    "level": level
                }
            }
        
        # DEMONSTRATES relationship
        graph['relationships'].append({
            "type": "DEMONSTRATES",
            "from": work_id,
            "to": skill_id
        })

# 5. Add collected organizations, tools, skills
graph['nodes'].extend(organizations.values())
graph['nodes'].extend(tools.values())
graph['nodes'].extend(skills_set.values())

# 6. Add Roles from portfolio.json
roles_map = {}
for role_data in roles_data:
    role_slug = role_data.get('slug', '')
    role_title = role_data.get('title', '')
    role_id = f"role:{normalize_id(role_slug or role_title)}"
    
    roles_map[role_id] = {
        "label": "Role",
        "id": role_id,
        "properties": {
            "name": role_title,
            "description": role_data.get('description', ''),
            "tags": role_data.get('tags', [])
        }
    }
    
    graph['nodes'].append(roles_map[role_id])
    
    # ACTED_AS relationship
    graph['relationships'].append({
        "type": "ACTED_AS",
        "from": "person:ehsan-pourhadi",
        "to": role_id
    })

# 7. Add Services
for service in services_data:
    service_id = f"service:{normalize_id(service.get('title', ''))}"
    
    graph['nodes'].append({
        "label": "Service",
        "id": service_id,
        "properties": {
            "name": service.get('title', ''),
            "description": service.get('description', ''),
            "icon": service.get('icon', ''),
            "features": service.get('features', [])
        }
    })
    
    # Link services to person (OFFERS relationship)
    graph['relationships'].append({
        "type": "OFFERS",
        "from": "person:ehsan-pourhadi",
        "to": service_id
    })

# 8. Map roles to work based on experience titles
# Create a mapping from experience entries to roles
experience_role_mapping = {
    "Software Developer": "role:senior-software-engineer",
    "Fullstack Developer": "role:product-engineer",
    "Web Developer/Tech Lead": "role:engineering-manager",
    "Web Developer/Designer": "role:product-engineer",
    "Developer/Designer": "role:product-engineer",
}

# Map roles to portfolio experience
for exp in portfolio_experience:
    exp_title = exp.get('title', '')
    org_name = exp.get('org', '')
    
    # Find matching work node
    for item in portfolio_data:
        item_agency = item.get('agency', '')
        if org_name and org_name in item_agency:
            work_id = f"work:{normalize_id(item.get('path', item['title']))}"
            
            # Find matching role
            role_id = experience_role_mapping.get(exp_title)
            if role_id and any(n['id'] == role_id for n in graph['nodes']):
                graph['relationships'].append({
                    "type": "APPLIED_IN",
                    "from": role_id,
                    "to": work_id
                })

# 9. Add SUPPORTED_BY relationships (skill → tool)
skill_tool_mapping = {
    "skill:frontend-architecture": ["tool:react", "tool:next-js", "tool:typescript"],
    "skill:backend-development": ["tool:node-js", "tool:php"],
    "skill:database-design": ["tool:mysql", "tool:postgresql", "tool:mongodb"],
    "skill:api-design": ["tool:graphql"],
    "skill:responsive-design": ["tool:css", "tool:tailwind-css"],
    "skill:mobile-development": ["tool:react-native", "tool:expo"],
}

for skill_id, tool_ids in skill_tool_mapping.items():
    if skill_id in [n['id'] for n in graph['nodes']]:
        for tool_id in tool_ids:
            if tool_id in [n['id'] for n in graph['nodes']]:
                graph['relationships'].append({
                    "type": "SUPPORTED_BY",
                    "from": skill_id,
                    "to": tool_id
                })

# 10. Process Certifications
for cert in certifications_data:
    cert_id = f"cert:{normalize_id(cert.get('title', cert.get('name', '')))}"
    cert_name = cert.get('title', cert.get('name', ''))
    
    graph['nodes'].append({
        "label": "Certification",
        "id": cert_id,
        "properties": {
            "name": cert_name,
            "issuer": cert.get('issuer', 'Unknown'),
            "year": cert.get('year', cert.get('date', ''))
        }
    })
    
    # EARNED relationship
    graph['relationships'].append({
        "type": "EARNED",
        "from": "person:ehsan-pourhadi",
        "to": cert_id
    })
    
    # Map certifications to skills (VALIDATES relationship)
    cert_skill_mapping = {
        'aws': 'skill:cloud-infrastructure',
        'cloud': 'skill:cloud-infrastructure',
        'cybersecurity': 'skill:backend-development',
        'ui components': 'skill:frontend-architecture',
        'scrum': 'skill:backend-development',
        'prompt engineering': 'skill:backend-development',
    }
    
    cert_lower = cert_name.lower()
    for keyword, skill_id in cert_skill_mapping.items():
        if keyword in cert_lower:
            # Only add VALIDATES if the skill exists
            if any(n['id'] == skill_id for n in graph['nodes']):
                graph['relationships'].append({
                    "type": "VALIDATES",
                    "from": cert_id,
                    "to": skill_id
                })
            break

# 11. Create TimeSpan nodes based on career phases
timespans = {
    "early-career": {"label": "Early Career", "start": "2010", "end": "2015"},
    "growth-phase": {"label": "Growth Phase", "start": "2016", "end": "2019"},
    "professional-peak": {"label": "Professional Peak", "start": "2020", "end": "Present"}
}

for ts_slug, ts_data in timespans.items():
    timespan_id = f"timespan:{ts_slug}"
    graph['nodes'].append({
        "label": "TimeSpan",
        "id": timespan_id,
        "properties": {
            "label": ts_data['label'],
            "start": ts_data['start'],
            "end": ts_data['end']
        }
    })

# 12. Add DURING relationships (Work -> TimeSpan)
for node in graph['nodes']:
    if node['label'] == 'Work':
        work_id = node['id']
        start_date = node['properties'].get('startDate', '')
        
        if start_date:
            year = extract_year(start_date)
            if year:
                # Determine which timespan this work belongs to
                if year <= 2015:
                    timespan_id = "timespan:early-career"
                elif year <= 2019:
                    timespan_id = "timespan:growth-phase"
                else:
                    timespan_id = "timespan:professional-peak"
                
                graph['relationships'].append({
                    "type": "DURING",
                    "from": work_id,
                    "to": timespan_id
                })

# 13. Add PRODUCED relationships (Work -> Product) based on related projects
# Map products to their source work items by matching technologies and descriptions
for product_node in [n for n in graph['nodes'] if n['label'] == 'Product']:
    product_id = product_node['id']
    product_name = product_node['properties']['name'].lower()
    
    # Find work items that might have produced this product
    for work_node in [n for n in graph['nodes'] if n['label'] == 'Work']:
        work_id = work_node['id']
        work_title = work_node['properties'].get('title', '').lower()
        
        # Simple heuristic: if product name appears in work title or vice versa
        # This is a basic mapping - can be enhanced with more sophisticated logic
        if product_name in work_title or work_title in product_name:
            graph['relationships'].append({
                "type": "PRODUCED",
                "from": work_id,
                "to": product_id
            })

# 14. Add EVOLVES_FROM relationships (Product -> Work)
# Products evolve from earlier work - link products to related work items
for product_node in [n for n in graph['nodes'] if n['label'] == 'Product']:
    product_id = product_node['id']
    
    # Find related work items based on shared tools
    product_tools = set()
    for rel in graph['relationships']:
        if rel['type'] == 'USES_TOOL' and rel['from'] == product_id:
            product_tools.add(rel['to'])
    
    if product_tools:
        # Find work items that use similar tools
        work_tool_counts = {}
        for rel in graph['relationships']:
            if rel['type'] == 'USES_TOOL' and rel['from'].startswith('work:'):
                if rel['to'] in product_tools:
                    work_id = rel['from']
                    work_tool_counts[work_id] = work_tool_counts.get(work_id, 0) + 1
        
        # Link to top 2 most related work items (those with most tool overlap)
        if work_tool_counts:
            top_related = sorted(work_tool_counts.items(), key=lambda x: x[1], reverse=True)[:2]
            for work_id, _ in top_related:
                graph['relationships'].append({
                    "type": "EVOLVES_FROM",
                    "from": product_id,
                    "to": work_id
                })

# Write output
with open('graph-data.json', 'w', encoding='utf-8') as f:
    json.dump(graph, f, indent=2, ensure_ascii=False)

print(f"✅ Generated graph with:")
print(f"  - {len(graph['nodes'])} nodes")
print(f"  - {len(graph['relationships'])} relationships")
print(f"  - {len([n for n in graph['nodes'] if n['label'] == 'Work'])} Work nodes")
print(f"  - {len([n for n in graph['nodes'] if n['label'] == 'Product'])} Product nodes")
print(f"  - {len([n for n in graph['nodes'] if n['label'] == 'Tool'])} Tool nodes")
print(f"  - {len([n for n in graph['nodes'] if n['label'] == 'Skill'])} Skill nodes")
print(f"  - {len([n for n in graph['nodes'] if n['label'] == 'Organization'])} Organization nodes")
