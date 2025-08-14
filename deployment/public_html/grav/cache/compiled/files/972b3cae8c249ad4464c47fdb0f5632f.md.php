<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledMarkdownFile',
    'filename' => '/Users/degreemaps/Documents/the-energy-museum/backend/user/pages/api/exhibitions/exhibitions.md',
    'modified' => 1754509476,
    'size' => 2726,
    'data' => [
        'header' => [
            'title' => 'Exhibitions API',
            'published' => false,
            'visible' => false,
            'cache_enable' => false
        ],
        'frontmatter' => 'title: Exhibitions API
published: false
visible: false
cache_enable: false',
        'markdown' => '<?php
// Set CORS headers
header(\'Access-Control-Allow-Origin: http://localhost:3000\');
header(\'Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS\');
header(\'Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With\');
header(\'Access-Control-Allow-Credentials: true\');

// Handle preflight requests
if ($_SERVER[\'REQUEST_METHOD\'] === \'OPTIONS\') {
    http_response_code(200);
    exit;
}

header(\'Content-Type: application/json\');

// Mock exhibitions data for now
$exhibitions = [
    [
        \'id\' => \'renewable-revolution\',
        \'title\' => \'Renewable Revolution\',
        \'description\' => \'Journey through an immersive historical narrative exploring humanity\\\'s relationship with renewable energy.\',
        \'category\' => \'renewable\',
        \'storyType\' => \'Historical Narrative\',
        \'duration\' => \'15-20 min\',
        \'audience\' => \'All Ages\',
        \'tags\' => [\'Historical Journey\', \'Interactive Timeline\', \'Wind\', \'Solar\'],
        \'icon\' => \'🌞\',
        \'gradient\' => \'linear-gradient(135deg, #FFD700, #FFA500)\',
        \'visitors\' => 1250,
        \'rating\' => 4.8,
        \'comments\' => 89,
        \'difficulty\' => \'Beginner\'
    ],
    [
        \'id\' => \'physics-of-power\',
        \'title\' => \'The Physics of Power\',
        \'description\' => \'Embark on a mind-bending interactive journey where abstract physics becomes tangible reality.\',
        \'category\' => \'science\',
        \'storyType\' => \'Interactive Discovery\',
        \'duration\' => \'20-25 min\',
        \'audience\' => \'Students & Adults\',
        \'tags\' => [\'Interactive Discovery\', \'Quantum Physics\', \'Energy Laws\', \'Simulation\'],
        \'icon\' => \'⚡\',
        \'gradient\' => \'linear-gradient(135deg, #00d4ff, #0099cc)\',
        \'visitors\' => 987,
        \'rating\' => 4.7,
        \'comments\' => 156,
        \'difficulty\' => \'Advanced\'
    ],
    [
        \'id\' => \'climate-solutions\',
        \'title\' => \'Climate Solutions\',
        \'description\' => \'Experience a future-forward simulation where you collaborate with scientists in 2050.\',
        \'category\' => \'climate\',
        \'storyType\' => \'Future Simulation\',
        \'duration\' => \'25-30 min\',
        \'audience\' => \'Teen & Adult\',
        \'tags\' => [\'Future Simulation\', \'Climate Action\', \'Innovation\', \'Global Collaboration\'],
        \'icon\' => \'🌍\',
        \'gradient\' => \'linear-gradient(135deg, #4169E1, #1E90FF)\',
        \'visitors\' => 2100,
        \'rating\' => 4.9,
        \'comments\' => 287,
        \'difficulty\' => \'Intermediate\'
    ]
];

echo json_encode([
    \'exhibitions\' => $exhibitions,
    \'total\' => count($exhibitions)
], JSON_PRETTY_PRINT);
exit;
?>'
    ]
];
