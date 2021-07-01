import requests
from bs4 import BeautifulSoup as bs
import json

DOMAIN = "https://www.scbuildit.hubsinfo.net"

lst = list(range(7))

json.dump([[i.text, (list(map(lambda row: (lambda name, level, time, max, mats, used, desc: [*[name.find('img')['src'], name.text.strip(), int(level.text), int(time.text), int(max.text), [[i.select_one('img')['src'], int(i.text.replace('x', '')), i.select_one('img')['alt']] for i in mats.select('.list-mats')], [[i['src'], 0, i['alt']] for i in used.select('img')], desc.text]])(*row) if len(row) > 0 else [], [i.select('td') for i in bs(requests.get(DOMAIN+i['href']).content, 'lxml').select('table tr')[1:]])))] for i in bs(requests.get(DOMAIN).content, 'lxml').select('ul.dropdown-menu li a')[1:]], open('result.json', 'w'))