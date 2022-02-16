module.exports = [
    {
        title: "人生感悟",
        prefix: "/life/",
        children: [
            {
                title: "年度总结",
                prefix: "Annual-Summary/",
                children: ["", "1"],
            },
            {
                title: "旅行记录",
                prefix: "Travel-Records/",
                children: ["", "1"],
            },
        ]
    },
    {
        title: "校园回忆",
        prefix: "/school/",
        children: [
            {
                title: "初中",
                prefix: "junior-high-school/",
                children: ["", "1"],
            },
            {
                title: "高中",
                prefix: "high-school/",
                children: ["", "1"],
            },
            {
                title: "大学",
                prefix: "university/",
                children: ["", "1"],
            },
        ]
    },
    {
        title: "编程语言",
        prefix: "/code/",
        children: [
            {
                title: "C++",
                prefix: "C++/",
                children: ["", "1"],
            },
            {
                title: "Java",
                prefix: "Java/",
                children: ["", "1"],
            },
            {
                title: "Python",
                prefix: "Python/",
                children: ["", "1"],
            },
            {
                title: "SQL",
                prefix: "SQL/",
                children: ["", "1"],
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
                        prefix: 'CodingInterview/',
                        children: ["", "1", "jz1"],
                    },
                    {
                        title: '程序员面试宝典',
                        prefix: 'Cracking-the-Coding-Interview/',
                        children: ["", "1"],
                    }
                ],
            },
            {
                title: "牛客网",
                prefix: "nowcoder/",
                children: [
                    {
                        title: 'SQL进阶挑战',
                        prefix: 'sql-advanced/',
                        children: ["", "1"],
                    },
                ],
            },
        ]
    },
]