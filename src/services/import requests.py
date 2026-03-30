import requests
from concurrent.futures import ThreadPoolExecutor, as_completed

url = "https://radiomixfm.com.br/wp-json/contact-form-7/v1/contact-forms/580788/feedback"

headers = {
    "accept": "application/json, */*;q=0.1",
    "origin": "https://radiomixfm.com.br",
    "referer": "https://radiomixfm.com.br/caixa-de-som-aiwa-jogo-das-estrelas/",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
}

cookies = {
    "ppwp_wp_session": "1c3354c7e013f325ddb4e1a7eafb2a13||1774837586||1774837226"
}

data = {
    "nome": "Alexandre Fuzeti Bertipaglia",
    "data": "27/10/2003",
    "telefonecomddd": "43988030433",
    "aceitolgpd": "1",
    "_wpcf7": "580788"
}

def make_request(i):
    response = requests.post(url, headers=headers, cookies=cookies, data=data)
    return i, response.status_code, response.text

with ThreadPoolExecutor(max_workers=100) as executor:
    futures = [executor.submit(make_request, i) for i in range(1000)]
    for future in as_completed(futures):
        i, status_code, text = future.result()
        print(f"Request {i+1}: {status_code}")
        print(text)