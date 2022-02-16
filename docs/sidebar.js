module.exports = [
    {
        title: "人生感悟",
        prefix: "/life/",
        children: [
            {
                title: "年度总结",
                path: "Annual-Summary/",
                prefix: "Annual-Summary/",
                children: ["readme"],
            },
            {
                title: "旅行记录",
                path: "Travel-Records/",
                prefix: "Travel-Records/",
                children: ["readme"],
            },
        ]
    },
    {
        title: "校园回忆",
        prefix: "/school/",
        children: [
            {
                title: "初中",
                path: "junior-high-school/",
                prefix: "junior-high-school/",
                children: ["readme"],
            },
            {
                title: "高中",
                path: "high-school/",
                prefix: "high-school/",
                children: ["readme"],
            },
            {
                title: "大学",
                path: "university/",
                prefix: "university/",
                children: ["readme"],
            },
        ]
    },
    {
        title: "编程语言",
        prefix: "/code/",
        children: [
            {
                title: "C++",
                path: "C++/",
                prefix: "C++/",
                children: ["readme"],
            },
            {
                title: "Java",
                path: "Java/",
                prefix: "Java/",
                children: ["readme"],
            },
            {
                title: "Python",
                path: "Python/",
                prefix: "Python/",
                children: ["readme"],
            },
            {
                title: "SQL",
                path: "SQL/",
                prefix: "SQL/",
                children: ["readme"],
            },
        ]
    },
    {
        title: "题解合集",
        prefix: "/solution/",
        children: [
            {
                title: "力扣",
                prefix: "leetcode/",
                children: [
                    {
                        title: '剑指Offer',
                        path: 'CodingInterview/',
                        prefix: 'CodingInterview/',
                        children: ["readme", "二维数组中的查找"],
                    },
                    {
                        title: '程序员面试宝典',
                        path: 'Cracking-the-Coding-Interview/',
                        prefix: 'Cracking-the-Coding-Interview/',
                        children: ["readme"],
                    }
                ],
            },
            {
                title: "牛客网",
                prefix: "nowcoder/",
                children: [
                    {
                        title: 'SQL进阶挑战',
                        path: 'sql-advanced/',
                        prefix: 'sql-advanced/',
                        children: ["readme"],
                    },
                ],
            },
        ]
    },
]