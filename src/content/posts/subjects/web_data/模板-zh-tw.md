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
from bs4 import BeautifulSoup
url = 'https://tw.stock.yahoo.com/quote/2317.TW'
r = requests.get(url)
soup = BeautifulSoup(r.text,'html.parser')
data = soup.find('div',class_='D(f) Ai(fe) Mb(4px)')
data = data.find_all('span') #因為需要的資訊都在span裡面

price = data[0].text
difference = data[1].text
percentage = data[3].text
print(f'股價:{price}')
print(f'改編多少:{difference}')
print(f'改變百分比:{percentage}')
```