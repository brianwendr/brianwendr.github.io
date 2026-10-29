---
layout: page
permalink: /research/
title: Research
description: Enterprise Decision Intelligence Lab research themes and frameworks.
nav: true
nav_order: 4
---

<section class="research-hero">
  <p class="research-eyebrow">Enterprise Decision Intelligence Lab</p>
  <h2>Researching how enterprises turn uncertain technical, operational, and market signals into better decisions.</h2>
  <p>
    The lab connects decision science, system simulation, financial technology, and computational learning
    to support evidence-based governance for automation, service innovation, product strategy, and
    risk-aware enterprise transformation.
  </p>
</section>

<section class="research-domains" aria-label="Research domains">
  <div>
    <h3>Decision Science</h3>
    <p>Multi-criteria decision analysis, prioritization models, and governance frameworks for complex product, process, and platform choices.</p>
  </div>
  <div>
    <h3>Simulation</h3>
    <p>System reliability, scenario modeling, and process-flow evaluation for validating enterprise architecture and operational alternatives.</p>
  </div>
  <div>
    <h3>FinTech</h3>
    <p>Analytical methods for digital finance, platform risk, service quality, and data-driven resource allocation in technology-intensive markets.</p>
  </div>
  <div>
    <h3>Computational Learning</h3>
    <p>Machine learning, neural networks, survival analysis, and predictive modeling for transforming enterprise data into decision signals.</p>
  </div>
</section>

## Research Frameworks

<div class="research-paper">
  <div class="research-paper-copy">
    <p class="research-eyebrow">Resilience Optimization / Service Recovery</p>
    <h3>Service Dependency Recovery and Resilience Optimization</h3>
    <p>
      This work studies how to restore critical services after an outage. It models surviving links,
      failed dependencies, and the cost of individual repair actions as a directed service graph.
    </p>
    <p>
      Repair actions are grouped into recovery certificates to examine where they reinforce one another
      or lose coverage. Exact and approximation methods then identify which dependencies to repair
      to restore critical service reachability. The resulting plans support cloud service restoration
      and dependency repair.
    </p>
    <ul>
      <li>Focus: primitive recovery actions, critical terminal reachability, and service-dependency repair.</li>
      <li>Method: certificate-loss decomposition, complementarity analysis, FPT exact recovery, and condensation reduction.</li>
      <li>Managerial use: auditable restoration planning for service outages, dependency failures, and operational resilience.</li>
    </ul>
  </div>
  <figure class="research-figure">
    <img src="{{ '/assets/img/research-pdr-framework.svg' | relative_url | bust_file_cache }}" alt="Service dependency recovery framework linking service graphs, recovery certificates, and repair decisions">
    <figcaption>Service dependency recovery through certificate-based optimization.</figcaption>
  </figure>
</div>

<div class="research-paper">
  <div class="research-paper-copy">
    <p class="research-eyebrow">Decision Science / Simulation / Automation</p>
    <h3>Automation Decision Intelligence: TOPSIS Design Analytics and Microservice Quality Assessment</h3>
    <p>
      This work brings together two studies on automation: choosing product and process designs with
      TOPSIS, and assessing microservice quality through data modeling, multilayer perceptron (MLP)
      prediction, and Kaplan–Meier reliability analysis.
    </p>
    <p>
      Product, process, and service data are used to compare design options, assess reliability, and
      guide automation investment, service architecture choices, and quality improvement.
    </p>
    <ul>
      <li>Focus: product innovation, process design, microservice architecture, reliability, and service quality.</li>
      <li>Method: TOPSIS ranking, data modeling, MLP prediction, Kaplan–Meier analysis, and system simulation.</li>
      <li>Managerial use: automation investment, architecture selection, and quality improvement.</li>
    </ul>
  </div>
  <figure class="research-figure">
    <img src="{{ '/assets/img/research-automation-framework.svg' | relative_url | bust_file_cache }}" alt="Automation research framework linking operational data, TOPSIS ranking, learning, and reliability analysis">
    <figcaption>TOPSIS design comparison and microservice quality assessment for automation.</figcaption>
  </figure>
</div>

<section class="research-note">
  <h3>Lab Direction</h3>
  <p>
    Enterprise Decision Intelligence Lab develops practical analytical frameworks for technology managers,
    executives, and researchers who need to decide under uncertainty. The long-term research direction is to
    integrate decision science and computational learning into simulation-based governance systems that can
    evaluate innovation, reliability, market risk, and digital transformation strategy before organizations commit
    major resources.
  </p>
</section>
