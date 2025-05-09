---
title: 今日網頁資料心得
published: 2025-05-09
toc: False #是否生成目錄
lang: zh-tw
tag: -網頁資料與擷取
---

# 網頁股價爬蟲  
## python  
### 利用BeautifulSoup 擷取股價資訊

```python
import requests
from bs4 import BeautifulSoup #這兩個為基本模組
url = 'https://tw.stock.yahoo.com/quote/2317.TW' #這邊以yahoo股市為例子
r = requests.get(url) #發送請求
soup = BeautifulSoup(r.text,'html.parser') #列出網頁架構
#這邊老師有用一個soup.title.text，會顯示html裡的title標籤
#基本上就是去目標網站對著目標按右鍵檢查，看他的標籤是在哪裡，下面找到就是在div裡面的span
data = soup.find('div',class_='D(f) Ai(fe) Mb(4px)') #找到存價格的區塊
data = data.find_all('span') #因為需要的資訊都在span裡面，回傳是list

price = data[0].text
difference = data[1].text
percentage = data[3].text
print(f'股價:{price}')
print(f'改編多少:{difference}')
print(f'改變百分比:{percentage}')
```