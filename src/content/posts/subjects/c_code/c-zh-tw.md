---
title: 今日C語言心得
published: 2025-05-06
tags:
- C
toc: False #是否生成目錄
lang: zh-tw
abbrlink: c-language
---

## 結構struct

第三題 struct與函式的應用
```c
#include <stdio.h>

struct data {
    char name[10];
    int math;
};

void add5(struct data *p) {
    p->math += 5;
}

int main() {
    struct data student[] = {
        {"John", 55},
        {"Allen", 90},
        {"Jane", 45},
        {"Luna", 80},
        {"Mary", 87}
    };

    int i;
    int len = sizeof(student) / sizeof(student[0]);

    printf("Name\tScore\n");
    printf("-------------\n");

    for (i = 0; i < len; i++) {
        add5(&student[i]);
        printf("%s\t%d\n", student[i].name, student[i].math);
    }

    return 0;
}
```

![輸出結果](/C/250506ex3output.png)