/**
 * Main Application Component
 * 
 * This is the primary React component that renders the complete portfolio website.
 * It includes sections for hero, about, experience, projects, skills, and education.
 * The component uses Tailwind CSS for styling and manages state for project modals.
 * 
 * Usage: Import and render this component as the main app entry point
 * Expected: Renders a complete portfolio website with interactive project modals
 * 
 * Features:
 * - Responsive design with Tailwind CSS
 * - Interactive project modals
 * - Professional portfolio layout
 * - Mobile-friendly interface
 * - Dynamic SEO updates
 * 
 * Author: Pankaj Khandelwal
 * Created: 2024
 * Updated: 2024 - Added comprehensive documentation and dynamic SEO
 */

import React, { useState, useEffect } from 'react';
import { updateSEO } from './utils/seo';

// --- Data ---
// It's a best practice to keep your data separate from your components.
const portfolioData = {
  name: "Pankaj Khandelwal",
  title: "Tech Lead & Engineering Manager",
  heroTitle: "Tech Lead & Engineering Manager with Proven Leadership",
  heroSubtitle: "A seasoned technical leader with Engineering Manager experience, focused on mentorship, process improvement, and delivering business impact.",
  location: "Hyderabad",
  contact: {
    phone: "981-030-0513",
    email: "pankaj139@gmail.com",
    linkedin: "linkedin.com/in/pankaj139",
  },
  summary: "I am a seasoned engineering leader with over a decade of experience building and mentoring high-performing teams, including Engineering Manager experience. My expertise lies in architecting scalable cloud solutions, establishing engineering best practices, and leading cross-functional teams that drive efficiency, reliability, and business impact. I have a proven track record of leading complex technical migrations, optimizing systems, and fostering a culture of ownership and continuous improvement. I am passionate about growing into senior Engineering Management roles where I can scale my impact across multiple teams and drive organizational engineering excellence.",
  experiences: [
    {
      company: "Highspot India Pvt Ltd",
      role: "Sr. Software Development Engineer / Tech Lead",
      period: "Apr 2024 - Present",
      location: "Hyderabad, India",
      points: [
        "Led and mentored a technical team of 6 engineers focused on critical DevOps and Observability initiatives.",
        "Architected a platform-wide metadata enrichment system, enabling team-specific observability dashboards and accurate cost attribution.",
        "Architected and led the migration from an in-house feature flag system to LaunchDarkly, improving release safety and developer velocity.",
        "Drove a strategic migration of observability tools to New Relic, resulting in $1 million in annual savings.",
        "Initiated and owned the development of automated incident resolution processes for Solr, reducing MTTR by 40%.",
      ],
    },
    {
      company: "Darwin Box Digital Solution Pvt Ltd",
      role: "Engineering Manager",
      period: "Mar 2023 - Oct 2023",
      location: "Hyderabad, India",
      points: [
        "Managed a cross-functional team of 6 engineers, implementing agile processes that increased team productivity by 20% and reduced production issues by 50%.",
        "Led the successful integration of Singapore's Singpass identity service, dramatically simplifying the onboarding experience for candidates.",
        "Oversaw the development and delivery of a new performance management module.",
        "Mentored and coached the team, fostering a high-performing work environment where two engineers were promoted within the year.",
      ],
    },
    {
      company: "Acquia India Pvt Ltd.",
      role: "Principal Software Engineer / Tech Lead",
      period: "Jul 2020 - Mar 2023",
      location: "Pune, India",
      points: [
        "As Technical Lead, I directed the architectural vision for Acquia Search, a high-traffic service, achieving 99.96% uptime.",
        "Led a cost-optimization initiative that reduced infrastructure COGS by over 50% annually.",
        "Re-architected a critical monitoring system to scale for 20,000+ collections, ensuring 100% monitoring coverage.",
        "Groomed and mentored a distributed team of 10 engineers, fostering technical growth and project ownership.",
      ],
    },
     {
      company: "Deloitte Consulting India Pvt Ltd.",
      role: "Senior Consultant",
      period: "Jun 2018 - Jul 2020",
      location: "Gurgaon, India",
      points: [
        "Led the architecture for the Bersin Member site modernization, increasing user engagement by 25%.",
        "Drastically improved a critical API's performance, reducing response time from over 60 seconds to under 1 second.",
        "Designed a scalable architecture to migrate a legacy web application to AWS, reducing operational costs by 40%.",
      ],
    },
    {
      company: "Infoedge India Ltd",
      role: "Lead Architect & Developer",
      period: "Aug 2015 - May 2018",
      location: "Noida, India",
      points: [
          "Led the design of a new authentication microservice, achieving <5ms latency and enabling a company-wide microservices migration.",
          "Architected and introduced a RabbitMQ-based messaging system, reducing critical API response times from >60s to under 200ms.",
          "Spearheaded the migration from Memcache to Redis, leveraging advanced data structures to reduce database load by over 30%.",
          "Led the technical overhaul of the real-time chat infrastructure, resulting in a 600% increase in user engagement.",
      ]
    },
    {
        company: "Avyukta Infotech",
        role: "Founder / Lead Architect",
        period: "Oct 2014 - Aug 2015",
        location: "Noida, India",
        points: [
            "Founded and led all technical aspects of two e-commerce deals aggregator websites, growing the user base from 0 to 10,000 monthly active users within the first year.",
        ]
    },
    {
        company: "Infoedge India Ltd",
        role: "Sr. Software Engineer",
        period: "May 2012 - Oct 2014",
        location: "Noida, India",
        points: [
            "Led the architectural redesign of the Contact Engine backend, creating new, scalable APIs that supported the successful launch of the company's mobile application.",
        ]
    },
    {
        company: "Sapient Consulting India Pvt Ltd",
        role: "Associate TRM",
        period: "Jul 2010 - May 2012",
        location: "Gurgaon, India",
        points: [
            "Contributed to the development and enhancement of the OpenLink Endur platform for a leading European energy trading company.",
        ]
    }
  ],
  projects: [
    {
        id: "highspot-metadata",
        title: "Observability Data Enrichment",
        company: "Highspot",
        resumePoint: "Architected a platform-wide metadata enrichment system, enabling team-specific observability dashboards and accurate cost attribution.",
        problem: "As an organization, we had no visibility into which teams or features were generating our massive volume of observability data. This made it impossible for teams to create their own dashboards or for us to accurately budget and attribute observability costs.",
        challenges: [
            "Designing a system that could automatically capture context for various entry points, including web requests, background jobs, and other tasks.",
            "Implementing this with minimal changes required from the dozens of development teams across the organization.",
            "Navigating a large, complex codebase to identify all the correct entry points for injecting the metadata.",
        ],
        actions: [
            "I designed a centralized, configuration-based system where a single YAML file maps every action (e.g., API endpoint, job name) to its owning team and feature.",
            "I led the effort to modify the entry points of our applications (e.g., middleware for web requests, wrappers for jobs) to read this configuration at startup.",
            "At the beginning of each request or job, the system I designed injects this metadata into the thread's execution context.",
            "I then updated our common logging and metrics libraries to automatically pull this metadata from the thread and enrich every log, metric, and trace.",
        ],
        results: [
            "Enabled every engineering team to build their own dashboards in New Relic, filtered to their specific services and features.",
            "Provided the ability to accurately attribute observability costs to the teams that were generating the data.",
            "Vastly improved the debugging experience by providing rich, queryable context on all observability signals.",
        ],
        techStack: ["Ruby", "Java", "New Relic", "YAML", "Observability"],
    },
    {
        id: "highspot-launchdarkly",
        title: "Feature Flag System Migration to LaunchDarkly",
        company: "Highspot",
        resumePoint: "Architected and led the migration from an in-house feature flag system to LaunchDarkly, improving release safety and developer velocity.",
        problem: "Our in-house feature flagging system lacked advanced capabilities like user targeting and percentage rollouts. It was also becoming a maintenance burden, taking valuable engineering time away from product development.",
        challenges: [
            "Designing a seamless migration path that would not disrupt ongoing feature development or require a massive, coordinated refactoring effort across all teams.",
            "Ensuring the new system was future-proof and could be easily adapted if we ever needed to switch to another vendor.",
            "Cleaning up and migrating hundreds of existing feature flags, many of which were obsolete.",
        ],
        actions: [
            "I architected a new, cross-platform abstraction library (for Ruby and Java) that provided a standard interface for feature flagging.",
            "This library was designed with a fallback mechanism, allowing us to perform a phased migration: first using the legacy system with LaunchDarkly as a fallback, then switching to LaunchDarkly-first, and finally removing the legacy system completely.",
            "I led the analysis of all existing flags and drove the effort to deprecate over 30% of them.",
            "I wrote and executed the migration scripts to move all active flags and their variations to LaunchDarkly, including a thorough validation process.",
        ],
        results: [
            "Empowered development teams with advanced release capabilities like percentage rollouts, advanced user targeting, and a full audit trail.",
            "Eliminated the maintenance overhead of the legacy in-house system.",
            "The abstract library design de-risked the migration and made the entire feature flagging system more maintainable and adaptable for the future.",
        ],
        techStack: ["LaunchDarkly", "Ruby", "Java", "Migration Strategy", "API Design"],
    },
    {
        id: "deloitte-ifb",
        title: "API Performance Optimization",
        company: "Deloitte",
        resumePoint: "Drastically improved a critical API's performance, reducing response time from over 60 seconds to under 1 second.",
        problem: "A key API on the Interactive Framework Benchmark (IFB) website was taking over a minute to respond, making the user experience unusable and causing frequent timeouts.",
        challenges: [
            "Diagnosing the root cause of the performance issue within a large, unfamiliar, and custom-built PHP framework.",
            "Refactoring the legacy code to be more efficient without introducing regressions.",
        ],
        actions: [
            "I profiled the application and identified a classic N+1 query problem where the code was executing over 1,000 individual database queries inside a loop.",
            "I dove into the unfamiliar codebase, understood the data model and business logic, and led the refactoring effort to use a single, optimized database query to fetch all the required data at once.",
        ],
        results: [
            "Reduced the API response time from over 60 seconds to under 1 second, a ~98% improvement.",
            "Made the interactive benchmark feature usable for clients.",
            "Demonstrated the ability to quickly learn a new codebase and solve complex performance problems.",
        ],
        techStack: ["PHP", "Custom Framework", "MySQL", "Performance Tuning"],
    },
    {
        id: "infoedge-contact-engine",
        title: "Contact Engine API Redesign",
        company: "Infoedge",
        resumePoint: "Led the architectural redesign of the Contact Engine backend, creating new, scalable APIs that supported the successful launch of the company's mobile application.",
        problem: "The Contact Engine—the core system for all user interactions like sending interests and messages—was part of a monolith that rendered HTML directly. This architecture could not support the company's strategic goal of launching a mobile app, which required a modern, JSON-based API.",
        challenges: [
            "Rewriting a business-critical system from scratch without disrupting the existing website.",
            "Designing a flexible system to handle complex business rules based on user subscription levels.",
            "Creating a consistent API schema that could be consumed by both the web frontend and new mobile clients.",
        ],
        actions: [
            "I led the initiative to re-architect the Contact Engine in the Symfony (PHP) MVC framework.",
            "I designed a new database-driven decision engine to manage the complex logic of which actions a user could take based on their subscription status.",
            "I chose the Factory design pattern to handle the different types of user interactions in a clean, maintainable way.",
            "I collaborated closely with the mobile and frontend teams to define and deliver a versioned, RESTful API that served as the single source of truth for all client applications.",
        ],
        results: [
            "Successfully unblocked the launch of the company's first mobile application.",
            "Created a modern, scalable, and maintainable API-driven backend for a core business function.",
            "Established a versioned API architecture that could evolve to support future features without breaking existing clients.",
        ],
        techStack: ["PHP", "Symfony", "API Design", "MySQL", "Factory Pattern"],
    },
    {
      id: "avyukta-startup",
      title: "E-Commerce Deals Aggregator",
      company: "Avyukta Infotech (Startup)",
      resumePoint: "Designed, scaled, and operated two e-commerce deals aggregator websites, growing the user base from 0 to 10,000 monthly active users within the first year.",
      problem: "As a founder, the goal was to rapidly build and launch an e-commerce platform to aggregate deals from various online retailers. The challenge was to get to market quickly with a scalable and maintainable solution while managing all aspects of the technology and infrastructure on a startup budget.",
      challenges: [
        "Choosing a technology stack that would allow for rapid development and iteration.",
        "Scaling the infrastructure from a simple shared hosting environment to a more robust cloud-based solution as traffic grew.",
        "Managing all aspects of the business, from development and operations to user acquisition.",
      ],
      actions: [
        "I chose WordPress as the foundational CMS to leverage its rich plugin ecosystem for rapid feature development.",
        "I designed and developed a custom WordPress theme and several custom widgets to create a unique user experience.",
        "Initially launched on cost-effective shared hosting, I later led the migration of the entire platform to AWS (EC2, RDS) to handle the growing user traffic.",
        "I leveraged WordPress caching plugins to ensure the site remained performant as we scaled to 10,000 monthly active users.",
      ],
      results: [
        "Successfully launched two e-commerce websites from scratch.",
        "Grew the user base from 0 to 10,000 monthly active users within the first year.",
        "Gained invaluable experience in the entire lifecycle of a product, from ideation and development to scaling and operations.",
      ],
      techStack: ["WordPress", "PHP", "MySQL", "jQuery", "AWS EC2", "AWS RDS"],
    },
    {
      id: "infoedge-auth",
      title: "Authentication Microservice",
      company: "Infoedge",
      resumePoint: "Led the design of a new authentication microservice, achieving <5ms latency and enabling a company-wide microservices migration.",
      problem: "As part of a company-wide migration from a PHP monolith to Java-based microservices, a centralized and highly performant authentication service was required. The existing auth logic was a tightly-coupled performance bottleneck within the monolith, unable to handle increasing peak traffic.",
      challenges: [
        "Designing a foundational service that all other new microservices would depend on.",
        "Achieving an extremely aggressive performance target of <5ms per request to ensure it would never be a bottleneck.",
        "Extracting complex authentication and authorization logic from a legacy monolithic codebase.",
      ],
      actions: [
        "I led the design and implementation of a new, standalone authentication microservice using Java and the Spring Boot framework.",
        "To achieve the performance goals, I architected a stateless authentication model using JSON Web Tokens (JWTs).",
        "My team leveraged a high-performance Redis cluster for all session and token management, ensuring lightning-fast data lookups.",
      ],
      results: [
        "Achieved a consistent API response time of under 5 milliseconds, exceeding the project's performance goals.",
        "Created a critical, foundational service that unblocked the broader company initiative to migrate to a microservices architecture.",
        "Delivered a secure, scalable, and reliable authentication system for the entire platform.",
      ],
      techStack: ["Java", "Spring Boot", "JWT", "Redis", "MySQL"],
    },
    {
      id: "infoedge-chat",
      title: "Real-Time Chat Feature Overhaul",
      company: "Infoedge",
      resumePoint: "Overhauled the real-time chat infrastructure, leading to a 600% increase in user engagement.",
      problem: "The existing chat feature was built on an old, single-server version of Openfire, making it highly unreliable. It also had poor UI visibility and was not integrated into the mobile apps, leading to extremely low user adoption.",
      challenges: [
        "Replacing a core, real-time service without disrupting users.",
        "Architecting a new system that could handle a massive increase in load from new features (like 'online status') and the upcoming mobile app launch.",
        "Stabilizing the new, high-traffic cluster which was initially prone to crashing under load.",
      ],
      actions: [
        "I led a team of three junior developers to upgrade to a modern version of Openfire that supported clustering for high availability and scalability.",
        "I collaborated with the design team to improve the UI and visibility of the chat feature across the website.",
        "My team successfully launched the chat feature on the Android and iOS apps for the first time.",
        "When the new cluster became unstable under the new load, I performed deep performance tuning of the JVM, specifically optimizing the Garbage Collector and heap memory settings to achieve stability.",
      ],
      results: [
        "Drove a 600% increase in the usage of the chat feature.",
        "Delivered a highly reliable and scalable real-time chat platform capable of supporting both web and mobile clients.",
        "Significantly improved user engagement and interaction on the platform.",
      ],
      techStack: ["Openfire", "Java", "JVM Tuning", "MySQL"],
    },
    {
      id: "infoedge-redis",
      title: "Caching Modernization with Redis",
      company: "Infoedge",
      resumePoint: "Spearheaded the migration from Memcache to Redis, leveraging advanced data structures to reduce database load by over 30%.",
      problem: "The existing caching layer was a severely under-provisioned (1GB) Memcache instance. It could only store simple key-value pairs and wasn't large enough to be effective. This forced the application to make expensive database calls and perform repetitive calculations on every page load, such as calculating user interaction counts.",
      challenges: [
        "Migrating the caching layer of a high-traffic application without downtime.",
        "Introducing Redis, a new technology for the team, and establishing best practices for its use.",
        "Rethinking the caching strategy to go beyond simple key-value and leverage more powerful data structures.",
      ],
      actions: [
        "I led a team of two junior developers to replace Memcache with a new, properly-sized Redis cluster.",
        "I designed and developed a new caching library for the team to use.",
        "Instead of just caching raw data, my team used Redis Hashes to store structured user profile data and to cache pre-calculated counts (accepts, declines, etc.). This meant the application could fetch all the data it needed for a component in a single, fast call to Redis.",
      ],
      results: [
        "Reduced read load on the primary database by over 30%.",
        "Significantly improved application performance and response times.",
        "Enabled more sophisticated caching patterns across the application, making the entire system more scalable.",
      ],
      techStack: ["Redis", "PHP", "Memcache"],
    },
    {
      id: "infoedge-rabbitmq",
      title: "Asynchronous Task Processing with RabbitMQ",
      company: "Infoedge",
      resumePoint: "Architected and introduced a RabbitMQ-based messaging system, reducing critical API response times from >60s to under 200ms.",
      problem: "Critical user-facing APIs, such as accepting or declining a contact request, were performing slow, synchronous tasks like sending emails, SMS, and push notifications. This caused the API response times to exceed 60 seconds, leading to a terrible user experience and a high risk of request timeouts.",
      challenges: [
        "Introducing a message broker (RabbitMQ) as a brand new component into the company's tech stack.",
        "Architecting a highly available master-slave cluster for RabbitMQ to ensure it was a reliable, core piece of infrastructure.",
        "Developing a standardized client library to make it easy for developers across different services to adopt the new asynchronous pattern.",
      ],
      actions: [
        "I led a team of two junior developers to research, architect, and deploy a new, highly available RabbitMQ cluster.",
        "I developed a custom wrapper library that provided a simple interface for developers to publish messages to the queue.",
        "My team identified all the slow, synchronous operations in our critical API paths and refactored them to instead publish a message to RabbitMQ.",
        "We built dedicated consumer services to process these messages asynchronously from the queue.",
      ],
      results: [
        "Drastically improved user experience by reducing the API response time for key actions from over 60 seconds to under 200 milliseconds.",
        "Increased the overall reliability and resilience of the application by decoupling it from external service providers.",
        "Established a scalable, asynchronous processing pattern that was adopted by multiple teams across the organization.",
      ],
      techStack: ["RabbitMQ", "PHP", "Java"],
    },
    {
      id: "darwinbox-singpass",
      title: "Singpass Integration for Candidate Onboarding",
      company: "Darwin Box",
      resumePoint: "Led the integration of Singapore's Singpass identity service, dramatically simplifying the onboarding experience.",
      problem: "Singaporean candidates for our client companies had to manually fill out a lengthy onboarding form, a time-consuming and error-prone process. This also created a significant workload for HR reviewers who had to verify the manually entered data.",
      challenges: [
        "Implementing a complex, multi-step OAuth 2.1 flow without using any third-party libraries due to strict internal codebase policies.",
        "Building a new, isolated, and highly secure microservice from scratch to meet the stringent security requirements of the official Singpass API.",
        "Deeply understanding the authorization code flow with client assertion to ensure a secure and reliable implementation for handling sensitive personal data.",
      ],
      actions: [
        "I architected and led the implementation of the new, secure microservice to handle the complex, backend Singpass authentication and data retrieval process.",
        "My team built the browser-based authorization flow and the secure server-to-server token exchange from the ground up, without using any third-party libraries.",
        "I collaborated closely with another developer who then used the verified data provided by my service to automatically populate the candidate's onboarding form.",
      ],
      results: [
        "Transformed the candidate onboarding from a tedious manual data entry task into a seamless one-click experience.",
        "Eliminated data entry errors and significantly reduced the time required for HR teams to review and verify candidate information.",
        "Successfully delivered a highly secure integration that met both internal and external compliance standards.",
      ],
      techStack: ["PHP", "OAuth 2.1", "Microservices", "Security"],
    },
    {
      id: "acquia-cogs",
      title: "Infrastructure Cost Optimization",
      company: "Acquia",
      resumePoint: "Led a cost-optimization initiative that reduced infrastructure COGS by over 50% annually.",
      problem: "The standard Solr cluster deployment consisted of 5 dedicated Solr nodes and 3 separate Zookeeper nodes. With a large number of clusters, this architecture was expensive, costing over $1 million annually. Initial analysis showed that the clusters were significantly underutilized.",
      challenges: [
        "Reducing costs without compromising the performance or high availability of the service.",
        "Safely co-locating Zookeeper and Solr services on the same instances, a significant architectural change with potential risks of resource contention.",
        "Validating the changes to ensure stability under peak loads.",
      ],
      actions: [
        "I led a deep analysis of a year's worth of performance data to understand the resource consumption patterns of different cluster sizes.",
        "My team performed software-level optimizations, tuning Java Garbage Collection (GC) and heap memory settings to reclaim resources.",
        "Based on the data, I re-architected the cluster to co-locate the Zookeeper ensemble on three of the Solr nodes, eliminating the need for dedicated Zookeeper instances. We set hard memory limits for Zookeeper to mitigate any risk of resource contention.",
        "After further observation, my team and I confidently downsized the EC2 instance types for each cluster size (e.g., from m4.2xlarge to m4.xlarge) to right-size the infrastructure.",
      ],
      results: [
        "Reduced annual infrastructure costs by over 50%.",
        "Maintained the same high levels of performance and uptime for the service.",
        "Established a data-driven methodology for future cost-optimization efforts.",
      ],
      techStack: ["AWS EC2", "Solr", "Zookeeper", "JVM Tuning", "Cost Optimization"],
    },
    {
      id: "deloitte-bersin",
      title: "Bersin Member Site Modernization",
      company: "Deloitte",
      resumePoint: "Led the architecture and development of the Bersin Member site, which increased user engagement by 25%.",
      problem: "The Bersin site, a paywalled HR research portal, was built on a legacy, non-MVC codebase. Its user experience was hampered by poor search, a lack of content recommendations, and suboptimal performance. The developer workflow was also inefficient, with templates managed in a database instead of version control.",
      challenges: [
        "Modernizing the entire application stack without disrupting the content publishing workflow.",
        "Improving core user-facing features like search and content discovery.",
        "Establishing a modern, version-controlled developer process.",
      ],
      actions: [
        "I led the re-architecture of the entire backend from unstructured PHP to the Laravel MVC framework.",
        "My team migrated all page templates from the database into the codebase, enabling version control with Git.",
        "We implemented a new, powerful search experience using Solr, including features like query highlighting.",
        "I led the integration of a new recommendation engine, built by a dedicated machine learning team, to provide smarter content suggestions.",
        "My team leveraged Redis for caching to dramatically improve page load times and overall application performance.",
      ],
      results: [
        "Increased user engagement by 25% through a vastly improved user experience.",
        "Modernized the tech stack, making the application more secure, scalable, and maintainable.",
        "Significantly improved the developer workflow, leading to faster feature delivery.",
      ],
      techStack: ["PHP", "Laravel", "Solr", "Redis", "MySQL", "Git"],
    },
    {
      id: "acquia-search",
      title: "Acquia Search Platform Modernization",
      company: "Acquia",
      resumePoint: "As Technical Lead, directed the architectural vision for Acquia Search, resulting in 99.96% uptime over a 12-month period for a service handling billions of requests daily.",
      problem: "The platform was running on a legacy, fragile version of Solr 3 with single replicas, leading to reliability issues. Critically, all infrastructure management—provisioning, resizing, configuration—was a slow, manual process requiring engineer intervention, which was not scalable.",
      challenges: [
        "Upgrading a core, high-traffic service without impacting existing customers.",
        "Automating complex infrastructure provisioning to create a true self-service platform.",
        "Handling the migration of existing customer data from Solr 3 to Solr 7, given significant underlying schema and configuration changes.",
      ],
      actions: [
        "I led the architectural vision to upgrade from Solr 3 to Solr 7 (SolrCloud), enforcing a highly available standard of 3 replicas per collection, distributed across multiple AWS Availability Zones.",
        "My team used AWS CloudFormation to automate the entire infrastructure lifecycle, from cluster creation to backups and resizing.",
        "I designed and led the development of a comprehensive set of internal APIs to power a self-service platform, allowing customers to provision, manage, and configure their own Solr collections directly.",
        "After evaluating the complexity, we made a strategic decision to not build an automated data migration tool. Instead, we focused on providing customers with a seamless experience on the new platform to create their collections and re-index their data at their own pace.",
      ],
      results: [
        "Transformed the service from a manual, high-touch system into a fully automated, self-service platform.",
        "Drastically improved reliability, achieving 99.96% uptime.",
        "Eliminated the dependency on the support and engineering teams for all provisioning and management tasks, freeing up valuable resources.",
      ],
      techStack: ["AWS CloudFormation", "Solr", "Zookeeper", "Java", "PHP"],
    },
     {
      id: "acquia-ping",
      title: "Scalable Monitoring for Solr Collections",
      company: "Acquia",
      resumePoint: "Re-architected a critical monitoring system to scale for 20,000+ services, ensuring 100% monitoring coverage.",
      problem: "A core monitoring process, designed to ping over 20,000 Solr collections every two minutes, was built on a single, monolithic Lambda function. As the number of collections grew, this function began to time out, failing to complete its run and creating a massive blind spot in our monitoring and alerting.",
      challenges: [
        "The existing monolithic architecture could not scale horizontally.",
        "The process had a strict time limit of two minutes to complete.",
        "Failure of the system led to unreliable alerting and a lack of confidence in our monitoring.",
      ],
      actions: [
        "I re-architected the process using a serverless, event-driven, fan-out pattern.",
        "The new workflow begins with a Lambda that groups all 20,000+ collections by their parent cluster.",
        "I chose AWS Step Functions to orchestrate the process, triggering dozens of parallel Lambda functions—one for each cluster—to perform the pings simultaneously.",
        "Each worker Lambda publishes its results to an SNS topic, decoupling the ping process from the aggregation.",
        "A final aggregator Lambda consumes the results from SNS, compiles the final status, and sends it to our observability tool (Sumo Logic).",
      ],
      results: [
        "Reduced the total execution time from over two minutes (and timing out) to a consistent ~90 seconds.",
        "Achieved 100% monitoring coverage for all collections, eliminating the previous blind spot.",
        "Drastically reduced the number of false-positive alerts, improving the on-call experience.",
      ],
      techStack: ["AWS Lambda", "AWS Step Functions", "AWS SNS", "Python", "Serverless"],
    },
    {
      id: "darwinbox-process",
      title: "Process Implementation and Team Stabilization",
      company: "Darwin Box",
      resumePoint: "Implemented and streamlined processes, resulting in a 20% increase in team productivity and a 50% reduction in production issues.",
      problem: "The team was in a reactive state with no stable priorities, a high bug load, and a lack of engineering leadership. This led to constant context switching, low morale, and an inability to deliver features predictably.",
      challenges: [
        "Gaining alignment with the Product Manager on a stable, committed roadmap.",
        "Breaking the cycle of constant bug-fixing to create space for feature development.",
        "Establishing clear roles and communication channels to eliminate work silos.",
      ],
      actions: [
        "I instituted a formal sprint planning process, ensuring the team and PM committed to a fixed scope of work for each sprint.",
        "I organized dedicated 'bug bash' sprints in collaboration with QA to systematically reduce the bug backlog.",
        "I established myself as the single point of contact for engineering, shielding the team from distractions and clarifying technical dependencies.",
        "I introduced daily stand-ups and regular retrospectives to improve visibility and foster a culture of continuous improvement.",
      ],
      results: [
        "Increased team productivity, measured by ticket velocity per sprint, by 20%.",
        "Reduced production issues by 50% by proactively addressing the bug backlog.",
        "Vastly improved team morale and predictability of feature delivery.",
      ],
      techStack: ["JIRA", "Agile", "Scrum", "Process Improvement"],
    },
    {
      id: "new-relic-migration",
      title: "Strategic Migration of Observability Tools to New Relic",
      company: "Highspot",
      resumePoint: "Drove a strategic migration of observability tools to New Relic, coordinating technical efforts that resulted in $1 million in annual savings.",
      problem: "Our observability stack was fragmented across ELK, Grafana, and Rollbar, leading to high infrastructure costs and siloed data that made debugging inefficient.",
      challenges: [
        "Lack of documentation for existing data pipelines.",
        "Discovered actual data volume was 18TB/day, nearly 6x the initial estimate of 90TB/month.",
        "The migration required a complex technical transition, not just a simple endpoint switch.",
      ],
      actions: [
        "I initiated a deep-dive to document all data sources and flows.",
        "I developed a custom tool in Python to programmatically identify and eliminate unused and high-cardinality metrics from Prometheus.",
        "My team configured FluentBit to filter and forward logs from our services (Ruby, Java, Clojure) to New Relic.",
        "I executed a phased migration using a dual-target approach, sending data to both old and new systems for validation before decommissioning the legacy stack.",
      ],
      results: [
        "Achieved $1 million in annual savings through tool consolidation and data optimization.",
        "Reduced debugging time by an estimated 15% by providing a unified view of logs, traces, and errors.",
        "Improved system reliability and developer efficiency.",
      ],
      techStack: ["New Relic", "FluentBit", "Prometheus", "Grafana", "Python", "Ruby", "Java", "Clojure"],
    },
    {
      id: "solr-automation",
      title: "Automated Incident Resolution for Solr",
      company: "Highspot",
      resumePoint: "Initiated and owned the development of automated incident resolution processes for Solr, improving system reliability and reducing mean time to resolution (MTTR) by 40%.",
      problem: "Solr instances were frequently failing due to out-of-memory errors, requiring a slow, manual, and error-prone recovery process by on-call engineers.",
      challenges: [
        "Repetitive on-call toil was taking focus away from root cause analysis.",
        "Manual recovery steps (traffic draining, SSH, restart) directly increased MTTR.",
      ],
      actions: [
        "I architected a 'self-healing' automation using a serverless approach.",
        "I configured a New Relic alert on Solr heap memory to fire a webhook to an AWS API Gateway.",
        "The gateway triggers an AWS Lambda function that identifies the unhealthy host from the webhook payload.",
        "The Lambda function uses AWS Systems Manager (SSM) Run Command to securely execute a restart script on the affected instance.",
        "I made a strategic trade-off to prioritize immediate restart over slower, graceful connection draining, as the node was already unhealthy.",
      ],
      results: [
        "Reduced Mean Time To Resolution (MTTR) by 40%.",
        "Eliminated the need for on-call engineer intervention for this specific, common failure.",
        "Significantly improved the reliability and resilience of the Solr cluster.",
      ],
      techStack: ["AWS Lambda", "API Gateway", "SSM Run Command", "New Relic", "Python"],
    },
    {
        id: "logging-library",
        title: "Cross-Platform Common Logging Library",
        company: "Highspot",
        resumePoint: "Architected and delivered a common logging library that reduced time spent on debugging by an estimated 15% across development teams.",
        problem: "Logging was inconsistent across services, with four different libraries in use for Ruby alone. This created unstructured logs and a fragmented debugging context, with errors (in Rollbar) disconnected from logs (in ELK) and traces.",
        challenges: [
            "The solution needed to work across a polyglot stack: Ruby/Rails, Java, Clojure, and JavaScript/React.",
            "Driving adoption across dozens of development teams required a significant coordination effort.",
        ],
        actions: [
            "I architected a unified logging framework by establishing a common pattern across all services.",
            "I designed and implemented language-specific logging libraries that acted as standardized wrappers around the native New Relic APM SDK.",
            "These wrappers enforced a consistent, structured JSON log format and automatically injected APM metadata (trace_id, span_id) into every log line.",
            "The library provided a simple, standard function for error reporting (e.g., logger.error()) that unified error reporting in New Relic's Error Inbox.",
        ],
        results: [
            "Reduced debugging time by an estimated 15% by correlating logs, traces, and errors in a single platform.",
            "Improved overall observability with structured, searchable logs.",
            "Simplified onboarding for new engineers by providing a single, standard way of logging.",
        ],
        techStack: ["Ruby", "Java", "Clojure", "JavaScript", "React", "New Relic SDK"],
    },
  ],
  skills: {
    Leadership: ["Team Building", "Mentoring", "Project Leadership", "Process Improvement", "Strategic Planning"],
    Cloud_AWS: ["EC2", "S3", "RDS", "Aurora", "SQS", "SNS", "Elasticache", "CloudFront", "Route53", "CloudFormation", "Lambda", "API Gateway", "Step Functions", "SSM"],
    Backend: ["Node.js", "PHP", "Python", "Java", "Clojure", "Ruby", "Laravel", "Spring Boot", "Symfony", "LAMP Stack"],
    Frontend: ["JavaScript", "HTML5", "CSS", "jQuery", "Bootstrap", "React"],
    Databases_Caching: ["Redis", "MongoDB", "MySQL", "Memcache"],
    DevOps_Tools: ["Jenkins", "Git", "JIRA", "Solr", "Elasticsearch", "RabbitMQ", "Kubernetes", "Docker", "HAProxy", "New Relic", "Prometheus", "Grafana", "FluentBit"],
  },
  education: {
    degree: "B.Tech (Computer Science & Engineering)",
    institution: "Malaviya National Institute of Technology",
    period: "July 2006 - May 2010",
    location: "Jaipur, Rajasthan",
  },
  certifications: [
    "AWS Certified Solution Architect - Associate (2018)",
    "Keynote Speaker: Redis India Tour 2018 - 'How Redis was helpful in scaling Jeevansathi.com'",
  ],
};

// --- Icon Components ---
// Using inline SVGs for icons is lightweight and avoids external dependencies.
const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

const PhoneIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const ChevronRightIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);

const XIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);


// --- Components ---

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">{portfolioData.name}</h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-gray-300">
          <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">About</button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-cyan-400 transition-colors">Experience</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-400 transition-colors">Projects</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-cyan-400 transition-colors">Skills</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-700">
          <div className="container mx-auto px-6 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2"
            >
              Skills
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="py-20 md:py-32 bg-gray-900">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
        {portfolioData.heroTitle}
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
        {portfolioData.heroSubtitle}
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 text-gray-400">
        <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors px-4 py-2 rounded-lg hover:bg-gray-800/50">
          <MailIcon className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm sm:text-base">{portfolioData.contact.email}</span>
        </a>
        <a href={`tel:${portfolioData.contact.phone}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors px-4 py-2 rounded-lg hover:bg-gray-800/50">
          <PhoneIcon className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm sm:text-base">{portfolioData.contact.phone}</span>
        </a>
        <a href={`https://${portfolioData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors px-4 py-2 rounded-lg hover:bg-gray-800/50">
          <LinkedinIcon className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm sm:text-base">LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-gray-800">
    <div className="container mx-auto px-6">
      <h3 className="text-3xl font-bold text-white mb-12">About Me</h3>
      <div className="bg-gray-900 rounded-lg p-6 md:p-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {portfolioData.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-cyan-500/10 text-cyan-400 text-sm font-medium px-3 py-1 rounded-full border border-cyan-500/20">
                15 Years Experience
              </span>
              <span className="bg-cyan-500/10 text-cyan-400 text-sm font-medium px-3 py-1 rounded-full border border-cyan-500/20">
                Engineering Manager
              </span>
              <span className="bg-cyan-500/10 text-cyan-400 text-sm font-medium px-3 py-1 rounded-full border border-cyan-500/20">
                Technical Leader
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-900">
    <div className="container mx-auto px-6">
      <h3 className="text-3xl font-bold text-white mb-12">Professional Experience</h3>
      <div className="relative border-l-2 border-cyan-500/30">
        {portfolioData.experiences.map((exp, index) => (
          <div key={index} className="mb-12 md:flex items-start">
            <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-2 mt-1.5"></div>
            <div className="pl-6 md:pl-8 flex-1">
              <p className="text-sm text-gray-400">{exp.period}</p>
              <h4 className="text-lg md:text-xl font-bold text-white mt-1">{exp.role}</h4>
              <p className="text-sm md:text-md text-gray-300">{exp.company} - {exp.location}</p>
              <ul className="mt-4 list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
                {exp.points.map((point, i) => <li key={i} className="leading-relaxed">{point}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const Projects = ({ onProjectSelect }) => {
  const [selectedCompany, setSelectedCompany] = useState('All');
  
  // Get unique companies from projects and sort by work timeline
  const getCompanyOrder = (companyName) => {
    const companyTimeline = {
      'Sapient Consulting India Pvt Ltd': 1,
      'Infoedge India Ltd': 2,
      'Avyukta Infotech (Startup)': 3,
      'Deloitte Consulting India Pvt Ltd.': 4,
      'Acquia India Pvt Ltd.': 5,
      'Darwin Box Digital Solution Pvt Ltd': 6,
      'Highspot India Pvt Ltd': 7
    };
    
    // Handle variations in company names
    for (const [key, value] of Object.entries(companyTimeline)) {
      if (companyName.includes(key.split(' ')[0]) || key.includes(companyName.split(' ')[0])) {
        return value;
      }
    }
    return 999; // Default for any unmatched companies
  };
  
  const companies = ['All', ...Array.from(new Set(portfolioData.projects.map(project => project.company)))
    .sort((a, b) => getCompanyOrder(a) - getCompanyOrder(b))];
  
  // Filter projects based on selected company and sort chronologically (latest first)
  const filteredProjects = selectedCompany === 'All' 
    ? [...portfolioData.projects].sort((a, b) => getCompanyOrder(b.company) - getCompanyOrder(a.company))
    : portfolioData.projects.filter(project => project.company === selectedCompany);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-white mb-8">Key Projects & Achievements</h3>
        
        {/* Company Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {companies.map((company) => (
              <button
                key={company}
                onClick={() => setSelectedCompany(company)}
                className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                  selectedCompany === company
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                {company} {company !== 'All' && `(${portfolioData.projects.filter(p => p.company === company).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-lg p-4 md:p-6 flex flex-col justify-between hover:shadow-cyan-500/20 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div>
                <p className="text-sm text-cyan-400 font-semibold">{project.company}</p>
                <h4 className="text-lg md:text-xl font-bold text-white mt-2">{project.title}</h4>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">{project.resumePoint}</p>
              </div>
              <button 
                onClick={() => onProjectSelect(project)}
                className="mt-4 md:mt-6 text-cyan-400 font-semibold flex items-center group text-sm md:text-base"
              >
                View Details
                <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Showing {filteredProjects.length} of {portfolioData.projects.length} projects
            {selectedCompany !== 'All' && ` from ${selectedCompany}`}
          </p>
        </div>
      </div>
    </section>
  );
};


const Skills = () => (
  <section id="skills" className="py-20 bg-gray-900">
    <div className="container mx-auto px-6">
      <h3 className="text-3xl font-bold text-white mb-12">Technical Skills</h3>
      <div className="space-y-8">
        {Object.entries(portfolioData.skills).map(([category, skillsList]) => (
          <div key={category}>
            <h4 className="text-xl font-semibold text-cyan-400 mb-4">{category.replace(/_/g, ' & ')}</h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {skillsList.map((skill) => (
                <span key={skill} className="bg-gray-700 text-gray-200 text-xs md:text-sm font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
    <section id="education" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-white mb-12">Education & Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div className="bg-gray-900 p-4 md:p-6 rounded-lg">
                    <h4 className="text-lg md:text-xl font-bold text-white">{portfolioData.education.degree}</h4>
                    <p className="text-cyan-400 mt-1 text-sm md:text-base">{portfolioData.education.institution}</p>
                    <p className="text-gray-400 text-xs md:text-sm mt-2">{portfolioData.education.period} | {portfolioData.education.location}</p>
                </div>
                <div className="bg-gray-900 p-4 md:p-6 rounded-lg">
                     <h4 className="text-lg md:text-xl font-bold text-white">Certifications & Public Speaking</h4>
                     <ul className="mt-2 list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
                        {portfolioData.certifications.map((cert, i) => <li key={i} className="leading-relaxed">{cert}</li>)}
                     </ul>
                </div>
            </div>
        </div>
    </section>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-2 md:p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-3xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 md:p-6 lg:p-8 sticky top-0 bg-gray-800/80 backdrop-blur-sm flex justify-between items-center border-b border-gray-700">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white pr-4">{project.title}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white flex-shrink-0">
                <XIcon className="w-5 h-5 md:w-6 md:h-6" />
            </button>
        </div>
        
        <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
            <div>
                <h4 className="text-base md:text-lg font-semibold text-cyan-400 mb-2">The Problem</h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{project.problem}</p>
            </div>
             <div>
                <h4 className="text-base md:text-lg font-semibold text-cyan-400 mb-2">Key Challenges</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed text-sm md:text-base">
                    {project.challenges.map((challenge, i) => <li key={i}>{challenge}</li>)}
                </ul>
            </div>
             <div>
                <h4 className="text-base md:text-lg font-semibold text-cyan-400 mb-2">My Actions & Contributions</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed text-sm md:text-base">
                    {project.actions.map((action, i) => <li key={i}>{action}</li>)}
                </ul>
            </div>
             <div>
                <h4 className="text-base md:text-lg font-semibold text-cyan-400 mb-2">The Results</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed text-sm md:text-base">
                    {project.results.map((result, i) => <li key={i}>{result}</li>)}
                </ul>
            </div>
            {project.techStack && (
                 <div>
                    <h4 className="text-base md:text-lg font-semibold text-cyan-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="bg-gray-700 text-gray-200 text-xs md:text-sm font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};


export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    updateSEO({
      title: `${portfolioData.name} - ${portfolioData.title}`,
      description: portfolioData.summary,
      ogTitle: `${portfolioData.name} - ${portfolioData.title}`,
      ogDescription: portfolioData.summary
    });
  }, []);

  return (
    <div className="bg-gray-900 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects onProjectSelect={handleProjectSelect} />
        <Skills />
        <Education />
      </main>
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
        </div>
      </footer>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
}
