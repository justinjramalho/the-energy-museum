<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/Users/degreemaps/Documents/the-energy-museum/backend/user/plugins/museum-api/museum-api.yaml',
    'modified' => 1754509476,
    'size' => 1881,
    'data' => [
        'name' => 'Museum API',
        'slug' => 'museum-api',
        'type' => 'plugin',
        'version' => '1.0.0',
        'description' => 'REST API plugin for The Energy Museum - handles comments, exhibitions, and support requests',
        'icon' => 'plug',
        'author' => [
            'name' => 'Energy Museum Team',
            'email' => 'dev@energymuseum.org'
        ],
        'homepage' => 'https://github.com/energymuseum/museum-api',
        'keywords' => [
            0 => 'api',
            1 => 'rest',
            2 => 'museum',
            3 => 'comments',
            4 => 'exhibitions'
        ],
        'bugs' => 'https://github.com/energymuseum/museum-api/issues',
        'readme' => 'https://github.com/energymuseum/museum-api/blob/main/README.md',
        'license' => 'MIT',
        'dependencies' => [
            0 => [
                'name' => 'grav',
                'version' => '>=1.7.0'
            ]
        ],
        'form' => [
            'validation' => 'loose',
            'fields' => [
                'enabled' => [
                    'type' => 'toggle',
                    'label' => 'Plugin Status',
                    'highlight' => 1,
                    'default' => 1,
                    'options' => [
                        1 => 'Enabled',
                        0 => 'Disabled'
                    ],
                    'validate' => [
                        'type' => 'bool'
                    ]
                ],
                'cors_origin' => [
                    'type' => 'text',
                    'size' => 'large',
                    'label' => 'CORS Origin',
                    'default' => 'http://localhost:3000',
                    'help' => 'Set the allowed origin for CORS requests'
                ],
                'api_prefix' => [
                    'type' => 'text',
                    'size' => 'medium',
                    'label' => 'API Prefix',
                    'default' => '/api',
                    'help' => 'URL prefix for API endpoints'
                ],
                'rate_limit' => [
                    'type' => 'number',
                    'label' => 'Rate Limit (requests per minute)',
                    'default' => 60,
                    'help' => 'Maximum API requests per minute per IP'
                ],
                'enable_comments' => [
                    'type' => 'toggle',
                    'label' => 'Enable Comments',
                    'highlight' => 1,
                    'default' => 1,
                    'options' => [
                        1 => 'Enabled',
                        0 => 'Disabled'
                    ],
                    'validate' => [
                        'type' => 'bool'
                    ]
                ],
                'enable_support' => [
                    'type' => 'toggle',
                    'label' => 'Enable Support Requests',
                    'highlight' => 1,
                    'default' => 1,
                    'options' => [
                        1 => 'Enabled',
                        0 => 'Disabled'
                    ],
                    'validate' => [
                        'type' => 'bool'
                    ]
                ],
                'comment_moderation' => [
                    'type' => 'toggle',
                    'label' => 'Comment Moderation',
                    'highlight' => 0,
                    'default' => 0,
                    'options' => [
                        1 => 'Enabled',
                        0 => 'Disabled'
                    ],
                    'validate' => [
                        'type' => 'bool'
                    ],
                    'help' => 'Require manual approval for comments'
                ]
            ]
        ]
    ]
];
