(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{567:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_85-最大矩形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_85-最大矩形"}},[t._v("#")]),t._v(" 85.最大矩形")]),t._v(" "),a("p",[t._v("https://leetcode-cn.com/problems/minimum-path-sum/")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/River-Cold/pictureBed/vuepress-blog/solution/leetcode/LeetCode-hot-topic-HOT-100/85.png",alt:"",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"方法一-使用柱状图的优化暴力方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一-使用柱状图的优化暴力方法"}},[t._v("#")]),t._v(" 方法一：使用柱状图的优化暴力方法")]),t._v(" "),a("h3",{attrs:{id:"思路分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路分析"}},[t._v("#")]),t._v(" 思路分析")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Tips")]),t._v(" "),a("p",[t._v("用"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("l")]),a("mi",[t._v("e")]),a("mi",[t._v("f")]),a("mi",[t._v("t")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("j")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("left[i][j]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("记录矩阵第"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("i")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6595em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("i")])])])]),t._v("行第"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("j")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("j")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.854em","vertical-align":"-0.1944em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])]),t._v("列元素的左边的连续1的数量")]),t._v(" "),a("p",[t._v("对于矩阵中任意一个点，枚举以该点为右下角的全1矩形")]),t._v(" "),a("p",[t._v("当考察以"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("m")]),a("mi",[t._v("a")]),a("mi",[t._v("t")]),a("mi",[t._v("r")]),a("mi",[t._v("i")]),a("mi",[t._v("x")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("j")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("matrix[i][j]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("ma")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mord mathnormal"},[t._v("x")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("为右下角的矩形时，枚举满足"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mn",[t._v("0")]),a("mo",[t._v("<")]),a("mo",[t._v("=")]),a("mi",[t._v("k")]),a("mo",[t._v("<")]),a("mo",[t._v("=")]),a("mi",[t._v("i")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("0<=k<=i")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6835em","vertical-align":"-0.0391em"}}),a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),a("span",{staticClass:"mrel"},[t._v("<=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.7335em","vertical-align":"-0.0391em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),a("span",{staticClass:"mrel"},[t._v("<=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6595em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("i")])])])]),t._v("的所有可能的"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("k")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])]),t._v("，此时矩阵的最大宽度为下列值中的最小值")]),t._v(" "),a("p",{staticClass:"katex-block"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[a("semantics",[a("mrow",[a("mi",[t._v("m")]),a("mi",[t._v("i")]),a("mi",[t._v("n")]),a("mo",{attrs:{stretchy:"false"}},[t._v("{")]),a("mi",[t._v("l")]),a("mi",[t._v("e")]),a("mi",[t._v("f")]),a("mi",[t._v("t")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("j")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("l")]),a("mi",[t._v("e")]),a("mi",[t._v("f")]),a("mi",[t._v("t")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("i")]),a("mo",[t._v("−")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("j")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("l")]),a("mi",[t._v("e")]),a("mi",[t._v("f")]),a("mi",[t._v("t")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("k")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("j")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",{attrs:{stretchy:"false"}},[t._v("}")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("min\\{left[i][j],left[i-1][j],...,left[k][j]\\}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("min")]),a("span",{staticClass:"mopen"},[t._v("{")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mord"},[t._v("...")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal"},[t._v("e")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]}")])])])])])])]),t._v(" "),a("h3",{attrs:{id:"参考代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考代码"}},[t._v("#")]),t._v(" 参考代码")]),t._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"c++"}},[a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("maximalRectangle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("vector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vector")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化left数组")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matrix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[t._v("'0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" area "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    area "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("area"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" area"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br")])])])],1)],1)}),[],!1,null,null,null);s.default=r.exports}}]);