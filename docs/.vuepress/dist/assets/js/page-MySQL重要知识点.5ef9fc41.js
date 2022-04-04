(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{549:function(v,_,t){"use strict";t.r(_);var s=t(1),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"mysql重要知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql重要知识点"}},[v._v("#")]),v._v(" MySQL重要知识点")]),v._v(" "),t("h2",{attrs:{id:"重要知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重要知识点"}},[v._v("#")]),v._v(" 重要知识点")]),v._v(" "),t("h3",{attrs:{id:"一条-sql-语句在-mysql-中如何被执行的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一条-sql-语句在-mysql-中如何被执行的"}},[v._v("#")]),v._v(" 一条 SQL 语句在 MySQL 中如何被执行的?")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("answer")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/River-Cold/pictureBed/vuepress-blog/docs/interview/basics/database/MySQL基础架构.png",alt:"",loading:"lazy"}})]),v._v(" "),t("p",[v._v("MySQL主要分为"),t("strong",[v._v("Server层")]),v._v("和"),t("strong",[v._v("存储引擎层")]),v._v("。")]),v._v(" "),t("p",[t("strong",[v._v("Server层")]),v._v("：包括连接器、查询缓存、分析器、优化器、执行器等，涵盖MySQL的核心功能。")]),v._v(" "),t("p",[t("strong",[v._v("存储引擎层")]),v._v("：负责数据的存储和提取。")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("查询"),t("code",[v._v("select")]),v._v("语句的执行流程如下：")]),v._v(" "),t("ul",[t("li",[v._v("连接器：管理连接，权限验证")]),v._v(" "),t("li",[v._v("查询缓存：判断是否命中缓存，如果命中缓存则直接返回结果")]),v._v(" "),t("li",[v._v("分析器：词法分析，语法分析\n"),t("ul",[t("li",[v._v("词法分析：提取 sql 语句的关键元素，以"),t("code",[v._v("select")]),v._v("为例，提取出查询的表名、查询的列名（字段）、查询条件等。")]),v._v(" "),t("li",[v._v("语法分析：判断查询关键词是否正确")])])]),v._v(" "),t("li",[v._v("优化器：根据优化算法选择执行方案")]),v._v(" "),t("li",[v._v("执行器：判断当前用户对当前表是否有查询权限，如果有则调用引擎提供的读接口，返回查询结果")])])]),v._v(" "),t("li",[t("p",[v._v("更新语句的执行流程和查询语句的流程类似：")]),v._v(" "),t("ul",[t("li",[v._v("连接器：管理连接，权限验证")]),v._v(" "),t("li",[v._v("分析器：词法分析，语法分析\n"),t("ul",[t("li",[v._v("词法分析：提取 sql 语句的关键元素，以"),t("code",[v._v("update")]),v._v("为例，提取出更新的表名、更新的列名（字段）、更新条件等。")]),v._v(" "),t("li",[v._v("语法分析：判断查询关键词是否正确")])])]),v._v(" "),t("li",[v._v("优化器：根据优化算法选择执行方案")]),v._v(" "),t("li",[v._v("执行器：判断当前用户对当前记录是否有更新权限， 如果有则调用引擎提供的写接口，返回更新结果")])])])])]),v._v(" "),t("h3",{attrs:{id:"mysql三大日志详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql三大日志详解"}},[v._v("#")]),v._v(" MySQL三大日志详解")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("answer")]),v._v(" "),t("p",[v._v("MySQL日志主要包括错误日志、二进制日志、查询日志、慢查询日志、事务日志几大类")]),v._v(" "),t("p",[v._v("其中比较重要的还属二进制日志"),t("code",[v._v("binlog")]),v._v("和事务日志"),t("code",[v._v("redo log")]),v._v("和回滚日志"),t("code",[v._v("undo log")])]),v._v(" "),t("p",[t("code",[v._v("binlog")]),v._v("是逻辑日志，记录内容是语句的原始逻辑")]),v._v(" "),t("p",[t("code",[v._v("binlog")]),v._v("日志有三种格式，可以通过"),t("code",[v._v("binlog_format")]),v._v("参数指定。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("statement")]),v._v("：记录的内容是"),t("code",[v._v("SQL")]),v._v("语句原文，对数据进行修改的SQL都会记录在日志文件中")]),v._v(" "),t("li",[t("strong",[v._v("row")]),v._v("：基于行的日志记录，记录的是每一行的数据变更。（默认）")]),v._v(" "),t("li",[t("strong",[v._v("mixed")]),v._v("：混合了STATEMENT和ROW两种格式，默认采用STATEMENT，在某些特殊情况下会自动切换为ROW进行记录。")])])]),v._v(" "),t("h3",{attrs:{id:"mysql-binlog的三种格式及区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-binlog的三种格式及区别"}},[v._v("#")]),v._v(" MySQL binlog的三种格式及区别？")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("answer")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("格式")]),v._v(" "),t("th",[v._v("文件大小")]),v._v(" "),t("th",[v._v("执行速度")]),v._v(" "),t("th",[v._v("数据一致性")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("statement")]),v._v(" "),t("td",[v._v("小")]),v._v(" "),t("td",[v._v("快")]),v._v(" "),t("td",[v._v("当SQL语句里面用到一些特定功能函数，比如用到日期函数时在主从复制时可能丢失数据")])]),v._v(" "),t("tr",[t("td",[v._v("row")]),v._v(" "),t("td",[v._v("大")]),v._v(" "),t("td",[v._v("慢")]),v._v(" "),t("td",[v._v("不会引起不一致")])]),v._v(" "),t("tr",[t("td",[v._v("mixed")]),v._v(" "),t("td",[v._v("折中")]),v._v(" "),t("td",[v._v("折中")]),v._v(" "),t("td",[t("code",[v._v("MySQL")]),v._v("会判断这条"),t("code",[v._v("SQL")]),v._v("语句是否可能引起数据不一致，如果是，就用"),t("code",[v._v("row")]),v._v("格式，否则就用"),t("code",[v._v("statement")]),v._v("格式。")])])])])]),v._v(" "),t("h3",{attrs:{id:"主从复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从复制"}},[v._v("#")]),v._v(" 主从复制")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("answer")]),v._v(" "),t("p",[t("strong",[v._v("主从复制")]),v._v("：是指将主数据库的"),t("code",[v._v("DDL")]),v._v("和"),t("code",[v._v("DML")]),v._v("操作通过二进制日志传到从库服务器中，然后在从库上对这些日志重新执行（也叫重做），从而建立一个和主数据库完全一样的数据库环境。")]),v._v(" "),t("p",[t("strong",[v._v("复制的优点")]),v._v("：")]),v._v(" "),t("ul",[t("li",[v._v("主库出现问题，可以快速切换到从库提供服务")]),v._v(" "),t("li",[v._v("实现读写分离，降低主库的访问压力")]),v._v(" "),t("li",[v._v("可以在从库中执行备份，以避免备份期间影响主库服务")])])]),v._v(" "),t("h3",{attrs:{id:"主从复制的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从复制的原理"}},[v._v("#")]),v._v(" 主从复制的原理")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("answer")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/River-Cold/pictureBed/vuepress-blog/docs/interview/basics/database/MySQL主从复制.png",alt:"",loading:"lazy"}})]),v._v(" "),t("ol",[t("li",[v._v("主库将数据库中数据的变化写入到"),t("code",[v._v("binlog")])]),v._v(" "),t("li",[v._v("从库连接主库")]),v._v(" "),t("li",[v._v("从库创建一个"),t("code",[v._v("I/O")]),v._v("线程向主库请求更新的"),t("code",[v._v("binlog")])]),v._v(" "),t("li",[v._v("主库会创建一个"),t("code",[v._v("binlog dump")]),v._v("线程来发送"),t("code",[v._v("binlog")]),v._v("，从库中的"),t("code",[v._v("I/O")]),v._v("线程负责接收")]),v._v(" "),t("li",[v._v("从库的I/O线程将接收的"),t("code",[v._v("binlog")]),v._v("写入到"),t("code",[v._v("relay log")]),v._v("中")]),v._v(" "),t("li",[v._v("从库的SQL线程读取"),t("code",[v._v("relay log")]),v._v("同步数据到本地（即重新执行一遍SQL）")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/River-Cold/pictureBed/vuepress-blog/docs/interview/basics/database/MySQL主从复制2.png",alt:"",loading:"lazy"}})]),v._v(" "),t("p",[v._v("从上图来看，复制分成三步：")]),v._v(" "),t("ol",[t("li",[v._v("Master 主库在事务提交时，会把数据变更记录在二进制日志文件 Binlog 中")]),v._v(" "),t("li",[v._v("从库读取主库的二进制日志文件 Binlog ，写入到从库的中继日志 Relay Log")]),v._v(" "),t("li",[v._v("slave重做中继日志中的事件，将改变反映它自己的数据。")])])]),v._v(" "),t("h3",{attrs:{id:"关于数据库中如何存储时间的一点思考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于数据库中如何存储时间的一点思考"}},[v._v("#")]),v._v(" 关于数据库中如何存储时间的一点思考")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("answer")]),v._v(" "),t("p",[t("strong",[v._v("为什么不要用字符串存储日期？")])]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("answer")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("字符串占用的空间更大")])]),v._v(" "),t("li",[t("p",[v._v("字符串存储的日期效率比较低（逐个字符进行比对），无法用日期相关的API进行计算和比较")])])]),v._v(" "),t("p",[t("strong",[v._v("Datetime和Timestamp的优缺点对比？")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("日期类型")]),v._v(" "),t("th",[v._v("存储空间")]),v._v(" "),t("th",[v._v("日期格式")]),v._v(" "),t("th",[v._v("日期范围")]),v._v(" "),t("th",[v._v("是否存在时区问题")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("Datetime")]),v._v(" "),t("td",[v._v("8字节")]),v._v(" "),t("td",[v._v("YYYY-MM-DD HH:MM:SS")]),v._v(" "),t("td",[v._v("1000-01-01 00:00:00"),t("br"),v._v("~9999-12-31 23:59:59")]),v._v(" "),t("td",[v._v("是")])]),v._v(" "),t("tr",[t("td",[v._v("TimeStamp")]),v._v(" "),t("td",[v._v("4字节")]),v._v(" "),t("td",[v._v("YYYY-MM-DD HH:MM:SS")]),v._v(" "),t("td",[v._v("1970-01-01 00:00:00"),t("br"),v._v("~2037-12-31 23:59:59")]),v._v(" "),t("td",[v._v("否")])]),v._v(" "),t("tr",[t("td",[v._v("时间戳")]),v._v(" "),t("td",[v._v("4字节")]),v._v(" "),t("td",[v._v("全数字")]),v._v(" "),t("td",[v._v("1970-01-01 00:00:01之后的时间")]),v._v(" "),t("td",[v._v("否")])])])])])]),v._v(" "),t("p",[v._v("::::")]),v._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[v._v("#")]),v._v(" 参考文献")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/65743530",target:"_blank",rel:"noopener noreferrer"}},[v._v("MySQL binlog的三种格式及区别 - 知乎 (zhihu.com)"),t("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=a.exports}}]);