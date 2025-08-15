---
title: Community Forums
slug: forum
menu: Community Forums
metadata:
    description: 'Connect with educators, share experiences, and get expert support from The Energy Museum community.'
    og:title: 'Energy Museum Community Forums'
    og:description: 'Join our interactive FAQ and discussion community for energy education professionals.'
    
visible: true
published: true
date: '2024-01-01 12:00'
publish_date: '2024-01-01 12:00'
template: forum

comments:
    enabled: true
    moderation: true
    categories: 
        - trainings
        - funding
        - services
        - programs
        - support
        - general

forum_config:
    moderation_queue: true
    guest_posting: true
    team_auto_pin: true
    voting_enabled: true
    search_enabled: true
    roles_enabled: true
    category_filtering: true
    
form:
    name: new_forum_topic
    action: /forum
    method: POST
    
process:
    - email:
        subject: "[Energy Museum Forum] New Discussion: {{form.value.title|e}}"
        body: "{% include 'forms/data.html.twig' %}"
        to: 
          - "admin@theenergymuseum.com"
          - "moderator@theenergymuseum.com"
    - redirect: /forum?submitted=true
---

# Community Forums

Connect with educators, share experiences, and get expert support from The Energy Museum community. Your questions and insights help us all grow together.

Our forums are organized into categories to help you find exactly what you need:

## 🎓 Trainings
Questions about OpenSciEd workshops, professional development, and training programs.

## 💰 Funding/Grants  
Grant opportunities, funding sources, and implementation support for STEM programs.

## 🤝 Services/Consultation
Questions about field experiences, customized programs, and consultation services.

## 📅 Programs/Events
Family STEM nights, community programs, and upcoming educational events.

## 🛠️ Support
Technical support, troubleshooting, and general assistance with our services.

## 💬 General Questions
Open discussions, general questions, and community conversations about energy education.

---

## Community Guidelines

To maintain a supportive and professional environment:

- **Be respectful and constructive** in all interactions
- **Search existing topics** before creating new ones
- **Use clear, descriptive titles** for your questions
- **Include relevant details** to help others understand your situation
- **Share your experiences** to help fellow educators
- **Follow up** on your questions to let others know what worked

## Moderation

All posts are reviewed by our team to ensure quality and relevance. Team responses are automatically pinned to highlight official answers and best practices.

**Response Times:**
- General questions: 24-48 hours
- Technical issues: Same business day
- Urgent matters: Use our [direct contact form](/contact)

## Getting Started

Ready to join the conversation? Browse the categories above or [ask a new question](/forum/new-topic) to get started!
