(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{562:function(t,s,a){"use strict";a.r(s);var n=a(1),i=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_338-比特位计数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_338-比特位计数"}},[t._v("#")]),t._v(" 338.比特位计数")]),t._v(" "),a("p",[t._v("https://leetcode-cn.com/problems/counting-bits/")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/River-Cold/pictureBed/vuepress-blog/interview/basics/network/20220305111531.png",alt:"",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"方法一-位运算-动态规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一-位运算-动态规划"}},[t._v("#")]),t._v(" 方法一：位运算+动态规划")]),t._v(" "),a("h3",{attrs:{id:"思路分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[t._v("#")]),t._v(" 思路分析")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Tips")]),t._v(" "),a("p",[a("strong",[t._v("位运算技巧")])]),t._v(" "),a("p",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("&")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mo",[t._v("−")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n\\&(n-1)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord"},[t._v("&")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("可以把 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")])])])]),t._v(" 的二进制中，最后一个出现的1改写成0，即消除 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")])])])]),t._v(" 的二进制中最后一个出现的1")]),t._v(" "),a("p",[t._v("因为执行 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("&")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mo",[t._v("−")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n\\&(n-1)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord"},[t._v("&")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" 使得 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")])])])]),t._v(" 变成 0 的操作次数，就是 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")])])])]),t._v(" 的二进制中 1 的个数")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/River-Cold/pictureBed/vuepress-blog/interview/basics/network/1616376938-RVlYBN-image.png",alt:"",loading:"lazy"}})]),t._v(" "),a("p",[a("strong",[t._v("动态规划")])]),t._v(" "),a("p",[a("strong",[t._v("状态定义")]),t._v("：")]),t._v(" "),a("p",[t._v("设"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("b")]),a("mi",[t._v("i")]),a("mi",[t._v("t")]),a("mi",[t._v("s")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("bits[i]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("bi")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("代表以数字i二进制中1的个数")]),t._v(" "),a("p",[a("strong",[t._v("状态转移方程")]),t._v("：")]),t._v(" "),a("p",[t._v("令 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("y")]),a("mo",[t._v("=")]),a("mi",[t._v("x")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("&")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("x")]),a("mo",[t._v("−")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("y=x\\&(x-1)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.1944em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("x")]),a("span",{staticClass:"mord"},[t._v("&")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("x")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，则 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("y")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("y")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.1944em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")])])])]),t._v(" 为将 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("x")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("x")])])])]),t._v(" 的最低位1改写成0之后的数，显然 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mn",[t._v("0")]),a("mo",[t._v("≤")]),a("mi",[t._v("y")]),a("mo",[t._v("≤")]),a("mi",[t._v("x")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("0\\leq{y}\\leq{x}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.7804em","vertical-align":"-0.136em"}}),a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8304em","vertical-align":"-0.1944em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),a("span",{staticClass:"mrel"},[t._v("≤")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("x")])])])])]),t._v("，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("b")]),a("mi",[t._v("i")]),a("mi",[t._v("t")]),a("mi",[t._v("s")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("x")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",[t._v("=")]),a("mi",[t._v("b")]),a("mi",[t._v("i")]),a("mi",[t._v("t")]),a("mi",[t._v("s")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("y")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",[t._v("+")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("bits[x]=bits[y]+1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("bi")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal"},[t._v("x")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("bi")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),a("span",{staticClass:"mord"},[t._v("1")])])])]),t._v("。")]),t._v(" "),a("p",{staticClass:"katex-block"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("mi",[t._v("b")]),a("mi",[t._v("i")]),a("mi",[t._v("t")]),a("mi",[t._v("s")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",[t._v("=")]),a("mi",[t._v("b")]),a("mi",[t._v("i")]),a("mi",[t._v("t")]),a("mi",[t._v("s")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("i")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("&")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("i")]),a("mo",[t._v("−")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",[t._v("+")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("bits[i]=bits[i\\&(i-1)]+1\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("bi")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("bi")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mord"},[t._v("&")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v(")]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),a("span",{staticClass:"mord"},[t._v("1")])])])])])]),t._v(" "),a("p",[a("strong",[t._v("边界值")]),t._v("：")]),t._v(" "),a("p",{staticClass:"katex-block"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("mi",[t._v("b")]),a("mi",[t._v("i")]),a("mi",[t._v("t")]),a("mi",[t._v("s")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mn",[t._v("0")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",[t._v("=")]),a("mn",[t._v("0")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("bits[0]=0\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("bi")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),a("span",{staticClass:"mord"},[t._v("0")])])])])])])]),t._v(" "),a("h3",{attrs:{id:"参考代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考代码"}},[t._v("#")]),t._v(" 参考代码")]),t._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"c++"}},[a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("countBits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bits")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            bits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" bits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])])],1),t._v(" "),a("h3",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/number-of-1-bits/solution/fu-xue-ming-zhu-xiang-jie-wei-yun-suan-f-ci7i/",target:"_blank",rel:"noopener noreferrer"}},[t._v("【负雪明烛】详解位运算，附本题躲坑指南 - 位1的个数 - 力扣（LeetCode） (leetcode-cn.com)"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/counting-bits/solution/bi-te-wei-ji-shu-by-leetcode-solution-0t1i/",target:"_blank",rel:"noopener noreferrer"}},[t._v("比特位计数 - 比特位计数 - 力扣（LeetCode） (leetcode-cn.com)"),a("OutboundLink")],1)])],1)}),[],!1,null,null,null);s.default=i.exports}}]);