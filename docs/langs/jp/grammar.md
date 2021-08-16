---
title: 日本語の文法
---

# <span class="jp">日本語の文法</span>

<link href="/notes/jp.css" rel="stylesheet">

## 一点点语言学小知识

**传统的**语言形态分类[^morphological-typology]：

- ==分析语==<span class="cn-font" lang="zh-CN">——</span>依赖于**词序** (word order)，助词、介词等特征来表达意思，**很少有词形变化**
  例如：**现代汉语**，完全无词形变化，语法功能由额外文字来表示。名词不分主格宾格，属格用「的」连接。动词本身不随人称、时态等变化；过去时用「了」，现在时用「正在」；被动语态用「被」。

  （开个脑洞：编程「语言」依赖的就是词序，可以被解析为[抽象语法树](https://zh.wikipedia.org/zh-cn/%E6%8A%BD%E8%B1%A1%E8%AA%9E%E6%B3%95%E6%A8%B9)，很分析）[^nlp]

  - 一个相关的概念是==孤立语==，指**语素-单词比** (morpheme-per-word ratio) 很低的语言（某种意义上也即意味着很少有词形变化）

- ==综合语==<span class="cn-font" lang="zh-CN">——</span>依赖于**词形变化**[^compared-to-derivation]来表达意思
  动词变位（**人称**、**数**、阴**性**阳性、现在过去将来**时态**、完成**体**未完成体、主动被动**语态**、陈述祈使虚拟等**语气**、**敬语**，等等），
  名词形容词等变格（主**格**宾格、单**数**复数、阴**性**阳性）

  - ==黏着语==<span class="cn-font" lang="zh-CN">——</span>变词语素（词缀）只表示一种意思或语法功能（在大部分情况下）
    　例如：**日语** [TODO](https://zh.wikipedia.org/zh-cn/%E9%BB%8F%E7%9D%80%E8%AF%AD#%E6%97%A5%E8%AA%9E)
    <!-- <span class="jp">　晴れ<span style="color: #34B75A">ではありません　　　</span></span>（否定式）
    <span class="jp">　晴れ<span style="color: #F4C118">でした　　　　　　　</span></span>（过去式）
    <span class="jp">　晴れ<span style="color: #34B75A">ではありません</span><span style="color: #F4C118">でした</span></span>（过去否定式） -->
    
  - ==屈折语==<span class="cn-font" lang="zh-CN">——</span>变词语素（词缀）经常同时表达多种意思或语法功能
    　例如：**英语**动词词缀 -s 意味着**现在时**，**第三人称**，**单数**
    　更典型**法语**的动词变位[^french]

  - **多式综合语**<span class="cn-font" lang="zh-CN">——</span>构词法更加复杂

在实际状况中，绝大多数语言都并不能单纯地被分类至某一分类。把上述分类视作不同的性质会更加适当。英语一般被划分为屈折语，但是其（和南非语）在印欧语系中是最具有分析语性质的。

日语是典型的黏着语，有众多动词词形变化（日语语法中称为**活用**），次多形容词变化。日语名词则基本没有词形变化，更具有孤立语性质。一般来说黏着语的动词变化很规则，日语中明显不规则的动词只有两类（TODO）。

::: tip 🧊 冷知识
很多著名的人工语言都是黏着语，例如[世界语](https://zh.wikipedia.org/wiki/%E4%B8%96%E7%95%8C%E8%AF%AD)，克林贡语<span class="cn-font" lang="zh-CN">——</span>《星际迷航》，昆雅语、黑暗语<span class="cn-font" lang="zh-CN">——</span>《魔戒》
:::

## 日语语法

::: details 教育文法 vs. 学校文法
- ==教育文法==是面向非母语学习者的一套语法系统。
  **优点**是简单、容易上手，对动词活用形的分类更容易理解，对各种助词介绍得很好。
  **缺点**是系统性不足。另外在日语学习的后期，很多时候需要直接参考面向日本人的材料（比如词典），如果不具备「学校文法」相关的知识会遇到一定的障碍。

- ==学校文法==则是以日本中学生为对象的语法。
  **优点**是更系统、规整，动词分类（变形？）
  **缺点**是对于初学者可能太复杂。另外作为众多日语语法体系之一，也免不了对某些语法现象的解释不太合理或者值得商榷。

《新标日》采用的是「教育文法」，《标准日语语法》(顾明耀) 则是基于「学校文法」的（更适合中文母语者的）微调版本。
:::

### 体言

<span class="cn-font" lang="zh-CN">——</span>名词、代名词、数词

- 无词形变化
- 需要接上助词来构成句子成分，比如后续<span class="jp">「が」</span>、<span class="jp">「を」</span>、<span class="jp">「の」</span>、<span class="jp">「に」</span>分别构成主语、宾语、定语、状语，后续助动词<span class="jp">「です」</span>构成谓语
- 可以被定语修饰

<!-- 可以后续助词构成连体修饰语 -->

### 用言

<span class="cn-font" lang="zh-CN">——</span>动词、形容词、形容动词

::: details 日语现代语基本活用表
<figure style="margin: 1em 0 0">
  <img src="./imgs/huoyong.jpg" alt="" class="" style="user-select: none">
  <figcaption><a href="https://zhuanlan.zhihu.com/p/112110880">日语现代语基本活用表 - 雨宫 Lin 的文章 - 知乎</a></figcaption>
</figure>
:::

### 助词

## 参考材料

- 《标准日本语》第二版. 人民教育出版社.
- 顾明耀.《标准日语语法》第二版. 高等教育出版社.
- [日语的语法怎么背？- 碳酸氢镭的回答 - 知乎](https://www.zhihu.com/question/352141891/answer/1370307293)
- Wikipedia

**教育文法 vs. 学校文法**

- [浅谈日语中的两大语法体系<span class="cn-font" lang="zh-CN">——</span>学校语法与教育语法](https://www.bilibili.com/read/cv3292464/)
- [日语教学中「学校教育」和「日本语教育」之间的区别及优劣是什么？- 知乎](https://www.zhihu.com/question/20448242)

[^morphological-typology]: 现在的语言类型学研究不再使用上述仅仅四五个粗略的标签来进行分类，因为其只体现了语言的大致特征，有很多无法覆盖的语法细节。见 [World Atlas of Language Structure (WALS)](https://en.wikipedia.org/wiki/Morphological_typology#WALS)

[^nlp]: 虽说分析语听起来更容易「分析」，但在目前以神经网络为代表的自然语言处理 (NLP) 技术中，作为分析语的中文反而比英语处理起来更难。首先分词 (tokenization) 就是一个难题，此外综合语的各种词缀（单复数，时态等）比起分析语的语序也更容易处理。

[^compared-to-derivation]: 词形变化（也译作**屈折变化**）指单词（或词根）的变化，以导致语法功能改变，进而使其代表的意义也有所改变。==派生==则是在单词上加上派生词素，藉以从现有词汇中添加意义不同的新词。
  一个直观的认识是：在词典中，单词的词形变化不会列出来，但派生词会。例如英语词典会把 readable 和 readability 分开词条列在其词根 read 之下，但不会把 reads 和 reading 以词条列出来。

[^french]: <img src="./imgs/french-verb-inflection.png" alt="" style="vertical-align: top"><br>法语第一组动词变位（图源维基百科）
