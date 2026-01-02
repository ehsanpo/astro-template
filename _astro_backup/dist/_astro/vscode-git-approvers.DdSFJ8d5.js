import{c as n,r as o,m as i}from"./instance.AS_mdBWu.js";import{u as s}from"./data.tPHRorFE.js";import"./astro/assets-service.DrwRx0W4.js";import"./clsx.B-dksMZM.js";const t=`<p>See pull request approvers when hovering over code lines in VS Code.
Designed for development teams working with GitHub repositories who need quick access to code review context.</p>
<h2 id="core-features">Core Features</h2>
<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-8">
  <div class="clip bg-white dark:bg-neutral-800 rounded-s p-6 shadow-sm hover:shadow-md transition-shadow">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Instant Approval Context</h3>
    <p class="text-gray-600 dark:text-gray-300">Hover over any line of code to see who approved the corresponding pull request. Eliminates the need to manually trace commits back to GitHub.</p>
  </div>
  <div class="clip bg-white dark:bg-neutral-800 rounded-s p-6 shadow-sm hover:shadow-md transition-shadow">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Git Integration</h3>
    <p class="text-gray-600 dark:text-gray-300">Leverages git blame to identify commits and automatically fetches related pull request data from GitHub. Works seamlessly with existing repository workflows.</p>
  </div>
  <div class="clip bg-white dark:bg-neutral-800 rounded-s p-6 shadow-sm hover:shadow-md transition-shadow">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Zero Configuration Setup</h3>
    <p class="text-gray-600 dark:text-gray-300">Works automatically with GitHub repositories once your API token is configured. No additional project setup or configuration files required.</p>
  </div>
  <div class="clip bg-white dark:bg-neutral-800 rounded-s p-6 shadow-sm hover:shadow-md transition-shadow">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Native VS Code Experience</h3>
    <p class="text-gray-600 dark:text-gray-300">Integrates directly into the editor hover experience. Information appears contextually without disrupting your coding workflow.</p>
  </div>
</div>
<h2 id="installation">Installation</h2>
<p>Install from the downloaded VSIX file:</p>
<ol>
<li>Open Visual Studio Code</li>
<li>Navigate to Extensions view (Ctrl+Shift+X)</li>
<li>Click the three-dot menu in the Extensions view</li>
<li>Select “Install from VSIX…”</li>
<li>Browse to and select the downloaded .vsix file</li>
</ol>
<h2 id="github-api-setup">GitHub API Setup</h2>
<p>Configure your GitHub token for pull request access:</p>
<ol>
<li>Generate a personal access token at GitHub with <code>repo</code> permissions</li>
<li>Set the token as an environment variable:
<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0" data-language="bash"><code><span class="line"><span style="color:#F97583">export</span><span style="color:#E1E4E8"> GITHUB_TOKEN</span><span style="color:#F97583">=</span><span style="color:#E1E4E8">your-token-here</span></span>
<span class="line"></span></code></pre>
</li>
</ol>
<h2 id="who-this-is-for">Who This Is For</h2>
<p><strong>Development teams</strong> working with GitHub repositories who frequently need to understand code review context without leaving their editor.</p>
<p><strong>Code reviewers</strong> who want quick access to approval history when examining code changes during reviews.</p>
<p><strong>Team leads</strong> tracking code quality and review processes across multiple contributors.</p>
<h2 id="why-this-extension-exists">Why This Extension Exists</h2>
<p>Code review context often gets lost once pull requests are merged. Developers regularly need to understand who reviewed and approved specific changes, but this information requires manual navigation between the editor and GitHub.</p>
<p>This extension bridges that gap by bringing pull request approval data directly into the code editing experience, maintaining the connection between code and its review history.</p>
<h2 id="why-choose-this-extension">Why Choose This Extension</h2>
<p>Focused specifically on approval visibility rather than attempting to replicate GitHub’s full interface within VS Code.</p>
<p>Designed for teams that value quick access to review context without disrupting established development workflows.</p>
<p>Built to work with existing Git and GitHub practices, requiring minimal setup or workflow changes.</p>
<h2 id="get-started">Get Started</h2>
<p>Download the extension and configure your GitHub token to begin seeing pull request approvers directly in your VS Code editor.</p>`,r={title:"Git Approvers Hover Extension",date:"2024-11-28",status:"publish",permalink:"vscode-git-approvers",author:"Ehsan",type:"product",id:335,agency:"Telavox",category:["DevTools"],tag:["Javascript","Typescript"],case_link_url:"https://github.com/ehsanpo/pr-approve",body_text:[""],client:"Telavox",tagline:"See pull request approvers when hovering over code lines in VS Code",background_image:"vscode3.png",logo:"vscodelogo.png",images:["vscode3.png"],port_date:["2024"]},a="C:/Users/Ehsan/dev/astro-template/src/content/products/vscode-git-approvers/vscode-git-approvers.md",l=void 0;function m(){return`
See pull request approvers when hovering over code lines in VS Code.
Designed for development teams working with GitHub repositories who need quick access to code review context.

## Core Features

<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-8">
  <div class="clip bg-white dark:bg-neutral-800 rounded-s p-6 shadow-sm hover:shadow-md transition-shadow">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Instant Approval Context</h3>
    <p class="text-gray-600 dark:text-gray-300">Hover over any line of code to see who approved the corresponding pull request. Eliminates the need to manually trace commits back to GitHub.</p>
  </div>
  
  <div class="clip bg-white dark:bg-neutral-800 rounded-s p-6 shadow-sm hover:shadow-md transition-shadow">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Git Integration</h3>
    <p class="text-gray-600 dark:text-gray-300">Leverages git blame to identify commits and automatically fetches related pull request data from GitHub. Works seamlessly with existing repository workflows.</p>
  </div>
  
  <div class="clip bg-white dark:bg-neutral-800 rounded-s p-6 shadow-sm hover:shadow-md transition-shadow">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Zero Configuration Setup</h3>
    <p class="text-gray-600 dark:text-gray-300">Works automatically with GitHub repositories once your API token is configured. No additional project setup or configuration files required.</p>
  </div>
  
  <div class="clip bg-white dark:bg-neutral-800 rounded-s p-6 shadow-sm hover:shadow-md transition-shadow">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Native VS Code Experience</h3>
    <p class="text-gray-600 dark:text-gray-300">Integrates directly into the editor hover experience. Information appears contextually without disrupting your coding workflow.</p>
  </div>
</div>

## Installation

Install from the downloaded VSIX file:

1. Open Visual Studio Code
2. Navigate to Extensions view (Ctrl+Shift+X)
3. Click the three-dot menu in the Extensions view
4. Select "Install from VSIX..."
5. Browse to and select the downloaded .vsix file

## GitHub API Setup

Configure your GitHub token for pull request access:

1. Generate a personal access token at GitHub with \`repo\` permissions
2. Set the token as an environment variable:
   \`\`\`bash
   export GITHUB_TOKEN=your-token-here
   \`\`\`

## Who This Is For

**Development teams** working with GitHub repositories who frequently need to understand code review context without leaving their editor.

**Code reviewers** who want quick access to approval history when examining code changes during reviews.

**Team leads** tracking code quality and review processes across multiple contributors.

## Why This Extension Exists

Code review context often gets lost once pull requests are merged. Developers regularly need to understand who reviewed and approved specific changes, but this information requires manual navigation between the editor and GitHub.

This extension bridges that gap by bringing pull request approval data directly into the code editing experience, maintaining the connection between code and its review history.

## Why Choose This Extension

Focused specifically on approval visibility rather than attempting to replicate GitHub's full interface within VS Code.

Designed for teams that value quick access to review context without disrupting established development workflows.

Built to work with existing Git and GitHub practices, requiring minimal setup or workflow changes.

## Get Started

Download the extension and configure your GitHub token to begin seeing pull request approvers directly in your VS Code editor.
`}function x(){return t}function y(){return[{depth:2,slug:"core-features",text:"Core Features"},{depth:2,slug:"installation",text:"Installation"},{depth:2,slug:"github-api-setup",text:"GitHub API Setup"},{depth:2,slug:"who-this-is-for",text:"Who This Is For"},{depth:2,slug:"why-this-extension-exists",text:"Why This Extension Exists"},{depth:2,slug:"why-choose-this-extension",text:"Why Choose This Extension"},{depth:2,slug:"get-started",text:"Get Started"}]}const b=n((d,p,h)=>{const{layout:c,...e}=r;return e.file=a,e.url=l,o`${i()}${s(t)}`});export{b as Content,x as compiledContent,b as default,a as file,r as frontmatter,y as getHeadings,m as rawContent,l as url};
