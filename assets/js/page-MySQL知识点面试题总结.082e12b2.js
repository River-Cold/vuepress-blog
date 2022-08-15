(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{544:function(s,t,a){"use strict";a.r(t);var v=a(1),e=Object(v.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mysql知识点-面试题总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql知识点-面试题总结"}},[s._v("#")]),s._v(" MySQL知识点&面试题总结")]),s._v(" "),a("h2",{attrs:{id:"关系型数据库介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关系型数据库介绍"}},[s._v("#")]),s._v(" 关系型数据库介绍")]),s._v(" "),a("h3",{attrs:{id:"什么是关系型数据库-有哪些常见的关系型数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是关系型数据库-有哪些常见的关系型数据库"}},[s._v("#")]),s._v(" 什么是关系型数据库？有哪些常见的关系型数据库？")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("answer")]),s._v(" "),a("p",[s._v("关系型数据库就是一种建立在关系模型的基础上的数据库。关系模型表明了数据库中所存储的数据之间的联系（一对一、一对多、多对多）。")]),s._v(" "),a("p",[s._v("关系模型是指用二维表的形式表示实体和实体间联系的数据模型。常见的关系型数据库包括MySQL、Oracle、SQL Server、SQLite")])]),s._v(" "),a("h2",{attrs:{id:"mysql介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql介绍"}},[s._v("#")]),s._v(" MySQL介绍")]),s._v(" "),a("h3",{attrs:{id:"mysql是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql是什么"}},[s._v("#")]),s._v(" MySQL是什么？")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("answer")]),s._v(" "),a("p",[s._v("MySQL是一种关系型数据库管理系统（RDBMS），主要用于持久化存储我们的系统中的一些数据。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/River-Cold/vuepress-theme-hope-image/img/MySQL基础架构.png",alt:"",loading:"lazy"}})])]),s._v(" "),a("h2",{attrs:{id:"存储引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎"}},[s._v("#")]),s._v(" 存储引擎")]),s._v(" "),a("h3",{attrs:{id:"存储引擎相关的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎相关的命令"}},[s._v("#")]),s._v(" 存储引擎相关的命令？")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("answer")]),s._v(" "),a("p",[s._v("查看MySQL提供的所有存储引擎")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("show engines;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("MySQL默认的存储引擎是InnoDB，且只有InnoDB支持事务")]),s._v(" "),a("p",[s._v("查看MySQL当前默认的存储引擎")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("show variables like '%storage_engine%';\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看表的存储引擎")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("show table status like 'table_name';\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("h3",{attrs:{id:"myisam-和-innodb-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myisam-和-innodb-的区别"}},[s._v("#")]),s._v(" MyISAM 和 InnoDB 的区别?")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("answer")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th"),s._v(" "),a("th",[s._v("InnoDB")]),s._v(" "),a("th",[s._v("MyISAM")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("是否支持行级锁、表级锁")]),s._v(" "),a("td",[s._v("既支持表级锁又支持行级锁")]),s._v(" "),a("td",[s._v("支持表级锁，不支持行级锁")])]),s._v(" "),a("tr",[a("td",[s._v("是否支持事务")]),s._v(" "),a("td",[s._v("支持事务")]),s._v(" "),a("td",[s._v("不支持事务")])]),s._v(" "),a("tr",[a("td",[s._v("是否支持外键")]),s._v(" "),a("td",[s._v("支持外键")]),s._v(" "),a("td",[s._v("不支持外键")])]),s._v(" "),a("tr",[a("td",[s._v("是否支持数据库异常崩溃后的安全恢复")]),s._v(" "),a("td",[s._v("支持安全恢复")]),s._v(" "),a("td",[s._v("不支持安全恢复")])])])])]),s._v(" "),a("h3",{attrs:{id:"myisam和innodb存储引擎使用的锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myisam和innodb存储引擎使用的锁"}},[s._v("#")]),s._v(" MyISAM和InnoDB存储引擎使用的锁？")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("answer")]),s._v(" "),a("p",[s._v("MyISAM和InnoDB存储引擎使用的锁：")]),s._v(" "),a("ul",[a("li",[s._v("InnoDB支持行级锁和表级锁")]),s._v(" "),a("li",[s._v("MyISAM只支持表级锁")])]),s._v(" "),a("p",[a("strong",[s._v("表级锁和行级锁对比")]),s._v("：")]),s._v(" "),a("p",[a("strong",[s._v("表级锁")]),s._v("：")]),s._v(" "),a("p",[s._v("MySQL中"),a("strong",[s._v("锁定粒度")]),s._v("最大的一种锁，对当前操作的整张表加锁。")]),s._v(" "),a("ul",[a("li",[s._v("开销：实现简单，资源消耗（开销）较少。")]),s._v(" "),a("li",[s._v("速度：加锁快，不会出现死锁。")]),s._v(" "),a("li",[s._v("并发度：触发锁冲突的概率高，并发度低。")])]),s._v(" "),a("p",[a("strong",[s._v("行级锁")]),s._v("：MySQL中"),a("strong",[s._v("锁定粒度")]),s._v("最小的一种锁，对当前操作的行进行加锁。")]),s._v(" "),a("ul",[a("li",[s._v("开销：实现复杂，资源消耗（开销）较大")]),s._v(" "),a("li",[s._v("速度：加锁慢，会出现死锁")]),s._v(" "),a("li",[s._v("并发度：触发锁冲突的概率低，并发度高。")])])]),s._v(" "),a("h3",{attrs:{id:"innodb存储引擎的锁的算法有几种"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innodb存储引擎的锁的算法有几种"}},[s._v("#")]),s._v(" InnoDB存储引擎的锁的算法有几种？")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("answer")]),s._v(" "),a("ol",[a("li",[s._v("记录锁、行锁（Record Lock）：锁定单个行记录的锁，防止其他事务对此行进行update和delete。")]),s._v(" "),a("li",[s._v("间隙锁（Gap Lock）：锁定索引记录间隙（不包含该记录），确保索引记录间隙不变，防止其他事务在这个间隙进行insert，产生幻读。")]),s._v(" "),a("li",[s._v("临键锁（Next-Key Lock）：行锁和间隙锁组合，同时锁住数据，并锁住数据前面的间隙Gap。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);