(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{550:function(t,v,_){"use strict";_.r(v);var s=_(1),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"计算机网络面试突击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计算机网络面试突击"}},[t._v("#")]),t._v(" 计算机网络面试突击")]),t._v(" "),_("h2",{attrs:{id:"第三部分-传输层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第三部分-传输层"}},[t._v("#")]),t._v(" 第三部分：传输层")]),t._v(" "),_("h3",{attrs:{id:"三次握手和四次挥手机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三次握手和四次挥手机制"}},[t._v("#")]),t._v(" 三次握手和四次挥手机制")]),t._v(" "),_("p",[_("strong",[t._v("三次握手机制")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/River-Cold/pictureBed/vuepress-blog/interview/basics/network/1614160878-FiFlkq-image.png",alt:"",loading:"lazy"}})]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("answer1")]),t._v(" "),_("p",[t._v("三次握手是TCP连接的建立过程。在握手之前，主动打开连接的客户端结束CLOSE阶段，被动打开的服务端结束CLOSE阶段，并进入LISTEN阶段。随后进入三次握手阶段：")]),t._v(" "),_("ol",[_("li",[t._v("客户端向服务器端发送连接请求报文，等待服务器确认")]),t._v(" "),_("li",[t._v("服务器接收到客户端发送的连接请求报文，如果同意连接则回送确认报文")]),t._v(" "),_("li",[t._v("客户端收到服务器回送的确认报文段后，还要向服务器给出确认，当服务器端收到客户端发送的确认收到服务器端回送报文的确认报文后，建立连接，完成三次握手。")])])]),t._v(" "),_("p",[_("strong",[t._v("四次挥手机制")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/River-Cold/pictureBed/vuepress-blog/interview/basics/network/1612459478-ajInIu-四次挥手.png",alt:"",loading:"lazy"}})]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("answer1")]),t._v(" "),_("p",[t._v("四次挥手即TCP连接的释放，这里假设客户端主动释放连接。在挥手之前主动释放连接的客户端结束ESTABLISHED阶段，随后开始四次挥手：")]),t._v(" "),_("ol",[_("li",[t._v("客户端向服务器端发送连接释放报文段，停止发送数据，客户端主动关闭TCP连接")]),t._v(" "),_("li",[t._v("服务器端收到客户端发送的连接释放报文段，回送给客户端确认报文段，客户端收到服务器发送的确认报文段，客户端到服务器端方向的连接就释放了，连接半关闭")]),t._v(" "),_("li",[t._v("若服务器端没有还要传送的数据，则向客户端发送连接释放报文段，服务器主动关闭TCP连接")]),t._v(" "),_("li",[t._v("客户端收到服务器端的连接释放报文段，回送给服务器端确认报文段，等到时间达到计时器设置的2MSL（最长报文段寿命）后，连接彻底关闭")])])]),t._v(" "),_("h3",{attrs:{id:"为什么要进行三次握手-两次握手可以吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要进行三次握手-两次握手可以吗"}},[t._v("#")]),t._v(" 为什么要进行三次握手？两次握手可以吗？")]),t._v(" "),_("p",[_("strong",[t._v("三次握手的目的")])]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("answer1")]),t._v(" "),_("p",[t._v("三次握手的主要目的是确认自己和对方的发送和接收都是正常的，从而保证了双方能够进行可靠通信。")]),t._v(" "),_("p",[t._v("若采用两次握手，当第二次握手后就建立连接的话，此时客户端知道服务器能够正常接收到自己发送的数据，而服务器并不知道客户端能否收到自己发送的数据")])]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("answer2")]),t._v(" "),_("p",[t._v("保证双方都是双工通信")]),t._v(" "),_("p",[t._v("第一次握手，服务端确认客户端的发送正常")]),t._v(" "),_("p",[t._v("第二次握手，客户端确认服务端的收发正常")]),t._v(" "),_("p",[t._v("第三次握手，服务端确认客户端的接收正常")])]),t._v(" "),_("p",[_("strong",[t._v("不使用两次握手的原因")])]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("answer")]),t._v(" "),_("p",[t._v("防止已失效的连接请求报文段突然又传送到了服务端，造成双方的不同步，导致服务端资源浪费。")])]),t._v(" "),_("p",[_("strong",[t._v("不使用四次握手的原因")])]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("answer")]),t._v(" "),_("p",[t._v("三次握手理论上已经可以建立可靠连接，使用更多的次数会造成资源浪费。")])]),t._v(" "),_("h3",{attrs:{id:"为什么要四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要四次挥手"}},[t._v("#")]),t._v(" 为什么要四次挥手")]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("answer1")]),t._v(" "),_("p",[t._v("TCP的连接是全双工的，两个方向的连接需要单独关闭。")])]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("answer2")]),t._v(" "),_("p",[t._v("释放TCP连接时之所以需要四次挥手，是因为ACK确认报文和FIN释放连接报文是分别在两次握手中传输的。")]),t._v(" "),_("p",[t._v("当主动方在数据传送结束后发出释放连接的通知，由于被动方可能还有必要的数据要处理，所以会先返回ACK确认收到报文。当被动方也没有数据再发送的时候，则发出连接释放通知，对方确认后才完全关闭TCP连接。")])]),t._v(" "),_("h3",{attrs:{id:"tcp和udp的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp和udp的区别"}},[t._v("#")]),t._v(" TCP和UDP的区别")]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("answer")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("是否面向连接")]),t._v(" "),_("th",[t._v("传输可靠性")]),t._v(" "),_("th",[t._v("传输形式")]),t._v(" "),_("th",[t._v("传输效率")]),t._v(" "),_("th",[t._v("所需资源")]),t._v(" "),_("th",[t._v("应用场景")]),t._v(" "),_("th",[t._v("首部字节")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("TCP")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("可靠，保证数据有序")]),t._v(" "),_("td",[t._v("字节流")]),t._v(" "),_("td",[t._v("低（慢）")]),t._v(" "),_("td",[t._v("多")]),t._v(" "),_("td",[t._v("文件传输、邮件传输")]),t._v(" "),_("td",[t._v("20-60")])]),t._v(" "),_("tr",[_("td",[t._v("UDP")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("不可靠，不保证数据有序")]),t._v(" "),_("td",[t._v("数据报文段")]),t._v(" "),_("td",[t._v("高（快）")]),t._v(" "),_("td",[t._v("少")]),t._v(" "),_("td",[t._v("即时通讯、域名转换")]),t._v(" "),_("td",[t._v("8个字节")])])])])]),t._v(" "),_("h3",{attrs:{id:"tcp协议如何保证可靠传输"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp协议如何保证可靠传输"}},[t._v("#")]),t._v(" TCP协议如何保证可靠传输？")]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("answer")]),t._v(" "),_("p",[t._v("（"),_("strong",[t._v("校序重流拥")]),t._v("）")]),t._v(" "),_("ol",[_("li",[t._v("数据分块：应用数据被分割成TCP认为最合适发送的数据块")]),t._v(" "),_("li",[t._v("校验和：TCP将保持它首部和数据的校验和。这是一个端到端的校验和，**目的是检测数据在传输过程中的任何变化。**如果接收端的校验和有差错，TCP将丢弃这个报文段和不确认收到此报文段。")]),t._v(" "),_("li",[t._v("序列号和确认应答：**TCP给发送的每一个字节进行编号，在传输的过程中，每次接收方收到数据后，都会对传输方进行确认应答，即发送ACK报文，这个ACK报文中有对应的确认序列号ack，告诉发送方成功接收了哪些数据以及下一次的数据从哪里开始发。**除此之外，接收方可以根据序列号对数据报进行排序，把有序数据传送给应用层，并丢弃重复的数据。")]),t._v(" "),_("li",[t._v("超时重传：**当TCP发出一个报文段后，它启动一个定时器，等待目的端确认收到这个报文段。**如果超过某个时间还没有收到确认，将重发这个报文段。")]),t._v(" "),_("li",[t._v("流量控制：**TCP连接的双方都有一个固定大小的缓冲空间，发送方发送的数据不能超过接收端缓冲区的大小，**当接收方来不及处理发送方的数据，会提示发送方降低发送的速率，防止产生丢包。"),_("strong",[t._v("TCP通过滑动窗口协议来支持流量控制机制。")])]),t._v(" "),_("li",[t._v("拥塞控制：当网络中某个节点发生拥塞时，减少数据的发送。")]),t._v(" "),_("li",[t._v("自动重传请求（Automatic Repeat-reQuest，ARQ）是OSI模型中数据链路层和传输层的错误纠正协议之一。"),_("strong",[t._v("它通过确认和超时两个机制，基本原理是每发完一个分组就停止发送，等待对方确认。在收到确认后再发下一个分组。")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);