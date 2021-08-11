const { description } = require('../../package')

module.exports = {
    title: 'Notes',
    description: description,
    base: '/notes/',
    head: [
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ],
    theme: "book",
    themeConfig: {
        repo: 'yzhang-gh/notes',
        editLinks: false,
        docsDir: 'docs',
        lastUpdated: 'Last updated',
        smoothScroll: true,
        nav: [
            {
                text: 'ML and Math',
                items: [
                    { text: 'Machine Learning', link: '/ml/'},
                    { text: 'Math', link: '/math/'}
                ]
            },
            { text: 'Software and Tools', link: '/software/' },
            { text: 'Programming', link: '/programming/' },
            { text: 'Languages', link: '/langs/' },
            { text: 'Reading', link: '/reading/' },
            { text: 'Others', link: '/others/' },
        ],
        sidebar: {
            '/langs/': [
                {
                    title: 'English',
                    collapsable: false,
                    children: [
                        'en/learned-in-uk',
                        'en/think-of-about',
                    ]
                },
                {
                    title: 'Friends',
                    collapsable: false,
                    children: [
                        'en/friends/s01e01',
                        'en/friends/s01e02',
                        'en/friends/s01e03',
                    ]
                },
                {
                    title: 'Japanese',
                    collapsable: false,
                    children: [
                        'jp/beginner-unit-1-3',
                        'jp/beginner-unit-4-6',
                        'jp/grammar',
                        'jp/beginner-unit-7-9',
                    ]
                }
            ],
            '/math/': [
                {
                    title: 'Math',
                    collapsable: false,
                    children: [
                        'math-sea',
                        'linear-algebra'
                    ]
                },
            ],
            '/ml/': [
                {
                    title: 'Machine Learning',
                    collapsable: false,
                    children: [
                        'nn-interpretability'
                    ]
                },
                {
                    title: '猴年马月',
                    collapsable: false,
                    children: [
                        'learning-theory',
                        'grad-descent-algos'
                    ]
                },
            ],
            '/programming/': [
                {
                    title: 'Python',
                    collapsable: false,
                    children: [
                        'python/miniconda',
                        'python/matplotlib',
                        'python/python',
                        'python/user-snippets',
                        'python/cuda',
                    ]
                },
                {
                    title: 'LaTeX',
                    collapsable: false,
                    children: [
                        'latex',
                        'latex-nicematrix',
                    ]
                },
            ],
            '/software/': [
                {
                    title: 'Windows',
                    collapsable: false,
                    children: [
                        'windows/autohotkey',
                        'windows/context-menu',
                        'windows/general',
                    ]
                },
                {
                    title: 'General',
                    collapsable: false,
                    children: [
                        'vim',
                        'shell',
                        'powershell',
                    ]
                },
            ],
            '/others/': [
                {
                    title: 'Misc.',
                    collapsable: false,
                    children: [
                        'characters',
                        'genetics',
                        'minimax',
                        'p-np',
                        'literature-review-the-hard-way',
                        'misc',
                    ]
                },
                {
                    title: 'Life',
                    collapsable: false,
                    children: [
                        '2015-summary',
                        '2018-uk',
                        'glasses',
                        'interesting-stuff',
                    ]
                },
            ],
            '/': ['']
        }
    },
    plugins: [
        '@vuepress/back-to-top',
        [
            '@vuepress/medium-zoom',
            {
                selector: '.theme-default-content :not(a) > img:not(.no-zoom)'
            }
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'callout',
                // before: info => `<div class="callout"><p class="title">${info}</p>`,
                // after: '</div>',
                // Hide title if there isn't
                render: function (tokens, idx) {
                    let m = tokens[idx].info.trim().match(/^callout\s+(.*)$/);
                    if (tokens[idx].nesting === 1) {
                        // opening tag
                        let title = m !== null ? m[1] : '';
                        return `<div class="callout">${title.length > 0 ? `<p class="title">${title}</p>` : ''}`;
                    } else {
                        // closing tag
                        return '</div>\n';
                    }
                },
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'definition',
                before: info => `<div class="custom-block definition"><p class="title">${info}</p>`,
                after: '</div>',
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'tree',
                before: `<pre class="tree"><code>`,
                after: `</code></pre>`,
            },
        ],
        [
            '@vuepress/google-analytics',
            {
                ga: 'UA-177325112-1',
            },
        ],
        [
            'shiki', { theme: 'github-light' }
        ],
    ],
    markdown: {
        extendMarkdown: md => {
            md.set({ breaks: true })
            md.use(require('markdown-it-footnote'))
                .use(require('markdown-it-mark'))
                .use(require('@neilsustc/markdown-it-katex'))
                .use(require('markdown-it-attrs'), {
                    leftDelimiter: '{{',
                    rightDelimiter: '}}',
                    allowedAttributes: ['id', 'class']
                })
        },
    },
    chainWebpack: (config, isServer) => {
        const inlineLimit = 10000
        config.module.rule('images')
            .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .options({
                limit: inlineLimit,
                name: `assets/img/[name].[hash:8].[ext]`
            })
    }
}