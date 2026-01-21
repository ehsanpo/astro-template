# Graph Data Pipeline

This directory contains scripts to extract data from the portfolio and generate Neo4j-compatible graph data.

## Single Source of Truth Architecture

```
Markdown Files (MDX)          JSON Configs
├─ portfolio/*.md        +    ├─ portfolio.json
└─ products/*.md              └─ resume-en.json
         │                            │
         └────────────┬───────────────┘
                      ▼
         📄 unified-data.json (Single Source)
                      │
                      ▼
         🔧 generate-graph.py
                      │
                      ▼
         📊 graph-data.json (Neo4j Ready)
```

## Files

### Source Extraction

- **`extract-all-data.py`** - Extracts all data from markdown files and configs
  - Scans `src/content/portfolio/` for portfolio items
  - Scans `src/content/products/` for products
  - Loads `resume-en.json` for experience
  - Loads `portfolio.json` for certifications
  - Outputs: `unified-data.json`

### Graph Generation

- **`generate-graph.py`** - Generates Neo4j graph from unified data
  - Input: `unified-data.json`
  - Calculates skill proficiency levels
  - Normalizes tool names
  - Creates relationships
  - Output: `graph-data.json`

### Utilities

- **`verify-pipeline.py`** - Verifies data pipeline integrity
- **`check-skills.py`** - Displays skill proficiency levels
- **`debug-data.py`** - Debug data structure

### Schema

- **`graph-model.json`** - Neo4j graph schema (DO NOT MODIFY)

## Usage

### 1. Extract Data from Source Files

```bash
python extract-all-data.py
```

This creates `unified-data.json` by reading:

- All portfolio markdown files
- All product markdown files
- Resume JSON
- Portfolio config JSON

### 2. Generate Graph Data

```bash
python generate-graph.py
```

This creates `graph-data.json` with:

- All nodes (Person, Work, Product, Tool, Skill, Organization, Certification, Role)
- All relationships following the graph-model schema
- Calculated skill proficiency levels

### 3. Verify Pipeline

```bash
python verify-pipeline.py
```

Shows complete statistics and validates data integrity.

## Current Statistics

**Unified Data:**

- Portfolio items: 66
- Products: 19
- Resume experience: 7
- Certifications: 15
- **Total work items: 92**

**Graph Data:**

- Total nodes: 231
- Total relationships: 669
- Work nodes: 73 (portfolio + resume)
- Product nodes: 19
- Tools: 49
- Skills: 6 (with proficiency levels)
- Organizations: 64
- Certifications: 15

## Skill Proficiency Calculation

Skill levels (1-10) are calculated based on:

1. **Frequency**: Number of projects using related technologies
2. **Recency**: How recent the latest project was

Formula:

- 15+ projects = Level 10 base
- 10-14 projects = Level 9 base
- 6-9 projects = Level 8 base
- <6 projects = Level 7 base
- Adjusted down for older projects (>3 years)

## Data Flow

1. **Source**: Markdown frontmatter + JSON configs
2. **Extract**: `extract-all-data.py` → `unified-data.json`
3. **Transform**: `generate-graph.py` → `graph-data.json`
4. **Output**: Neo4j-compatible graph structure

## Maintaining Single Source of Truth

⚠️ **Important**: Do NOT manually edit `portfolio-data.json` or `product-data.json`

To update data:

1. Edit the source markdown files in `src/content/portfolio/` or `src/content/products/`
2. Or edit `src/data/resume-en.json` or `src/data/portfolio.json`
3. Run `extract-all-data.py` to regenerate unified data
4. Run `generate-graph.py` to regenerate graph

## Graph Model Compliance

The generated graph strictly follows `graph-model.json`:

- Node types: Person, Work, Product, Tool, Skill, Organization, Role, Certification
- Relationship types: PERFORMED, DELIVERED_FOR, USES_TOOL, DEMONSTRATES, etc.
- No custom fields or relationships outside the schema
