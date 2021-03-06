# Reverse Words in a String

## Question

- lintcode: (53) Reverse Words in a String

```
Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".

Example
Clarification

- What constitutes a word?
A sequence of non-space characters constitutes a word.

- Could the input string contain leading or trailing spaces?
Yes. However, your reversed string should not contain leading or trailing spaces.

- How about multiple spaces between two words?
Reduce them to a single space in the reversed string.
```

## 题解

    由第一个提问可知：题中只有空格字符和非空格字符之分，因此空格字符应为其一关键突破口。
    由第二个提问可知：输入的前导空格或者尾随空格在反转后应去掉。
    由第三个提问可知：两个单词间的多个空格字符应合并为一个或删除掉。
    首先找到各个单词(以空格隔开)，根据题目要求，单词应从后往前依次放入。
    正向取出比较麻烦，因此可尝试采用逆向思维——先将输入字符串数组中的单词从后往前逆序取出，
    取出单词后即翻转并append至新字符串数组。在append之前加入空格即可。
    
    
## C++

    class Solution {
    public:
        /**
         * @param s : A string
         * @return : A string
         */
        string reverseWords(string s) {
            if (s.empty()) {
                return s;
            }
    
            string s_ret, s_temp;
            string::size_type ix = s.size();
            while (ix != 0) {
                s_temp.clear();
                while (!isspace(s[--ix])) {
                    s_temp.push_back(s[ix]);
                    if (ix == 0) {
                        break;
                    }
                }
                if (!s_temp.empty()) {
                    if (!s_ret.empty()) {
                        s_ret.push_back(' ');
                    }
                    std::reverse(s_temp.begin(), s_temp.end());
                    s_ret.append(s_temp);
                }
            }
    
            return s_ret;
        }
    };
    
## 源码分析

1. 首先处理异常，s为空时直接返回空。
2. 索引初始值ix = s.size()，而不是ix = s.size() - 1，便于处理ix == 0时的特殊情况。
3. 使用额外空间s_ret, s_temp，空间复杂度为O(n)，s_temp用于缓存临时的单词以append入s_ret。
4. 最后返回s_ret。

空间复杂度为O(1)的解法？

1. 处理异常及特殊情况
2. 处理多个空格及首尾空格
3. 记住单词的头尾指针，翻转之
4. 整体翻转