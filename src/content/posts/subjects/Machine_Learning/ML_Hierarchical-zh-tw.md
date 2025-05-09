---
title: 機器學習心得
published: 2025-05-09
toc: False #是否生成目錄
lang: zh-tw
abbrlink: hierarchical
tag: -機器學習
---

## 階層式集群(Hierarchical Clustering)

```python
import pandas as pd
df = pd.read_json('檔名.json') #前置動作，這邊以json檔做範例
df.isnull().sum() #查看有無空值，有空值不可做資料使用
df.columns #查看欄位有哪些
X = df[['欄位1', '欄位2', '欄位3', '欄位4', '欄位5']] #取出有用的欄位
#因為第六欄位有缺兩個值，所以取前五個欄位
from sklearn.preprocessing import StandardScaler #載入標準化模組
std = StandardScaler() 
X = std.fit_transform(X) #特徵標準化
# 補充說明：模型在學習時會被高數值主導，所以會需要「標準化處理」來調整數據的分佈與尺度

# 利用 Hierarchical Clustering 進行分群，除以下參數設定外，其餘為預設值
# n_clusters=4 分四群
# linkage='ward' 合併兩個群時，選擇讓「合併後整體變異增加最少」的那一對群來合併。

from sklearn.cluster import AgglomerativeClustering #載入階層式集群模組
model = AgglomerativeClustering(n_clusters=4, linkage='ward') #導入參數
#以下要做的是，要找最小群有幾個元素，最大群有幾個元素
model.fit(X)
y = model.labels_ #標示每一個目標資料的群
y = list(y) #因為y是numpy的array值，要轉成list
counts = []
for i in range(4):
    counts.append(y.count(i))
print("最小群有幾個元素?",min(counts))
print("最小群有幾個元素?",max(counts))

df['欄位7'] = y #加入新的欄位，幫每個資料後面加入他所屬的群

for i in df.index:
    if pd.isna(df.iloc[i,5]): #檢視第i個資料的第6個欄位是否為空值
        a = df.iloc[i,6] #看這個資料被分在第幾群
        Condition = df['欄位7'] == a #篩選跟目標資料一樣的群
        df1 = df[Condition] 
        v = round(df1['欄位6'].mean(),0) #算出平均值
        df.iloc[i,5] = v #把平均值填入空值
        print(df.iloc[i])
```