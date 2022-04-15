---
title: nicematrix
---

# 好用的 LaTeX 表格：`nicematrix` 包

::: tip CTAN 链接
<https://ctan.org/pkg/nicematrix>
:::

## 基本用法

```latex
\usepackage{nicematrix}
```

使用 `\Block` 创建单元格，可跨行、跨列、换行，还有可选参数比如 `l`，`c`，`r`（横向对齐），`fill`，`draw`（颜色）等等。

```latex {2}
\begin{NiceTabular}{ccc}[hvlines]
                       & \Block{1-2}{Multi-column}        \\
\Block{2-1}{Multi-row} & John  & Steph                    \\
                       & Sarah & \Block{}{A line\\ break} \\
\end{NiceTabular}
```

<figure>
  <img src="./imgs/nicematrix-basic.png" alt="basic">
</figure>

## 表格脚注

```latex
\usepackage{enumitem} % 依赖
\usepackage{booktabs} % \toprule etc.
```

```latex {6}
\begin{NiceTabular}{llr}
\toprule
\RowStyle[bold]{}
Last name & First name & Birth day       \\
\midrule
Achard\tabularnote{A note.}
          & Jacques    & 5 juin 1962     \\
Lefebvre\tabularnote{Another note.}
          & Mathilde   & 23 mai 1988     \\
Vanesse   & Stephany   & 30 octobre 1994 \\
Dupont    & Chantal    & 15 janvier 1998 \\
\bottomrule
\end{NiceTabular}
```

<figure>
  <img src="./imgs/nicematrix-tabularnote.png" alt="tabularnote">
</figure>

### 脚注编号

可以修改 `notes/style` 选项使用数字编号（默认为 `\textit{\alph{#1}}`）

```latex {2}
\begin{table}[!t]
    \NiceMatrixOptions{notes/style=\arabic{#1}}
    \begin{NiceTabular}{llr}
        ...
    \end{NiceTabular}
\end{table}
```

::: tip
命令 `\NiceMatrixOptions` 的作用域是当前 TeX Group，即 `{...}` 和 `\begin...\end`。在 preamble 中则为全局设置。

也可使用如下层级语法

```latex
\NiceMatrixOptions{
    notes={
        style = \arabic{#1},
        label-in-tabular = ...,
        ...
    }
}
```
:::

## 行样式

使用 `\RowStyle[optional args]{args}` 改变当前行的样式

可选参数包括 `nb-rows`，`rowcolor`，`color`，`bold` 等
样式参数比如 `\rotate`，`\bfseries`，`\sffamily`

```latex {3,5}
\begin{NiceTabular}{cccc}
\hline
\RowStyle[cell-space-limits=3pt]{\rotate}
first & second & third & fourth \\
\RowStyle[nb-rows=2,rowcolor=blue!50,color=white]{\sffamily}
1     & 2      & 3     & 4      \\
I     & II     & III   & IV
\end{NiceTabular}
```

## 列宽度

可以使用 `array` 包中的 `w/W/p/b/m` 列样式

```latex
\begin{NiceTabular}{m[l]{2cm}m[c]{2cm}m[r]{2cm}}[hvlines]
some very long text & center                        & some very very very very long text \\
left                & some very very very long text & right
\end{NiceTabular}
```

<figure>
  <img src="./imgs/nicematrix-colwidth.png" alt="column width">
</figure>

## 单元格背景色

```latex {3,4}
\begin{NiceTabular}{ccc}[hvlines]
\CodeBefore
\cellcolor{yellow!25}{1-1,1-3}
\rectanglecolor{blue!15}{2-2}{3-3}
\Body
a & b & c \\
e & f & g \\
h & i & j \\
\end{NiceTabular}
```

<figure>
  <img src="./imgs/nicematrix-colorcell.png" alt="colorcell">
</figure>

## 边框

```latex
\NiceMatrixOptions{cell-space-top-limit=3pt}
\begin{NiceTabular}{*{6}{c}}[corners,hvlines]
& & & & A \\
& & A & A & A \\
& & & A \\
& & A & A & A & A \\
A & A & A & A & A & A \\
A & A & A & A & A & A \\
& A & A & A \\
& \Block{2-2}{B} & & A \\
& & & A \\
\end{NiceTabular}
```

<figure>
  <img src="./imgs/nicematrix-border.png" alt="border">
</figure>
