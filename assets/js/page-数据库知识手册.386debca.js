(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{540:function(t,a,s){"use strict";s.r(a);var v=s(1),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数据库知识手册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库知识手册"}},[t._v("#")]),t._v(" 数据库知识手册")]),t._v(" "),s("h2",{attrs:{id:"数据库基础概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库基础概念"}},[t._v("#")]),t._v(" 数据库基础概念")]),t._v(" "),s("h3",{attrs:{id:"什么是数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据库"}},[t._v("#")]),t._v(" 什么是数据库？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[t._v("数据库（Database）是保存有组织的数据的容器（通常是一个文件或一组文件），是通过数据库管理系统（DataBase-Management System，DBMS）创建和操纵的容器。")])]),t._v(" "),s("h3",{attrs:{id:"什么是数据库管理系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据库管理系统"}},[t._v("#")]),t._v(" 什么是数据库管理系统？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[t._v("一种操纵和管理数据库的大型软件，简称DBMS")])]),t._v(" "),s("h3",{attrs:{id:"为什么要使用数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用数据库"}},[t._v("#")]),t._v(" 为什么要使用数据库？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("ol",[s("li",[t._v("数据可永久保存且数据安全性高")]),t._v(" "),s("li",[t._v("使用SQL语句，查询方便效率高")]),t._v(" "),s("li",[t._v("便于数据管理和数据分析")])])]),t._v(" "),s("h3",{attrs:{id:"sql和mysql有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql和mysql有什么区别"}},[t._v("#")]),t._v(" SQL和MySQL有什么区别？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[t._v("SQL是一种结构化查询语言，用于在数据库上执行各种操作。")]),t._v(" "),s("p",[t._v("MySQL是一个关系型数据库管理系统（RDBMS），使用SQL执行所有数据库操作。")])]),t._v(" "),s("h3",{attrs:{id:"数据库三大范式是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库三大范式是什么"}},[t._v("#")]),t._v(" 数据库三大范式是什么？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[t._v("数据库范式是设计数据库时，需要遵循的一些规范。越高的范式数据库冗余越小。常用的数据库三大范式为：")]),t._v(" "),s("ul",[s("li",[t._v("**第一范式（1NF）：**每个列都不可以再拆分，强调列的原子性。第一范式要求数据库中的表都是二维表。")]),t._v(" "),s("li",[s("strong",[t._v("第二范式（2NF）："),s("strong",[t._v("在第一范式的基础上，一个表必须有一个主键，非主键列")]),t._v("完全依赖")]),t._v("于主键，而不能是依赖于主键的一部分。")]),t._v(" "),s("li",[t._v("**第三范式（3NF）：**在第二范式的基础上，非主键列只依赖于（直接依赖）于主键，不依赖于其他非主键。")])])]),t._v(" "),s("h2",{attrs:{id:"索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[t._v("#")]),t._v(" 索引")]),t._v(" "),s("h3",{attrs:{id:"索引的优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引的优缺点"}},[t._v("#")]),t._v(" 索引的优缺点")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[s("strong",[t._v("索引的优点")])]),t._v(" "),s("ul",[s("li",[t._v("通过创建"),s("strong",[t._v("唯一性索引")]),t._v("，可以"),s("strong",[t._v("保证每一行数据的唯一性")]),t._v("；")]),t._v(" "),s("li",[t._v("加快数据的"),s("strong",[t._v("检索速度")])]),t._v(" "),s("li",[t._v("加速"),s("strong",[t._v("表与表之间的连接")])])]),t._v(" "),s("p",[s("strong",[t._v("索引的缺点")])]),t._v(" "),s("ul",[s("li",[t._v("时间上，创建和维护索引都需要耗费时间，这种时间随数据量增加而增加")]),t._v(" "),s("li",[t._v("空间上，索引需要占"),s("strong",[t._v("物理空间")]),t._v("，除了数据表占数据空间外，每个索引还要占一定的物理空间，如果要建立聚簇索引，需要的空间就更大。")])])]),t._v(" "),s("h3",{attrs:{id:"索引的数据结构有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引的数据结构有哪些"}},[t._v("#")]),t._v(" 索引的数据结构有哪些？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[t._v("数据库索引按照结构分类，主要有"),s("strong",[t._v("B树索引、Hash索引和位图索引")]),t._v("三种")]),t._v(" "),s("p",[s("strong",[t._v("B树索引")])]),t._v(" "),s("p",[t._v("又称"),s("strong",[t._v("平衡树索引")]),t._v("。以树结构组织，有一个或多个分支结点，分支结点又指向单级叶结点。其中分支结点用于遍历树，叶结点则保存真正的值和位置信息。")]),t._v(" "),s("p",[s("strong",[t._v("Hash索引")])]),t._v(" "),s("p",[t._v("哈希索引采取一定的哈希算法（常见哈希算法有直接定址法，平方取中法，折叠法，除数取余法，随机数法），将数据库字段转换成定长的Hash值，与这条数据的行指针一并存入Hash表的对应位置，如果发生Hash冲突（两个不同关键字的Hash值相同），则在对应Hash键下以链表形式存储。")]),t._v(" "),s("p",[s("strong",[t._v("位图索引")])]),t._v(" "),s("p",[t._v("位图索引为存储在某列中的每一个值生成一个位图。位图索引适合只有几个固定值的列，需要注意位图索引适合静态数据，不适合索引频繁更新的列。")])]),t._v(" "),s("h3",{attrs:{id:"b树的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b树的特点"}},[t._v("#")]),t._v(" B树的特点")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/River-Cold/pictureBed/vuepress-blog/interview/basics/network/20220227215631.png",alt:"",loading:"lazy"}})]),t._v(" "),s("p",[t._v("B树是所有结点的平衡因子均等于0的多路平衡查找树")]),t._v(" "),s("ul",[s("li",[t._v("每个节点最多m个子结点（m棵子树），即"),s("strong",[t._v("至多含有"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("m")]),s("mo",[t._v("−")]),s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m-1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("m")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),s("span",{staticClass:"mord"},[t._v("1")])])])]),t._v("个关键字")])]),t._v(" "),s("li",[t._v("如果根节点没有关键字就没有子树，此时B树为空；如果根节点有关键字，则其子树必然大于等于两棵")]),t._v(" "),s("li",[t._v("除了根节点和叶子结点外，每个结点至少有"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",{attrs:{stretchy:"false"}},[t._v("⌈")]),s("mrow",[s("mi",[t._v("m")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v("/")]),s("mn",[t._v("2")]),s("mo",{attrs:{stretchy:"false"}},[t._v("⌉")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\lceil{m/2\\rceil}")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mopen"},[t._v("⌈")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal"},[t._v("m")]),s("span",{staticClass:"mord"},[t._v("/2")]),s("span",{staticClass:"mclose"},[t._v("⌉")])])])])]),t._v("（向上取整）个子结点")]),t._v(" "),s("li",[t._v("所有叶子结点位于同一层，按照关键字大小顺序排列")]),t._v(" "),s("li",[t._v("每个节点既存放关键字信息也存放具体数据")])])]),t._v(" "),s("h3",{attrs:{id:"b-树的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-树的特点"}},[t._v("#")]),t._v(" B+树的特点")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[t._v("B+ 树是在 B 树基础上的一种优化，使其更适合实现存储索引结构。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/River-Cold/pictureBed/vuepress-blog/interview/basics/network/20220227215703.png",alt:"",loading:"lazy"}})]),t._v(" "),s("ul",[s("li",[t._v("每个节点最多m个子结点（m棵子树），即"),s("strong",[t._v("至多含有"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("m")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("m")])])])]),t._v("个关键字")])]),t._v(" "),s("li",[t._v("如果根节点没有关键字就没有子树，此时B树为空；如果根节点有关键字，则其子树必然大于等于两棵")]),t._v(" "),s("li",[t._v("除了根节点和叶子结点外，每个结点至少有"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",{attrs:{stretchy:"false"}},[t._v("⌈")]),s("mrow",[s("mi",[t._v("m")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v("/")]),s("mn",[t._v("2")]),s("mo",{attrs:{stretchy:"false"}},[t._v("⌉")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\lceil{m/2\\rceil}")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mopen"},[t._v("⌈")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal"},[t._v("m")]),s("span",{staticClass:"mord"},[t._v("/2")]),s("span",{staticClass:"mclose"},[t._v("⌉")])])])])]),t._v("（向上取整）个子结点")]),t._v(" "),s("li",[t._v("所有叶子结点位于同一层，按照关键字大小顺序排列，"),s("strong",[t._v("并且相邻叶结点之间有一个链指针")])]),t._v(" "),s("li",[t._v("非叶结点只起到索引作用，只存放关键字，不存放数据，只有叶子结点既存放关键字也存放数据")])])]),t._v(" "),s("h3",{attrs:{id:"b-树和b-树的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-树和b-树的区别"}},[t._v("#")]),t._v(" B+树和B-树的区别？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("ul",[s("li",[t._v("B树每个节点的子节点个数=关键字个数+1，B+树每个节点的子节点个数=关键字个数")]),t._v(" "),s("li",[t._v("B树的相邻叶结点都是独立的，B+树的相邻叶结点之间有链指针")]),t._v(" "),s("li",[t._v("B树的每个节点既存放关键字也存放数据，B+树的非叶结点只起到索引作用，只存放关键字，不存放数据，只有叶子结点既存放关键字也存放数据")])])]),t._v(" "),s("h3",{attrs:{id:"使用b-树的好处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用b-树的好处"}},[t._v("#")]),t._v(" 使用B+树的好处?")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[s("strong",[t._v("更少的IO次数")]),t._v("：B+树的内部结点只存放键，不存放值，因此，一次读取，可以在同一内存页中获取更多的键，有利于更快的缩小查找范围。")]),t._v(" "),s("p",[s("strong",[t._v("更适用于范围查询："),s("strong",[t._v("B+树的叶结点由一条链相连，因此当需要进行一次")]),t._v("全数据遍历")]),t._v("的时候，B+树只需要使用"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("l")]),s("mi",[t._v("o")]),s("mi",[t._v("g")]),s("mi",[t._v("N")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(logN)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),s("span",{staticClass:"mord mathnormal"},[t._v("o")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),s("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("时间找到最小结点，然后通过链进行"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("N")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(N)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),s("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("的顺序遍历即可。或者在找"),s("strong",[t._v("大于某个关键字或者小于某个关键字的数据")]),t._v("的时候，B+树只需要找到该关键字然后沿着链表遍历即可。")])]),t._v(" "),s("h3",{attrs:{id:"hash索引和b-树索引的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash索引和b-树索引的区别"}},[t._v("#")]),t._v(" Hash索引和B+树索引的区别？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("ul",[s("li",[t._v("**范围查询：**Hash索引不支持范围查询，B+树支持范围查询")]),t._v(" "),s("li",[t._v("**排序：**Hash索引不支持排序，B+树索引支持排序，因为Hash索引指向的数据是无序的，而B+树索引指向的数据是有序的")]),t._v(" "),s("li",[t._v("**模糊查询和最左前缀匹配：**Hash索引不支持模糊查询以及多列索引的最左前缀匹配，原因是Hash函数的不可预测，AAAA和AAAAB的索引没有相关性，B+树索引支持模糊查询以及多列索引的最左前缀匹配")]),t._v(" "),s("li",[t._v("**查询效率：**Hash索引虽然在等值查询上较快，但是不稳定，当某个键值存在大量重复的时候，发生Hash碰撞，此时效率可能极差；B+树的查询效率比较稳定，对于所有的查询都是从根节点到叶子结点，且树的高度较低")])])]),t._v(" "),s("h3",{attrs:{id:"什么是前缀索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是前缀索引"}},[t._v("#")]),t._v(" 什么是前缀索引？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[t._v("有时需要索引很长的字符列，它会使索引变大且变慢，一个策略就是使用索引开始的几个字符，而不是全部值，即被称为"),s("strong",[t._v("前缀索引")]),t._v("，以节约空间并获得好的性能。")])]),t._v(" "),s("h3",{attrs:{id:"什么是联合索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是联合索引"}},[t._v("#")]),t._v(" 什么是联合索引？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[t._v("联合索引就是由两个或以上的字段共同构成的索引。")])]),t._v(" "),s("h3",{attrs:{id:"什么是最左前缀匹配原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是最左前缀匹配原则"}},[t._v("#")]),t._v(" 什么是最左前缀匹配原则？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[t._v("在MySQL建立联合索引（多列索引）时会遵循最左前缀匹配原则，即"),s("strong",[t._v("最左优先")]),t._v("，在检索数据时从联合索引的最左边一列开始匹配（也就是where子句中一定要有联合索引的第一个字段，并且where子句中字段的顺序可以任意调整）。")]),t._v(" "),s("p",[t._v("例如有一个3列索引（a,b,c），则已经对(a)、(a,b)、(a,b,c)上建立了索引。所以在创建"),s("strong",[t._v("多列索引")]),t._v("时，要根据业务需求，"),s("code",[t._v("where")]),t._v("子句中使用最频繁的一列放在最左边。")]),t._v(" "),s("p",[t._v("**根据最左前缀匹配原则，MySQL 会一直向右匹配直到遇到 范围查询（>、<、between、like）就停止匹配，**比如采用查询条件 where a = 1 and b = 2 and c > 3 and d = 4 时，如果建立（a,b,c,d）顺序的索引，d 是用不到索引的，如果建立（a,b,d,c）的索引则都可以用到，并且 where 子句中 a、b、d 的顺序可以任意调整。")])]),t._v(" "),s("h3",{attrs:{id:"添加索引的原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加索引的原则"}},[t._v("#")]),t._v(" 添加索引的原则")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("ul",[s("li",[t._v("**在查询中很少使用或者参考的列不要创建索引：**由于这些列很少使用到，增加索引反而会降低系统的维护速度和增大空间需求。")]),t._v(" "),s("li",[t._v("**只有很少数据值的列不创建索引：**区分度太低，增加索引并不能明显加快检索速度")]),t._v(" "),s("li",[s("strong",[t._v("修改性能远远大于检索性能时，不应该创建索引")]),t._v("：二者相互矛盾，当增加索引时，会提高索引性能，但是会降低修改性能。")]),t._v(" "),s("li",[s("strong",[t._v("定义为外键的数据列一定要创建索引")]),t._v("：如果不加索引，则删除主表记录或主子表关联查询，都会进行字表的全表扫描。")])])]),t._v(" "),s("h3",{attrs:{id:"聚集索引和非聚集索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚集索引和非聚集索引"}},[t._v("#")]),t._v(" 聚集索引和非聚集索引")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[s("strong",[t._v("聚集索引，又称为聚集索引，首先并不是一种索引类型，而是一种数据存储方式，即索引结构和数据一起存放。")])]),t._v(" "),s("p",[t._v("聚集索引的特点")]),t._v(" "),s("ol",[s("li",[t._v("聚集索引的检索效率更高")]),t._v(" "),s("li",[t._v("聚集索引的磁盘IO次数更少")]),t._v(" "),s("li",[t._v("一个数据表只能有一个聚集索引")]),t._v(" "),s("li",[t._v("一般而言，会在频繁使用、排序的字段上创建聚集索引")])]),t._v(" "),s("p",[s("strong",[t._v("非聚集索引即索引结构和数据分开存放，非聚集索引中并不存放真正的数据行，只包含一个指向数据行的指针。")])]),t._v(" "),s("p",[t._v("非聚簇索引的创建也是以此为根据的，分为"),s("strong",[t._v("复合索引")]),t._v("和"),s("strong",[t._v("覆盖索引")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/River-Cold/pictureBed/vuepress-blog/interview/basics/network/20220301195622.png",alt:"",loading:"lazy"}})])]),t._v(" "),s("h2",{attrs:{id:"事务管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务管理"}},[t._v("#")]),t._v(" 事务管理")]),t._v(" "),s("h3",{attrs:{id:"什么是数据库事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据库事务"}},[t._v("#")]),t._v(" 什么是数据库事务？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[t._v("数据库的"),s("strong",[t._v("事务")]),t._v("（Transaction）是一种机制、一个操作序列，包含了一组数据库操作命令，其执行的结果必须使数据库从一种一致性状态变到另一种一致性状态。")]),t._v(" "),s("p",[t._v("事务把所有的命令作为一个整体一起向系统提交或撤销操作请求，即这一组数据库命令要么都执行，要么都不执行，因此事务是一个不可分割的工作逻辑单元。如果任意一个操作失败，那么整组操作即为失败，会回到操作前状态或者上一个节点。")])]),t._v(" "),s("h3",{attrs:{id:"有哪些事务状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有哪些事务状态"}},[t._v("#")]),t._v(" 有哪些事务状态？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[t._v("事务在其生命周期中会经历不同的状态，这些状态被称为"),s("strong",[t._v("事务状态")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/River-Cold/pictureBed/vuepress-blog/interview/basics/network/20220301204724.png",alt:"",loading:"lazy"}})]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.geeksforgeeks.org/transaction-states-in-dbms/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Transaction States in DBMS - GeeksforGeeks"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("活跃状态（Active State）")]),t._v("：事务的第一个状态，任何正在执行的事务都处于此状态，所做的"),s("strong",[t._v("更改")]),t._v("存储在"),s("strong",[t._v("主内存（本地）的缓冲区")]),t._v("中。")]),t._v(" "),s("p",[s("strong",[t._v("部分提交状态（Partially Commited State）")]),t._v("：执行操作后，事务进入部分提交状态。之所以是部分提交，是因为所做的更改仍然在"),s("strong",[t._v("主内存（本地）的缓冲区")]),t._v("中。")]),t._v(" "),s("p",[s("strong",[t._v("失败状态（Failed State）")]),t._v("：如果事务在活动状态或者部分提交状态发生一些错误，并且事务无法进一步执行，则事务进入失败状态。")]),t._v(" "),s("p",[s("strong",[t._v("中止状态（Aborted State）")]),t._v("：如果任何事务已达到失败状态，撤销失败事务对当前数据库造成的影响，恢复管理器将数据库回滚到开始执行的原始状态。")]),t._v(" "),s("p",[s("strong",[t._v("提交状态（Commited State）")]),t._v("：如果所有操作成功执行，数据永久写入到磁盘上的数据库中，则来自部分提交状态的事务进入提交状态，无法从此状态回滚，它是一个新的"),s("strong",[t._v("一致状态")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"事务的四大特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务的四大特性"}},[t._v("#")]),t._v(" 事务的四大特性？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[t._v("事务具有4个特性：原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）和持久性（Durability），这4个特性通常简称为ACID，"),s("strong",[t._v("关系型数据库")]),t._v("需要遵循ACID规则。")]),t._v(" "),s("p",[t._v("**原子性：**事务是最小的执行单位，不可分割的（原子的）。事务的原子性确保动作要么全部执行，要么全部不执行。")]),t._v(" "),s("p",[t._v("**一致性：**事务执行前后数据的完整性保持一致。")]),t._v(" "),s("p",[t._v("**隔离性：**并发访问数据库时，一个用户的事务不被其他事务所干扰，各个事务不干涉内部的数据。")]),t._v(" "),s("p",[t._v("**持久性：**一个事务被提交之后，对数据库中数据的改变是持久的，即使数据库发生故障也不应该对其有任何影响。")])]),t._v(" "),s("h3",{attrs:{id:"如何实现事务的acid特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何实现事务的acid特性"}},[t._v("#")]),t._v(" 如何实现事务的ACID特性？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[t._v("事务的ACID特性是由关系型数据库管理系统来实现的。")]),t._v(" "),s("p",[t._v("DBMS采用"),s("strong",[t._v("日志")]),t._v("来保证事务的"),s("strong",[t._v("原子性、一致性、持久性")]),t._v("。日志记录了事务对数据库所做的操作，如果某个事务在执行过程中发生错误，就可以根据日志，撤销事务对数据库已做的操作，使数据库退回到执行事务之前的初始状态。")]),t._v(" "),s("p",[t._v("DBMS采用"),s("strong",[t._v("锁机制")]),t._v("来保证事务的隔离性。当多个事务同时更新数据库中相同的数据时，只允许"),s("strong",[t._v("持有锁的事务")]),t._v("能更新该数据，其他事务必须等待，直到前一个事务释放了锁，其他事务才有机会更新该数据。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/kismetv/p/10331633.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入学习MySQL事务：ACID特性的实现原理 - 编程迷思 - 博客园 (cnblogs.com)"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"并发事务之间的相互影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发事务之间的相互影响"}},[t._v("#")]),t._v(" 并发事务之间的相互影响")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[s("strong",[t._v("脏读（Dirty Read）")]),t._v("：A事务读取到了B事务还未提交的数据。")]),t._v(" "),s("p",[s("strong",[t._v("不可重复读（Non-repeatable Read）")]),t._v("：A事务读取到了B事务已经提交的更改数据。在一个事务范围内，两次相同的查询返回两个不同的数据，这是因为在此间隔内有其他事务对数据进行了修改并提交。")]),t._v(" "),s("p",[s("strong",[t._v("幻读（Phantom Read）")]),t._v("：A事务读取到了B事务提交的新增数据。例如有一个事务对表中的数据进行了修改并提交，这种修改是向表中"),s("strong",[t._v("插入一行新数据")]),t._v("。那么，当第一个事务的用户发现表中还有没有修改的数据行，就好像发生了幻觉一样。")]),t._v(" "),s("p",[s("strong",[t._v("丢失更新（Lost Update）")]),t._v("：两个事务同时读取同一条记录，事务A先修改记录，事务B也修改记录（B是不知道A修改过），当B提交数据后，其修改结果覆盖了A的修改结果，导致事务A更新丢失。")]),t._v(" "),s("p",[t._v("不可重复读的重点是修改，幻读的重点在于新增或删除。")])]),t._v(" "),s("h3",{attrs:{id:"什么是事务的隔离级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是事务的隔离级别"}},[t._v("#")]),t._v(" 什么是事务的隔离级别？")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("answer")]),t._v(" "),s("p",[t._v("读取未提交（READ-UNCOMMITTED）")]),t._v(" "),s("p",[t._v("读取已提交（READ-COMMITTED）")]),t._v(" "),s("p",[t._v("可重复读（REPEATABLE-READ）")]),t._v(" "),s("p",[t._v("可串行化（SERIALIZABLE）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("隔离级别")]),t._v(" "),s("th",[t._v("脏读")]),t._v(" "),s("th",[t._v("不可重复读")]),t._v(" "),s("th",[t._v("幻读")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("读取未提交")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("是")])]),t._v(" "),s("tr",[s("td",[t._v("读取已提交")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("是")])]),t._v(" "),s("tr",[s("td",[t._v("可重复读")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("是")])]),t._v(" "),s("tr",[s("td",[t._v("可串行化")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("否")])])])])])])}),[],!1,null,null,null);a.default=_.exports}}]);