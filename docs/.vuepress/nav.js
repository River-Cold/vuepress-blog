module.exports = [
    { text: "博客主页", link: "/", icon: "home" },
    { text: "项目主页", link: "/home/", icon: "home" },
    {
        text: '人生感悟',
        prefix: '/life/',
        items: [
            { text: '年度总结', link: 'Annual-Summary/' },
            { text: '旅行记录', link: 'Travel-Records/' },
        ]
    },
    {
        text: '校园回忆',
        prefix: '/school/',
        items: [
            { text: '初中', link: 'junior-high-school/' },
            { text: '高中', link: 'high-school/' },
            { text: '大学', link: 'university/' },
            {
                text: '研究生',
                prefix: 'master/',
                items: [
                    { "text": '论文', link: 'paper/' }
                ]
            },
        ],
    },
    {
        text: '面试指南',
        prefix: '/interview/',
        items: [
            {
                text: '八股文',
                prefix: 'basics/',
                items: [
                    { text: '计算机网络', link: 'network/' },
                    { text: '数据库', link: 'database/' },
                ]
            },
        ],
    },
    {
        text: '编程语言',
        prefix: '/code/',
        items: [
            { text: 'C++', link: 'C++/' },
            { text: 'Java', link: 'Java/' },
            { text: 'Python', link: 'Python/' },
            { text: 'SQL', link: 'SQL/' },
        ],
    },
    {
        text: '题解合集',
        prefix: '/solution/',
        items: [
            {
                text: '力扣',
                prefix: 'leetcode/',
                items: [
                    { text: '剑指Offer', link: 'CodingInterview/' },
                    { text: '程序员面试宝典', link: 'Cracking-the-Coding-Interview/' },
                    { text: 'LeetCode 热题 HOT 100', link: 'LeetCode-hot-topic-HOT-100/' },
                ]
            },
            {
                text: '牛客网',
                prefix: 'nowcoder/',
                items: [
                    { text: 'SQL进阶挑战', link: 'sql-advanced/' },
                ]
            },
        ]
    },
    {
        text: '软件教程',
        prefix: '/software/',
        items: [
            { text: '编程软件', link: 'programming/' },
        ]
    },
]
